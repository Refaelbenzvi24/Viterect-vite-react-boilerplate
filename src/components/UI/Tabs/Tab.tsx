import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export default (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
    return (
            <a {...props} className={"tab cursor-pointer z-2 !bg-transparent " + props.className}>
                {props.children}
            </a>
    )
}
