import {QueryObserverBaseResult, QueryStatus} from "react-query";
import React, {ReactElement} from "react";
import CircularProgress from "./UI/Progress/CircularProgress"

interface QueryHandlerProps {
    children: ReactElement,
    status: QueryStatus
}

export default ({children, status}: QueryHandlerProps) => {
    return (
        <>
            {status === 'loading' && (
                <CircularProgress/>
            )}

            {status === 'error' && (
                <>Error occurred while getting the data!</>
            )}

            {status === 'success' && (
                <>{children}</>
            )}
        </>
    )
}
