// combineComponents.tsx
import React, { FC } from 'react'
import { ReactComponentProps } from "../types"


const CombinedComponents = (...components: FC[]) => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }: ReactComponentProps) => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>
							{children}
						</CurrentComponent>
					</AccumulatedComponents>
				)
			}
		}, ({ children }: ReactComponentProps) => <>{children}</>,
	)
}

export default CombinedComponents
