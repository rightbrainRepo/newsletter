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

export const setThumbWrapsCountPartAdd = (count: number) => ({
  type: "SET_THUMB_WRAPS_COUNT_PARTADD",
  payload: count
});

export const setThumbWrapsAddCount = (isvisible: boolean) => ({
  type: "SET_THUMB_WRAPS_ADD_COUNT",
  payload: isvisible
});

export const setDialogInput = (
  inputIdentifier: string,
  inputValue: string
) => ({
  type: "SET_DIALOG_INPUT",
  payload: { inputIdentifier, inputValue }
});

export const removeDialogInput = (inputIdentifier: string) => ({
  type: "REMOVE_DIALOG_INPUT",
  payload: inputIdentifier
});

export const toggleLinkVisibility = (
  wrapNumber: number,
  isVisible: boolean,
  linkIdentifier: String
) => ({
  type: "TOGGLE_LINK_VISIBILITY",
  payload: { wrapNumber, isVisible, linkIdentifier }
});

export const clearLinkVisibility = () => ({
  type: "CLEAR_LINK_VISIBILITY"
});

interface DialogInputData {
  [key: string]: string;
}

// reducer.js
const initialState: StateType = {
  parts: {
    part1: 2,
    part2: 2,
    part3: 4,
    part4: 1,
    partAdd: 2,
    isvisible: false
  },
  dialogInputData: {},
  linkVisibility: {}
};

interface StateType {
  parts: {
    part1: number;
    part2: number;
    part3: number;
    part4: number;
    partAdd: number;
    isvisible: boolean;
  };
  dialogInputData: DialogInputData;
  linkVisibility: {};
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
    case "SET_THUMB_WRAPS_COUNT_PARTADD":
      return {
        ...state,
        parts: { ...state.parts, partAdd: action.payload }
      };
    case "SET_THUMB_WRAPS_ADD_COUNT":
      return {
        ...state,
        parts: { ...state.parts, isvisible: action.payload }
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
    case "REMOVE_DIALOG_INPUT":
      const updatedDialogInputData = { ...state.dialogInputData };
      delete updatedDialogInputData[action.payload];
      return {
        ...state,
        dialogInputData: updatedDialogInputData
      };
    case "TOGGLE_LINK_VISIBILITY":
      const { isVisible, linkIdentifier } = action.payload;
      return {
        ...state,
        linkVisibility: {
          ...state.linkVisibility,
          linkIdentifier,
          [linkIdentifier]: isVisible
        }
      };
    case "CLEAR_LINK_VISIBILITY":
      return {
        ...state,
        linkVisibility: {}
      };
    default:
      return state;
  }
};

export default thumbInputReducer;
