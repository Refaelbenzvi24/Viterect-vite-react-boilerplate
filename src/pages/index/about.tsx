import { ReactComponent as about } from '../../components/about.md'
import { motion } from "framer-motion"


export default () => {
	return (
		<motion.div className="py-10 w-full" dir="ltr"
		     initial={{
			     opacity: 0,
		     }}
		     transition={{
			     duration: 1,
		     }}
		     animate={{
			     opacity: 1,
		     }}>
			<motion.div className="mx-auto px-5 prose"
			            initial={{
				            y: -40,
			            }}
			            transition={{
				            duration: 1.2,
			            }}
			            animate={{
				            y: 0,
			            }}>
				{about({})}
			</motion.div>
		</motion.div>
	)
}
