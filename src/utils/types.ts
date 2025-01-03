export type Nutrients = {
	ENERC_KCAL: number;
};

export type Food = {
	label: string;
	brand: string;
	foodId: string;
	nutrients: Nutrients;
};

export type FoodItem = {
	food: Food;
};

export type SearchResult = {
	search: {
		text: string;
		hints: FoodItem[];
	};
};

export type FoodLogItem = {
	id: string;
	label: string;
	food_id: string;
	kcal: number;
	user_id: string;
	created_at: string;
};
