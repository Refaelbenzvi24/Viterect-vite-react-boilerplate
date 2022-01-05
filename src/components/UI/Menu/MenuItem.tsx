import {ReactElementProps} from "../../../types";

export default (props: ReactElementProps) => {
    return (
        <span {...props}
              className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 dark:text-white " + props.className}>
            {props.children}
        </span>
    )
}
