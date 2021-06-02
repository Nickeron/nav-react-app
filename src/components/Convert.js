import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text, onSelectionChange }) => 
{
	const [translation, setTranslation] = useState('');
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() =>
	{
		const timerID = setTimeout(() => 
		{
			setDebouncedText(text);
		}, 1000);

		return () => 
		{
			clearTimeout(timerID);
		};
	}, [text]);
		
	useEffect(() =>
	{
		const requestTranslation = async () =>
		{
			axios.post('https://translation.googleapis.com/language/translate/v2', {},
				{
					params:
					{
						q: debouncedText,
						target: language.value,
						key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
					}
				}).then(data => setTranslation(data.data.translations[0].translatedText));
		};

		requestTranslation();
	}, [language, debouncedText]);

	return (
		<div>
			<h1 className="ui header">{translation}</h1>
		</div>
	);
};

export default Convert;