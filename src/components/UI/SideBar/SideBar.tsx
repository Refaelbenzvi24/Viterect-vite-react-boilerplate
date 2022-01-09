import type {ReactElementProps as ReactElementProperties} from '../../../types';
import i18n from '../../../plugins/i18n';
import Col from '../Grid/Col';
import IconButton from '../Buttons/IconButton';
import React, {useContext, useEffect} from 'react';
import {defaultMainData, MainContext} from '../Main/MainContext';
import windowVariables from '../../../hooks/WindowVars';
import Overlay from '../Overlay/Overlay';

interface SideBarProperties extends ReactElementProperties {
	width?: number;
	shrinkPoint?: number;
	backgroundColor?: string;
	darkBackgroundColor?: string;
}

const {sideBarOpts: defaultSideBarOptions}                   = defaultMainData;
const {width: defaultWidth, shrinkPoint: defaultShrinkPoint} = defaultSideBarOptions;

export default function (properties: SideBarProperties) {
	const dir = i18n.dir();
	const {
		      children, width, className, shrinkPoint, backgroundColor, darkBackgroundColor,
	      }   = {
		width:               defaultWidth,
		shrinkPoint:         defaultShrinkPoint,
		backgroundColor:     defaultBackgroundColor,
		darkBackgroundColor: defaultDarkBackgroundColor,
		...properties,
	};
	
	const {
		      sideBarState:    state,
		      setSideBarState: setState,
		      setSideBarOpts,
		      overlays,
	      } = useContext(MainContext);
	
	const {addOverlay, removeOverlay} = Overlay();
	const {windowWidth}               = windowVariables();
	
	const setOpenState = (state: boolean) => {
		setState(state);
		
		if (shrinkPoint && windowWidth < shrinkPoint) {
			if (state) {
				addOverlay({
					onClick: () => {
						setOpenState(false);
						removeOverlay();
					},
				});
			} else if (overlays.length > 0) {
				removeOverlay();
			}
		}
	};
	
	useEffect(() => {
		setSideBarOpts({shrinkPoint, width});
	}, [shrinkPoint, width]);
	
	useEffect(() => {
		if (shrinkPoint && windowWidth > shrinkPoint) {
			setOpenState(true);
			// removeOverlay()
		} else if (shrinkPoint && windowWidth < shrinkPoint && state) {
			setOpenState(false);
		}
	}, [windowWidth]);
	
	return (
	  <div>
		  <div
			id="sideBar"
			{...properties}
			className={`fixed h-full overflow-x-hidden text-gray-700 bg-${backgroundColor} dark:bg-${darkBackgroundColor}
		  w-[${width}px] ${state ? 'translate-x-0' : (dir === 'ltr' ? '-translate-x-full' : 'translate-x-full')} transform z-30 shadow-lg
		  transition-transform ease-in-out duration-400 ${className || ''}}`}
		  >
			  <nav className="h-full">
				  {children}
			  </nav>
		  </div>
		  
		  <Col
			className={`self-center fixed mt-10  text-gray-700 ml-[${width}px] bg-${backgroundColor} dark:bg-${darkBackgroundColor}
	                    transform transition-transform ease-in-out duration-400 z-30 shadow-lg
                        ${dir === 'rtl' ? (state ? `-translate-x-[${width}px]` : 'translate-x-0') : (state ? 'translate-x-0' : `-translate-x-[${width}px]`)}`}
		  >
			  <IconButton
				className={`${state ? 'rotate-0' : 'rotate-180'} transform transition-transform ease-out-in duration-500`}
				onClick={() => setOpenState(!state)}
			  >
				  {dir === 'ltr' ? <IconCarbonChevronLeft/> : <IconCarbonChevronRight/>}
			  </IconButton>
		  </Col>
	  </div>
	);
}

const defaultBackgroundColor     = 'white';
const defaultDarkBackgroundColor = 'dark-500';
