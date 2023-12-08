export const setThumbWrapsCountPart1 = (count: number) => ({
  type: "SET_THUMB_WRAPS_COUNT_PART1",
  payload: count
});

export const setThumbWrapsCountPart2 = (count: number) => ({
  type: "SET_THUMB_WRAPS_COUNT_PART2",
  payload: count
});

export const setThumbWrapsCountPart3 = (count: number) => ({
  type: "SET_THUMB_WRAPS_COUNT_PART3",
  payload: count
});

export const setThumbWrapsCountPart4 = (count: number) => ({
  type: "SET_THUMB_WRAPS_COUNT_PART4",
  payload: count
});

export const setDialogInput = (
  inputIdentifier: string,
  inputValue: string
) => ({
  type: "SET_DIALOG_INPUT",
  payload: { inputIdentifier, inputValue }
});

export const clearDialogInput = () => ({
  type: "CLEAR_DIALOG_INPUT"
});

export const removeDialogInput = (inputIdentifier: string) => ({
  type: "REMOVE_DIALOG_INPUT",
  payload: inputIdentifier
});

interface DialogInputData {
  [key: string]: string; // 인덱스 시그니처 추가
}

// reducer.js
const initialState: StateType = {
  parts: {
    part1: 2,
    part2: 2,
    part3: 4,
    part4: 2
  },
  dialogInputData: {}
};

interface StateType {
  parts: {
    part1: number;
    part2: number;
    part3: number;
    part4: number;
  };
  dialogInputData: DialogInputData;
}

const thumbInputReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "SET_THUMB_WRAPS_COUNT_PART1":
      return {
        ...state,
        parts: { ...state.parts, part1: action.payload }
      };
    case "SET_THUMB_WRAPS_COUNT_PART2":
      return {
        ...state,
        parts: { ...state.parts, part2: action.payload }
      };
    case "SET_THUMB_WRAPS_COUNT_PART3":
      return {
        ...state,
        parts: { ...state.parts, part3: action.payload }
      };
    case "SET_THUMB_WRAPS_COUNT_PART4":
      return {
        ...state,
        parts: { ...state.parts, part4: action.payload }
      };
    case "SET_DIALOG_INPUT":
      const { inputIdentifier, inputValue } = action.payload;
      return {
        ...state,
        dialogInputData: {
          ...state.dialogInputData,
          inputIdentifier,
          [inputIdentifier]: inputValue
        }
      };
    case "CLEAR_DIALOG_INPUT":
      return {
        ...state,
        dialogInputData: {}
      };
    case "REMOVE_DIALOG_INPUT":
      const updatedDialogInputData = { ...state.dialogInputData };
      delete updatedDialogInputData[action.payload];
      return {
        ...state,
        dialogInputData: updatedDialogInputData
      };
    default:
      return state;
  }
};

export default thumbInputReducer;
