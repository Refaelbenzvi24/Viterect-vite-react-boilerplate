import {ReactElementProps} from "../../../types";

export default (props: ReactElementProps) => {
    return (
        <div {...props} className={"h-0 mx-4 my-2 border border-solid border-blueGray-100 " + props.className} />
    )
}
