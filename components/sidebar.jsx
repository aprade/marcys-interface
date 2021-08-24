import { useState } from 'react';

import Dialog from './dialog';

import { AddIcon } from './icons/add';
import { ChartIcon } from './icons/chart';
import { TrashIcon } from './icons/trash';
import { SettingsIcon } from './icons/settings';

function Button(props) {
	return (
		<button onClick={props.onClick} className="flex w-full py-4 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white cursor-pointer outline-none">
			{props.icon}
			{props.innerHTML}
		</button>
	);
}

const Fields = [
	{
		name: 'name-field',
		label: 'Name',
		placeholder: 'aws-machine-one'
	},
	{
		name: 'ip-field',
		label: 'IP Address',
		placeholder: '192.168.1.101'
	}
]

export default function Sidebar() {
	const [showDialog, setShowDialog] = useState(false);

	const openDialog = () => {
		setShowDialog(prev => !prev );
	}

	return (
		<div className="relative min-h-screen flex">
			<div className="bg-gray-100 text-black-100 w-72 space-y-6 px-6 py-7">
				<a href="#" className="text-black flex justify-center space-x-2 px-4 py-4">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
					</svg>
					<span className="text-2xl font-extrabold">Marcys</span>
				</a>
				<nav className="py-8">
					<Button icon={<ChartIcon className="mx-1.5" />} innerHTML="Dashboard"/>
					<Button onClick={openDialog} icon={<AddIcon className="mx-1.5" />} innerHTML="Add new"/>
					<Button icon={<TrashIcon className="mx-1.5" />} innerHTML="Remove"/>
					<Button icon={<SettingsIcon className="mx-1.5" />} innerHTML="Settings"/>
				</nav>
			</div>
			<div className="flex-1 p-10 text-2xl font-bold">
				content goes here
			</div>
			<Dialog
				show={showDialog}
				set={setShowDialog}
				title="Add a machine"
				description="Here you will add a new machine that you need to monitor. Click save when you're done."
				fields={Fields}/>
		</div>
	);
}