import { CloseIcon } from './icons/close';

export default function Dialog(props) {
	return (
		<>
			{props.show ? (
				<div className="absolute flex justify-center items-center z-10 w-screen h-screen bg-black bg-opacity-30">
					<div className="relative flex flex-col justify-between z-20 space-y-5 w-102 rounded shadow-xl p-6 bg-white">
						<button onClick={() => props.set(current => !current)}>
							<CloseIcon className="absolute z-40 top-0 right-0 m-3 opacity-50 hover:bg-blue-400 rounded-full p-1" />
						</button>
						<div>
							<h1 className="font-bold tracking-tight">{props.title}</h1>
							<h2 className="font-normal text-sm my-2 text-gray-500">{props.description}</h2>
						</div>
						<div className="space-y-4">
							{props.fields.map((field) => {
								return (
									<fieldset class="flex w-full space-x-3 justify-items-center items-center text-right">
										<label for={field.name} className="w-3/12 font-light text-blue-500">{field.label}</label>
										<input
											id={field.name}
											placeholder={field.placeholder}
											className="outline-none w-9/12 h-10 pl-2 py-4 sm:text-sm border-solid border focus:border-2 border-blue-500 rounded-md">
											</input>
									</fieldset>
								);
							})}
						</div>
						<button
							className="inline-flex justify-center py-1.5 px-3 bg-green-300 text-sm rounded text-green-800 font-medium float-right self-end">
								Save changes
						</button>
					</div>
				</div>
			): null}
		</>
	);
}