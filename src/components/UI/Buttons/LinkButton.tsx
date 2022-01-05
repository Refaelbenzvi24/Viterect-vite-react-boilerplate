import {Link, LinkProps} from "react-router-dom";
import React, {ReactElement} from "react";
import i18n from "../../../plugins/i18n";


export default (props: LinkProps): ReactElement => {
    const dir = i18n.dir()

    return (
        <Link {...props}>
            <div className="
            px-6
            block
            text-sm
            font-semibold
            dark:text-gray-900
            dark:hover:(bg-gray-100/[0.1])
            dark:focus:bg-gray-600
            dark:focus:text-white
            dark:hover:text-white
            hover:text-white
            focus:text-gray-900
            hover:(bg-gray-100/[0.1])
            focus:bg-gray-200
            focus:outline-none
            focus:shadow-outline">
                <div className={(dir === 'ltr' ? 'hover:translate-x-2' : 'hover:(-translate-x-2)') +
                    "px-4 py-2 mt-2 transform transition-transform ease-in duration-200 opacity-100"}>
                    {props.children}
                </div>
            </div>
        </Link>
    )
}
