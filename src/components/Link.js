import React from 'react';

const Link = ({className, href, children}) => 
{
	const Navigate = event =>
	{
		if(event.metaKey || event.ctrlKey)
		{
			return;
		}

		event.preventDefault();
		window.history.pushState({}, "", href);
		window.dispatchEvent(new PopStateEvent('popstate'));
	};

	return (
		<a onClick={Navigate} href={href} className={className}>{children}</a>
	);
};

export default Link;