// --- CONVERSION DATA ---

// 1. Volume ratio: how many cups are in the given unit
const UNIT_TO_CUP = {
    'כוס': 1, 'כוסות': 1, 'cup': 1, 'cups': 1,
    'ספל': 1, 
    
    // Heaping/Full versions
    'כף גדושה': 0.125, 'כפות גדושות': 0.125, 'כף מלאה': 0.125, 
    'heaping tbsp': 0.125,
    'כפית גדושה': 0.0416, 'כפיות גדושות': 0.0416, 'כפית מלאה': 0.0416,
    'heaping tsp': 0.0416,
    
    'כף': 0.0625, 'כפות': 0.0625, 'tbsp': 0.0625, 'tablespoon': 0.0625,
    'כפית': 0.0208, 'כפיות': 0.0208, 'tsp': 0.0208, 'teaspoon': 0.0208,
    'ml': 0.00416, 'מ"ל': 0.00416, 'מיליליטר': 0.00416,
    'ליטר': 4.166, 'liter': 4.166
};

// 2. Weight in grams for 1 cup (240ml)
const GRAMS_PER_CUP = {
    'דבש': 360, 'סילאן': 360, 'honey': 360, 'silan': 360,
    'חמאה': 240, 'מחמאה': 240, 'butter': 240,
    'מים': 240, 'מיץ לימון': 240, 'מיץ תפוזים': 240, 'חומץ': 240, 'water': 240, 'lemon juice': 240, 'orange juice': 240, 'vinegar': 240,
    'ריבה': 330, 'jam': 330,
    'שמן': 200, 'שמן זית': 200, 'שמן קנולה': 200, 'שמן חמניות': 200, 'oil': 200, 'olive oil': 200, 'canola oil': 200,
    'חלב קוקוס': 240, 'coconut milk': 240,
    'ריבת חלב': 300, 'dulce de leche': 300,
    'ממרח שוקולד': 280, 'chocolate spread': 280,
    'חמאת בוטנים': 250, 'טחינה': 250, 'טחינה גולמית': 250, 'peanut butter': 250, 'tahini': 250,
    'ממרח לוטוס': 240, 'biscoff spread': 240,
    'ממרח תמרים': 300, 'date spread': 300,
    'חלב': 240, 'milk': 240,
    'אבקת סוכר': 120, 'powdered sugar': 120, 'icing sugar': 120,
    'אגוזים': 100, 'שקדים': 100, 'nuts': 100, 'almonds': 100,
    'אורז': 200, 'rice': 200,
    'מלח': 250, 'salt': 250,
    'סוכר': 200, 'סוכר לבן': 200, 'סוכר חום': 240, 'סוכר חום בהיר': 200, 'sugar': 200, 'white sugar': 200, 'brown sugar': 240,
    'סוכר וניל': 140, 'vanilla sugar': 140,
    'פירורי עוגיות': 110, 'ביסקוויטים': 110, 'פתי בר': 110, 'cookie crumbs': 110, 'biscuits': 110,
    'פירורי לחם': 125, 'breadcrumbs': 125,
    'פירות יבשים': 150, 'dried fruit': 150,
    'פרג': 70, 'poppy seeds': 70,
    'קוקוס': 100, 'coconut': 100,
    'קורנפלור': 140, 'cornstarch': 140, 'cornflower': 140,
    'קמח': 140, 'קמח לבן': 140, 'קמח תופח': 140, 'flour': 140, 'white flour': 140, 'self-rising flour': 140, 'all-purpose flour': 140,
    'קמח מלא': 125, 'whole wheat flour': 125,
    'קקאו': 100, 'cocoa': 100, 'cocoa powder': 100,
    'שמרים': 160, 'yeast': 160,
    'סולת': 200, 'semolina': 200,
    'אגוזים קצוצים': 125, 'chopped nuts': 125,
    'אגוזי מלך קצוצים': 125, 'chopped walnuts': 125,
    'אגוזי לוז גרוסים גס וקלויים קלות': 125,
    'שקדים קצוצים': 125, 'chopped almonds': 125
};

// 3. Specific Unit Overrides (Data Definitions)
const DATA_TBS = { // Tablespoon weights
    'קמח': 10, 'קמח לבן': 10, 'קמח תופח': 10, 'flour': 10,
    'קמח מלא': 8, 'whole wheat flour': 8,
    'קורנפלור': 10, 'cornstarch': 10,
    'סוכר': 12, 'סוכר לבן': 12, 'sugar': 12, 
    'סוכר חום': 15, 'brown sugar': 15,
    'אבקת סוכר': 8, 'powdered sugar': 8,
    'קקאו': 7, 'cocoa': 7,
    'מלח': 20, 'salt': 20,
    'אבקת אפייה': 8, 'baking powder': 8,
    'סודה לשתייה': 8, 'baking soda': 8,
    'שמרים': 10, 'yeast': 10,
    'קפה נמס': 10, 'קפה מגורען': 10, 'קפה': 10, 'instant coffee': 10, 'coffee': 10
};

const DATA_TSP = { // Teaspoon weights
    'מלח': 6, 'salt': 6,
    'אבקת אפייה': 3, 'baking powder': 3,
    'סודה לשתייה': 3, 'baking soda': 3,
    'סוכר וניל': 3, 'vanilla sugar': 3,
    'קפה נמס': 5, 'קפה מגורען': 5, 'קפה': 5, 'coffee': 5
};

const DATA_BAG = { // Sachets
    'אבקת אפייה': 10, 'baking powder': 10,
    'סוכר וניל': 10, 'vanilla sugar': 10,
    'סודה לשתייה': 10, 'baking soda': 10,
    'שמרים': 50, 'yeast': 50
};

const DATA_CARTON = { // Sweet/Cooking Cream
    'שמנת מתוקה': { weight: 210, volume: 250, volUnit: 'מ"ל' },
    'שמנת לבישול': { weight: 210, volume: 250, volUnit: 'מ"ל' },
    'heavy cream': { weight: 210, volume: 250, volUnit: 'ml' },
    'sweet cream': { weight: 210, volume: 250, volUnit: 'ml' }
};

const DATA_CUP_CONTAINER = { // Sour cream / Yogurt
    'שמנת חמוצה': { weight: 185, volume: 200, volUnit: 'מ"ל' },
    'יוגורט': { weight: 200, volume: 200, volUnit: 'מ"ל' },
    'sour cream': { weight: 185, volume: 200, volUnit: 'ml' },
    'yogurt': { weight: 200, volume: 200, volUnit: 'ml' }
};

const DATA_PACK = { // Butter
    'חמאה': 200, 'butter': 200
};

const DATA_CAN = { // Canned liquids
    'חלב קוקוס': { weight: 400, volume: 400, volUnit: 'מ"ל' },
    'coconut milk': { weight: 400, volume: 400, volUnit: 'ml' }
};

// 4. The Override Map (Linking aliases to data)
const UNIT_OVERRIDES = {
    'כף': DATA_TBS, 'כפות': DATA_TBS, 'tbsp': DATA_TBS, 'tablespoon': DATA_TBS,
    'כפית': DATA_TSP, 'כפיות': DATA_TSP, 'tsp': DATA_TSP, 'teaspoon': DATA_TSP,
    'שקית': DATA_BAG, 'שקיות': DATA_BAG, 'bag': DATA_BAG, 'sachet': DATA_BAG,
    'מיכל': DATA_CARTON, 'מיכלים': DATA_CARTON, 'carton': DATA_CARTON, 'container': DATA_CARTON,
    'גביע': DATA_CUP_CONTAINER, 'גביעים': DATA_CUP_CONTAINER, 'cup': DATA_CUP_CONTAINER,
    'חבילת': DATA_PACK, 'pack': DATA_PACK, 'package': DATA_PACK,
    'פחית': DATA_CAN, 'פחיות': DATA_CAN, 'can': DATA_CAN
};

// --- CONVERSION LOGIC ---
function getConversion(amount, unit, item, lang = 'he') {
    if (!amount || !unit || !item) return null;
    
    // Define output labels based on language
    const weightLabel = lang === 'en' ? 'g' : 'גרם';
    const kgLabel = lang === 'en' ? 'kg' : 'ק"ג';
    const mlLabel = lang === 'en' ? 'ml' : 'מ"ל';

    const unitLower = unit.toLowerCase();
    const itemLower = item.toLowerCase();

    // 1. Check for Specific Unit Overrides
    const specificUnitKey = Object.keys(UNIT_OVERRIDES).find(k => unitLower.includes(k));
    if (specificUnitKey) {
        const specificMap = UNIT_OVERRIDES[specificUnitKey];
        const specificItemKey = Object.keys(specificMap).find(k => itemLower.includes(k));
        if (specificItemKey) {
            const data = specificMap[specificItemKey];
            
            // Case A: Object with both Weight and Volume (e.g., Sweet Cream)
            if (typeof data === 'object') {
                const totalVol = Math.round(amount * data.volume);
                const totalWeight = Math.round(amount * data.weight);
                // Adjust volume unit for language if needed (though definition usually has it hardcoded)
                // For simplicity, we use the defined volUnit or switch if we can match it
                const volUnit = (lang === 'en' && data.volUnit === 'מ"ל') ? 'ml' : data.volUnit;
                return `${totalVol} ${volUnit} - ${totalWeight} ${weightLabel}`;
            }
            
            // Case B: Simple Weight (e.g., Flour in tbsp)
            const weightPerUnit = data;
            const totalWeight = Math.round(amount * weightPerUnit);
            if (totalWeight >= 1000) return (totalWeight / 1000).toFixed(2) + ' ' + kgLabel;
            return totalWeight + ' ' + weightLabel;
        }
    }

    // 2. Standard Cup-based Logic (Fallback)
    const unitKey = Object.keys(UNIT_TO_CUP).find(k => unitLower.includes(k));
    const itemKey = Object.keys(GRAMS_PER_CUP).find(k => itemLower.includes(k));
    
    if (unitKey && itemKey) {
        const cupRatio = UNIT_TO_CUP[unitKey];
        const weightPerCup = GRAMS_PER_CUP[itemKey];
        const totalWeight = Math.round(amount * cupRatio * weightPerCup);
        
        if (totalWeight >= 1000) {
             return (totalWeight / 1000).toFixed(2) + ' ' + kgLabel;
        }
        return totalWeight + ' ' + weightLabel;
    }
    return null;
}