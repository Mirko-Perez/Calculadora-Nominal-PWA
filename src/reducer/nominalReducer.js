import { types } from "../types/types";

const initialState = {
  data: [],
};

export const nominalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.nominaAdd:
      return { ...state, data: [...state, action.payload] };

    case types.nominaRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
