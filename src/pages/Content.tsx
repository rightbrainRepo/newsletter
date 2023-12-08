import ContentUX01 from "@components/ContentUX01";
import ContentUX02 from "@src/components/ContentUX02";
import ContentUX03 from "@src/components/ContentUX03";
import ContentUX04 from "@src/components/ContentUX04";
import styles from "@styles/pages/Content.module.scss";

const Content = () => {
  return (
    <>
      <div className={styles.contentWrap}>
        <ContentUX01 />
        <ContentUX02 />
        <ContentUX03 />
        <ContentUX04 />
      </div>
    </>
  );
};

export default Content;
