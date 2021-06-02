import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const languages = 
[
	{
		label: 'Greek',
		value: 'gr'
	},
	{
		label: 'Dutch',
		value: 'nl'
	},
	{
		label: 'French',
		value: 'fr'
	}
];

const Translate = ({ selected, options, onSelectionChange }) =>
{
	const [language, setLanguage] = useState(languages[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label htmlFor="input">Enter text</label>
					<input
						type="text"
						value={text}
						onChange={e => setText(e.target.value)} />
				</div>				
			</div>
			<Dropdown
				label="Select a Language"
				selected={language}
				onSelectionChange={setLanguage}
				options={languages} />			
			<hr/>
			<h3 className="ui header">Output</h3>
			<Convert language={language} text={text}/>		
		</div>		
	);
};

export default Translate;