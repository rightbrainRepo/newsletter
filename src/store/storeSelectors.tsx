import { useSelector } from "react-redux";
import { RootState } from "../types";

export const useStoreData = () => {
  const imagePath = useSelector((state: RootState) => state.header.imagePath);
  const thumbWraps = useSelector(
    (state: RootState) => state.thumbControl.thumbWraps
  );
  const dialogInputData = useSelector(
    (state: RootState) => state.thumbInput.dialogInputData
  );
  const thumbWrapsCountPart1 = useSelector(
    (state: RootState) => state.thumbInput.parts.part1
  );
  const thumbWrapsCountPart2 = useSelector(
    (state: RootState) => state.thumbInput.parts.part2
  );
  const thumbWrapsCountPart3 = useSelector(
    (state: RootState) => state.thumbInput.parts.part3
  );
  const thumbWrapsCountPart4 = useSelector(
    (state: RootState) => state.thumbInput.parts.part4
  );

  return {
    imagePath,
    thumbWrapsCountPart1,
    thumbWrapsCountPart2,
    thumbWrapsCountPart3,
    thumbWrapsCountPart4,
    dialogInputData,
    thumbWraps
  };
};
