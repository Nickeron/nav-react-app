import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = 
[
	{
		title: 'What is React?',
		content: 'React is a front end js framework'
	},
	{
		title: 'How do you use React?',
		content: 'React is used by creating components'
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite js library among engineers'
	}
];

const options = 
[
	{
		label: 'Red',
		value: 'red'
	},
	{
		label: 'Blue',
		value: 'blue'
	},
	{
		label: 'White',
		value: 'white'
	}
];

const App = () => 
{
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<Header></Header>
			<Route path = '/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
			<Route path='/dropdown'>
				<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
				{
					showDropdown? 
						<Dropdown
							label="Select a Color"
							selected={selected}
							options={options}
							onSelectionChange={setSelected} /> : null
				}
			</Route>			
		</div>
	);
};

export default App;