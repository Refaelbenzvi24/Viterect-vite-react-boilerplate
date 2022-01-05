import React, {ReactElement} from "react";

import './styles/Tooltip.css'
import {ReactElementProps} from "../../types";
import {TFunctionResult} from "i18next";


interface TooltipProps extends ReactElementProps {
    children: ReactElement,
    tooltip: TFunctionResult | string | number
}

export default (props: TooltipProps) => {
    return (
        <div className="flex w-fit">
            <div {...props} className="has-tooltip relative">
                <span
                    className={"transition-opacity duration-300 tooltip invisible inline-block absolute text-center rounded shadow-xl text-semibold p-1 bg-gray-100 dark:bg-dark-200 text-blue-500 dark:text-white opacity-100 "
                        + props.className}>
                    {props.tooltip}
                </span>
                {props.children}
            </div>
        </div>
    )
}
