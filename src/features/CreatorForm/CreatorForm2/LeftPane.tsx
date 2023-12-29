import React, { useState } from "react";
import styles from "../../../pages/styles/CreatorForm2.module.scss";
import { NewLogo } from "@/components/svg/NewLogo";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
// import "react-international-phone/style.css";
import "react-phone-number-input/style.css";

const LeftPane = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.leftPaneWrapper}>
      <NewLogo />

      <div className={styles.form}>
        <div
          style={{
            border: "1px solid var(--gray-200, #EAECF0)",
            borderRadius: "0.25rem",
            width: "100%",
          }}
        >
          <div className={styles.profile}>
            <Image
              width={40}
              height={40}
              src="/Avatar.png"
              alt="proifle img"
              className={styles.avatar}
            />
            <div>
              <p
                style={{
                  color: "var(--gray-900, #101828)",
                  fontFamily: "Manrope",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "1.25rem" /* 142.857% */,
                }}
              >
                NSG
              </p>
              <p
                style={{
                  color: "var(--gray-500, #667085)",
                  fontFamily: "Manrope",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.25rem" /* 142.857% */,
                }}
              >
                Fintech
              </p>
            </div>
          </div>

          <div className={styles.estimateContianer}>
            <div className={styles.estimateTitle}>Estimated Earning</div>
            <p>₹25,000-₹30,000</p>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="John Doe" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="name">Email address</label>
          <input id="name" type="text" placeholder="john@suprrlink.com" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="name">Phone number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={() => setValue(value)}
            style={{
              width: "100%",
            }}
          />
        </div>

        <div className={styles.formSubmit}>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
