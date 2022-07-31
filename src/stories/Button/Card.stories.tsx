import React from 'react'
import Button, { ButtonProps } from "../../components/UI/Buttons/Button"
import { Story } from "@storybook/react"
import IconButton, { IconButtonProps } from "../../components/UI/Buttons/IconButton"
import Backdrop, { BackdropProps } from "../../components/UI/Backdrop"
import Card, { CardProps } from "../../components/UI/Cards/Card"
import { HTMLMotionProps } from "framer-motion"


export default {
	title:      'Card',
	component:  Card,
	parameters: {
		backgrounds: {
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#181818' },
			]
		}
	}
}

const CardTemplate: Story<CardProps> = args => <Card {...args} />

export const Light = CardTemplate.bind({})
Light.parameters   = {
	backgrounds: { default: 'light' }
}
Light.args         = {
	dark:     false,
	height:   "300px",
	width:    "200px",
}

export const Dark = CardTemplate.bind({})
Dark.parameters   = {
	backgrounds: { default: 'dark' }
}
Dark.args         = {
	dark:     true,
	height:   "300px",
	width:    "200px",
}
