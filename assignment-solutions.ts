function formatString(input: string, toUpper?: boolean): string {
	if (toUpper === true || toUpper === undefined) return input.toUpperCase();
	else return input.toLocaleLowerCase();
}
