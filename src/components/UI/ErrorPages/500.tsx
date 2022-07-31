import "./500.css"
import { useEffect } from "react"
import { css } from "@emotion/css"
import { ReactDivProps } from "../../../types"
import tw from "twin.macro"
import clsx from "clsx"
import { HTMLMotionProps, motion } from "framer-motion"


const Error500Page = (props: HTMLMotionProps<"div">) => {
	function randomIntFromInterval(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}


	useEffect(() => {
		const stackContainer = document.querySelector('.stack-container') as HTMLDivElement
		const cardNodes      = document.querySelectorAll('.card-container') as unknown as HTMLDivElement[]
		const perspecNodes   = document.querySelectorAll('.perspec') as unknown as HTMLDivElement[]
		const perspec        = document.querySelector('.perspec') as HTMLDivElement
		const card           = document.querySelector('.card') as HTMLDivElement

		let counter = stackContainer.children.length

		card.addEventListener('animationend', function () {
			perspecNodes.forEach(function (elem, index) {
				elem.classList.add('explode')
			})
		})

		perspec.addEventListener('animationend', function (e) {
			if (e.animationName === 'explode') {
				cardNodes.forEach(function (elem, index) {

					//add hover animation class
					elem.classList.add('pokeup')

					//add event listner to throw card on click
					elem.addEventListener('click', function () {
						let updown            = [800, -800]
						let randomY           = updown[Math.floor(Math.random() * updown.length)]
						let randomX           = Math.floor(Math.random() * 1000) - 1000
						elem.style.transform  = `translate(${randomX}px, ${randomY}px) rotate(-540deg)`
						elem.style.transition = "transform 1s ease, opacity 2s"
						elem.style.opacity    = "0"
						counter--
						if (counter === 0) {
							stackContainer.style.width  = "0"
							stackContainer.style.height = "0"
						}
					})

					//generate random number of lines of code between 4 and 10 and add to each card
					let numLines = randomIntFromInterval(5, 10)

					//loop through the lines and add them to the DOM
					for (let index = 0; index < numLines; index++) {
						let lineLength = randomIntFromInterval(25, 97)
						var node       = document.createElement("li")
						node.classList.add('node-' + index)
						const codeEl = elem.querySelector('.code ul') as HTMLUListElement
						codeEl.appendChild(node).setAttribute('style', '--linelength: ' + lineLength + '%;')

						//draw lines of code 1 by 1
						if (index == 0) {
							const codeElNode = elem.querySelector('.code ul .node-' + index) as HTMLUListElement
							codeElNode.classList.add('writeLine')
						} else {
							const codeElNode = elem.querySelector('.code ul .node-' + (index - 1)) as HTMLUListElement
							codeElNode.addEventListener('animationend', function (e) {
								const codeElNode = elem.querySelector('.code ul .node-' + index) as HTMLUListElement
								codeElNode.classList.add('writeLine')
							})
						}
					}
				})
			}
		})
	}, [])

	return (
		<motion.div {...props}
		            className={`main-container ${css`${tw`flex xl:flex-row sm:flex-col xs:flex-col w-full h-full justify-around px-52`}`} ${clsx(props.className)}`}
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
			<div className="error_500">
				<h1>500</h1>
				<h2>Server error</h2>
				<p>Ruh-roh, something just isn't right... Time to paw through your logs and get down and dirty in your
					stack-trace;)</p>
			</div>
			<div className={`stack-container ${
				css`
					${tw`xl:pb-0 sm:pb-40 xs:pb-40`}
				`
			}`}>
				<div className="card-container">
					<div className={`perspec ${
						css`
							--spreaddist: 125px;
							--scaledist: .75;
							--vertdist: -25px;
						`
					}`}>
						<div className="card">
							<div className="writing">
								<div className="topbar">
									<div className="red"/>
									<div className="yellow"/>
									<div className="green"/>
								</div>
								<div className="code">
									<ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className={`perspec ${
						css`
							--spreaddist: 100px;
							--scaledist: .8;
							--vertdist: -20px;
						`
					}`}>
						<div className="card">
							<div className="writing">
								<div className="topbar">
									<div className="red"/>
									<div className="yellow"/>
									<div className="green"/>
								</div>
								<div className="code">
									<ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className={`perspec ${
						css`
							--spreaddist: 75px;
							--scaledist: .85;
							--vertdist: -15px;
						`
					}`}>
						<div className="card">
							<div className="writing">
								<div className="topbar">
									<div className="red"/>
									<div className="yellow"/>
									<div className="green"/>
								</div>
								<div className="code">
									<ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className={`perspec ${
						css`
							--spreaddist: 50px;
							--scaledist: .9;
							--vertdist: -10px;
						`
					}`}>
						<div className="card">
							<div className="writing">
								<div className="topbar">
									<div className="red"/>
									<div className="yellow"/>
									<div className="green"/>
								</div>
								<div className="code">
									<ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className={`perspec ${
						css`
							--spreaddist: 25px;
							--scaledist: .95;
							--vertdist: -5px;
						`
					}`}>
						<div className="card">
							<div className="writing">
								<div className="topbar">
									<div className="red"/>
									<div className="yellow"/>
									<div className="green"/>
								</div>
								<div className="code">
									<ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className={`perspec ${
						css`
							--spreaddist: 0px;
							--scaledist: 1;
							--vertdist: 0px;
						`
					}`}>
						<div className="card">
							<div className="writing">
								<div className="topbar">
									<div className="red"/>
									<div className="yellow"/>
									<div className="green"/>
								</div>
								<div className="code">
									<ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</motion.div>
	)
}

export default Error500Page
