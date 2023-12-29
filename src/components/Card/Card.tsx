import styles from '../../pages/styles/Card.module.scss'

export const Card = ({
	title,
	sidetitle,
	mainheading,
	subtitle,
	subtitle1,
	subtitle2
} : {
	title:string
	sidetitle:string
	mainheading:string
	subtitle?:string
	subtitle1 : boolean
	subtitle2 : boolean
}) => {
  return (
	<div className={styles.root}>
		<div className={styles.title}>
			<span className={styles.title1}>{title}</span>
			<span className={styles.title2}>{sidetitle}</span>
		</div>

		<div className={styles.mainContent}>
			{mainheading}
		</div>

		<div className={styles.subtitle}>
			{subtitle1 && <p>{subtitle}</p>}
			{subtitle2 && 
			<div className={styles.subtitle2}>
				<span>{subtitle}</span>
			</div>}
		</div>
	</div>
  )
}