import { useState, useCallback } from 'react'


const useToggle = (initial = false) => {
	const [toggle, setToggleValue] = useState(initial)
	const setToggle                = useCallback(() => setToggleValue((v) => !v), [])
	return { toggle, setToggle }
}

export default useToggle
