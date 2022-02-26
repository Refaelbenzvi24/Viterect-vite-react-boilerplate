function SelectWithLabel() {
	return (
		<label className="text-gray-700" htmlFor="animals">
			Animals
			<select
				id="animals"
				className="block w-52 py-2 px-3 border border-gray-300 bg-white
		          rounded-md shadow-sm focus:outline-none focus:ring-transparent focus:border-gray-400"
			>
				<option value="">Select an option</option>
			</select>
		</label>
	)
}

export default SelectWithLabel
