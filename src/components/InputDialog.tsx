import React, { ReactNode, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDialogInput } from "@store/reducer/thumbInputReducer";
import { useStoreData } from "@store/storeSelectors";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Alert,
  ButtonGroup,
  Button,
  TextField,
  IconButton
} from "@mui/material";
import { Close } from "@mui/icons-material";
import styles from "@styles/component/InputDialog.module.scss";

interface InputDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  inputtype: string | null;
  inputIdentifier: string | null;
}

//content input dialog
const InputDialog: React.FC<InputDialogProps> = ({
  open,
  onClose,
  title,
  inputtype,
  inputIdentifier
}) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const [editModeIdentifier, setEditModeIdentifier] = useState<string | null>(
    null
  );
  const dialogInputData = useStoreData().dialogInputData;

  //dialog open 시 textfield값 inputIdentifier 해당하는 값으로 변경
  useEffect(() => {
    if (inputIdentifier === dialogInputData.inputIdentifier) {
      setInputValue(dialogInputData[inputIdentifier]);
    }
  }, [dialogInputData, inputIdentifier]);

  //type 설정
  const getLabel = (type: String | null) => {
    switch (type) {
      case "img":
        return "이미지 경로";
      case "text":
        return "텍스트 입력";
      case "link":
        return "링크 입력";
      default:
        return "입력";
    }
  };

  const contInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (inputtype && inputIdentifier) {
      setInputValue(newValue);
      //  dispatch(setDialogInput(inputIdentifier, inputValue));
    }
  };

  //확인
  const contConfirm = () => {
    if (inputtype && inputIdentifier) {
      dispatch(setDialogInput(inputIdentifier, inputValue));
      setEditModeIdentifier(inputIdentifier);
    } else {
      setEditModeIdentifier(null);
    }
    onClose();
  };

  //취소
  const inputDialogClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={inputDialogClose}
      maxWidth={"sm"}
      fullWidth
      className={styles.InputDialogWrap}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton onClick={inputDialogClose} className={styles.closeBtn}>
        <Close />
      </IconButton>
      {inputtype == "img" ? (
        <>
          <Alert severity="error" className={styles.alert}>
            <p>이미지 확인 사항</p>
            <ul className={styles.list}>
              <li>
                이미지 크기 : (660 X 275)<span>(*필수)</span>
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
        </>
      ) : (
        ""
      )}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={getLabel(inputtype)}
          type="text"
          fullWidth
          variant="standard"
          className={styles.input}
          value={inputValue}
          onChange={contInputChange}
        />
      </DialogContent>
      <ButtonGroup className={styles.contBtn}>
        <Button variant="outlined" onClick={inputDialogClose}>
          취소
        </Button>
        {editModeIdentifier === inputIdentifier && (
          <Button variant="contained" onClick={contConfirm}>
            수정
          </Button>
        )}
        {editModeIdentifier !== inputIdentifier && (
          <Button variant="contained" onClick={contConfirm}>
            확인
          </Button>
        )}
      </ButtonGroup>
    </Dialog>
  );
};

export default InputDialog;
