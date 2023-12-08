import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import { ModeEdit, Add, Delete } from "@mui/icons-material";
import {
  setDialogInput,
  removeDialogInput,
  setThumbWrapsCountPart2
} from "@store/reducer/thumbInputReducer";
import { useStoreData } from "@store/storeSelectors";
import cx from "classnames";
import InputDialog from "@components/InputDialog";
import styles from "@styles/component/Contentux01.module.scss";

const ContentUX02 = () => {
  // dialog 상태
  const [dialogInfo, setDialogInfo] = useState({
    open: false,
    type: null,
    inputIdentifier: `thumbWrap02-${null}`
  });
  // thumbWraps 상태 (초기값: [1, 2])
  const [thumbWraps, setThumbWraps] = useState([1, 2]);
  const dispatch = useDispatch();
  const dialogInputData = useStoreData().dialogInputData;

  //dialog
  const contDialogOpen = (type: any, wrapString: any) => {
    const inputIdentifier = `thumbWrap02-${wrapString}`;
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
      dispatch(setThumbWrapsCountPart2(thumbWraps.length + 1));
    }
  };

  const removeThumbWrap = () => {
    if (thumbWraps.length > 2) {
      const updatedThumbWraps = thumbWraps.slice(0, -1);

      setThumbWraps(updatedThumbWraps);

      // 삭제할 thumbWrap의 inputIdentifier 찾기
      const removedWrapNumber = thumbWraps[thumbWraps.length - 1];
      const removedInputIdentifiers = [
        `thumbWrap02-${removedWrapNumber}-img-${removedWrapNumber}`,
        `thumbWrap02-${removedWrapNumber}-text-${removedWrapNumber}`,
        `thumbWrap02-${removedWrapNumber}-subtext-${removedWrapNumber}`,
        `thumbWrap02-${removedWrapNumber}-detailtext-${removedWrapNumber}`,
        `thumbWrap02-${removedWrapNumber}-link-${removedWrapNumber}`
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
                    `thumbWrap02-${wrapNumber}-img-${wrapNumber}` ===
                      dialogInfo.inputIdentifier
                      ? dialogInputData[dialogInfo.inputIdentifier]
                      : dialogInputData[
                            `thumbWrap02-${wrapNumber}-img-${wrapNumber}`
                          ]
                        ? dialogInputData[
                            `thumbWrap02-${wrapNumber}-img-${wrapNumber}`
                          ]
                        : "https://lh3.googleusercontent.com/pw/ADCreHex2IScRlsVI9Ch3gPWPZJMyF2Wv796SlS0XKAEafxx33EgmJvtbk7XifWUVjxEv1hqFnOokXV4-7-u6jr6A2QTPOM2kVttf4VtIJRH1V_B2YFEB-ve75M7YjE5pYH8floIGl_UKnSpymhdxPq_rDjp=w660-h275-s-no-gm?authuser=1"
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
                `thumbWrap02-${wrapNumber}-text-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap02-${wrapNumber}-text-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap02-${wrapNumber}-text-${wrapNumber}`
                      ]
                    : "슈퍼앱 : 하나의 앱에서 모든 서비스를"}
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
                `thumbWrap02-${wrapNumber}-subtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap02-${wrapNumber}-subtext-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap02-${wrapNumber}-subtext-${wrapNumber}`
                      ]
                    : "App Review"}
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
                `thumbWrap02-${wrapNumber}-detailtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap02-${wrapNumber}-detailtext-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap02-${wrapNumber}-detailtext-${wrapNumber}`
                      ]
                    : "슈퍼앱은 혁신적인 개념으로, 다양한 서비스를 하나의 플랫폼 또는 앱 내에서 통합하여 제공합니다. 이번 글에서는 슈퍼앱의 개념과 특징, 국내외 주요 슈퍼앱들의 사례를 알아보겠습니다."}
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
                `thumbWrap02-${wrapNumber}-${dialogInfo.type}-${wrapNumber}`
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={`thumbWrap02-${wrapNumber}-${dialogInfo.type}-${wrapNumber}`}>
            {renderDialogContent()}
          </InputDialog>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className={cx(styles.thumb02_Wrap, styles.cate_Wrap)}>
        <div className={styles.thumbW01_title}>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHeiaYOn5hRewAHiehlsooUi7e5lNqKq8YlswO-jZhpIZKX_Pg8u4D10PNimm1RIdhfVRLE3YkVJGfO0efu80JkbLErR-myWirFJNnJdCW-Ab4RsDi9s4jvCrYekr3wevoBosROxK5OBivZCkconMgIM=w660-h124-s-no-gm?authuser=1"
            width="660"
            height="124"
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

export default ContentUX02;
