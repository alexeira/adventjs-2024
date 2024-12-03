function createFrame(names: string[]): string {
	const longestName =
		[...names].sort((a, b) => b.length - a.length)[0].length + 1;
	const asterisk = "*";
	const margin = asterisk.repeat(longestName + 3);
	const goodBoys = names.map((name) => {
		const space = " ".repeat(longestName - name.length);

		return `${asterisk} ${name}${space}${asterisk}`;
	});

	return `${margin}\n${goodBoys.join("\n")}\n${margin}`;
}
