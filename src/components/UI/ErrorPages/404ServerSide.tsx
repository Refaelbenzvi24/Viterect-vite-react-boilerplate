import './404ServerSide.css'
import Particles from 'react-tsparticles'
import { ReactElementProps } from '../../../types'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import particles from "./Particles"


export default (props: ReactElementProps) => {
	const [visorContext, setVisorContext] = useState<CanvasRenderingContext2D>()

	const drawVisor = () => {
		if (visorContext) {
			visorContext.beginPath()
			visorContext.moveTo(5, 45)
			visorContext.bezierCurveTo(15, 64, 45, 64, 55, 45)

			visorContext.lineTo(55, 20)
			visorContext.bezierCurveTo(55, 15, 50, 10, 45, 10)

			visorContext.lineTo(15, 10)

			visorContext.bezierCurveTo(15, 10, 5, 10, 5, 20)
			visorContext.lineTo(5, 45)

			visorContext.fillStyle   = '#2f3640'
			visorContext.strokeStyle = '#f5f6fa'
			visorContext.fill()
			visorContext.stroke()
		}
	}

	useEffect(() => {
		if (visorContext) {
			drawVisor()
		}
	}, [])

	return (
		<div {...props} className={`error-404-ss ${clsx(props.className)}`}>
			<Particles id="tsparticles" options={particles}/>
			<div className="absolute w-full h-full overflow-hidden">
				<div className="moon"/>
				<div className="moon__crater moon__crater1"/>
				<div className="moon__crater moon__crater2"/>
				<div className="moon__crater moon__crater3"/>

				<div className="star star2"/>
				<div className="star star3"/>
				<div className="star star1"/>
				<div className="star star4"/>
				<div className="star star5"/>

				<div className="absolute h-full">
					<div className="error">
						<div className="error__title">404</div>
						<div className="error__subtitle">Hmmm...</div>
						<div className="error__description">It looks like one of the developers fell asleep</div>
						<button className="error__button error__button--active" type="button">LOGIN</button>
						<button className="error__button" type="button">CONTACT</button>
					</div>
				</div>

				<div className="astronaut">
					<div className="astronaut__backpack"/>
					<div className="astronaut__body"/>
					<div className="astronaut__body__chest"/>
					<div className="astronaut__arm-left1"/>
					<div className="astronaut__arm-left2"/>
					<div className="astronaut__arm-right1"/>
					<div className="astronaut__arm-right2"/>
					<div className="astronaut__arm-thumb-left"/>
					<div className="astronaut__arm-thumb-right"/>
					<div className="astronaut__leg-left"/>
					<div className="astronaut__leg-right"/>
					<div className="astronaut__foot-left"/>
					<div className="astronaut__foot-right"/>
					<div className="astronaut__wrist-left"/>
					<div className="astronaut__wrist-right"/>

					<div className="astronaut__head">
						<canvas
							id="visor"
							ref={(c) => setVisorContext(c?.getContext('2d') as CanvasRenderingContext2D)}
							width="60px"
							height="60px"
						/>
						<div className="astronaut__head-visor-flare1"/>
						<div className="astronaut__head-visor-flare2"/>
					</div>
				</div>
			</div>
		</div>
	)
}
