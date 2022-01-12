import {ISourceOptions} from "tsparticles";
import astronaut from '~/assets/astronaut.svg';
import planet from "~/assets/planet.svg";
import Particles from "react-tsparticles";
import {vars} from "plugins/vars";
import {Link} from "react-router-dom";

import '../styles/404.css'

export default () => {

    const appName = (vars.appName || 'VITERECT').toString().toUpperCase()

    return (
            <div className="permission_denied">
                <Particles id="tsparticles" options={particles}/>
                <div className="denied__wrapper">
                    <h1>404</h1>
                    <h3>
                        LOST IN <span>SPACE</span> {appName}?
                        Hmm, looks like that page doesn't
                        exist.</h3>
                    <img id="astronaut" src={astronaut} alt=""/>
                    <img id="planet" src={planet} alt=""/>
                    <Link to="/">
                        <button className="denied__link">Go Home</button>
                    </Link>
                </div>
            </div>
    )
}

const particles: ISourceOptions = {
    fpsLimit: 60,
    particles: {
        number: {
            value: 160,
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: {
                enable: true,
                minimumValue: 0.1
            },
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: {
                enable: true,
                minimumValue: 1
            }
        },
        move: {
            enable: true,
            speed: 0.17,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
                default: "out"
            },
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            resize: false
        }
    },
    detectRetina: true
};

