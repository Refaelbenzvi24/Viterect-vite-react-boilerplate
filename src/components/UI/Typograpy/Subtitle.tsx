import {ReactElementProps} from "../../../types";

export default (props: ReactElementProps) => {
    return (
        <span {...props} className={"text-gray-500 dark:text-true-gray-300" + (props.className ? props.className : '')}>
            {props.children}
        </span>
    )
}
