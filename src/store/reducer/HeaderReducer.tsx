// actions
export const setImagePath = (path: String) => ({
  type: "SET_IMAGE_PATH",
  payload: path
});

export const clearImagePath = () => ({
  type: "CLEAR_IMAGE_PATH"
});

// reducer
const initialState = {
  imagePath: ""
};

const HeaderReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "SET_IMAGE_PATH":
      return {
        ...state,
        imagePath: action.payload
      };
    case "CLEAR_IMAGE_PATH":
      return {
        ...state,
        imagePath: "" // 초기 상태로 설정
      };
    default:
      return state;
  }
};

export default HeaderReducer;
