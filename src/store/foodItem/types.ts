export interface FoodItem {
    readonly name: string;
    readonly brand: string;
    readonly servingAmount: number | undefined;
    readonly packageAmount: number;
    readonly calories: number;
    readonly carbohydrate: number;
    readonly fat: number;
    readonly protein: number;
  }

export const isFoodItem = (item: unknown): item is FoodItem => {
    if (typeof item !== 'object' || item === null || Array.isArray(item)) {
        return false;
    }
    
    const foodItem = item as FoodItem;

    return (
        typeof foodItem.name === 'string' &&
        foodItem.name !== '' &&
        typeof foodItem.brand === 'string' &&
        foodItem.brand !== '' &&
        (typeof foodItem.servingAmount === 'number' || typeof foodItem.servingAmount === 'undefined') &&
        typeof foodItem.packageAmount === 'number' &&
        typeof foodItem.calories === 'number' &&
        typeof foodItem.carbohydrate === 'number' &&
        typeof foodItem.fat === 'number' &&
        typeof foodItem.protein === 'number'
    );
}
   