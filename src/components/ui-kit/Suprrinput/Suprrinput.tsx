import { FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { SyntheticEvent } from "react"

import styles from "./Suprrinput.module.css"

export function Suprrinput({
	label,
	helperText,
	placeholder,
	required,
	type,
	onChange,
	error,
	errorText,
	value,
}: {
	label: string
	helperText?: string
	placeholder: string
	required?: boolean
	type: string
	error?: boolean
	errorText?: string
	onChange?: (e: SyntheticEvent) => void
	value?: string
}) {
	return (
		<div className={styles.inputWrapper}>
			{label && <FormLabel>{label}</FormLabel>}
			{helperText && (
				<div className={styles.helperText}>
					<FormHelperText>{helperText}</FormHelperText>
				</div>
			)}
			<div>
				<Input
					type={type}
					placeholder={placeholder}
					required={required}
					onChange={onChange}
					isInvalid={error}
					value={value}
				/>
			</div>
			{error && (
				<div>
					<FormHelperText color={"red"}>{errorText}</FormHelperText>
				</div>
			)}
		</div>
	)
}
