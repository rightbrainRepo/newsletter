import { useState } from "react";
import { Button } from "@mui/material";
import { useStoreData } from "@store/storeSelectors";
import Header from "@pages/Header";
import Content from "@pages/Content";
import Footer from "@pages/Footer";
import Guide from "@pages/Guide";
import getExportHtml from "./ExportHtmlCode";
import styles from "@styles/EditHtmlCode.module.scss";

const EditHtmlCode = () => {
  const { imagePath } = useStoreData();
  const { dialogInputData } = useStoreData();
  const { thumbWrapsCountPart1 } = useStoreData();
  const { thumbWrapsCountPart2 } = useStoreData();
  const { thumbWrapsCountPart3 } = useStoreData();
  const { thumbWrapsCountPart4 } = useStoreData();
  const { thumbWrapsCountPartAdd } = useStoreData();
  const { thumbWrapsAddCount } = useStoreData();
  const { linkVisibility } = useStoreData();

  const [guideOpen, setGuideOpen] = useState(false);

  const GuideClick = () => {
    if (!guideOpen) {
      setGuideOpen(true);
    } else {
      setGuideOpen(false);
    }
  };

  const EmailPreview = () => {
    const previewHtml = getExportHtml(
      imagePath,
      dialogInputData,
      thumbWrapsCountPart1,
      thumbWrapsCountPart2,
      thumbWrapsCountPart3,
      thumbWrapsCountPart4,
      thumbWrapsCountPartAdd,
      thumbWrapsAddCount,
      linkVisibility
    );
    const previewWindow = window.open("", "_blank");
    if (previewWindow) {
      previewWindow.document.write(previewHtml.props.children);
      previewWindow.document.close();
    }
  };

  const EmailExport = () => {
    const htmlContent = getExportHtml(
      imagePath,
      dialogInputData,
      thumbWrapsCountPart1,
      thumbWrapsCountPart2,
      thumbWrapsCountPart3,
      thumbWrapsCountPart4,
      thumbWrapsCountPartAdd,
      thumbWrapsAddCount,
      linkVisibility
    );
    //뉴스레터 html 다운로드
    const blob = new Blob([htmlContent.props.children], { type: "text/html" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "newsletter.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.topBtn}>
          <Button color="error" variant="outlined" onClick={GuideClick}>
            Guide
          </Button>
          <div>
            <Button color="error" variant="outlined" onClick={EmailPreview}>
              Preview
            </Button>
            <Button color="error" variant="contained" onClick={EmailExport}>
              Export
            </Button>
          </div>
        </div>
        <div className={styles.inner}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
      {guideOpen ? <Guide /> : ""}
    </>
  );
};

export default EditHtmlCode;
