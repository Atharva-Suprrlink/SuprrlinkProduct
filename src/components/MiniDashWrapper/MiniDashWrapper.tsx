"use client";
import { ReactNode } from "react";
import styles from "./MiniDashBoard.module.css";
import { MiniLogo } from "../svg/MiniLogo";
import { ChartDonutFilled } from "../svg/ChartDonutFilled";
import { useRouter } from "next/navigation";
import { ChartDonut } from "../svg/ChartDonut";
import { CalendarCheckFilled } from "../svg/CalendarCheckFilled";
import { CalendarCheck } from "../svg/CalendarCheck";
import { Tooltip } from "@chakra-ui/react";
import { CheckSquareOffset } from "../svg/CheckSquareOffset";
import { Binoculars } from "../svg/Binoculars";
import { Sparkle } from "../svg/Sparkle";
import { User } from "../svg/User";
import { Wallet } from "../svg/Wallet";

export function MiniDashWrapper({
  children,
  active,
}: {
  children?: ReactNode;
  active: string;
}) {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPane}>
        <div className={styles.sectionOne}>
          <MiniLogo />
        </div>
        <div className={styles.sectionTwo}>
          <div
            className={
              active === "overview"
                ? styles.optionContainerActive
                : styles.optionContainer
            }
            onClick={() => router.push("/dashboard/overview")}
          >
            {active === "overview" ? <ChartDonutFilled /> : <ChartDonut />}
          </div>
          <div
            className={
              active === "campaignmanager"
                ? styles.optionContainerActive
                : styles.optionContainer
            }
            onClick={() => router.push("/dashboard/campaignmanager")}
          >
            {active === "campaignmanager" ? (
              <CalendarCheckFilled />
            ) : (
              <CalendarCheck />
            )}
          </div>
          <Tooltip label="Coming soon..." placement="right" hasArrow>
            <div
              className={
                active === "contentreview"
                  ? styles.optionContainerActive
                  : styles.optionContainer
              }
              style={{ cursor: "not-allowed" }}
            >
              <CheckSquareOffset />
            </div>
          </Tooltip>
          <Tooltip label="Coming soon..." placement="right" hasArrow>
            <div
              className={styles.optionContainer}
              style={{ cursor: "not-allowed" }}
            >
              <Binoculars />
            </div>
          </Tooltip>
          <Tooltip label="Coming soon..." placement="right" hasArrow>
            <div
              className={styles.optionContainer}
              style={{ cursor: "not-allowed" }}
            >
              <Sparkle />
            </div>
          </Tooltip>
        </div>
        <div className={styles.sectionThree}>
          <Tooltip label="Coming soon..." placement="right" hasArrow>
            <div
              className={styles.optionContainer}
              style={{ cursor: "not-allowed" }}
            >
              <Wallet />
            </div>
          </Tooltip>
          <Tooltip label="Coming soon..." placement="right" hasArrow>
            <div
              className={styles.optionContainer}
              style={{ cursor: "not-allowed" }}
            >
              <User />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
}
