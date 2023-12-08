import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import { ModeEdit, Add, Delete } from "@mui/icons-material";
import {
  setDialogInput,
  removeDialogInput,
  setThumbWrapsCountPart4
} from "@store/reducer/thumbInputReducer";
import { useStoreData } from "@store/storeSelectors";
import cx from "classnames";
import InputDialog from "@components/InputDialog";
import styles from "@styles/component/Contentux01.module.scss";

const ContentUX04 = () => {
  // dialog 상태
  const [dialogInfo, setDialogInfo] = useState({
    open: false,
    type: null,
    inputIdentifier: `thumbWrap04-${null}`
  });
  // thumbWraps 상태 (초기값: [1, 2])
  const [thumbWraps, setThumbWraps] = useState([1, 2]);
  const dispatch = useDispatch();
  const dialogInputData = useStoreData().dialogInputData;

  //dialog
  const contDialogOpen = (type: any, wrapString: any) => {
    const inputIdentifier = `thumbWrap04-${wrapString}`;
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
      dispatch(setThumbWrapsCountPart4(thumbWraps.length + 1));
    }
  };

  const removeThumbWrap = () => {
    if (thumbWraps.length > 2) {
      const updatedThumbWraps = thumbWraps.slice(0, -1);

      setThumbWraps(updatedThumbWraps);

      // 삭제할 thumbWrap의 inputIdentifier 찾기
      const removedWrapNumber = thumbWraps[thumbWraps.length - 1];
      const removedInputIdentifiers = [
        `thumbWrap04-${removedWrapNumber}-img-${removedWrapNumber}`,
        `thumbWrap04-${removedWrapNumber}-text-${removedWrapNumber}`,
        `thumbWrap04-${removedWrapNumber}-subtext-${removedWrapNumber}`,
        `thumbWrap04-${removedWrapNumber}-detailtext-${removedWrapNumber}`,
        `thumbWrap04-${removedWrapNumber}-link-${removedWrapNumber}`
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
                    `thumbWrap04-${wrapNumber}-img-${wrapNumber}` ===
                      dialogInfo.inputIdentifier
                      ? dialogInputData[dialogInfo.inputIdentifier]
                      : dialogInputData[
                            `thumbWrap04-${wrapNumber}-img-${wrapNumber}`
                          ]
                        ? dialogInputData[
                            `thumbWrap04-${wrapNumber}-img-${wrapNumber}`
                          ]
                        : "https://lh3.googleusercontent.com/pw/ADCreHdBWxF0Fl1vO8OYTbfJkUm5KSlukHqSGnuQEKmKtaP9mSv7opT_6zT69nkIxJHBfhzD0k2a8LrEsHmo8uzQWu8H6w1a-km9kXr74_EmiY4s3kO6ApBBmarANvFoUVcuuOvWuvUMfmtmdg5z335Uq3Ry=w660-h275-s-no-gm?authuser=1"
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
                `thumbWrap04-${wrapNumber}-text-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap04-${wrapNumber}-text-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap04-${wrapNumber}-text-${wrapNumber}`
                      ]
                    : "라이트브레인, 2023 ICT AWARD KOREA 금상"}
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
                `thumbWrap04-${wrapNumber}-subtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap04-${wrapNumber}-subtext-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap04-${wrapNumber}-subtext-${wrapNumber}`
                      ]
                    : "ICT AWARD KOREA 2023"}
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
                `thumbWrap04-${wrapNumber}-detailtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[
                        `thumbWrap04-${wrapNumber}-detailtext-${wrapNumber}`
                      ]
                    ? dialogInputData[
                        `thumbWrap04-${wrapNumber}-detailtext-${wrapNumber}`
                      ]
                    : "라이트브레인이 사단법인 한국정보과학진흥협회가 주최한 ICT AWARD KOREA 2023 디지털 인사이트부문에서 KT Genie TV로 금상(한국정보과학진흥협회장상)을 수상하였습니다."}
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
                `thumbWrap04-${wrapNumber}-${dialogInfo.type}-${wrapNumber}`
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={`thumbWrap04-${wrapNumber}-${dialogInfo.type}-${wrapNumber}`}>
            {renderDialogContent()}
          </InputDialog>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className={cx(styles.thumb04_Wrap, styles.cate_Wrap)}>
        <div className={styles.thumbW01_title}>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHfX7CzOd1iI4ZOlc3cgDGUrLPWsifzd4PZyPNvbSJICD9t8EbZmz1JxvkK35M75E6SNdDECTBPanV_qOfiO8aINLqU-jXACYaJWYszvWhFphnsSpw1kL6EpjdUJCniLSuHjCpPjy2IlUVd6S5rvhdlV=w660-h106-s-no-gm?authuser=1"
            width="660"
            height="106"
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

export default ContentUX04;
