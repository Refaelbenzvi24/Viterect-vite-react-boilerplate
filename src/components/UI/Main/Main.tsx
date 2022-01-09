import type { ReactElementProps as ReactElementProperties } from '../../../types';
import i18n from '../../../plugins/i18n';
import React, { useContext, useEffect, useState } from 'react';
import { MainContext, defaultMainData } from './MainContext';
import windowVariables from '../../../hooks/WindowVars';
import MainProvider from './MainProvider';

export default function (properties: ReactElementProperties) {
  const {
    sideBarState: sideBar, sideBarOpts, overlayState, setOverlayState, overlays,
  } = useContext(MainContext);
  const [mainClasses, setMainClasses] = useState('');
  const { windowWidth } = windowVariables();

  const { children, className } = properties;
  const { shrinkPoint } = sideBarOpts;

  const dir = i18n.dir();

  useEffect(() => {
    if (overlays.length > 0) {
      setOverlayState(true);
    } else if (overlays.length === 0) {
      setOverlayState(false);
    }
  }, [overlays]);

  const overlayToggle = () => {
    if (overlays && overlays.length > 0) {
      overlays.at(-1).onClick();
    }
  };

  useEffect(() => {
    if (shrinkPoint && sideBar && windowWidth > shrinkPoint) {
      if (dir === 'ltr') {
        setMainClasses(`ml-[${sideBarOpts.width}px]`);
      } else {
        setMainClasses(`mr-[${sideBarOpts.width}px]`);
      }
    } else {
      setMainClasses('');
    }
  }, [sideBar, dir]);

  return (
    <MainProvider>
      <div {...properties} id="main" className={`h-full ${mainClasses} ${className || ''}`}>
        <div
          id="overlay"
          className={`opacity transition-opacity ease-out-in duration-400
		                    ${overlayState ? 'fixed h-full w-full bg-dark-200 opacity-40 z-20' : 'opacity-0'}`}
          onClick={overlayToggle}
        />
        {children}
      </div>
    </MainProvider>
  );
}
