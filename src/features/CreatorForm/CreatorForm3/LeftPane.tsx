import React from "react";
import styles from "../../../pages/styles/CreatorForm3.module.scss";
import { NewLogo } from "@/components/svg/NewLogo";
import Image from "next/image";

const LeftPane = () => {
  return (
    <div className={styles.leftPaneWrapper}>
      <NewLogo />

      <div className={styles.notification}>
        <h1>Thank you for reaching to us</h1>
        <p>We’ll reach out to you in 48 hours</p>
      </div>

      <div className={styles.caseStudy}>
        <div
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <Image
            width={800}
            height={480}
            src="/CaseStudy.png"
            alt="case study"
            style={{ borderRadius: "0.75rem" }}
          />
        </div>

        <div className={styles.caseStudyData}>
          <h1>CASE STUDY</h1>

          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <h1
              style={{
                color: "var(--gray-900, #101828)",
                fontFamily: "Manrope",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: "2rem" /* 133.333% */,
              }}
            >
              Earning with Suprrlink
            </h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p>Learn more about how Ishna started earning more with Surrplink</p>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
