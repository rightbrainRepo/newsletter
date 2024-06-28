import React from "react";
import { Modal } from "@mui/material";
import styles from "@styles/pages/Guide.module.scss";

interface InputModalProps {
  open: boolean;
  onClose: () => void;
}

const Guide: React.FC<InputModalProps> = ({ open, onClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className={styles.modalWrap}>
          <ul>
            <li>
              <div className={styles.imglayer}></div>
              클릭 하면 입력창 제공
            </li>
            <li>
              <div className={styles.preBtn}>PREVIEW</div>
              <p>입력된 값을 html 형식으로 미리보기 제공</p>
            </li>
            <li>
              <div className={styles.exBtn}>EXPORT</div>
              <p>html 형식을 로컬 컴퓨터에 다운로드 제공</p>
            </li>
            <li className={styles.inlist}>
              이미지는 구글 포토에 업로드 해야하며 방식은 다음과 같음.
              <div>
                폴성 생성 및 공유하기 : 구글 포토 로그인 &#62; 상단 링크 아이콘
                클릭 &#62; 링크 공유 체크
              </div>
              <div>
                이미지 파일 업로드 : 구글 포토 로그인 &#62; 이미지 오른쪽 클릭
                &#62; 새탭에서 이미지 열기 &#62; 주소창의 링크 복사 &#62; 해당
                입력창 붙여넣기
              </div>
              <div>이미지는 반드시 jpg, 입력창의 사이즈와 동일해야함</div>
            </li>
            <li>
              UX ACADEMY, RIGHTBRAIN INSIGHT 를 제외하고는 타이틀까지 수정가능,
              카테고리는 타이틀 이미지 +
              &#40;이미지+타이틀+서브타이틀+상세글+링크&#41; 로 구성
            </li>
            <li>
              타이틀 아래에 있는 글들은 이미지+타이틀+서브타이틀+상세글+링크
              되어있으며 최소 2개, 최대 5개까지 가능, 링크는 1개 또는 삭제 가능
            </li>
            <li>입력하지 않으면 기존 입력된 47호가 preview, export 보여짐</li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Guide;
