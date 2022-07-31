import { css } from "@emotion/css"


type TransitionDuration = `${number}${'s' | 'ms'}`

export const marginTransition = (duration: TransitionDuration = '500ms') => `margin-right ${duration} ease-in-out, margin-left ${duration} ease-in-out`

export const transformTransition = (duration: TransitionDuration = '500ms') => `transform ${duration} ease-in-out`

export const opacityTransition = (duration: TransitionDuration = '500ms') => `opacity ${duration} ease-in-out`
