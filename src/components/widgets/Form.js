import React from "react";

export function InputField({ label, type, placeholder, inputRef }) {
	return (
		<div className="input-field-container">
			<label>{label}</label>
			<input type={type} placeholder={placeholder} ref={inputRef} />
		</div>
	);
}
export function MultipleDigitsInput({
	inputRef,
	label = "",
	type = "number",
	placeholder = "_",
}) {
	return (
		<div className="flex flex-col">
			<label className="my-2 text-green-900 focus:text-green-300 text-sm ">
				{label}
			</label>
			<div className="flex flex-row">
				{inputRef.current.map((currentRef, i) => (
					<input
						key={i}
						ref={currentRef}
						placeholder={placeholder}
						className={`multiple-digits-input bg-blue-800 text-white p-3 border rounded-md flex-1 w-1/6 text-center
						${i === 0 ? "mr-2" : i === inputRef.current.length - 1 ? "ml-2" : "mx-2"}`}
						type={type}
						onChange={() => {
							if (currentRef.current.value === "" && i !== 0) {
								inputRef.current[i - 1].current.focus();
							}
							if (
								currentRef.current.value !== "" &&
								i !== inputRef.current.length - 1
							) {
								inputRef.current[i + 1].current.focus();
							}
						}}
					/>
				))}
			</div>
		</div>
	);
}
export function SelectOptions({ label, placeholder, selectRef, options }) {
	return (
		<div className="input-field-container">
			<label>{label}</label>
			<select ref={selectRef}>
				<option disabled value="">
					{placeholder}
				</option>
				{options.map((item) => (
					<option value={item}>{item}</option>
				))}
			</select>
		</div>
	);
}
