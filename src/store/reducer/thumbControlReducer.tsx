// actions
export const addThumbWrap = () => ({
  type: "ADD_THUMB_WRAP"
});

export const removeThumbWrap = () => ({
  type: "REMOVE_THUMB_WRAP"
});

// reducer
const initialState = {
  thumbWraps: [1]
};

const thumbControlReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_THUMB_WRAP":
      return {
        ...state,
        thumbWraps:
          state.thumbWraps.length < 5
            ? [...state.thumbWraps, state.thumbWraps.length + 1]
            : state.thumbWraps
      };
    case "REMOVE_THUMB_WRAP":
      return {
        ...state,
        thumbWraps:
          state.thumbWraps.length > 1
            ? state.thumbWraps.slice(0, -1)
            : state.thumbWraps
      };
    default:
      return state;
  }
};

export default thumbControlReducer;
