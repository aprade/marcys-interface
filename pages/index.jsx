
import { useState } from 'react';

import Dialog from '../components/dialog';
import Sidebar from '../components/sidebar';

import { ComputerIcon } from '../components/icons/computer';
import { CheckIcon } from '../components/icons/check';
import { CPUIcon } from '../components/icons/cpu';
import { LogoIcon } from '../components/icons/logo';
import { AddIcon } from '../components/icons/add';
import { TrashIcon } from '../components/icons/trash';

const AddDialogFields = [
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

const RemoveDialogFields = [
	{
		name: 'name-field',
		label: 'Name',
		placeholder: 'aws-machine-one'
	}
]

const Home = () => {
	const [showAddDialog, setShowAddDialog] = useState(false);
	const [showRemoveDialog, setShowRemoveDialog] = useState(false);

	const [showDashboardOver, setShowDashboardOver] = useState(false);
	const [showAddOver, setShowAddOver] = useState(false);
	const [showRemoveOver, setShowRemoveOver] = useState(false);

	return (
		<div className="flex h-screen bg-gray-100">
			<div className="flex flex-col justify-between items-center w-16 bg-gray-200">
				<div className="flex flex-col">
					{/* Supposed to be our logo */}
					<div className="flex w-16 h-16 items-center justify-center">
						<LogoIcon className="w-8 h-8" />
					</div>
					<div
						className="flex w-16 h-16 items-center justify-center hover:bg-gray-100 transition-all"
						onMouseOver={() => setShowDashboardOver(prev => !prev)}
						onMouseOut={() => setShowDashboardOver(prev => !prev)}>
						<CPUIcon className="w-8 h-8" />
						{ showDashboardOver ? (
							<span className="absolute left-20 bg-white py-2 px-4 rounded shadow-xl">Dashboard</span> 
						) : null}
					</div>
					<div
						className="flex w-16 h-16 items-center justify-center hover:bg-gray-100 transition-all"
						onMouseOver={() => setShowAddOver(prev => !prev)}
						onMouseOut={() => setShowAddOver(prev => !prev)}
						onClick={() => setShowAddDialog(prev => !prev)}>
						<AddIcon className="w-8 h-8" />
						{ showAddOver ? (
							<span className="absolute left-20 bg-white py-2 px-4 rounded shadow-xl">Add new</span> 
						) : null}
					</div>
					<div
						className="flex w-16 h-16 items-center justify-center hover:bg-gray-100 transition-all"
						onMouseOver={() => setShowRemoveOver(prev => !prev)}
						onMouseOut={() => setShowRemoveOver(prev => !prev)}
						onClick={() => setShowRemoveDialog(prev => !prev)}>
						<TrashIcon className="w-8 h-8" />
						{ showRemoveOver ? (
							<span className="absolute left-20 bg-white py-2 px-4 rounded shadow-xl">Remove</span> 
						) : null}
					</div>
				</div>
			</div>

			<div className="w-64 bg-gray-100 p-4 flex flex-col space-y-4">
				<div className="flex justify-between items-center mb-6">
					<h1 className="font-semibold text-2xl">Dashboard</h1>
				</div>
				<div className="flex flex-col h-64">
					<div className="flex items-center space-x-2 mb-2">
						<h1 className="font-semibold text-md">Machines</h1>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					</div>
					<div className="flex flex-col p-2 space-y-4">
						<a href="" className="">
							<div className="flex items-center justify-between">
								<div className="flex flex-auto">
									<ComputerIcon className="stroke-icon-grey mr-2" />
									aws-ceb-checker
								</div>
								<CheckIcon />
							</div>
						</a>
						<a href="" className="">
							<div className="flex items-center justify-between">
								<div className="flex flex-auto">
									<ComputerIcon className="stroke-icon-grey mr-2" />
									aws-ceb-checker
								</div>
								<CheckIcon />
							</div>
						</a>
						<a href="" className="">
							<div className="flex items-center justify-between">
								<div className="flex flex-auto">
									<ComputerIcon className="stroke-icon-grey mr-2" />
									aws-ceb-checker
								</div>
								<CheckIcon />
							</div>
						</a>
						<a href="" className="">
							<div className="flex items-center justify-between">
								<div className="flex flex-auto">
									<ComputerIcon className="stroke-icon-grey mr-2" />
									aws-ceb-checker
								</div>
								<CheckIcon />
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className="flex-auto bg-white rounded-tl-xl shadow-xl"></div>
			<Dialog
				show={showAddDialog}
				set={setShowAddDialog}
				title="Add a machine"
				description="Here you will add a new machine that you need to monitor. Click save when you're done."
				fields={AddDialogFields}/>
			<Dialog
				show={showRemoveDialog}
				set={setShowRemoveDialog}
				title="Remove a machine"
				description="Here you will remove an existent machine from the dashboard. Click save when you're done."
				fields={RemoveDialogFields}/>
		</div>
	);
}

export default Home
