export const convertToElId = (id: string): string => {
	return id.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
}
