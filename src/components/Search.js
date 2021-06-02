import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ({ items }) => 
{
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => 
	{
		const timeoutID = setTimeout(() =>
		{
			if (term) 
			{
				axios.get('https://en.wikipedia.org/w/api.php',
					{
						params:
						{
							action: 'query',
							list: 'search',
							origin: '*',
							format: 'json',
							srsearch: term
						}
					})
					.then(result => setResults(result.data.query.search));
			}
		}, 1500);
			
		return () => 
		{
			clearTimeout(timeoutID);
		}
	}, [term]);

	const renderedResults = results.map(result =>
		{
			return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a 
					className='ui button'
					href={`https://en.wikipedia.org?curid=${result.pageid}`}>Visit</a>
				</div>
				<div className="content">
					<div className="header">
						{result.title}
					</div>
					<div>
						<span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
					</div>
				</div>
			</div>);
		})

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>Enter Search Term</label>
					<input 
						onChange={e => setTerm(e.target.value) }
						value={term}
						className='input' 
						type="text" />
				</div>
			</div>
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	);
};

export default Search;