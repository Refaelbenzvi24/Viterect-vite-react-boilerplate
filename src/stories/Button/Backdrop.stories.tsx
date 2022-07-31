import React from 'react'
import Button, { ButtonProps } from "../../components/UI/Buttons/Button"
import { Story } from "@storybook/react"
import IconButton, { IconButtonProps } from "../../components/UI/Buttons/IconButton"
import Backdrop, { BackdropProps } from "../../components/UI/Backdrop"


export default {
	title:      'Backdrop',
	component:  Backdrop,
	parameters: {
		backgrounds: {
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#181818' },
			]
		}
	}
}

const ButtonTemplate: Story<BackdropProps> = args => <Backdrop {...args} />

export const Light = ButtonTemplate.bind({})
Light.parameters   = {
	backgrounds: { default: 'light' }
}
Light.args         = {
	active: true,
	dark:   false,
}

export const Dark = ButtonTemplate.bind({})
Dark.parameters   = {
	backgrounds: { default: 'dark' }
}
Dark.args         = {
	active: true,
	dark:   true,
}
