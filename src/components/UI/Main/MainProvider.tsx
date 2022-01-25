import type {ReactElement} from 'react';
import {useEffect} from 'react';
import {defaultMainData, MainContext} from './MainContext';
import type {MainProviderOptions} from './types'

export default function (props: MainProviderOptions): ReactElement {
    const {children} = props;

    const [sideBarState, setSideBarState]     = useState(defaultSideBarState);
    const [overlays, setOverlays]             = useState(defaultOverlays);
    const [overlayState, setOverlayState]     = useState(defaultOverlayState);
    const [sideBarOptions, setSideBarOptions] = useState(defaultSideBarOptions);

    const rawSetData = () => {
    };

    useEffect(() => {
        rawSetData();
    }, []);

    return (
            <MainContext.Provider value={
                {
                    sideBarState,
                    setSideBarState,
                    sideBarOpts:    sideBarOptions,
                    setSideBarOpts: setSideBarOptions,
                    overlayState,
                    setOverlayState,
                    overlays,
                    setOverlays,
                }
            }
            >
                {children}
            </MainContext.Provider>
    );
}

const {
          sideBarState: defaultSideBarState,
          sideBarOpts:  defaultSideBarOptions,
          overlayState: defaultOverlayState,
          overlays:     defaultOverlays,
      }                     = defaultMainData;
const {width: defaultWidth} = defaultSideBarOptions;
