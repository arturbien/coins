import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR
} from "./actionTypes";

import API from "../../API";

export const setEvents = events => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events
});
export const fetchEvents = timestamp => async dispatch => {
  dispatch({ type: FETCH_EVENTS_REQUEST });
  try {
    const events = await API.fetchEvents(timestamp);
    dispatch(setEvents(events, timestamp ? true : false));
  } catch (error) {
    dispatch({ type: FETCH_EVENTS_ERROR });
  }
};
