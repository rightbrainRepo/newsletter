import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import { ModeEdit, Add, Delete } from "@mui/icons-material";
import {
  setDialogInput,
  removeDialogInput,
  setThumbWrapsCountPart1,
  toggleLinkVisibility
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
  const linkVisibility = useStoreData().linkVisibility;

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

  //ux 내 바로보기 삭제 추가
  const linkBtnClick = (
    wrapNumber: number,
    isVisible: boolean,
    linkIdentifier: String
  ) => {
    dispatch(toggleLinkVisibility(wrapNumber, isVisible, linkIdentifier));
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
        `thumbWrap-img-${removedWrapNumber}`,
        `thumbWrap-text-${removedWrapNumber}`,
        `thumbWrap-subtext-${removedWrapNumber}`,
        `thumbWrap-detailtext-${removedWrapNumber}`,
        `thumbWrap-link-${removedWrapNumber}`
      ];

      // 각 inputIdentifier에 대해 Redux 상태 업데이트
      removedInputIdentifiers.forEach((inputIdentifier) => {
        dispatch(removeDialogInput(inputIdentifier));
      });

      dispatch(setThumbWrapsCountPart1(thumbWraps.length - 1));
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
                    `thumbWrap-img-${wrapNumber}` === dialogInfo.inputIdentifier
                      ? dialogInputData[dialogInfo.inputIdentifier]
                      : dialogInputData[`thumbWrap-img-${wrapNumber}`]
                        ? dialogInputData[`thumbWrap-img-${wrapNumber}`]
                        : "https://lh3.googleusercontent.com/pw/ADCreHeNkVAIaJnzVDkptD8HL3UTYvor4_wx-81o5JKEzV7bsWJtd84rG1XxLvDe6xFX1V27YD1hoVNQbhWWWAw1z_YJZ8-WjZKA9d6cjXpRnQO6sQ1aXzi7gYwpmPphDwaYLCMTMoFPUXi_inWEhjGfwfMI=w660-h275-s-no-gm?authuser=1"
                  }
                  width="660"
                  height="275"
                  alt=""
                />
                <div
                  className={styles.imglayer}
                  onClick={() => contDialogOpen("img", `img-${wrapNumber}`)}>
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
                `thumbWrap-text-${wrapNumber}` === dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[`thumbWrap-text-${wrapNumber}`]
                    ? dialogInputData[`thumbWrap-text-${wrapNumber}`]
                    : "개인화의 시대"}
              </div>
              <div
                className={styles.imglayer}
                onClick={() => contDialogOpen("text", `text-${wrapNumber}`)}>
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
                `thumbWrap-subtext-${wrapNumber}` === dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[`thumbWrap-subtext-${wrapNumber}`]
                    ? dialogInputData[`thumbWrap-subtext-${wrapNumber}`]
                    : "UX Story"}
              </div>
              <div
                className={styles.imglayer}
                onClick={() =>
                  contDialogOpen("subtext", `subtext-${wrapNumber}`)
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
                `thumbWrap-detailtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[`thumbWrap-detailtext-${wrapNumber}`]
                    ? dialogInputData[`thumbWrap-detailtext-${wrapNumber}`]
                    : " 추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 '개인화'입니다. 개인화는 설정 등의 맞춤화와는 달리 데이터에 기반하여 사용자에게 알맞은 정보나 기능을 전달하는 것입니다. 이번글에서는 최근 고도화된 개인화의 AI활용에 대해서 이야기해 봅니다.추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 ‘개인화’입니다."}
              </div>
              <div
                className={styles.imglayer}
                onClick={() =>
                  contDialogOpen("detailtext", `detailtext-${wrapNumber}`)
                }>
                <div className={styles.iconBox}>
                  <ModeEdit />
                </div>
              </div>
            </div>
          </div>
          {/* 링크 영역 */}
          {linkVisibility[`thumbWrap-link-${wrapNumber}`] == false ? (
            ""
          ) : (
            <div className={cx(styles.thumbBox, styles.thumb_link)}>
              <img
                src="https://lh3.googleusercontent.com/pw/ADCreHejqD35RtfeDfcxo6tneeiCfC3uUCBfTeP6qu30RWaylr9jOWNTJmZSJNckALEe8gVAn-qenGxPj-EFJdg-EOZpG2aUqFB9xwTLmmX61eX9GQ63o2bwhkxCRlSiYDPEPVXrfvORLOzvBqQ3Po4yN5GO=w82-h34-s-no-gm?authuser=1"
                width="82"
                height="34"
                alt=""
              />
              <div
                className={styles.imglayer}
                onClick={() => contDialogOpen("link", `link-${wrapNumber}`)}>
                <div className={styles.iconBox}>
                  <ModeEdit />
                </div>
              </div>
              <Button
                className={styles.linkDel}
                variant="contained"
                onClick={() =>
                  linkBtnClick(0, false, `thumbWrap-link-${wrapNumber}`)
                }>
                <Delete />
                바로보기 삭제
              </Button>
            </div>
          )}
          {linkVisibility[`thumbWrap-link-${wrapNumber}`] == false ? (
            <Button
              className={styles.addLinkBtn}
              variant="contained"
              fullWidth
              onClick={() =>
                linkBtnClick(1, true, `thumbWrap-link-${wrapNumber}`)
              }>
              <Add />
              바로보기 추가
            </Button>
          ) : (
            ""
          )}
          <InputDialog
            key={`dialog-${index}-${wrapNumber}`}
            open={
              dialogInfo.open &&
              dialogInfo.inputIdentifier ==
                `thumbWrap-${dialogInfo.type}-${wrapNumber}`
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={`thumbWrap-${dialogInfo.type}-${wrapNumber}`}>
            {renderDialogContent()}
          </InputDialog>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className={cx(styles.thumb01_Wrap, styles.cate_Wrap)}>
        <div className={styles.thumbW01_title} style={{ marginTop: 14 }}>
          <img
            src={
              dialogInputData[dialogInfo.inputIdentifier] &&
              `thumbWrap-title-1` === dialogInfo.inputIdentifier
                ? dialogInputData[dialogInfo.inputIdentifier]
                : dialogInputData[`thumbWrap-title-1`]
                  ? dialogInputData[`thumbWrap-title-1`]
                  : "https://lh3.googleusercontent.com/pw/ABLVV84V5lPRWl-KnK9CSyPSSNRcA87m2wOiXZyBcsW6UHx-rr_eYKpsyW1_xg6cmpEq5EqhNOhs7ElsARBQmthcwe-cCAtwqLMBqFa6OqL7KAlZTFKxe3AkQTC1Aficc8kXq7kVPmw_qhTAyUqczBx5fJEo=w660-h75-s-no-gm?authuser=2"
            }
            width="660"
            height="75"
            alt=""
          />
          <div
            className={styles.imglayer}
            onClick={() => contDialogOpen("title", `title-1`)}>
            <div className={styles.iconBox}>
              <ModeEdit />
            </div>
          </div>
          <InputDialog
            open={
              dialogInfo.open &&
              dialogInfo.inputIdentifier == `thumbWrap-title-1`
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={`thumbWrap-title-1`}>
            {renderDialogContent()}
          </InputDialog>
        </div>
        {renderThumbWraps()}
        {/* 버튼 영역 */}
        <ButtonGroup
          orientation="vertical"
          variant="outlined"
          className={styles.controlBtn}>
          {thumbWraps.length < 5 ? (
            <Button onClick={addThumbWrap}>
              <Add />글 추가
            </Button>
          ) : (
            ""
          )}
          {thumbWraps.length > 2 ? (
            <Button onClick={removeThumbWrap}>
              <Delete />글 삭제
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
