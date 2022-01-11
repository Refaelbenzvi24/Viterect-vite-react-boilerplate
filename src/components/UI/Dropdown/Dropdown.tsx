import Card from '../Cards/Card';
import CardLinkButton from '../Cards/CardLinkButton';
import {t} from 'i18next';
import React from 'react';

export default function () {
	const [open, setOpen] = React.useState(false);
	
	return (
	  <div onClick={() => setOpen(false)} className="relative">
		  <button onClick={() => setOpen(!open)} className="dropdown-button">
			  <span>Dropdown</span>
			  <IconMdiChevronDown className="inline w-4 h-4 mt-1 ml-1 transform transition-transform
                                        duration-200 md:-mt-1"/>
		  </button>
		  
		  <Card>
			  <CardLinkButton to="/">{t('Link 1')}</CardLinkButton>
			  <CardLinkButton to="/">{t('Link 2')}</CardLinkButton>
			  <CardLinkButton to="/">{t('Link 3')}</CardLinkButton>
		  </Card>
	  </div>
	);
}
