import { Dispatch } from "react";
import { CommentListAvailableAction, CommentActions } from "./types";
import { CommentDetailsPayload } from "./types";
import { API_ENDPOINT } from "../../config/constants";

export const addComment = async (
  dispatch: Dispatch<CommentActions>,
  projectID: string,
  taskID: string,
  comment: CommentDetailsPayload
) => {
  try {
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(comment),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create a comment for the task");
    }

    const data = await response.json();

    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS,
      payload: data,
    });

    fetchComment(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create a comment for the task",
    });
  }
};

export const fetchComment = async (
  dispatch: Dispatch<CommentActions>,
  projectID: string,
  taskID: string
) => {
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch the comments");
    }

    const data = await response.json();

    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_SUCCESS,
      payload: data,
    });

    console.log("API response data:", data);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_FAILURE,
      payload: "Unable to load the comments",
    });

    throw error;
  }
};
