import {ReactElementProps} from "../../../types";


export default (props: ReactElementProps) => {
    return (
        <div {...props}
            className={"right-0 w-full origin-top-right rounded-md shadow-lg px-2 py-2 " +
                "bg-white dark:bg-dark-300 rounded-md shadow dark-mode:bg-gray-800  " +
                (props.className ? props.className : '')}>
            {props.children}
        </div>
    )
}
