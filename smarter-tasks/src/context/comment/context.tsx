import React, { createContext, useContext, useReducer } from "react";
import { CommentListState, CommentsDispatch } from "./types";
import { commentReducer, initialStateComment } from "./reducer";

const CommentsStateContext = createContext<CommentListState | undefined>(undefined);
const CommentsDispatchContext = createContext<CommentsDispatch | undefined>(undefined);

export const CommentProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, initialStateComment);

  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = (): CommentListState => {
  const context = useContext(CommentsStateContext);
  if (context === undefined) {
    throw new Error("useCommentsState must be used within a CommentProvider");
  }
  return context;
};

export const useCommentsDispatch = (): CommentsDispatch => {
  const context = useContext(CommentsDispatchContext);
  if (context === undefined) {
    throw new Error("useCommentsDispatch must be used within a CommentProvider");
  }
  return context;
};
