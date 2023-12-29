import React from "react";
import styles from "../../../pages/styles/Brandonboarding.module.scss";
import { RightPaneSVG } from "@/components/svg/RightPaneSVG";

const RightPane = () => {
  return (
    <div className={styles.overlay1}>
      <RightPaneSVG />
    </div>
  );
};

export default RightPane;
