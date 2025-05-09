function formatString(input: string, toUpper?: boolean): string {
	if (toUpper === true || toUpper === undefined) return input.toUpperCase();
	else return input.toLocaleLowerCase();
}

function filterByRating(
	items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
	// using array filter method to get the desired items with rating of 4 or more
	return items.filter((singleItem) => {
		return singleItem.rating >= 4;
	});
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
	let concatenatedArray: T[] = [];
	arrays.map((singleArray) => {
		concatenatedArray = [...concatenatedArray, ...singleArray];
	});

	return concatenatedArray;
}
