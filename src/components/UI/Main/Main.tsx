import type {ReactElementProps} from 'types';
import i18n from '../../../plugins/i18n';
import React, {CSSProperties, useContext, useEffect, useState} from 'react';
import {MainContext, defaultMainData} from './MainContext';
import windowVariables from '../../../hooks/WindowVars';
import MainProvider from './MainProvider';

export default function (props: ReactElementProps) {
	const {
		      sideBarState: sideBar, sideBarOpts, overlayState, setOverlayState, overlays,
	      }                         = useContext(MainContext);
	const [mainStyle, setMainStyle] = useState<CSSProperties>({});
	const {windowWidth}             = windowVariables();
	
	const {children, className} = props;
	const {shrinkPoint}         = sideBarOpts;
	
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
			overlays[overlays.length - 1].onClick();
		}
	};
	
	useEffect(() => {
		if (shrinkPoint && sideBar && windowWidth > shrinkPoint) {
			if (dir === 'ltr') {
				setMainStyle({
					marginLeft: `${sideBarOpts.width}px`
				})
			} else {
				setMainStyle({
					marginRight: `${sideBarOpts.width}px`,
				});
			}
		} else {
			setMainStyle({});
		}
	}, [sideBar, dir]);
	
	return (
	  <MainProvider>
		  <div {...props} id="main" className={`h-full ${className || ''}`} style={mainStyle}>
			  <div
				id="overlay"
				className={`opacity transition-opacity ease-out-in duration-400 dark:bg-dark-800
		                    ${overlayState ? 'fixed h-full w-full bg-dark-200 opacity-40 z-20' : 'opacity-0'}`}
				onClick={overlayToggle}/>
			  {children}
		  </div>
	  </MainProvider>
	);
}
