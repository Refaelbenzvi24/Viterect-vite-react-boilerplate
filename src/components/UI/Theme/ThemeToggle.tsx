import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import type { ThemeName } from './types';
import Tooltip from '../Tooltip';
import IconButton from '../Buttons/IconButton';
import type { ReactElementProps} from 'types';

export default function (props: ReactElementProps) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const themeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div {...props}>
      <Tooltip className="bottom-[40px] left-[-80%]" tooltip={t('Theme')}>
        <IconButton onClick={themeToggle}>
          <Icon theme={theme} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

interface IconProps { theme: ThemeName }
function Icon({ theme }: IconProps) {
  return theme === 'light' ? <IconCarbonLight /> : <IconCarbonMoon />;
}
