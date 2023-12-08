import { configureStore, combineReducers } from "@reduxjs/toolkit";
import headerReducer from "./reducer/HeaderReducer";
import thumbControlReducer from "./reducer/thumbControlReducer";
import thumbInputReducer from "./reducer/thumbInputReducer";

// 상태 인터페이스 정의
interface RootState {
  header: {
    imagePath: string;
  };
  thumbControl: {
    thumbWraps: number[];
  };
  thumbInput: {
    parts: {
      part1: number;
      part2: number;
      part3: number;
      part4: number;
    };
    dialogInputData: Record<string, any>;
  };
}

// 로컬 스토리지에서 상태 로드
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Failed to load state:", err);
    return undefined;
  }
};

window.localStorage.clear();

// 로컬 스토리지에 상태 저장
const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};

const rootReducer = combineReducers({
  header: headerReducer,
  thumbControl: thumbControlReducer,
  thumbInput: thumbInputReducer
});

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
