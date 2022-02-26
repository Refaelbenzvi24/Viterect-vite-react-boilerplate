import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import windowVars from '../../../hooks/WindowVars'
import './403.css'
import Particles from 'react-tsparticles'
import { ReactElementProps } from '../../../types'
import clsx from 'clsx'
import particles from "./Particles"


export default (props: ReactElementProps) => {
	const eyef = useRef(null)
	const {
		      windowHeight,
		      windowWidth,
		      pointerX,
		      pointerY,
	      }    = windowVars()

	useEffect(() => {
		const root = document.documentElement

		const x = (pointerX / windowWidth).toString()
		const y = (pointerY / windowHeight).toString()

		root.style.setProperty('--mouse-x', x)
		root.style.setProperty('--mouse-y', y)
	}, [pointerX, pointerY])

	return (
		<div {...props} className={`error-403 h-full pt-50 ${clsx(props.className)}`}>
			<Particles id="tsparticles" options={particles}/>
			<div className="z-1">
				<svg
					className="mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					id="robot-error"
					viewBox="0 0 260 118.9"
				>
					<defs>
						<clipPath id="white-clip">
							<circle id="white-eye" fill="#cacaca" cx="130" cy="65" r="20"/>
						</clipPath>
						<text id="text-s" className="error-text" y="106"> 403</text>
					</defs>
					<path
						className="alarm"
						fill="#e62326"
						d="M120.9 19.6V9.1c0-5 4.1-9.1 9.1-9.1h0c5 0 9.1 4.1 9.1 9.1v10.6"
					/>
					<use xlinkHref="#text-s" x="-0.5px" y="-1px" fill="black"/>
					<use xlinkHref="#text-s" fill="#2b2b2b"/>
					<g id="robot">
						<g id="eye-wrap">
							<use xlinkHref="#white-eye"/>
							<circle
								id="eyef"
								ref={eyef}
								className="eye"
								clipPath="url(#white-clip)"
								fill="#000"
								stroke="#2aa7cc"
								strokeWidth="2"
								strokeMiterlimit="10"
								cx="130"
								cy="65"
								r="11"
							/>
							<ellipse id="white-eye" fill="#2b2b2b" cx="130" cy="40" rx="18" ry="12"/>
						</g>
						<circle className="lightblue" cx="105" cy="32" r="2.5" id="tornillo"/>
						<use xlinkHref="#tornillo" x="50"/>
						<use xlinkHref="#tornillo" x="50" y="60"/>
						<use xlinkHref="#tornillo" y="60"/>
					</g>
				</svg>
				<div className="block relative">
					<h1>You are not allowed to enter here</h1>
					<h2>
						Go
						<Link className="cursor-pointer" to="/">Home!</Link>
					</h2>
				</div>
			</div>
		</div>
	)
}
