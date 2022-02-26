/**
 * convert a string to html element id.
 * Example: "hello world" => "hello-world"
 * @param id
 */
export const convertToElId = (id: string): string => id.replace(/[^\dA-Za-z]/g, '-')
	.toLowerCase()


export default {}
