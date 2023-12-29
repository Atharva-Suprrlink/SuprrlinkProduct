import styles from "../../pages/styles/CreatorForm1.module.scss";
import React from "react";
import LeftPane from "./CreatorForm1/LeftPane";
import Image from "next/image";

const CreatorForm1 = () => {
  return (
    <div className={styles.root}>
      <LeftPane />
      <div style={{
        padding:'3rem',
        width: '65%',
        height: 'auto',
        display:'flex',
        alignItems: 'center',
      }}>
        <Image
        height={804}
        width={688}
        src='/Form1.png'
        alt="rightpane"
        />
      </div>
    </div>
  );
};

export default CreatorForm1;
