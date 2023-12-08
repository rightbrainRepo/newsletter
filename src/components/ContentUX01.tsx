import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import { ModeEdit, Add, Delete } from "@mui/icons-material";
import {
  setDialogInput,
  removeDialogInput,
  setThumbWrapsCountPart1
} from "@store/reducer/thumbInputReducer";
import { useStoreData } from "@store/storeSelectors";
import cx from "classnames";
import InputDialog from "@components/InputDialog";
import styles from "@styles/component/Contentux01.module.scss";

const ContentUX01 = () => {
  // dialog 상태
  const [dialogInfo, setDialogInfo] = useState({
    open: false,
    type: null,
    inputIdentifier: `thumbWrap-${null}`
  });
  // thumbWraps 상태 (초기값: [1, 2])
  const [thumbWraps, setThumbWraps] = useState([1, 2]);
  const dispatch = useDispatch();
  const dialogInputData = useStoreData().dialogInputData;

  //dialog
  const contDialogOpen = (type: any, wrapString: any) => {
    const inputIdentifier = `thumbWrap-${wrapString}`;
    const inputvalue = dialogInputData[inputIdentifier];
    setDialogInfo({ open: true, type: type, inputIdentifier: inputIdentifier });
    dispatch(setDialogInput(inputIdentifier, inputvalue ? inputvalue : ""));
  };

  const contDialogClose = () => {
    setDialogInfo({ ...dialogInfo, open: false });
  };

  const renderDialogContent = () => {
    if (dialogInfo.type === null) {
      return "img";
    }
  };

  //thumb 내 추가, 삭제
  const addThumbWrap = () => {
    if (thumbWraps.length < 5) {
      setThumbWraps([...thumbWraps, thumbWraps.length + 1]);
      dispatch(setThumbWrapsCountPart1(thumbWraps.length + 1));
    }
  };

  const removeThumbWrap = () => {
    if (thumbWraps.length > 2) {
      const updatedThumbWraps = thumbWraps.slice(0, -1);

      setThumbWraps(updatedThumbWraps);

      // 삭제할 thumbWrap의 inputIdentifier 찾기
      const removedWrapNumber = thumbWraps[thumbWraps.length - 1];
      const removedInputIdentifiers = [
        `thumbWrap-${removedWrapNumber}-img-${removedWrapNumber}`,
        `thumbWrap-${removedWrapNumber}-text-${removedWrapNumber}`,
        `thumbWrap-${removedWrapNumber}-subtext-${removedWrapNumber}`,
        `thumbWrap-${removedWrapNumber}-detailtext-${removedWrapNumber}`,
        `thumbWrap-${removedWrapNumber}-link-${removedWrapNumber}`
      ];

      // 각 inputIdentifier에 대해 Redux 상태 업데이트
      removedInputIdentifiers.forEach((inputIdentifier) => {
        dispatch(removeDialogInput(inputIdentifier));
      });
    }
  };

  // thumbWrap 렌더링

  const renderThumbWraps = () => {
    return thumbWraps.map((wrapNumber, index) => (
      <React.Fragment key={`wrap-${wrapNumber}-${index}`}>
        <div className={cx(styles.thumbWrap, [`thumbWrap0${wrapNumber}`])}>
          <div className={cx(styles.thumbBox, styles.thumb_img)}>
            <div className={styles.detailArea}>
              <div className={styles.img}>
                <img
                  src={
                    dialogInputData[dialogInfo.inputIdentifier] &&
                    `thumbWrap-${wrapNumber}-img-${wrapNumber}` ===
                      dialogInfo.inputIdentifier
                      ? dialogInputData[dialogInfo.inputIdentifier]
                      : dialogInputData[
                            `thumbWrap-${wrapNumber}-img-${wrapNumber}`
                          ]
                        ? dialogInputData[
                            `thumbWrap-${wrapNumber}-img-${wrapNumber}`
                          ]
                        : "https://lh3.googleusercontent.com/pw/ADCreHeNkVAIaJnzVDkptD8HL3UTYvor4_wx-81o5JKEzV7bsWJtd84rG1XxLvDe6xFX1V27YD1hoVNQbhWWWAw1z_YJZ8-WjZKA9d6cjXpRnQO6sQ1aXzi7gYwpmPphDwaYLCMTMoFPUXi_inWEhjGfwfMI=w660-h275-s-no-gm?authuser=1"
                  }
                  width="660"
                  height="275"
                  alt=""
                />
                <div
                  className={styles.imglayer}
                  onClick={() =>
                    contDialogOpen("img", `${wrapNumber}-img-${wrapNumber}`)
                  }>
                  <div className={styles.iconBox}>
                    <ModeEdit />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles.thumbBox, styles.thumb_text)}>
            <div className={styles.detailArea}>
              <div className={styles.detailtitle}>
                {dialogInputData[dialogInfo.inputIdentifier] &&
                `thumbWrap-${wrapNumber}-text-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap-${wrapNumber}-text-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap-${wrapNumber}-text-${wrapNumber}`
                      ]
                    : "개인화의 시대"}
              </div>
              <div
                className={styles.imglayer}
                onClick={() =>
                  contDialogOpen("text", `${wrapNumber}-text-${wrapNumber}`)
                }>
                <div className={styles.iconBox}>
                  <ModeEdit />
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles.thumbBox, styles.thumb_subtext)}>
            <div className={styles.detailArea}>
              <div className={styles.detailtitle}>
                {dialogInputData[dialogInfo.inputIdentifier] &&
                `thumbWrap-${wrapNumber}-subtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap-${wrapNumber}-subtext-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap-${wrapNumber}-subtext-${wrapNumber}`
                      ]
                    : "UX Story"}
              </div>
              <div
                className={styles.imglayer}
                onClick={() =>
                  contDialogOpen(
                    "subtext",
                    `${wrapNumber}-subtext-${wrapNumber}`
                  )
                }>
                <div className={styles.iconBox}>
                  <ModeEdit />
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles.thumbBox, styles.thumb_detailtext)}>
            <div className={styles.detailArea}>
              <div className={styles.detailtitle}>
                {dialogInputData[dialogInfo.inputIdentifier] &&
                `thumbWrap-${wrapNumber}-detailtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap-${wrapNumber}-detailtext-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap-${wrapNumber}-detailtext-${wrapNumber}`
                      ]
                    : " 추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 '개인화'입니다. 개인화는 설정 등의 맞춤화와는 달리 데이터에 기반하여 사용자에게 알맞은 정보나 기능을 전달하는 것입니다. 이번글에서는 최근 고도화된 개인화의 AI활용에 대해서 이야기해 봅니다.추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 ‘개인화’입니다."}
              </div>
              <div
                className={styles.imglayer}
                onClick={() =>
                  contDialogOpen(
                    "detailtext",
                    `${wrapNumber}-detailtext-${wrapNumber}`
                  )
                }>
                <div className={styles.iconBox}>
                  <ModeEdit />
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles.thumbBox, styles.thumb_link)}>
            <img
              src="https://lh3.googleusercontent.com/pw/ADCreHejqD35RtfeDfcxo6tneeiCfC3uUCBfTeP6qu30RWaylr9jOWNTJmZSJNckALEe8gVAn-qenGxPj-EFJdg-EOZpG2aUqFB9xwTLmmX61eX9GQ63o2bwhkxCRlSiYDPEPVXrfvORLOzvBqQ3Po4yN5GO=w82-h34-s-no-gm?authuser=1"
              width="82"
              height="34"
              alt=""
            />
            <div
              className={styles.imglayer}
              onClick={() =>
                contDialogOpen("link", `${wrapNumber}-link-${wrapNumber}`)
              }>
              <div className={styles.iconBox}>
                <ModeEdit />
              </div>
            </div>
          </div>

          <InputDialog
            key={`dialog-${index}-${wrapNumber}`}
            open={
              dialogInfo.open &&
              dialogInfo.inputIdentifier ==
                `thumbWrap-${wrapNumber}-${dialogInfo.type}-${wrapNumber}`
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={`thumbWrap-${wrapNumber}-${dialogInfo.type}-${wrapNumber}`}>
            {renderDialogContent()}
          </InputDialog>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className={cx(styles.thumb01_Wrap, styles.cate_Wrap)}>
        <div className={styles.thumbW01_title}>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHeP3mndOi5G4cff2B0nvhSAC9Gzjq1sA8R24PkwMMiMXa-ZWKxzq1GcgboWRNLxlNltzUA23kyN8FE0106bS7vZPjBBS07e76a69WKrb0OLqtSZwXytWgqkGpgVnUNWLPV94FzmaxXhQw_fQQ-KWysc=w660-h75-s-no-gm?authuser=1"
            width="660"
            height="75"
            alt=""
          />
        </div>
        {renderThumbWraps()}
        {/* 버튼 영역 */}
        <ButtonGroup
          orientation="vertical"
          fullWidth
          variant="outlined"
          className={styles.controlBtn}>
          {thumbWraps.length < 5 ? (
            <Button onClick={addThumbWrap}>
              <Add />
              추가
            </Button>
          ) : (
            ""
          )}
          {thumbWraps.length > 2 ? (
            <Button onClick={removeThumbWrap}>
              <Delete />
              삭제
            </Button>
          ) : (
            ""
          )}
        </ButtonGroup>
      </div>
    </>
  );
};

export default ContentUX01;
