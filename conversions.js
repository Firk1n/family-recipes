// --- CONVERSION DATA ---

// 1. Volume ratio: how many cups are in the given unit
const UNIT_TO_CUP = {
    'כוס': 1, 'כוסות': 1,
    'ספל': 1, 
    
    // Heaping/Full versions
    'כף גדושה': 0.125, 'כפות גדושות': 0.125, 'כף מלאה': 0.125, 
    'כפית גדושה': 0.0416, 'כפיות גדושות': 0.0416, 'כפית מלאה': 0.0416,
    
    'כף': 0.0625, 'כפות': 0.0625, // 15ml / 240ml
    'כפית': 0.0208, 'כפיות': 0.0208, // 5ml / 240ml
    'ml': 0.00416, 'מ"ל': 0.00416, 'מיליליטר': 0.00416,
    'ליטר': 4.166
};

// 2. Weight in grams for 1 cup (240ml)
const GRAMS_PER_CUP = {
    'דבש': 360, 'סילאן': 360,
    'חמאה': 240, 'מחמאה': 240,
    'מים': 240, 'מיץ לימון': 240, 'מיץ תפוזים': 240, 'חומץ': 240,
    'ריבה': 330,
    'שמן': 200, 'שמן זית': 200, 'שמן קנולה': 200, 'שמן חמניות': 200,
    'חלב קוקוס': 240, 
    'ריבת חלב': 300,
    'ממרח שוקולד': 280,
    'חמאת בוטנים': 250, 'טחינה': 250, 'טחינה גולמית': 250,
    'ממרח לוטוס': 240,
    'ממרח תמרים': 300,
    'חלב': 240,
    'אבקת סוכר': 120,
    'אגוזים': 100, 'שקדים': 100, 
    'אורז': 200, 
    'מלח': 250,
    'סוכר': 200, 'סוכר לבן': 200, 'סוכר חום': 240, 'סוכר חום בהיר': 200,
    'סוכר וניל': 140,
    'פירורי עוגיות': 110, 'ביסקוויטים': 110, 'פתי בר': 110,
    'פירורי לחם': 125,
    'פירות יבשים': 150,
    'פרג': 70,
    'קוקוס': 100,
    'קורנפלור': 140,
    'קמח': 140, 'קמח לבן': 140, 'קמח תופח': 140,
    'קמח מלא': 125,
    'קקאו': 100,
    'שמרים': 160,
    'סולת': 200,
	'אגוזים קצוצים': 125,
	'אגוזי מלך קצוצים': 125,
	'אגוזי לוז גרוסים גס וקלויים קלות': 125,
	'שקדים קצוצים': 125,
};

// 3. Specific Unit Overrides (Data Definitions)
// We define these separately so we can assign them to multiple aliases (singular/plural)

const DATA_TBS = { // Tablespoon weights
    'קמח': 10, 'קמח לבן': 10, 'קמח תופח': 10, 'קמח מלא': 8,
    'קורנפלור': 10,
    'סוכר': 12, 'סוכר לבן': 12, 'סוכר חום': 15,
    'אבקת סוכר': 8,
    'קקאו': 7, 
    'מלח': 20,
    'אבקת אפייה': 8,
    'סודה לשתייה': 8,
    'שמרים': 10,
	'קפה נמס': 10,
	'קפה מגורען': 10,
	'קפה': 10
};

const DATA_TSP = { // Teaspoon weights
    'מלח': 6,
    'אבקת אפייה': 3,
    'סודה לשתייה': 3,
    'סוכר וניל': 3,
	'קפה נמס': 5,
	'קפה מגורען': 5,
	'קפה': 5
};

const DATA_BAG = { // Sachets
    'אבקת אפייה': 10,
    'סוכר וניל': 10,
    'סודה לשתייה': 10,
    'שמרים': 50 
};

const DATA_CARTON = { // Sweet/Cooking Cream
    'שמנת מתוקה': { weight: 210, volume: 250, volUnit: 'מ"ל' },
    'שמנת לבישול': { weight: 210, volume: 250, volUnit: 'מ"ל' }
};

const DATA_CUP_CONTAINER = { // Sour cream / Yogurt
    'שמנת חמוצה': { weight: 185, volume: 200, volUnit: 'מ"ל' },
    'יוגורט': { weight: 200, volume: 200, volUnit: 'מ"ל' }
};

const DATA_PACK = { // Butter
    'חמאה': 200
};

const DATA_CAN = { // Canned liquids
    'חלב קוקוס': { weight: 400, volume: 400, volUnit: 'מ"ל' }
};

// 4. The Override Map (Linking aliases to data)
const UNIT_OVERRIDES = {
    'כף': DATA_TBS,
    'כפות': DATA_TBS,
    
    'כפית': DATA_TSP,
    'כפיות': DATA_TSP,
    
    'שקית': DATA_BAG,
    'שקיות': DATA_BAG,
    
    'מיכל': DATA_CARTON,
    'מיכלים': DATA_CARTON,
    
    'גביע': DATA_CUP_CONTAINER,
    'גביעים': DATA_CUP_CONTAINER,
    
    'חבילת': DATA_PACK,
    
    'פחית': DATA_CAN,
    'פחיות': DATA_CAN
};

// --- CONVERSION LOGIC ---
function getConversion(amount, unit, item) {
    if (!amount || !unit || !item) return null;
    
    // 1. Check for Specific Unit Overrides
    const specificUnitKey = Object.keys(UNIT_OVERRIDES).find(k => unit.includes(k));
    if (specificUnitKey) {
        const specificMap = UNIT_OVERRIDES[specificUnitKey];
        const specificItemKey = Object.keys(specificMap).find(k => item.includes(k));
        if (specificItemKey) {
            const data = specificMap[specificItemKey];
            
            // Case A: Object with both Weight and Volume (e.g., Sweet Cream)
            if (typeof data === 'object') {
                const totalVol = Math.round(amount * data.volume);
                const totalWeight = Math.round(amount * data.weight);
                return `${totalVol} ${data.volUnit} - ${totalWeight} גרם`;
            }
            
            // Case B: Simple Weight (e.g., Flour in tbsp)
            const weightPerUnit = data;
            const totalWeight = Math.round(amount * weightPerUnit);
            if (totalWeight >= 1000) return (totalWeight / 1000).toFixed(2) + ' ק"ג';
            return totalWeight + ' גרם';
        }
    }

    // 2. Standard Cup-based Logic (Fallback)
    const unitKey = Object.keys(UNIT_TO_CUP).find(k => unit.includes(k));
    const itemKey = Object.keys(GRAMS_PER_CUP).find(k => item.includes(k));
    
    if (unitKey && itemKey) {
        const cupRatio = UNIT_TO_CUP[unitKey];
        const weightPerCup = GRAMS_PER_CUP[itemKey];
        const totalWeight = Math.round(amount * cupRatio * weightPerCup);
        
        if (totalWeight >= 1000) {
             return (totalWeight / 1000).toFixed(2) + ' ק"ג';
        }
        return totalWeight + ' גרם';
    }
    return null;
}