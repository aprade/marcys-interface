import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Dashboard({ machineName }) {
	const [machineInfo, setMachineInfo] = useState({});
	const [machine, setMachine] = useState("");

	useEffect(() => {
		setMachine(machineName);
	}, [machineName, setMachine]);

	useEffect(async () => {
		const machineData = await axios.get(`http://localhost:8080/machines/${machine}`);
		setMachineInfo(machineData.data.machine);
	}, [machine, setMachineInfo]);

	return (
		<div className="flex-auto bg-white rounded-tl-xl shadow-xl">
			<div className="flex flex-col w-full h-20 px-10 justify-center">
				<div className="flex flex-row space-x-6">
					<h1 className="font-bold text-2xl">
						{machine}
					</h1>
					<h3 className="self-end text-gray-400">
						Refreshing in 32 seconds
					</h3>
				</div>
				<h3 className="text-gray-400">
					Currently online
				</h3>
			</div>
			{/*
				Now we need to get the current status from the machine
				and for that we'll need to push the marcys-link further
				to monitor the machines and save those information on db.
			*/}
			{machineInfo ? (
				<div>
					{machineInfo.ip}
					{machineInfo.nickname}
				</div>
			) : null}
		</div>
	);
}