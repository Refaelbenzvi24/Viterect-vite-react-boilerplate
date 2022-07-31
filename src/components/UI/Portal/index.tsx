import { ReactDivProps } from "../../../types"
import { createPortal } from "react-dom"


const Portal = ({ children }: ReactDivProps) => {
	const mount = document.querySelector("#portals-root") as Element

	return createPortal(children, mount)
}

export default Portal
