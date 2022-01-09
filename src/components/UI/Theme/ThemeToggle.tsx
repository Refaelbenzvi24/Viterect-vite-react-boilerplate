import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import type { ThemeName } from './types';
import Tooltip from '../Tooltip';
import IconButton from '../Buttons/IconButton';
import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const themeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div {...properties}>
      <Tooltip className="bottom-[40px] left-[-80%]" tooltip={t('Theme')}>
        <IconButton onClick={themeToggle}>
          <Icon theme={theme} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

interface IconProperties { theme: ThemeName }
function Icon({ theme }: IconProperties) {
  return theme === 'light' ? <IconCarbonLight /> : <IconCarbonMoon />;
}
