type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(
	inventory: Inventory
): Record<string, Record<string, number>> {
	return inventory.reduce(
		(acc: Record<string, Record<string, number>>, item) => {
			const { name, category, quantity } = item;

			if (!acc[category]) {
				acc[category] = {};
			}

			if (!acc[category][name]) {
				acc[category][name] = 0;
			}

			acc[category][name] += quantity;

			return acc;
		},
		{}
	);
}
