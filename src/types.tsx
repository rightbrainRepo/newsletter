export interface RootState {
  header: {
    imagePath: string;
  };
  thumbInput: {
    parts: {
      part1: number;
      part2: number;
      part3: number;
      part4: number;
      partAdd: number;
      isvisible: boolean;
    };
    dialogInputData: Record<string, string>;
    linkVisibility: Record<string, boolean>;
  };
}

export const SET_IMAGE_PATH = "SET_IMAGE_PATH";
export const CLEAR_IMAGE_PATH = "CLEAR_IMAGE_PATH";
export const SET_THUMB_WRAPS_COUNT_PART1 = "SET_THUMB_WRAPS_COUNT_PART1";
export const SET_THUMB_WRAPS_COUNT_PART2 = "SET_THUMB_WRAPS_COUNT_PART2";
export const SET_THUMB_WRAPS_COUNT_PART3 = "SET_THUMB_WRAPS_COUNT_PART3";
export const SET_THUMB_WRAPS_COUNT_PART4 = "SET_THUMB_WRAPS_COUNT_PART4";
export const SET_THUMB_WRAPS_COUNT_PARTADD = "SET_THUMB_WRAPS_COUNT_PARTADD";
export const SET_THUMB_WRAPS_ADD_COUNT = "SET_THUMB_WRAPS_ADD_COUNT";
export const SET_DIALOG_INPUT_DATA = "SET_DIALOG_INPUT_DATA";
export const TOGGLE_LINK_VISIBILITY = "TOGGLE_LINK_VISIBILITY";

export interface SetImagePathAction {
  type: typeof SET_IMAGE_PATH;
  payload: string;
}

export interface ClearImagePathAction {
  type: typeof CLEAR_IMAGE_PATH;
}

export interface setThumbWrapsCountPart1Action {
  type: typeof SET_THUMB_WRAPS_COUNT_PART1;
  payload: number;
}
export interface setThumbWrapsCountPart2Action {
  type: typeof SET_THUMB_WRAPS_COUNT_PART2;
  payload: number;
}
export interface setThumbWrapsCountPart3Action {
  type: typeof SET_THUMB_WRAPS_COUNT_PART3;
  payload: number;
}
export interface setThumbWrapsCountPart4Action {
  type: typeof SET_THUMB_WRAPS_COUNT_PART4;
  payload: number;
}
export interface setThumbWrapsCountPartAddAction {
  type: typeof SET_THUMB_WRAPS_COUNT_PARTADD;
  payload: number;
}
export interface setThumbWrapsAddCountAction {
  type: typeof SET_THUMB_WRAPS_ADD_COUNT;
  payload: boolean;
}
export interface SetDialogInputDataAction {
  type: typeof SET_DIALOG_INPUT_DATA;
  payload: dialogInputData;
}

export interface ToggleLinkVisibilityAction {
  type: typeof TOGGLE_LINK_VISIBILITY;
  payload: { wrapNumber: number; isVisible: boolean; linkIdentifier: string };
}

export type dialogInputData = Record<string, string>;
export type ThumbInputActionTypes = ToggleLinkVisibilityAction;
