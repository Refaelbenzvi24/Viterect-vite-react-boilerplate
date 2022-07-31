import React from 'react'
import Button, { ButtonProps } from "../../components/UI/Buttons/Button"
import { Story } from "@storybook/react"
import IconButton, { IconButtonProps } from "../../components/UI/Buttons/IconButton"


export default {
	title:      'Button',
	components: [Button, IconButton],
	parameters: {
		backgrounds: {
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#181818' },
			]
		}
	}
}

const ButtonTemplate: Story<ButtonProps> = args => <Button {...args} />

export const Light = ButtonTemplate.bind({})
Light.parameters   = {
	backgrounds: { default: 'light' }
}
Light.args         = {
	dark:     false,
	children: 'light',
	disabled: false
}

export const Dark = ButtonTemplate.bind({})
Dark.parameters   = {
	backgrounds: { default: 'dark' }
}
Dark.args         = {
	dark:     true,
	children: 'dark',
	disabled: false
}

const IconButtonTemplate: Story<IconButtonProps> = args => <IconButton {...args} />

export const IconLight = IconButtonTemplate.bind({})
IconLight.parameters   = {
	backgrounds: { default: 'light' }
}
IconLight.args         = {
	dark:     false,
	children: <IconCarbonLanguage/>,
	disabled: false
}

export const IconDark = IconButtonTemplate.bind({})
IconDark.parameters   = {
	backgrounds: { default: 'dark' }
}
IconDark.args         = {
	dark:     true,
	children: <IconCarbonLanguage/>,
	disabled: false
}
