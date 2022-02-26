declare module '*.module.css'
declare module '*.md' {
	const attributes: Record<string, unknown>
	import React from 'react'
	const ReactComponent: React.VFC
	export { attributes, ReactComponent }
}

