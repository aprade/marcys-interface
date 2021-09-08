import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Dashboard({ machineName }) {
	const [machineInfo, setMachineInfo] = useState({});
	const [machine, setMachine] = useState("");

	const [timerSeconds, setTimerSeconds] = useState(45);

	const tick = () => {
		if (timerSeconds == 0) return clearTimer();
		setTimerSeconds(timerSeconds - 1);
	}

	const clearTimer = () => setTimerSeconds(45);

	useEffect(() => {
		setMachine(machineName);
		clearTimer();
	}, [machineName, setMachine]);

	useEffect(async () => {
		const machineData = await axios.get(`http://localhost:8080/machines/${machine}`);
		setMachineInfo(machineData.data.machine);
	}, [machine, setMachineInfo]);

	useEffect(() => {
		const timerId = setInterval(tick, 1000);
		return () => clearInterval(timerId);
	});

	return (
		<div className="flex-auto bg-white rounded-tl-xl shadow-xl">
			<div className="flex flex-col w-full h-20 px-10 justify-center">
				<div className="flex flex-row space-x-6">
					<h1 className="font-bold text-2xl">
						{machine}
					</h1>
					<h3 className="self-end text-gray-400">
						Refreshing in {timerSeconds} seconds
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
			{/* {machineInfo ? (
				<div>
					{machineInfo.ip}
					{machineInfo.nickname}
				</div>
			) : null} */}
		</div>
	);
}