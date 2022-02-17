import { SET_IMG, SET_NAME } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME:
      return { ...state, name: payload };
    case SET_IMG:
      return { ...state, img: payload };
    default:
      return state;
  }
}
