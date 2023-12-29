'use client'
import { Tooltip } from "@chakra-ui/react"
import { ReactNode, useState } from "react"

import { BinocularsOutline } from "../svg/DashboardLeftPane/BinocularsOutline"
import { CalendarCheckOutline } from "../svg/DashboardLeftPane/CalendarCheckOutline"
import { CalendarCheckOutlineFilled } from "../svg/DashboardLeftPane/CalendarCheckOutlineFilled"
import { ChartDonutOutline } from "../svg/DashboardLeftPane/ChartDonutOutline"
import { ChartDonutOutlineFilled } from "../svg/DashboardLeftPane/ChartDonutOutlineFilled"
import { CheckSquareOffsetOutline } from "../svg/DashboardLeftPane/CheckSquareOffsetOutline"
import { DoorOpenOutline } from "../svg/DashboardLeftPane/DoorOpenOutline"
import { HandWavingOutline } from "../svg/DashboardLeftPane/HandWavingOutline"
import { HandWavingOutlineFilled } from "../svg/DashboardLeftPane/HandWavingOutlineFilled"
import { InfoOutline } from "../svg/DashboardLeftPane/InfoOutline"
import { SketchLogoOutline } from "../svg/DashboardLeftPane/SketchLogoOutline"
import { SparkleOutline } from "../svg/DashboardLeftPane/SparkleOutline"
import { UserOutline } from "../svg/DashboardLeftPane/UserOutline"
import { UserOutlineFilled } from "../svg/DashboardLeftPane/UserOutlineFilled"
import { WalletOutline } from "../svg/DashboardLeftPane/WalletOutline"
import styles from "./DashboardLeftPaneWrapper.module.css"
import { useRouter } from "next/navigation"

export function DashboardLeftPaneWrapper({
	children,
	active,
	welcomeView = false,
}: {
	children?: ReactNode
	active: string
	welcomeView?: boolean
}) {
	const router = useRouter()
	const [welcomeViewState, setWelcomeViewState] = useState<boolean>(false)

	// useEffect(() => {
	// 	const fetchBrandDetails = async () => {
	// 		const token = sessionStorage.getItem("access_token")
	// 		if (!token) router.push("/brands/login")
	// 		const response = await fetch("/api/brand/welcome", {
	// 			method: "GET",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 		})

	// 		if (response.ok) {
	// 			const data = await response.json()
	// 			if (data?.industry === null) {
	// 				setWelcomeViewState(true)
	// 				if (window.location.pathname !== "/brands/dashboard/welcome") {
	// 					router.push("/brands/dashboard/welcome")
	// 				}
	// 			} else setWelcomeViewState(false)
	// 		}
	// 	}

	// 	fetchBrandDetails()
	// }, [])

	const handleLogout = () => {
		sessionStorage.removeItem("access_token")
		router.push("/")
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftPane}>
				<div className={styles.sectionOne}>
					{!welcomeViewState && (
						<div className={styles.subSectionOne}>
							<div
								className={
									active === "overview" ? styles.optionContainerActive : styles.optionContainer
								}
								onClick={() => router.push("/brands/dashboard/overview")}
							>
								<div>
									{active === "overview" ? <ChartDonutOutlineFilled /> : <ChartDonutOutline />}
								</div>
								<div>Overview</div>
							</div>
							<div
								className={
									active === "campaignmanager"
										? styles.optionContainerActive
										: styles.optionContainer
								}
								onClick={() => router.push("/brands/dashboard/createcampaign")}
							>
								<div>
									{active === "campaignmanager" ? (
										<CalendarCheckOutlineFilled />
									) : (
										<CalendarCheckOutline />
									)}
								</div>
								<div>Campaigns Manager</div>
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
									<div>
										<CheckSquareOffsetOutline />
									</div>
									<div>Content Review</div>
								</div>
							</Tooltip>
							<Tooltip label="Coming soon..." placement="right" hasArrow>
								<div className={styles.optionContainer} style={{ cursor: "not-allowed" }}>
									<div>
										<BinocularsOutline />
									</div>
									<div>Discover Creators</div>
								</div>
							</Tooltip>
							<Tooltip label="Coming soon..." placement="right" hasArrow>
								<div className={styles.optionContainer} style={{ cursor: "not-allowed" }}>
									<div>
										<SparkleOutline />
									</div>
									<div>Campaign With AI</div>
								</div>
							</Tooltip>
						</div>
					)}
					<div className={styles.subSectionTwo}>
						{!welcomeViewState ? (
							<Tooltip label="Coming soon..." placement="right" hasArrow>
								<div className={styles.optionContainer} style={{ cursor: "not-allowed" }}>
									<div style={{ marginTop: "3px" }}>
										<WalletOutline />
									</div>
									<div>Wallet & Spends</div>
								</div>
							</Tooltip>
						) : (
							<div
								className={
									active === "getstarted" ? styles.optionContainerActive : styles.optionContainer
								}
								onClick={() => router.push("/brands/dashboard/welcome")}
							>
								{active === "getstarted" ? <HandWavingOutlineFilled /> : <HandWavingOutline />}
								<div>Get started</div>
							</div>
						)}

						<div
							className={
								active === "useraccountdetails"
									? styles.optionContainerActive
									: styles.optionContainer
							}
							onClick={() => router.push("/brands/dashboard/accountdetails")}
						>
							<div>{active === "useraccountdetails" ? <UserOutlineFilled /> : <UserOutline />}</div>
							<div>Account Details</div>
						</div>
					</div>
				</div>
				<div className={styles.sectionTwo}>
					{!welcomeViewState && (
						<>
							<Tooltip label="Coming soon..." placement="right" hasArrow>
								<div className={styles.optionContainer} style={{ cursor: "not-allowed" }}>
									<div>
										<HandWavingOutline />
									</div>
									<div>Refer A Creator</div>
								</div>
							</Tooltip>
						</>
					)}
					<div className={styles.optionContainer} onClick={() => router.push("/contactus")}>
						<div>
							<InfoOutline />
						</div>
						<div>Contact Support</div>
					</div>
					<div className={styles.optionContainer} onClick={() => handleLogout()}>
						<div>
							<DoorOpenOutline />
						</div>
						<div>Log out</div>
					</div>
				</div>
			</div>
			<div className={styles.pageContent}>{children}</div>
		</div>
	)
}
