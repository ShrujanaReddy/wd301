import { Reducer } from "react";
import {
  CommentListAvailableAction,
  CommentListState,
  CommentActions,
} from "./types";

export const initialStateComment: CommentListState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentListState, CommentActions> = (
  state = initialStateComment,
  action
) => {
  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case CommentListAvailableAction.FETCH_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentListAvailableAction.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [action.payload, ...state.data],
      };
    case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
