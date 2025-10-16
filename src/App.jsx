import React, { useState } from "react";

// The logo is now an image.
const MistLogo = () => (
	<div className="h-10 w-auto">
		<img
			src="../img/logo.png"
			alt="MIST Logo"
			className="h-full w-full object-contain"
		/>
	</div>
);

// Main Application Component
export default function App() {
	// State for form inputs
	const [name, setName] = useState("");
	const [regNumber, setRegNumber] = useState("");
	const [birthday, setBirthday] = useState("");
	const [webdevChoice, setWebdevChoice] = useState(null); // null, 'yes', or 'no'

	// State for validation errors
	const [errors, setErrors] = useState({
		name: "",
		regNumber: "",
	});

	// --- Validation Handlers ---
	const validateName = (value) => {
		if (value && !/^[A-Za-z\s]+$/.test(value)) {
			setErrors((prev) => ({
				...prev,
				name: "Name should only contain letters and spaces.",
			}));
		} else {
			setErrors((prev) => ({ ...prev, name: "" }));
		}
	};

	const validateRegNumber = (value) => {
		if (value && !/^\d{9}$/.test(value)) {
			setErrors((prev) => ({
				...prev,
				regNumber: "Registration number must be exactly 9 digits.",
			}));
		} else {
			// Corrected this line to clear the regNumber error instead of the name error
			setErrors((prev) => ({ ...prev, regNumber: "" }));
		}
	};

	// --- Event Handlers ---
	const handleNameChange = (e) => {
		setName(e.target.value);
		validateName(e.target.value);
	};

	const handleRegNumberChange = (e) => {
		setRegNumber(e.target.value);
		validateRegNumber(e.target.value);
	};

	// --- Helper function to format date ---
	const formatBirthday = (dateString) => {
		if (!dateString) return "DD/MM/YYYY";
		const [year, month, day] = dateString.split("-");
		return `${day}/${month}/${year}`;
	};

	return (
		<div className="bg-black min-h-screen text-white font-sans p-4 sm:p-8">
			<header className="flex justify-between items-center mb-8">
				<MistLogo />
				<div className="text-right text-sm text-gray-400">
					<p>Name, Reg Number, Contact Number of person submitting</p>
				</div>
			</header>

			<main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Left Side: Input Form */}
				<div className="flex flex-col space-y-8 p-4">
					{/* Name Input */}
					<div>
						<label htmlFor="name" className="block text-lg mb-1">
							Enter Name
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={handleNameChange}
							className={`w-full p-3 bg-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400 ${
								errors.name ? "ring-2 ring-red-500" : ""
							}`}
						/>
						{errors.name && (
							<p className="text-red-400 mt-1 text-sm">
								{errors.name}
							</p>
						)}
					</div>

					{/* Registration Number Input */}
					<div>
						<label
							htmlFor="regNumber"
							className="block text-lg mb-1"
						>
							Enter Reg Number
						</label>
						<input
							type="text"
							id="regNumber"
							value={regNumber}
							onChange={handleRegNumberChange}
							maxLength="9"
							className={`w-full p-3 bg-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400 ${
								errors.regNumber ? "ring-2 ring-red-500" : ""
							}`}
						/>
						{errors.regNumber && (
							<p className="text-red-400 mt-1 text-sm">
								{errors.regNumber}
							</p>
						)}
					</div>

					{/* Birthday Input */}
					<div>
						<label
							htmlFor="birthday"
							className="block text-lg mb-1"
						>
							Enter birthday
						</label>
						<input
							type="date"
							id="birthday"
							value={birthday}
							onChange={(e) => setBirthday(e.target.value)}
							className="w-full p-3 bg-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</div>

					{/* Webdev Choice */}
					<div>
						<p className="text-lg mb-1">
							Is webdev the best domain? :)
						</p>
						<div className="flex space-x-4">
							<button
								onClick={() => setWebdevChoice("yes")}
								className={`w-24 h-12 rounded-md transition-all duration-300 bg-green-500 ${
									webdevChoice === "yes"
										? "opacity-100 ring-2 ring-white"
										: "opacity-50"
								}`}
								aria-label="Choose Yes"
							></button>
							<button
								onClick={() => setWebdevChoice("no")}
								className={`w-24 h-12 rounded-md transition-all duration-300 bg-red-500  ${
									webdevChoice === "no"
										? "opacity-100 ring-2 ring-white"
										: "opacity-50"
								}`}
								aria-label="Choose No"
							></button>
						</div>
					</div>
				</div>

				{/* Right Side: Display Sheet */}
				<div className="bg-white text-black rounded-lg p-8 shadow-2xl h-fit">
					<h2 className="text-2xl font-bold mb-8 text-center text-gray-700">
						MIST Mancomm Member 69
					</h2>

					<div className="space-y-6 text-lg">
						<p>
							<span className="font-semibold">My name is:</span>{" "}
							{name || "..."}
						</p>
						<p>
							<span className="font-semibold">
								My registration number is:
							</span>{" "}
							{regNumber || "..."}
						</p>
						<p>
							<span className="font-semibold">
								My birthday is on:
							</span>{" "}
							{formatBirthday(birthday)}
						</p>
					</div>

					<div className="mt-10 text-center">
						<p className="text-lg font-semibold mb-4">
							Is webdev the best domain? :)
						</p>
						<div className="flex flex-col items-center space-y-4">
							{webdevChoice !== "no" && (
								<div
									className={`w-full p-4 rounded-lg text-xl font-bold text-white transition-opacity duration-500 bg-green-500 ${
										webdevChoice === "yes"
											? "opacity-100"
											: "opacity-50"
									}`}
								>
									YES
								</div>
							)}
							{webdevChoice !== "yes" && (
								<div
									className={`w-full p-4 rounded-lg text-xl font-bold text-white transition-opacity duration-500 bg-red-500 ${
										webdevChoice === "no"
											? "opacity-100"
											: "opacity-50"
									}`}
								>
									NO
								</div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
