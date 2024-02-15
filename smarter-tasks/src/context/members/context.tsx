import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MembersState, MembersActions } from "./reducer";

const MembersStateContext = createContext<MembersState | undefined>(undefined);
const MembersDispatchContext = createContext<React.Dispatch<MembersActions> | undefined>(undefined);

export const useMembersState = (): MembersState => {
  const context = useContext(MembersStateContext);
  if (context === undefined) {
    throw new Error("useMembersState must be used within a MembersProvider");
  }
  return context;
};

export const useMembersDispatch = (): React.Dispatch<MembersActions> => {
  const context = useContext(MembersDispatchContext);
  if (context === undefined) {
    throw new Error("useMembersDispatch must be used within a MembersProvider");
  }
  return context;
};

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};
