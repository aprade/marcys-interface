import { useState, useEffect } from 'react';
import axios from 'axios';

import Dialog from '../components/dialog';
import Dashboard from '../components/dashboard';

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
	const [machines, setMachines] = useState([]);
	const [machine, setMachine] = useState("");

	const [showAddDialog, setShowAddDialog] = useState(false);
	const [showRemoveDialog, setShowRemoveDialog] = useState(false);

	const [showDashboardOver, setShowDashboardOver] = useState(false);
	const [showAddOver, setShowAddOver] = useState(false);
	const [showRemoveOver, setShowRemoveOver] = useState(false);

	useEffect(async () => {
		const machines = await axios.get('http://localhost:8080/machines');
		setMachines(machines.data.machines);
		setMachine(machines.data.machines[0]);
	}, [setMachine, setMachines]);

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
						{showDashboardOver ? (
							<span className="absolute left-20 font-semibold bg-white py-2 px-4 rounded shadow-xl">Dashboard</span>
						) : null}
					</div>
					<div
						className="flex w-16 h-16 items-center justify-center hover:bg-gray-100 transition-all"
						onMouseOver={() => setShowAddOver(prev => !prev)}
						onMouseOut={() => setShowAddOver(prev => !prev)}
						onClick={() => setShowAddDialog(prev => !prev)}>
						<AddIcon className="w-8 h-8" />
						{showAddOver ? (
							<span className="absolute left-20 font-semibold bg-white py-2 px-4 rounded shadow-xl">Add new</span>
						) : null}
					</div>
					<div
						className="flex w-16 h-16 items-center justify-center hover:bg-gray-100 transition-all"
						onMouseOver={() => setShowRemoveOver(prev => !prev)}
						onMouseOut={() => setShowRemoveOver(prev => !prev)}
						onClick={() => setShowRemoveDialog(prev => !prev)}>
						<TrashIcon className="w-8 h-8" />
						{showRemoveOver ? (
							<span className="absolute left-20 font-semibold bg-white py-2 px-4 rounded shadow-xl">Remove</span>
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
					</div>
					<div className="flex flex-col p-2 space-y-4">
						{machines.map(machine => {
							return (
								<button key={machine} className="flex items-center justify-between outline-none" onClick={() => setMachine(machine)}>
									<div className="flex flex-auto">
										<ComputerIcon className="stroke-icon-grey mr-2" />
										{machine}
									</div>
									<CheckIcon />
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<Dashboard
				machineName={machine}/>
			{/* Create logic that handles the add and remove machine using this dialogs */}
			<Dialog
				show={showAddDialog}
				set={setShowAddDialog}
				title="Add a machine"
				description="Here you will add a new machine that you need to monitor. Click save when you're done."
				fields={AddDialogFields} />
			<Dialog
				show={showRemoveDialog}
				set={setShowRemoveDialog}
				title="Remove a machine"
				description="Here you will remove an existent machine from the dashboard. Click save when you're done."
				fields={RemoveDialogFields} />
		</div>
	);
}

export default Home
