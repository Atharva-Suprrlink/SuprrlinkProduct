import React from "react";
import styles from "../../pages/styles/CreatorForm2.module.scss";
import LeftPane from "./CreatorForm2/LeftPane";
import Image from "next/image";

const CreatorForm2 = () => {
  return (
    <div className={styles.root}>
      <LeftPane />
      <div style={{
        padding:'3rem',
        width: '65%',
        height: 'auto',
        display:'flex',
        alignItems: 'center',
        // justifyContent: 'center'
      }}>
        <Image
        height={800}
        width={800}
        src='/Form2.png'
        alt="rightpane"
        />
      </div>
    </div>
  );
};

export default CreatorForm2;
