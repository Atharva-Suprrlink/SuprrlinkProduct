// "use client";
import { MiniDashWrapper } from "@/components/MiniDashWrapper";
import styles from "./Overview.module.scss";
import { ChevronRight } from "@/components/svg/ChevronRight";
import { Button } from "@/components/ui-kit/Button";
import { useState } from "react";
import { CaretRight } from "@/components/svg/CaretRight";
import { GreenCaretRight } from "@/components/svg/GreenCaretRight";
import Image from "next/image";
import { AlertCircle } from "@/components/svg/AlertCircle";

const Overview = () => {
  const [verified, setVerified] = useState<boolean>(false);

  return (
    <MiniDashWrapper active="overview">
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.sectionOne}>
            <span>Home</span>
            <ChevronRight />
            <span>Overview</span>
          </div>

          {!verified && <div className={styles.specialSection}>
            <div className={styles.outline}></div>
            <div className={styles.specialSectionContent}>
              <div>
                <AlertCircle />
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.contentContainerTop}>
                  <p
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    Verify your email address
                  </p>
                  <p
                    style={{
                      lineHeight: "1.5rem",
                    }}
                  >
                    To create a campaign, verification of your email
                    sahil@fourbugs.com is required. Verify now by sending a
                    magic link to your email.
                  </p>
                </div>

                <div className={styles.specialSectionButtons}>
                  <Button label="Verify now" bgColor="#DF7B00" />
                  <Button
                    label="Change email"
                    bgColor="#FCECDA"
                    labelColor="#BA5D00"
                  />
                </div>
              </div>
            </div>
          </div>}

          <div className={styles.sectionTwo}>
            <div className={styles.titleContainer}>
              <div>Overview</div>
              <p>
                Look at the most important statistics from your campaigns, and
                more
              </p>
            </div>

            <div>
              <Button label="Create campaign" showIcon />
            </div>
          </div>

          <div className={styles.sectionThree}>
            <div className={styles.stepsContainer}>
              <div className={styles.box1}>
                <div className={styles.imp}>IMPORTANT</div>
                <div className={styles.titleContainer}>
                  <div>Getting started</div>
                  <p>Complete these tasks to create your first campaign</p>
                </div>
              </div>

              <div className={styles.stepBox}>
                <div className={styles.stepBoxContent}>
                  <p>Verify your email address</p>
                  {!verified ? (
                    <div className={styles.boxButton}>
                      <span style={{ color: "#0172CB" }}>
                        Verify your email
                      </span>
                      <CaretRight />
                    </div>
                  ) : (
                    <div
                      className={styles.boxButton}
                      style={{ cursor: "auto" }}
                    >
                      <span style={{ color: "#258E56" }}>Verified</span>
                      <GreenCaretRight />
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.stepBox}>
                <div className={styles.stepBoxContent}>
                  <p>Complete your profile</p>
                  <div className={styles.boxButton}>
                    <span style={{ color: "#0172CB" }}>Fill details</span>
                    <CaretRight />
                  </div>
                </div>
              </div>

              <div className={styles.stepBox}>
                <div className={styles.stepBoxContent}>
                  <p>Create your first campaign</p>
                  <div className={styles.boxButton}>
                    <span style={{ color: "#0172CB" }}>Create a campaign</span>
                    <CaretRight />
                  </div>
                </div>
              </div>

              <div className={styles.banner}>
                <div className={styles.bannerContent}>
                  <div className={styles.bannerTitle}>
                    Suprrlink has a plan that matches your requirements
                  </div>
                  <div className={styles.bannerSubTitle}>
                    Suprrlink is a complete influencer marketing solution that
                    has a variety of plans to fit your requirements of any
                    scale.
                  </div>
                  <div className={styles.bannerButton}>
                    <Button label="Upgrade to premium" />
                    <Button
                      label="See all plans"
                      bgColor="#DEF0FC"
                      labelColor="#005AA3"
                    />
                  </div>
                </div>

                <Image
                  src="/BannerImage.png"
                  width={153}
                  height={192}
                  alt="bannerimage"
                  style={{ position: "relative" }}
                />
              </div>
            </div>

            <div className={styles.userDetails}>
              {/* <div className={styles.userContent}> */}
              <div className={styles.profileContainer}>
                <Image src="/Google.png" width={72} height={72} alt="Google" />
                <div style={{ width: "100%" }}>
                  <div className={styles.stepBoxContent}>
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "1.25rem",
                      }}
                    >
                      Sahil Godara
                    </p>
                    <div className={styles.boxButton}>
                      <span style={{ color: "#0172CB" }}>Edit profile</span>
                      <CaretRight />
                    </div>
                  </div>
                  <div>Google India Pvt. Ltd.</div>
                </div>
              </div>

              <div className={styles.stepBox}>
                <div className={styles.stepBoxContent}>
                  <p>Add team members</p>
                  <div className={styles.boxButton}>
                    <span style={{ color: "#0172CB" }}>Add members</span>
                    <CaretRight />
                  </div>
                </div>
              </div>

              <div className={styles.stepBox}>
                <div className={styles.stepBoxContent}>
                  <p>Add funds to your wallet</p>
                  <div className={styles.boxButton}>
                    <span style={{ color: "#0172CB" }}>Add funds</span>
                    <CaretRight />
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </MiniDashWrapper>
  );
};

export default Overview;
