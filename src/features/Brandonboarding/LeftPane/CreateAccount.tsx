'use client'
import React from "react";
import { NewLogo } from "@/components/svg/NewLogo";
import { Suprrheading } from "@/components/ui-kit/Suprrheading";
import { Suprrsubheading } from "@/components/ui-kit/Suprrsubheading";
import Link from "next/link";
import { FormControl } from "@chakra-ui/react";
import { Suprrinput } from "@/components/ui-kit/Suprrinput";
import { Button } from "@/components/ui-kit/Button";

import styles from "../../../pages/styles/Brandonboarding.module.scss";
import { useRouter } from "next/navigation";

const CreateAccount = () => {

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
          <Suprrheading>Create your account</Suprrheading>
          <div className={styles.createSubheading}>
            <Suprrsubheading>Already have an account? </Suprrsubheading>
            <Link
              href="#"
              style={{
                fontWeight: "400",
                color: "#1E63EC",
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "underline",
              }}
            >
              Sign In
            </Link>
          </div>

          <FormControl>
            <Suprrinput
              label="Full name"
              placeholder="John Doe"
              type="outline"
            />
            <Suprrinput
              label="Work email"
              placeholder="john@suprrlink.com"
              type="outline"
            />
            <Suprrinput
              label="Phone number"
              placeholder="e.g 1234567890"
              type="outline"
            />

            <div className={styles.loginSubmitbutton}>
                <Button
                    label="Save & continue"
                    labelColor="#FFFFF"
                    bgColor="#1E63EC"
                />
            </div>
            <div className={styles.loginSignupLink}>
						<span>
							<p>
								By continuing, you agree to our{" "}
								<a
									style={{ cursor: "pointer", textDecoration: "underline", fontWeight: 'bold' }}
									onClick={() => router.push("/brands/onboarding")}
								>
									terms & privacy policy
								</a>
							</p>
						</span>
					</div>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
