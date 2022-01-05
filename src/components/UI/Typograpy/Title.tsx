import React from "react";
import {ReactElementProps} from "../../../types";

export default (props: ReactElementProps) => {
    return (
        <span {...props}
              className={"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 " + props.className}>
            {props.children}
        </span>
    )
}
