import React, {ReactNode} from "react";

export type ReactComponentProps = { children: ReactNode }

export interface ReactElementProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
