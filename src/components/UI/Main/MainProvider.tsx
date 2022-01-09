import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { MainContext, defaultMainData } from './MainContext';
import type { MainProviderOpts as MainProviderOptions } from './types';

export default function (properties: MainProviderOptions): ReactElement {
  const { children } = properties;

  const [sideBarState, setSideBarState] = useState(defaultSideBarState);
  const [overlays, setOverlays] = useState(defaultOverlays);
  const [overlayState, setOverlayState] = useState(defaultOverlayState);
  const [sideBarOptions, setSideBarOptions] = useState(defaultSideBarOptions);

  const rawSetData = () => {
    const width: number | undefined = document.querySelector('#sideBar')?.clientWidth || sideBarOptions.width || defaultWidth;

    setSideBarState((!!document.querySelector('#sideBar')) || sideBarState || defaultSideBarState);
    setSideBarOptions({ ...sideBarOptions, width });
  };

  useEffect(() => {
    rawSetData();
  }, []);

  return (
    <MainContext.Provider value={
		{
		  sideBarState,
		  setSideBarState,
		  sideBarOpts: sideBarOptions,
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
	      sideBarOpts: defaultSideBarOptions,
	      overlayState: defaultOverlayState,
	      overlays: defaultOverlays,
} = defaultMainData;
const { width: defaultWidth } = defaultSideBarOptions;
