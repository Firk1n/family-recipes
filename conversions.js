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
    'מים': 240, 'מים חמימים': 240, 'מיץ לימון': 240, 'מיץ תפוזים': 240, 'חומץ': 240, 'water': 240, 'lemon juice': 240, 'orange juice': 240, 'vinegar': 240,
    'ריבה': 330, 'jam': 330,
    'שמן': 200, 'שמן זית': 200, 'שמן קנולה': 200, 'שמן צמחי': 200, 'שמן חמניות': 200, 'oil': 200, 'olive oil': 200, 'canola oil': 200,
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
    'קקאו': 140, 'cocoa': 140, 'cocoa powder': 140,
    'שמרים': 160, 'yeast': 160,
    'סולת': 200, 'semolina': 200,
    'אגוזים קצוצים': 125, 'chopped nuts': 125,
    'אגוזי מלך קצוצים': 125, 'chopped walnuts': 125,
    'אגוזי לוז גרוסים גס וקלויים קלות': 125,
    'שקדים קצוצים': 125, 'chopped almonds': 125,
    'בזיליקום': 45, 'basil': 45,
    'בצל': 135, 'onion': 135, 'chopped onion': 135,
    'בצל ירוק': 48, 'green onion': 48, 'scallions': 48,
    'כוסברה': 40, 'cilantro': 40, 'coriander': 40,
    'פטרוזיליה': 50, 'parsley': 50,
    'נענע': 22, 'mint': 22,
    'פסטה': 146, 'pasta': 146,
    'שעועית לבנה': 188, 'white beans': 188,
    'תפוח אדמה': 135, 'potato': 135, 'potatoes': 135, 
    'גרעיני תירס': 175, 'תירס': 175, 'corn': 175, 'corn kernels': 175,
    'גרעיני דלעת': 135, 'pumpkin seeds': 135,
    'סלט טחינה': 150, 'tahini salad': 150, 'prepared tahini': 150,
    'פפריקה': 102, 'paprika': 102,
    'צימוקים': 150, 'raisins': 150,
    'שומשום': 140, 'sesame': 140, 'sesame seeds': 140,
    'שיבולת שועל': 125, 'oats': 125, 'oatmeal': 125,
    'קמח מצה': 140, 'קמח מצה דק': 140, 'קמח מצה דק לעוגות': 140, 'matzah flour': 140, 'matzah cake flour': 140,
    'קמח תפוחי אדמה': 140, 'potato flour': 140, 'potato starch': 140,
    'סוכר דמררה': 180, 'סוכר חום דמררה': 180, 'demerara sugar': 180,
    'סוכר חום דחוס': 240, 'packed brown sugar': 240,
    'שוקולית': 120, 'chocolate drink powder': 120,
    'שוקולד צ\'יפס': 200, 'chocolate chips': 200, 'נטיפי שוקולד': 200,
};

// 3. Specific Unit Overrides (Data Definitions)
const DATA_TBS = { // Tablespoon weights
    'קמח': 10, 'קמח לבן': 10, 'קמח תופח': 10, 'flour': 10,
    'קמח מלא': 8, 'whole wheat flour': 8,
    'קורנפלור': 10, 'cornstarch': 10,
    'סוכר': 12, 'סוכר לבן': 12, 'sugar': 12, 
    'סוכר חום': 15, 'brown sugar': 15,
    'אבקת סוכר': 8, 'powdered sugar': 8,
    'קקאו': 10, 'cocoa': 10,
    'מלח': 20, 'salt': 20,
    'אבקת אפייה': 8, 'baking powder': 8,
    'סודה לשתייה': 8, 'baking soda': 8,
    'שמרים': 10, 'yeast': 10,
    'קפה נמס': 10, 'קפה מגורען': 10, 'קפה': 10, 'instant coffee': 10, 'coffee': 10,
    'בזיליקום': 3, 'basil': 3,
    'בצל': 17, 'onion': 17,
    'בצל ירוק': 5, 'green onion': 5, 'scallions': 5,
    'כוסברה': 5, 'cilantro': 5, 'coriander': 5,
    'פטרוזיליה': 5, 'parsley': 5,
    'רסק עגבניות': 17, 'tomato paste': 17,
    'שום': 12, 'garlic': 12,
    'שמיר': 9, 'dill': 9,
    'שעועית לבנה': 22, 'white beans': 22,
    'תימין': 2, 'thyme': 2,
    'תפוח אדמה': 26, 'potato': 26,
    'גבינה לבנה': 20, 'white cheese': 20, 'soft cheese': 20,
    'שמרים יבשים': 11, 'dry yeast': 11,
    'אגוז מוסקט': 6, 'nutmeg': 6,
    'אגוזי מלך': 18, 'walnuts': 18,
    'אורגנו': 3, 'oregano': 3, 
    'גרעיני דלעת': 12, 'pumpkin seeds': 12,
    'גרעיני תירס': 18, 'corn': 18,
    'דבש': 22, 'honey': 22, 
    'זעתר': 8, 'zaatar': 8, 'za\'atar': 8,
    'נענע': 3, 'mint': 3,
    'סירופ שוקולד': 15, 'סירופ מייפל': 15, 'chocolate syrup': 15, 'maple syrup': 15,
    'סלט חומוס': 42, 'hummus': 42,
    'סלט טחינה': 15, 'tahini salad': 15,
    'פירורי לחם': 11, 'breadcrumbs': 11,
    'פלפל שחור': 7, 'black pepper': 7, 'pepper': 7,
    'פפריקה': 6, 'paprika': 6,
    'צימוקים': 21, 'raisins': 21,
    'קוקוס': 6, 'coconut': 6,
    'קינמון': 7, 'cinnamon': 7,
    'ריבה': 30, 'jam': 30,
    'שומשום': 12, 'sesame': 12,
    'שיבולת שועל': 11, 'oats': 11,
    'שקדים': 15, 'almonds': 15,

    // --- NEW ADDITIONS ---
    'סוכר חום קלאסי': 15, 'classic brown sugar': 15
};

const DATA_TSP = { // Teaspoon weights
    // Existing
    'מלח': 6, 'salt': 6,
    'אבקת אפייה': 3, 'baking powder': 3,
    'סודה לשתייה': 3, 'baking soda': 3,
    'סוכר וניל': 3, 'vanilla sugar': 3,
    'קפה נמס': 5, 'קפה מגורען': 5, 'קפה': 5, 'coffee': 5,
    'בזיליקום': 1, 'basil': 1,
    'בצל': 11, 'onion': 11, // Chopped avg
    'בצל ירוק': 2, 'green onion': 2,
    'כוסברה': 3, 'cilantro': 3,
    'פטרוזיליה': 2, 'parsley': 2,
    'רסק עגבניות': 6, 'tomato paste': 6,
    'שום': 7, 'garlic': 7,
    'שמיר': 3, 'dill': 3,
    'שעועית לבנה': 7, 'white beans': 7,
    'תימין': 1, 'thyme': 1,
    'תפוח אדמה': 14, 'potato': 14,
    'גבינה לבנה': 9, 'white cheese': 9,
    'שמרים יבשים': 3, 'dry yeast': 3,
    'אגוז מוסקט': 2.5, 'nutmeg': 2.5,
    'אגוזי מלך': 7, 'walnuts': 7,
    'אורגנו': 1, 'oregano': 1,
    'גרעיני דלעת': 6, 'pumpkin seeds': 6,
    'גרעיני תירס': 10, 'corn': 10,
    'דבש': 9, 'honey': 9,
    'זעתר': 4, 'zaatar': 4,
    'נענע': 1, 'mint': 1,
    'סירופ שוקולד': 6, 'סירופ מייפל': 6, 'chocolate syrup': 6, 'maple syrup': 6,
    'סלט חומוס': 16, 'hummus': 16,
    'סלט טחינה': 5, 'tahini salad': 5,
    'פירורי לחם': 4, 'breadcrumbs': 4,
    'פלפל שחור': 2, 'black pepper': 2, 'pepper': 2,
    'פפריקה': 3, 'paprika': 3,
    'צימוקים': 8, 'raisins': 8,
    'קוקוס': 3, 'coconut': 3,
    'קינמון': 3, 'cinnamon': 3,
    'ריבה': 14, 'jam': 14,
    'שומשום': 6, 'sesame': 6,
    'שיבולת שועל': 5, 'oats': 5,
    'שקדים': 8, 'almonds': 8,
    
    // --- NEW ADDITIONS ---
    'קקאו': 3, 'cocoa': 3
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

const DATA_CUP_CONTAINER = { // Sour cream / Yogurt / Cheese
    'שמנת חמוצה': { weight: 185, volume: 200, volUnit: 'מ"ל' },
    'יוגורט': { weight: 200, volume: 200, volUnit: 'מ"ל' },
    'sour cream': { weight: 185, volume: 200, volUnit: 'ml' },
    'yogurt': { weight: 200, volume: 200, volUnit: 'ml' },
    // New
    'גבינה לבנה': 250, 'white cheese': 250,
    'שמנת': 250, 'cream': 250
};

const DATA_PACK = { // Butter
    'חמאה': 200, 'butter': 200
};

const DATA_CAN = { // Canned liquids
    'חלב קוקוס': { weight: 400, volume: 400, volUnit: 'מ"ל' },
    'coconut milk': { weight: 400, volume: 400, volUnit: 'ml' }
};

// --- NEW DATA CATEGORIES FOR NATURAL UNITS ---

const DATA_CLOVE = {
    'שום': 7, 'garlic': 7
};

const DATA_HEAD = {
    'שום': 72, 'garlic': 72
};

const DATA_STALK = {
    'בזיליקום': 2, 'basil': 2,
    'כוסברה': 3, 'cilantro': 3,
    'פטרוזיליה': 10, 'parsley': 10, 
    'שמיר': 2, 'dill': 2,
    'תימין': 1, 'thyme': 1,
    'נענע': 3, 'mint': 3
};

const DATA_BUNCH = {
    'בזיליקום': 130, 'basil': 130,
    'בצל ירוק': 140, 'green onion': 140,
    'כוסברה': 92, 'cilantro': 92,
    'פטרוזיליה': 114, 'parsley': 114,
    'שמיר': 80, 'dill': 80,
    'נענע': 138, 'mint': 138
};

const DATA_HANDFUL = {
    'בזיליקום': 6, 'basil': 6,
    'בצל': 35, 'onion': 35,
    'כוסברה': 10, 'cilantro': 10,
    'פטרוזיליה': 15, 'parsley': 15,
    'שעועית לבנה': 40, 'white beans': 40,
    'תפוח אדמה': 62, 'potato': 62,
    'אגוזי מלך': 18, 'walnuts': 18,
    'גרעיני דלעת': 23, 'pumpkin seeds': 23,
    'נענע': 8, 'mint': 8,
    'פפריקה': 10, 'paprika': 10,
    'צימוקים': 38, 'raisins': 38,
    'שומשום': 16, 'sesame': 16,
    'שיבולת שועל': 19, 'oats': 19,
    'שקדים': 29, 'almonds': 29
};

const DATA_PINCH = {
    'אגוז מוסקט': 1, 'nutmeg': 1,
    'זעתר': 1, 'zaatar': 1,
    'מלח': 2, 'salt': 2,
    'פלפל שחור': 0.5, 'black pepper': 0.5,
    'פפריקה': 1, 'paprika': 1,
    'קינמון': 1, 'cinnamon': 1
};

// Single Units (Small/Medium/Large logic)
// Logic: keys include the specific item name with size adjective if necessary
const DATA_UNIT_ITEM = {
    // Onion
    'בצל': 125, 'onion': 125,
    'בצל קטן': 63, 'small onion': 63,
    'בצל בינוני': 125, 'medium onion': 125,
    'בצל גדול': 322, 'large onion': 322,
    
    // Green Onion
    'בצל ירוק': 25, 'green onion': 25,
    'בצל ירוק קטן': 15, 'small green onion': 15,
    'בצל ירוק בינוני': 25, 'medium green onion': 25,
    'בצל ירוק גדול': 37, 'large green onion': 37,
    
    // Tomato
    'עגבניה': 172, 'tomato': 172,
    'עגבניה קטנה': 114, 'small tomato': 114,
    'עגבניה בינונית': 172, 'medium tomato': 172,
    'עגבניה גדולה': 230, 'large tomato': 230,
    
    // Parsley Root
    'שורש פטרוזיליה': 40, 'parsley root': 40,
    'שורש פטרוזיליה קטן': 28, 'small parsley root': 28,
    'שורש פטרוזיליה בינוני': 40, 'medium parsley root': 40,
    'שורש פטרוזיליה גדול': 64, 'large parsley root': 64,

    // Peppers
    'פלפל אדום': 185, 'red pepper': 185,
    'פלפל שושקה': 80, 'shushka pepper': 80,
    'פלפל אדום קטן': 110, 'small red pepper': 110,
    'פלפל אדום בינוני': 185, 'medium red pepper': 185,
    'פלפל אדום גדול': 289, 'large red pepper': 289,

    // Potato
    'תפוח אדמה': 169, 'potato': 169,
    'תפוח אדמה קטן': 77, 'small potato': 77,
    'תפוח אדמה בינוני': 169, 'medium potato': 169,
    'תפוח אדמה גדול': 322, 'large potato': 322,

    // Eggs
    'ביצה': 58, 'egg': 58,
    'ביצה s': 48, 'egg s': 48, 'small egg': 48,
    'ביצה m': 58, 'egg m': 58, 'medium egg': 58,
    'ביצה l': 68, 'egg l': 68, 'large egg': 68,
    'ביצה xl': 78, 'egg xl': 78, 'extra large egg': 78,
    'חלבון': 33, 'חלבון ביצה': 33, 'egg white': 33,
    'חלמון': 18, 'חלמון ביצה': 18, 'egg yolk': 18,

    // Meat/Chicken
    'אנטרקוט': 300, 'entrecote': 300, 'steak': 300,
    'אנטרקוט קטן': 200, 'small steak': 200,
    'אנטרקוט בינוני': 300, 'medium steak': 300,
    'אנטרקוט גדול': 400, 'large steak': 400,
    'אנטרקוט ענק': 500, 'huge steak': 500,
    'חזה עוף': 435, 'chicken breast': 435, 
    'כבד עוף': 64, 'chicken liver': 64,
    'אונה': 32, 'lobe': 32,
    'כרעי עוף': 235, 'chicken thigh': 235, 'chicken leg': 235, 

    // Others
    'מלפפון חמוץ': 28, 'pickled cucumber': 28, 'pickle': 28,
    'שקד': 1, 'almond': 1,
    'אגוז מלך': 5, 'walnut': 5
};


// 4. The Override Map (Linking aliases to data)
const UNIT_OVERRIDES = {
    'כף': DATA_TBS, 'כפות': DATA_TBS, 'tbsp': DATA_TBS, 'tablespoon': DATA_TBS,
    'כפית': DATA_TSP, 'כפיות': DATA_TSP, 'tsp': DATA_TSP, 'teaspoon': DATA_TSP,
    'שקית': DATA_BAG, 'שקיות': DATA_BAG, 'bag': DATA_BAG, 'sachet': DATA_BAG,
    'מיכל': DATA_CARTON, 'מיכלים': DATA_CARTON, 'carton': DATA_CARTON, 'container': DATA_CARTON,
    'גביע': DATA_CUP_CONTAINER, 'גביעים': DATA_CUP_CONTAINER, 'cup': DATA_CUP_CONTAINER,
    'חבילת': DATA_PACK, 'pack': DATA_PACK, 'package': DATA_PACK,
    'פחית': DATA_CAN, 'פחיות': DATA_CAN, 'can': DATA_CAN,
    
    // New Unit Types
    'שן': DATA_CLOVE, 'שיני': DATA_CLOVE, 'clove': DATA_CLOVE,
    'ראש': DATA_HEAD, 'head': DATA_HEAD,
    'גבעול': DATA_STALK, 'stalk': DATA_STALK,
    'צרור': DATA_BUNCH, 'bunch': DATA_BUNCH,
    'חופן': DATA_HANDFUL, 'handful': DATA_HANDFUL,
    'קורט': DATA_PINCH, 'pinch': DATA_PINCH,
    'יחידה': DATA_UNIT_ITEM, 'יחידות': DATA_UNIT_ITEM, 'unit': DATA_UNIT_ITEM, 'piece': DATA_UNIT_ITEM
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
        // We look for the item key within the map
        const specificItemKey = Object.keys(specificMap).find(k => itemLower.includes(k));
        if (specificItemKey) {
            const data = specificMap[specificItemKey];
            
            // Case A: Object with both Weight and Volume (e.g., Sweet Cream)
            if (typeof data === 'object') {
                const totalVol = Math.round(amount * data.volume);
                const totalWeight = Math.round(amount * data.weight);
                const volUnit = (lang === 'en' && data.volUnit === 'מ"ל') ? 'ml' : data.volUnit;
                return `${totalVol} ${volUnit} - ${totalWeight} ${weightLabel}`;
            }
            
            // Case B: Simple Weight
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