import styles from "./Suprrheading.module.css"

export function Suprrheading({ children }: { children: React.ReactNode }) {
	return <div className={styles.heading}>{children}</div>
}
