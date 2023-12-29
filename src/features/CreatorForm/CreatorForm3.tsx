import React from "react";
import styles from "../../pages/styles/CreatorForm3.module.scss";
import Image from "next/image";
import LeftPane from "./CreatorForm3/LeftPane";

const CreatorForm3 = () => {
  return (
    <div className={styles.root}>
      <LeftPane />
      <div
        style={{
          padding: "3rem",
          width: "65%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Image height={800} width={800} src="/Form1.png" alt="rightpane" />
      </div>
    </div>
  );
};

export default CreatorForm3;
