function choice(items) {
	return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
	// let removeItem = items.findIndex((element) => element === item);
	// return removeItem !== -1 ? items.splice(removeItem, 1) : undefined;

	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			return [ ...items.slice(0, i), ...items.slice(i + 1) ];
		}
	}
}

export { choice, remove };
