import React, {ReactNode} from "react";

interface IconButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}


export default (props: IconButtonProps) => {
    return (
        <div {...props}>
            <div className="flex cursor-pointer text-xl opacity-80 hover:text-white
            hover:opacity-100 active:opacity-70 active:text-gray-800">
                {props.children}
            </div>
        </div>
    )
}
