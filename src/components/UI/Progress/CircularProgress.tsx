import {CircularProgress} from "@mui/material";
import React from "react";
import {ReactElementProps} from "../../../types";

export default (props: ReactElementProps) => {
    return (
        <div {...props}
             className="fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] items-center justify-center">
            <CircularProgress size={100}/>
        </div>
    )
}
