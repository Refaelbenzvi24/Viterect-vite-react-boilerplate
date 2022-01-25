import {CSSProperties, ReactElement, useRef} from "react";
import {ReactComponentProps, ReactElementProps} from "../../../types";

export default (props: ReactComponentProps) => {
    const [tabsIndex, setIndex] = useState<number | null>(1)
    const [style, setStyle]     = useState<CSSProperties>({})
    const tabsRef               = useRef<HTMLDivElement>(null)
    let tabs: NodeListOf<HTMLElement>
    const {i18n}                = useTranslation()
    const dir                   = i18n.dir()

    useEffect(() => {
        if (tabsIndex && props.children && tabsRef.current) {
            tabs = tabsRef.current.querySelectorAll('a')

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    setIndex(index + 1)
                })
            })
        }
    }, [])

    useEffect(() => {
        if (tabsIndex && props.children && tabsRef.current) {
            tabs          = tabsRef.current.querySelectorAll('a')
            let _distance = 0

            tabs.forEach((tab, index) => {
                if (dir === 'ltr') {
                    if (index < tabsIndex - 1) {
                        _distance += tab.offsetWidth
                    }
                } else {
                    if (index < tabsIndex - 1) {
                        _distance -= tab.offsetWidth
                    }
                }
                tab.classList.remove('tab-active')
            })


            tabs[tabsIndex - 1].classList.add('tab-active')

            const _style = {
                width:     tabs[tabsIndex - 1].clientWidth,
                transform: `translate(${_distance}px)`
            }
            setStyle(_style)
        }
    }, [tabsIndex])

    return (
            <div className="tabs tabs-boxed inline-block z-1">
                <span className="absolute bg-sky-800 h-8 transform transition-all ease-in-out duration-400 transform rounded"
                      style={style}/>

                <div ref={tabsRef}>
                    {props.children}
                </div>
            </div>
    )
}
