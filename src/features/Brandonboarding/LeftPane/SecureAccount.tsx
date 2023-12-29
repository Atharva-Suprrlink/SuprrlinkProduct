"use client";
import React from "react";
import { NewLogo } from "@/components/svg/NewLogo";
import { Suprrheading } from "@/components/ui-kit/Suprrheading";
import { Suprrsubheading } from "@/components/ui-kit/Suprrsubheading";
import { FormControl } from "@chakra-ui/react";
import { Suprrinput } from "@/components/ui-kit/Suprrinput";
import { Button } from "@/components/ui-kit/Button";

import styles from "../../../pages/styles/Brandonboarding.module.scss";
import { useRouter } from "next/navigation";

const SecureAccount = () => {
  const router = useRouter();

  return (
    <div className={styles.leftPaneWrapper}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
        }}
      >
        <NewLogo />
        <div className={styles.leftPaneWrapperLoginFormWrapper}>
          <Suprrheading>Secure your account</Suprrheading>
          <div className={styles.createSubheading}>
            <Suprrsubheading>Create a unique & strong password</Suprrsubheading>
          </div>

          <FormControl>
            <Suprrinput
              label="Create new password"
              placeholder="Enter here"
              type="password"
            />
            <Suprrinput
              label="Retype your password"
              placeholder="Enter here"
              type="password"
            />

            <div className={styles.loginSubmitbutton}>
              <Button
                label="Create account"
                labelColor="#FFFFF"
                bgColor="#1E63EC"
              />
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SecureAccount;
