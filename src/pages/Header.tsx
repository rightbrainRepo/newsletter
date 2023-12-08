import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useStoreData } from "@store/storeSelectors";
import { clearImagePath, setImagePath } from "@store/reducer/HeaderReducer";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  ButtonGroup,
  Button,
  TextField,
  Alert,
  IconButton
} from "@mui/material";
import { ModeEdit, Close } from "@mui/icons-material";
import styles from "@styles/pages/Header.module.scss";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [localImagePath, setLocalImagePath] = useState("");
  const dispatch = useDispatch();
  const globalImagePath = useStoreData().imagePath;

  //input 값 가져오기
  const handleImagePathChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setLocalImagePath(newValue);

    if (newValue) {
      dispatch(setImagePath(newValue));
    } else {
      dispatch(clearImagePath());
    }
  };

  //입력하기 팝업 오픈
  const headerOpen = () => {
    setOpen(true);
    if (globalImagePath) {
      setLocalImagePath(globalImagePath);
      setIsEditMode(true);
    } else {
      setLocalImagePath("");
      setIsEditMode(false);
    }
  };

  //취소
  const headerClose = () => {
    setOpen(false);
    // if (!localImagePath) {
    //   setLocalImagePath("");
    //   dispatch(clearImagePath());
    // }
  };

  //확인
  const handleConfirm = () => {
    dispatch(setImagePath(localImagePath));
    setOpen(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.toplist}>
          <div className={styles.left}>
            <a href="https://www.rightbrain.co.kr" target="_blank">
              <img
                src="https://lh3.googleusercontent.com/pw/ADCreHfBTspu1HOWs-VnKmuYfnmDMq58faVzxMt9IF0ixeRypjq0VV7ugDoTrIdGPN4P8vTqCwBK0GQ4t35mNESOlTguF0hfkYz0UZSDB5fY_IL6485cb5VAlRk31q1zE5KGVzDwSdeDbh2gYULWF-PzjqM=w95-h25-s-no-gm?authuser=2"
                width="95"
                height="25"
                alt=""
              />
            </a>
            <a href="mailto:support@rightbrain.co.kr" target="_blank">
              <img
                src="https://lh3.googleusercontent.com/pw/ADCreHfD1-r9-8B2wD5Aei_bI0Q-ycX_ypCdGrMSdcREyduRtP4YSbxgUIYTz8HfRyTrGYx4l5AfEgArPfXGKgqPNO2625i1j9kpYpfdjNrNtZLK6772AtK3E_GFttmylCdBcTwMQdKOvWFoI-sIsI4E8GQ=w76-h25-s-no-gm?authuser=2"
                width="76"
                height="25"
                alt=""
              />
            </a>
          </div>
          <a href="https://www.rightbrain.co.kr" target="_blank">
            <img
              src="https://lh3.googleusercontent.com/pw/ADCreHfdqjWoBaBBUCd9NPlX5wwXEg35vrp8bZU2BWpkWBUtU8TIdlWGj5q4TbL6VbsuTmq0v2mOvJEvupMwkfARH4o9njAQ0IV61kXeCHEzxaA6HwEqmA07ajuLU8lfolmP2eVrRGor3OCky5MDexWRZ9o=w95-h25-s-no-gm?authuser=2"
              width="96"
              height="25"
              alt=""
            />
          </a>
        </div>
        <div className={styles.logo}>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHc4wcwcjN7Wsfg80vo0fkXRmbwcrXd1Berg2ovmm4EDF7ggps8hn6CrFFRSzELWlg1VhrWTIty6YxvsPvdzxWaJSbrYw4PwuNA7uVItvExhoPisFvax6mkjF_2Rz7fGzieb3FWhF8Mv7tmO2KiMa30=w600-h222-s-no-gm?authuser=2"
            width="600"
            height="222"
            alt=""
          />
          <div className={styles.dynamic_ho}>
            {localImagePath ? (
              <img src={localImagePath} width="60" height="222" alt="" />
            ) : (
              <img
                src="https://lh3.googleusercontent.com/pw/ADCreHdfPOOgp4QxmWlun607qHn0XKMSHjcLmcbRLmCVgUV5R7XTcx60jK8fzhWXcm3_9Q-NzRsRwyshBOOJ8KWu6Cjh4dca3kMgy8L55PihjhmkQbNc--8NOU1CKQ-As-spkeK09-iKaRCKhdHNTppKeuwC=w59-h222-s-no-gm?authuser=1"
                width="60"
                height="222"
                alt=""
              />
            )}

            <div className={styles.iconBox} onClick={headerOpen}>
              <ModeEdit />
            </div>
          </div>
        </div>
      </div>

      {/* dialog */}
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={"sm"}
        onClose={headerClose}
        className={styles.headerDialog}>
        <DialogTitle>이미지 경로 입력하기</DialogTitle>
        <IconButton onClick={headerClose} className={styles.closeBtn}>
          <Close />
        </IconButton>
        <DialogContent>
          <div className={styles.alert}>
            <Alert severity="error">
              <p>이미지 확인 사항</p>
              <ul className={styles.list}>
                <li>
                  이미지 크기 : (60 X 222)<span>(*필수)</span>
                </li>
                <li>
                  확장자 : JPG<span>(*필수)</span>
                </li>
                <li>
                  사이즈 맞지 않는 경우, 화면이 틀어질 수 있으며 확장자가 맞지
                  않는 경우, 이메일 용량이 커져 스팸메일로 분류될 수 있습니다.
                </li>
              </ul>
            </Alert>
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="이미지 경로"
            type="text"
            fullWidth
            variant="standard"
            className={styles.input}
            value={localImagePath}
            onChange={handleImagePathChange}
          />
        </DialogContent>
        <ButtonGroup className={styles.headerBtn}>
          <Button variant="outlined" onClick={headerClose}>
            취소
          </Button>
          {isEditMode ? (
            <Button variant="contained" onClick={handleConfirm}>
              수정
            </Button>
          ) : (
            <Button variant="contained" onClick={handleConfirm}>
              확인
            </Button>
          )}
        </ButtonGroup>
      </Dialog>
    </>
  );
};

export default Header;
