import astronaut from '../../../assets/astronaut.svg'
import planet from '../../../assets/planet.svg'
import { Link } from 'react-router-dom'
import { Vars } from '../../../modules/vars'
import './404.css'
import { ReactDivProps } from '../../../types'
import clsx from 'clsx'
import { HTMLMotionProps, motion } from "framer-motion"


const Error404Page = (props: HTMLMotionProps<"div">) => {
	const appName = (Vars.appName || 'VITERECT').toString().toUpperCase()


	return (
		<motion.div {...props} className={`permission_denied ${clsx(props.className)}`}
		            dir="ltr"
		            initial={{
			            opacity: 0,
		            }}
		            transition={{
			            duration: 0.8,
		            }}
		            exit={{
			            opacity: 0,
		            }}
		            animate={{
			            opacity: 1,
		            }}>
			<div className="denied__wrapper z-[3]">
				<h1>404</h1>
				<h3>
					{`LOST IN `}
					<span>SPACE</span>
					{` ${appName}?`}
					Hmm, looks like that page doesn&apos;t
					exist.
				</h3>
				<img id="astronaut" src={astronaut} alt=""/>
				<img id="planet" src={planet} alt=""/>
				<Link to="/">
					<button className="denied__link" type="button">Go Home</button>
				</Link>
			</div>
		</motion.div>
	)
}

export default Error404Page
