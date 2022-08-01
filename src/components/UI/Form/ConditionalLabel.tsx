import Label from "./Label"


interface ConditionalLabelProps {
	label?: string
	persistentLabel?: boolean
	value?: string | ReadonlyArray<string> | number | undefined
}

const ConditionalLabel = ({ label, persistentLabel, value }: ConditionalLabelProps) => {

	if ((value && label) || (label && persistentLabel)) {
		return <Label>{label}</Label>
	}

	return <></>
}

export default ConditionalLabel
