import type { CSSProperties, ReactNode } from 'react';
import type React from 'react';

export interface ReactComponentProperties { children: ReactNode }

export type ReactElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type StyleObject = Record<string, CSSProperties>;
