import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import { ModeEdit, Add, Delete } from "@mui/icons-material";
import {
  setDialogInput,
  removeDialogInput,
  setThumbWrapsAddCount,
  setThumbWrapsCountPartAdd,
  toggleLinkVisibility
} from "@store/reducer/thumbInputReducer";
import { useStoreData } from "@store/storeSelectors";
import cx from "classnames";
import InputDialog from "@components/InputDialog";
import styles from "@styles/component/ContentAddux.module.scss";

const ContentAddux = () => {
  // dialog 상태
  const [dialogInfo, setDialogInfo] = useState({
    open: false,
    type: null,
    inputIdentifier: `addThumbWrap-${null}`
  });
  // thumbWraps 상태 (초기값: [1, 2])
  const [thumbWraps, setThumbWraps] = useState([1, 2]);
  const [totalCount, setTotalCount] = useState(3);
  const dispatch = useDispatch();
  const dialogInputData = useStoreData().dialogInputData;
  const linkVisibility = useStoreData().linkVisibility;
  const addCateCont = useStoreData().thumbWrapsAddCount;

  //dialog
  const contDialogOpen = (type: any, wrapString: any) => {
    const inputIdentifier = `addThumbWrap-${wrapString}`;
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

  //ux 내 바로보기 삭제 추가
  const linkBtnClick = (
    wrapNumber: number,
    isVisible: boolean,
    linkIdentifier: String
  ) => {
    dispatch(toggleLinkVisibility(wrapNumber, isVisible, linkIdentifier));
  };

  //thumb 내 추가, 삭제
  const addThumbWrap = () => {
    if (thumbWraps.length < 5) {
      setThumbWraps([...thumbWraps, thumbWraps.length + 1]);
      dispatch(setThumbWrapsCountPartAdd(thumbWraps.length + 1));
    }
  };

  const removeThumbWrap = () => {
    if (thumbWraps.length > 2) {
      const updatedThumbWraps = thumbWraps.slice(0, -1);

      setThumbWraps(updatedThumbWraps);

      // 삭제할 thumbWrap의 inputIdentifier 찾기
      const removedWrapNumber = thumbWraps[thumbWraps.length - 1];
      const removedInputIdentifiers = [
        `addThumbWrap-img-${removedWrapNumber}`,
        `addThumbWrap-text-${removedWrapNumber}`,
        `addThumbWrap-subtext-${removedWrapNumber}`,
        `addThumbWrap-detailtext-${removedWrapNumber}`,
        `addThumbWrap-link-${removedWrapNumber}`
      ];

      // 각 inputIdentifier에 대해 Redux 상태 업데이트
      removedInputIdentifiers.forEach((inputIdentifier) => {
        dispatch(removeDialogInput(inputIdentifier));
      });

      dispatch(setThumbWrapsCountPartAdd(thumbWraps.length - 1));
    }
  };

  //카테고리 추가 삭제
  const cateToggleClick = (checkAdd: boolean) => {
    if (checkAdd) {
      setTotalCount(4);
    } else {
      setTotalCount(3);
    }
    dispatch(setThumbWrapsAddCount(checkAdd));
  };

  const cateWrapRender = () => {
    return thumbWraps.map((wrapNumber, index) => (
      <React.Fragment key={`wrap-${wrapNumber}-${index}`}>
        <div className={cx(styles.thumbWrap, [`addThumbWrap${wrapNumber}`])}>
          <div className={cx(styles.thumbBox, styles.thumb_img)}>
            <div className={styles.detailArea}>
              <div className={styles.img}>
                <img
                  src={
                    dialogInputData[dialogInfo.inputIdentifier] &&
                    `addThumbWrap-img-${wrapNumber}` ===
                      dialogInfo.inputIdentifier
                      ? dialogInputData[dialogInfo.inputIdentifier]
                      : dialogInputData[`addThumbWrap-img-${wrapNumber}`]
                        ? dialogInputData[`addThumbWrap-img-${wrapNumber}`]
                        : "https://lh3.googleusercontent.com/pw/ADCreHex2IScRlsVI9Ch3gPWPZJMyF2Wv796SlS0XKAEafxx33EgmJvtbk7XifWUVjxEv1hqFnOokXV4-7-u6jr6A2QTPOM2kVttf4VtIJRH1V_B2YFEB-ve75M7YjE5pYH8floIGl_UKnSpymhdxPq_rDjp=w660-h275-s-no-gm?authuser=1"
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
                `addThumbWrap-text-${wrapNumber}` === dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[`addThumbWrap-text-${wrapNumber}`]
                    ? dialogInputData[`addThumbWrap-text-${wrapNumber}`]
                    : "슈퍼앱 : 하나의 앱에서 모든 서비스를"}
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
                `addThumbWrap-subtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[`addThumbWrap-subtext-${wrapNumber}`]
                    ? dialogInputData[`addThumbWrap-subtext-${wrapNumber}`]
                    : "App Review"}
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
                `addThumbWrap-detailtext-${wrapNumber}` ===
                  dialogInfo.inputIdentifier
                  ? dialogInputData[dialogInfo.inputIdentifier]
                  : dialogInputData[`addThumbWrap-detailtext-${wrapNumber}`]
                    ? dialogInputData[`addThumbWrap-detailtext-${wrapNumber}`]
                    : "슈퍼앱은 혁신적인 개념으로, 다양한 서비스를 하나의 플랫폼 또는 앱 내에서 통합하여 제공합니다. 이번 글에서는 슈퍼앱의 개념과 특징, 국내외 주요 슈퍼앱들의 사례를 알아보겠습니다."}
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
          {linkVisibility[`addThumbWrap-link-${wrapNumber}`] == false ? (
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
                  linkBtnClick(0, false, `addThumbWrap-link-${wrapNumber}`)
                }>
                <Delete />
                바로보기 삭제
              </Button>
            </div>
          )}
          {linkVisibility[`addThumbWrap-link-${wrapNumber}`] == false ? (
            <Button
              className={styles.addLinkBtn}
              variant="contained"
              fullWidth
              onClick={() =>
                linkBtnClick(1, true, `addThumbWrap-link-${wrapNumber}`)
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
                `addThumbWrap-${dialogInfo.type}-${wrapNumber}`
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={`addThumbWrap-${dialogInfo.type}-${wrapNumber}`}>
            {renderDialogContent()}
          </InputDialog>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <>
      {addCateCont ? (
        <>
          <div className={cx(styles.thumb01_Wrap, styles.cate_Wrap)}>
            <div className={styles.thumbW01_title}>
              <img
                src={
                  dialogInputData[dialogInfo.inputIdentifier] &&
                  `addThumbWrap-title-1` === dialogInfo.inputIdentifier
                    ? dialogInputData[dialogInfo.inputIdentifier]
                    : dialogInputData[`addThumbWrap-title-1`]
                      ? dialogInputData[`addThumbWrap-title-1`]
                      : "https://lh3.googleusercontent.com/pw/ABLVV850GpnNAedbnHSRV8wKT-EE1QAWTT6AvVHpiOvj0tWB0YL4x3NHfpgxfibMYi7MoVlP6HmdWbi3QXz3F3kVRy42Puy-AIHJDd0EkMtyM8-Lh1AWsSas5eQmUa-xOjxAjYz5irruUgodQTy24pBTdrhc=w660-h75-s-no-gm?authuser=2"
                }
                width="660"
                height="75"
                alt=""
              />
              <div
                className={styles.imglayer}
                onClick={() => contDialogOpen("title02", `title-1`)}>
                <div className={styles.iconBox}>
                  <ModeEdit />
                </div>
              </div>
              <InputDialog
                open={
                  dialogInfo.open &&
                  dialogInfo.inputIdentifier == `addThumbWrap-title-1`
                }
                onClose={contDialogClose}
                title={`입력하기`}
                inputtype={dialogInfo.type}
                inputIdentifier={`addThumbWrap-title-1`}>
                {renderDialogContent()}
              </InputDialog>
            </div>
            {cateWrapRender()}
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
      ) : (
        ""
      )}

      <ButtonGroup variant="contained" className={styles.addBtnGroup}>
        <div className={styles.btnText}>
          현재 : <span>{totalCount}개</span> (최소 3개, 최대 4개 가능)
        </div>
        {addCateCont ? (
          <Button onClick={() => cateToggleClick(false)}>
            <Delete />
            카테고리 삭제
          </Button>
        ) : (
          ""
        )}
        {!addCateCont ? (
          <Button onClick={() => cateToggleClick(true)}>
            <Add />
            카테고리 추가
          </Button>
        ) : (
          ""
        )}
      </ButtonGroup>
    </>
  );
};

export default ContentAddux;
