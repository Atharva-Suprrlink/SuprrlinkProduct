import React from "react";
import styles from "../../../pages/styles/CreatorForm1.module.scss";
import { NewLogo } from "@/components/svg/NewLogo";
import { FormControl } from "@chakra-ui/react";
import { Suprrinput } from "@/components/ui-kit/Suprrinput";
import { Button } from "@/components/ui-kit/Button";
import { useRouter } from "next/router";

const LeftPane = () => {
  const router = useRouter();

  return (
    <div className={styles.leftPaneWrapper}>
      <NewLogo />
      <div className={styles.form}>
        <div className={styles.formTitleContainer}>
          <p className={styles.formTitle}>Know your Earnings</p>
          <p className={styles.formSubTitle}>
            Learn about your estimated earnings using Suprrlink.
          </p>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="link">Instagram Link</label>
          <input
            id="link"
            type="text"
            placeholder="https://www.instagram.com/your_user_name/"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="industry">Industry</label>
          <select name="industry" id="industry">
            <option value="Fashion">Fashion</option>
            <option value="Finance">Finance</option>
            <option value="Gaming">Gaming</option>
          </select>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="stories">Number of stories you put per week</label>
          <input
            id="stories"
            type="text"
            placeholder="Eg  2  [You can put maximum 6  stories a week"
          />
        </div>

        <div className={styles.formSubmit}>
          <button>Calculate earnings</button>
          <span>
            <p>
              By continuing, you agree to our{" "}
              <a
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                onClick={() => router.push("/brands/onboarding")}
              >
                terms & privacy policy
              </a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
