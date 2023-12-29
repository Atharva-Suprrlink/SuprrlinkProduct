import React from "react";
import styles from "../../pages/styles/Brandonboarding.module.scss";
import CreateAccount from "./LeftPane/CreateAccount";
import RightPane from "./RightPane/RightPane";
import SecureAccount from "./LeftPane/SecureAccount";
const Brandonboarding = () => {
  return (
    <div className={styles.onboardingPageWrapper}>
      <SecureAccount />
      <RightPane />
    </div>
  );
};

export default Brandonboarding;
