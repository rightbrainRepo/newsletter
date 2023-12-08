import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@mui/material";
import { ModeEdit, Add, Delete } from "@mui/icons-material";
import {
  setDialogInput,
  removeDialogInput,
  setThumbWrapsCountPart3
} from "@store/reducer/thumbInputReducer";
import { useStoreData } from "@store/storeSelectors";
import cx from "classnames";
import InputDialog from "@components/InputDialog";
import styles from "@styles/component/Contentux03.module.scss";

const ContentUX03 = () => {
  // dialog 상태
  const [dialogInfo, setDialogInfo] = useState({
    open: false,
    type: null,
    inputIdentifier: `thumbWrap03-${null}`
  });
  // 리스트 dialog 상태
  const [listdialogInfo, setlistdialogInfo] = useState({
    open: false,
    type: null,
    inputIdentifier: `listTextWrap-${null}`
  });
  // 리스트 아이템 상태 관리
  const [listItems, setListItems] = useState([
    [
      {
        type: "1-listText-1",
        content: "29cm – UX/UI 개선"
      },
      {
        type: "1-listLink-1",
        link: "https://blog.rightbrain.co.kr/?p=15044"
      }
    ],
    [
      {
        type: "2-listText-2",
        content: "토스 모바일앱 – UX/UI 개선"
      },
      {
        type: "2-listLink-2",
        link: "https://blog.rightbrain.co.kr/?p=15021"
      }
    ],
    [
      {
        type: "3-listText-3",
        content: "이마트몰 – UX/UI 개선"
      },
      {
        type: "3-listLink-3",
        link: "https://blog.rightbrain.co.kr/?p=14899"
      }
    ],
    [
      {
        type: "4-listText-4",
        content: "배달의민족 – UX/UI 개선"
      },
      {
        type: "4-listLink-4",
        link: "https://blog.rightbrain.co.kr/?p=14886"
      }
    ]
  ]);

  const dispatch = useDispatch();
  const dialogInputData = useStoreData().dialogInputData;

  //상단 dialog
  const contDialogOpen = (type: any, wrapString: any) => {
    const inputIdentifier = `thumbWrap03-${wrapString}`;
    const inputvalue = dialogInputData[inputIdentifier];
    setDialogInfo({ open: true, type: type, inputIdentifier: inputIdentifier });
    dispatch(setDialogInput(inputIdentifier, inputvalue ? inputvalue : ""));
  };

  const contDialogClose = () => {
    setDialogInfo({ ...dialogInfo, open: false });
  };

  //리스트 dialog
  const contListDialogOpen = (type: any, wrapString: any) => {
    const inputIdentifier = `listTextWrap-${wrapString}`;
    const inputvalue = dialogInputData[inputIdentifier];
    setlistdialogInfo({
      open: true,
      type: type,
      inputIdentifier: inputIdentifier
    });
    dispatch(setDialogInput(inputIdentifier, inputvalue ? inputvalue : ""));
  };

  const contListDialogClose = () => {
    setlistdialogInfo({ ...listdialogInfo, open: false });
  };

  const renderDialogContent = () => {
    if (dialogInfo.type === null) {
      return "listText";
    }
  };

  // 리스트 항목 추가
  const addThumbWrap = () => {
    if (listItems.length < 5) {
      const newItem = [
        {
          type: `${listItems.length + 1}-listText-${listItems.length + 1}`,
          content: "프로젝트명 입력"
        },
        {
          type: `${listItems.length + 1}-listLink-${listItems.length + 1}`,
          link: ""
        }
      ];
      setListItems([...listItems, newItem]);

      dispatch(setThumbWrapsCountPart3(listItems.length + 1));
    }
  };

  //리스트 항목 삭제
  const removeThumbWrap = () => {
    if (listItems.length > 2) {
      const updatedListItems = listItems.slice(0, -1);
      setListItems(updatedListItems);

      dispatch(setThumbWrapsCountPart3(updatedListItems.length));

      // 삭제할 thumbWrap의 inputIdentifier 찾기
      const removedWrapNumber = listItems.length;
      const removedInputIdentifiers = [
        `listTextWrap-${removedWrapNumber}-listText-${removedWrapNumber}`,
        `listTextWrap-${removedWrapNumber}-listLink-${removedWrapNumber}`
      ];

      removedInputIdentifiers.forEach((inputIdentifier) => {
        dispatch(removeDialogInput(inputIdentifier));
      });
    }
  };

  //상단 이미지 + 텍스트
  const renderThumbWraps = () => {
    return (
      <>
        <div className={cx(styles.thumbBox, styles.thumb_img)}>
          <div className={styles.detailArea}>
            <div className={styles.img}>
              <img
                src={
                  dialogInputData[dialogInfo.inputIdentifier] &&
                  "thumbWrap03-1-img-1" === dialogInfo.inputIdentifier
                    ? dialogInputData["thumbWrap03-1-img-1"]
                    : "https://lh3.googleusercontent.com/pw/ADCreHf53NO9r7dYxvF8yG7wf24zi3IS3s9VOlE5VJ5eRl3myxzD7YBpiNQXp9wlgscWCKOKX3wpY6hHwKmmTeIZOhdw6OYphzhXt-Qomc1azoHaLTmTelLZ5ihWqjwsOp2xt-m37xrjio_K47n8cRCY9-eX=w660-h275-s-no-gm?authuser=1"
                }
                width="660"
                height="275"
                alt=""
              />
              <div
                className={styles.imglayer}
                onClick={() => contDialogOpen("img", "1-img-1")}>
                <div className={styles.iconBox}>
                  <ModeEdit />
                </div>
              </div>
            </div>
          </div>
          <InputDialog
            open={
              dialogInfo.open &&
              dialogInfo.inputIdentifier == "thumbWrap03-1-img-1"
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={"thumbWrap03-1-img-1"}>
            {renderDialogContent()}
          </InputDialog>
        </div>
        <div className={cx(styles.thumbBox, styles.thumb_text)}>
          <div className={styles.detailArea}>
            <div className={styles.detailtitle}>
              {dialogInputData[dialogInfo.inputIdentifier] &&
              "thumbWrap03-1-text-1" === dialogInfo.inputIdentifier
                ? dialogInputData[dialogInfo.inputIdentifier]
                : dialogInputData["thumbWrap03-1-text-1"]
                  ? dialogInputData["thumbWrap03-1-text-1"]
                  : "라이트브레인 UX 아카데미 오픈 프로젝트 공개"}
            </div>
            <div
              className={styles.imglayer}
              onClick={() => contDialogOpen("text", "1-text-1")}>
              <div className={styles.iconBox}>
                <ModeEdit />
              </div>
            </div>
          </div>
          <InputDialog
            open={
              dialogInfo.open &&
              dialogInfo.inputIdentifier == "thumbWrap03-1-text-1"
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={"thumbWrap03-1-text-1"}>
            {renderDialogContent()}
          </InputDialog>
        </div>
        <div className={cx(styles.thumbBox, styles.thumb_subtext)}>
          <div className={styles.detailArea}>
            <div className={styles.detailtitle}>
              {dialogInputData[dialogInfo.inputIdentifier] &&
              "thumbWrap03-1-subtext-1" === dialogInfo.inputIdentifier
                ? dialogInputData[dialogInfo.inputIdentifier]
                : dialogInputData["thumbWrap03-1-subtext-1"]
                  ? dialogInputData["thumbWrap03-1-subtext-1"]
                  : "UX Story"}
            </div>
            <div
              className={styles.imglayer}
              onClick={() => contDialogOpen("subtext", `1-subtext-1`)}>
              <div className={styles.iconBox}>
                <ModeEdit />
              </div>
            </div>
          </div>
          <InputDialog
            open={
              dialogInfo.open &&
              dialogInfo.inputIdentifier == "thumbWrap03-1-subtext-1"
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={"thumbWrap03-1-subtext-1"}>
            {renderDialogContent()}
          </InputDialog>
        </div>
        <div className={cx(styles.thumbBox, styles.thumb_detailtext)}>
          <div className={styles.detailArea}>
            <div className={styles.detailtitle}>
              {dialogInputData[dialogInfo.inputIdentifier] &&
              `thumbWrap03-1-detailtext-1` === dialogInfo.inputIdentifier
                ? dialogInputData[dialogInfo.inputIdentifier]
                : dialogInputData[`thumbWrap03-1-detailtext-1`]
                  ? dialogInputData[`thumbWrap03-1-detailtext-1`]
                  : " 추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 '개인화'입니다. 개인화는 설정 등의 맞춤화와는 달리 데이터에 기반하여 사용자에게 알맞은 정보나 기능을 전달하는 것입니다. 이번글에서는 최근 고도화된 개인화의 AI활용에 대해서 이야기해 봅니다.추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 ‘개인화’입니다."}
            </div>
            <div
              className={styles.imglayer}
              onClick={() => contDialogOpen("detailtext", `1-detailtext-1`)}>
              <div className={styles.iconBox}>
                <ModeEdit />
              </div>
            </div>
          </div>
          <InputDialog
            open={
              dialogInfo.open &&
              dialogInfo.inputIdentifier == "thumbWrap03-1-detailtext-1"
            }
            onClose={contDialogClose}
            title={`입력하기`}
            inputtype={dialogInfo.type}
            inputIdentifier={"thumbWrap03-1-detailtext-1"}>
            {renderDialogContent()}
          </InputDialog>
        </div>
      </>
    );
  };

  //하단 리스트
  const renderListWraps = () => {
    return (
      <div className={styles.ListBox}>
        <ul>
          {listItems.map((item, index) => (
            <React.Fragment key={`list-item-${index}`}>
              <li>
                <div className={styles.left}>
                  <p className={styles.lititle}>
                    {dialogInputData[listdialogInfo.inputIdentifier] &&
                    `listTextWrap-${index + 1}-listText-${index + 1}` ===
                      dialogInfo.inputIdentifier
                      ? dialogInputData[listdialogInfo.inputIdentifier]
                      : dialogInputData[
                            `listTextWrap-${index + 1}-listText-${index + 1}`
                          ]
                        ? dialogInputData[
                            `listTextWrap-${index + 1}-listText-${index + 1}`
                          ]
                        : item[0].content}
                  </p>
                  <div
                    className={styles.imglayer}
                    onClick={() =>
                      contListDialogOpen(
                        "listText",
                        `${index + 1}-listText-${index + 1}`
                      )
                    }>
                    <div className={styles.iconBox}>
                      <ModeEdit />
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <a href={item[1].link} target="_blank">
                    <img
                      src="https://lh3.googleusercontent.com/pw/ADCreHdXV0BXbMelcz8VPxR7hroFC-hwctmbRi3oS52lgwaMps4dBK24FKmJbTutRTMIMYsG0ghj_vxil1kaoqUSzeeN8yJaa4IpnM1df-OVK-iqY0Te-qRhMKbYhuzjLGkkwzAcpb0JFISLyLc_9LMAfffn=w82-h34-s-no-gm?authuser=1"
                      width="82"
                      height="34"
                      alt=""
                    />
                  </a>
                  <div
                    className={styles.imglayer}
                    onClick={() =>
                      contListDialogOpen(
                        "listLink",
                        `${index + 1}-listLink-${index + 1}`
                      )
                    }>
                    <div className={styles.iconBox}>
                      <ModeEdit />
                    </div>
                  </div>
                </div>
              </li>

              {/* 각 항목에 대한 Dialog 렌더링 */}
              <InputDialog
                key={`dialog-listText-${index}`}
                open={
                  listdialogInfo.open &&
                  listdialogInfo.inputIdentifier ===
                    `listTextWrap-${index + 1}-listText-${index + 1}`
                }
                onClose={contListDialogClose}
                title={`입력하기`}
                inputtype="listText"
                inputIdentifier={`listTextWrap-${index + 1}-listText-${
                  index + 1
                }`}>
                {renderDialogContent()}
              </InputDialog>
              <InputDialog
                key={`dialog-listLink-${index}`}
                open={
                  listdialogInfo.open &&
                  listdialogInfo.inputIdentifier ===
                    `listTextWrap-${index + 1}-listLink-${index + 1}`
                }
                onClose={contListDialogClose}
                title={`입력하기`}
                inputtype="listLink"
                inputIdentifier={`listTextWrap-${index + 1}-listLink-${
                  index + 1
                }`}>
                {renderDialogContent()}
              </InputDialog>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className={cx(styles.thumb03_Wrap, styles.cate_Wrap)}>
        <div className={styles.thumbW01_title}>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHdoM4WTYPiTIeP08_93-VBF42COJ7zpVTjgaAS4Ilg6ZrbxrxJeGiuNydNuTxDrYW_aDrbMJtdHkiaUshTc6XdFnKlibCVpE8BETEjU2jZh3vp-H2HNdg2X3W_PjSb8z21imnr4rv4euW7zHJUU6hkT=w660-h125-s-no-gm?authuser=1"
            width="660"
            height="125"
            alt=""
          />
        </div>
        <div className={cx(styles.thumbWrap, "thumbWrap03")}>
          {renderThumbWraps()}
          {renderListWraps()}
        </div>
        {/* 버튼 영역 */}
        <ButtonGroup
          orientation="vertical"
          fullWidth
          variant="outlined"
          className={styles.controlBtn}>
          {listItems.length < 5 ? (
            <Button onClick={addThumbWrap}>
              <Add />
              추가
            </Button>
          ) : (
            ""
          )}

          {listItems.length > 2 ? (
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

export default ContentUX03;
