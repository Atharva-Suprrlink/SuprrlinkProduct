import styles from "./style.module.css"

export function Suprrsubheading({ children }: { children: React.ReactNode }) {
	return <div className={styles.subheading}>{children}</div>
}
