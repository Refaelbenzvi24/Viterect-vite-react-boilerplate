import Particles from "react-tsparticles"
import particles from "./Particles"
import { Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles"


let initialized = false

const SpaceParticles = () => {

	const particlesInit = async (engine: Engine) => {
		if (!initialized) {
			initialized = true
			await loadFull(engine)
		}
	}

	return (
		<Particles id="tsparticles" className={"z-[1]"} init={particlesInit} options={particles}/>
	)
}

export default SpaceParticles
