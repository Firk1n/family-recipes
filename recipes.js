// recipes.js
const recipes = [
{
    id: "solet",
    title: "דייסת סולת",
    author: "סבתא ברטה",
    tags: [
        "חלבי",
        "קינוחים"
    ],
    image: "https://static.wixstatic.com/media/55beb2_e5030096adc6442696c67239ad4832aa~mv2.jpg/v1/fill/w_2077,h_1558,al_c,q_90/55beb2_e5030096adc6442696c67239ad4832aa~mv2.webp",
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "בסיס",
            items: [
                {
                    amount: 1,
                    unit: "כוסות",
                    item: "מים"
                },
                {
                    amount: 2,
                    unit: "כוסות",
                    item: "חלב"
                }
            ]
        },
        {
            sectionName: "סולת",
            items: [
                {
                    amount: 9,
                    unit: "כפיות מלאות",
                    item: "סולת"
                },
                {
                    amount: 0.5,
                    unit: "כוסות",
                    item: "חלב"
                }
            ]
        }
    ],
    instructions: "מביאים לרתיחה חלב עם מים (2/3 חלב 1/3 מים).\n\nבחצי כוס חלב ממיסים ומערבבים סולת (על כל כוס נוזלים 3 כפיות מלאות סולת). מערבבים היטב עד קבלת תערובת הומוגנית ללא גושים.\n\nעם רתיחת החלב מוסיפים את הסולת ומערבבים היטב למניעת גושים. מביאים לרתיחה ומנמיכים לאש קטנה עד להסמכת הדיסה\n\nאפשר להוסיף טעמים: אבקת שוקו, קינמון, וניל וכו'.\n"
},
{
    id: "tiramisu",
    title: "טירמיסו",
    author: "אופק",
    tags: [
        "חלבי",
        "עוגות"
    ],
    image: "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "קרם",
            items: [
                {
                    amount: 500,
                    unit: "גרם",
                    item: "מסקרפונה (עדיף 40%+ שומן)"
                },
                {
                    amount: 150,
                    unit: "גרם",
                    item: "אבקת סוכר"
                },
                {
                    amount: 5,
                    unit: "כפות",
                    item: "ברנדי\\מרסלה\\רום\\ויסקי"
                },
                {
                    amount: 1,
                    unit: "מיכל",
                    item: "שמנת מתוקה"
                },
                {
                    amount: 5,
                    unit: "",
                    item: "חלמונים"
                }
            ]
        },
        {
            sectionName: "ספוג",
            items: [
                {
                    amount: 400,
                    unit: "גרם",
                    item: "בישקוטים (עדיף איטלקטי)"
                },
                {
                    amount: 90,
                    unit: "מ\"ל",
                    item: "קפה חזק (3 מנות\\קפסולות)"
                },
                {
                    amount: 7,
                    unit: "כפות",
                    item: "ברנדי (או פחות, לפי הטעם)"
                },
                {
                    amount: 7,
                    unit: "כפות",
                    item: "קלואה (או פחות, לפי הטעם)"
                }
            ]
        },
        {
            sectionName: "למי שרוצה להכין בישקוטי - מומלץ, אבל לא חובה",
            items: [
                {
                    amount: 3,
                    unit: "",
                    item: "ביצה (טמפ' החדר)"
                },
                {
                    amount: 75,
                    unit: "גרם",
                    item: "סוכר"
                },
                {
                    amount: 95,
                    unit: "גרם",
                    item: "קמח (מנופה)"
                },
                {
                    amount: 2,
                    unit: "כפיות",
                    item: "קורנפלור"
                },
                {
                    amount: 50,
                    unit: "גרם",
                    item: "אבקת סוכר"
                }
            ]
        }
    ],
    instructions: "המתכון לפי תבנית סטנדרטית של 35X23\n\n<u>קרם:\n</u>\n1. שמים את החלמונים, הסוכר והליקר על בן מארי וטורפים ללא הפסקה, עד שהנוזל מסמיך ומקבל מרקם דומה לפודינג. זה לוקח כ 5-10 דקות.\n2. מקציפים את השמנת לקצפת קלה ןכמעט יציבה (אם מוציאים כף נשארת גבעה עם שפיץ).\n3. מוסיפים את המסקרפונה לקצפת ומקציפים עוד קצת עד שמתקבלת קצפת אחידה ויציבה. להיזהר לא להקציף יותר מדי, אנחנו לא רוצים להגיע למרקם של פבלובה.\n4. מקפלים את תערובת החלמונים לקרם. הוא יראה מעט זהוב ונוזלי, אבל מאוחר יותר הוא משנה את צבעו ללבן ומתייצב בקירור.\n\n<u>הרכבה:</u>\n- מערבבים את תערובת הקפה בקערה רחבה, טובלים כל עוגיה קלות בנוזל ושמים בתבנית עד שכל התחתית מכוסה. יש להיזהר לא לטבול יותר מדי. העוגיה לא צריכה להיות ספוגה לגמרי, אחרת תתפרק וישארו משקעי נוזל בתחתית התבנית.\n- מורחים שכבת קרם אחידה מעל העוגיות.\n- שכבת עוגיות נוספת.\n- שכבת קרם נוספת.\n- להשאיר לילה במקרר להתייצבות.\n- לפני ההגשה, מפזרים מעל אבקת קקאו באמצעות מסננת.\n\n<u>מתכון לבישקוטי:</u>\nהחומרים ל-24 בישקוטי גדולים או 45 קטנים (6-7.5 ס\"מ):\n\n<u>כלים:\n</u>\n2 תבניות אפייה, מרופדות בנייר אפייה משומן\n\nלינק: https://www.cookie-fairy.com/2011/11/daring-bakers_1012/\n\n<u>אופן ההכנה:\n</u>\nלחמם תנור לחום בינוני 180 מעלות. להפריד את הביצים, ולהקציף את החלבונים בקערת מערבל חשמלי לקצף יציב. להוסיף פנימה בהדרגה את הסוכר ולהמשיך להקציף עד לקבלת קצף מבריק וחלק. בקערה קטנה לטרוף חלמונים במזלג ולקפל אותם בעדינות אל המרנג בעזרת כף עץ. לנפות את הקמח והקורנפלור מעל התערובת, ולקפל אותם פנימה בעדינות רק עד לקבלת תערובת חלקה, יש לקפל את התערובת כמה שפחות, ממש רק עד שמתאחדת, כדי לשמור על האווריריות הגדולה של הבלילה."
},
{
    id: "pastel",
    title: "פשטל דה נאטה",
    author: "אופק",
    tags: [
        "חלבי",
        "קינוחים"
    ],
    image: "images/pastel.jpg",
    sourceUrl: "",
    ingredients: [
        {
			sectionName: "לתחתית",
			items: [
				{
					amount: 300,
        unit: "גרם",
        item: "בצק עלים מופשר, עדיף על בסיס חמאה"
				}
			]
        },
        {
            sectionName: "לסירופ",
            items: [
                {
                    amount: 0.3333333333333333,
                    unit: "כוס",
                    item: "מים"
                },
                {
                    amount: 1,
                    unit: "כוס",
                    item: "סוכר"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "מקל קינמון"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "קליפת לימון מקולפת (לא מגוררת)"
                }
            ]
        },
        {
            sectionName: "למלית",
            items: [
                {
                    amount: 1,
                    unit: "כוס",
                    item: "חלב"
                },
                {
                    amount: 3,
                    unit: "כפות",
                    item: "קמח"
                },
                {
                    amount: 6,
                    unit: "",
                    item: "חלמונים (L)"
                },
                {
                    amount: 1,
                    unit: "כפית",
                    item: "תמצית וניל"
                },
                {
                    amount: 0.25,
                    unit: "כוס",
                    item: "שמנת מתוקה"
                }
            ]
        },
        {
            sectionName: "ניתן להוסיף גם:",
            items: [
                {
                    amount: 1,
                    unit: "כף",
                    item: "ברנדי"
                },
                {
                    amount: 0.5,
                    unit: "כפית",
                    item: "קינמון טחון (צריך מסוג סיילון, אחרת גרוס גס מדי)"
                }
            ]
        }
    ],
    instructions: "המתכון לפי תבנית סטנדרטית של 35X23\n\nקרם:\n1. שמים את החלמונים, הסוכר והליקר על בן מארי וטורפים ללא הפסקה, עד שהנוזל מסמיך ומקבל מרקם דומה לפודינג. זה לוקח כ 5-10 דקות.\n2. מקציפים את השמנת לקצפת קלה ןכמעט יציבה (אם מוציאים כף נשארת גבעה עם שפיץ). \n3. מוסיפים את המסקרפונה לקצפת ומקציפים עוד קצת עד שמתקבלת קצפת אחידה ויציבה. להיזהר לא להקציף יותר מדי, אנחנו לא רוצים להגיע למרקם של פבלובה.\n4. מקפלים את תערובת החלמונים לקרם. הוא יראה מעט זהוב ונוזלי, אבל מאוחר יותר הוא משנה את צבעו ללבן ומתייצב בקירור. \n\nהרכבה:\n- מערבבים את תערובת הקפה בקערה רחבה, טובלים כל עוגיה קלות בנוזל ושמים בתבנית עד שכל התחתית מכוסה. יש להיזהר לא לטבול יותר מדי, העוגיה לא צריכה להיות נוזלית, אחרת תתפרק וישארו משקעי נוזל בתחתית התבנית.\n- מורחים שכבת קרם אחידה מעל העוגיות\n- שכבת עוגיות נוספת\n- שכבת קרם נוספת\n- להשאיר לילה במקרר להתייצבות. \n- לפני ההגשה, מפזרים מעל אבקת קקאו באמצעות מסננת.\n\nמתכון לבישקוטי: \nהחומרים ל-24 בישקוטי גדולים או 45 קטנים (6-7.5 ס\"מ):\n\nכלים:\n2 תבניות אפייה, מרופדות בנייר אפייה משומן\n\nלינק: https://www.cookie-fairy.com/2011/11/daring-bakers_1012/\n\nאופן ההכנה:\nלחמם תנור לחום בינוני 180 מעלות. להפריד את הביצים, ולהקציף את החלבונים בקערת מערבל חשמלי לקצף יציב. להוסיף פנימה בהדרגה את הסוכר ולהמשיך להקציף עד לקבלת קצף מבריק וחלק. בקערה קטנה לטרוף חלמונים במזלג ולקפל אותם בעדינות אל המרנג בעזרת כף עץ. לנפות את הקמח והקורנפלור מעל התערובת, ולקפל אותם פנימה בעדינות רק עד לקבלת תערובת חלקה, יש לקפל את התערובת כמה שפחות, ממש רק עד שמתאחדת, כדי לשמור על האווריריות הגדולה של הבלילה."
},
{
    id: "potato_salad",
    title: "סלט תפוחי אדמה בתנור",
    author: "אלי",
    tags: [
        "חלבי",
        "צמחוני",
		"סלטים"
    ],
    image: "",
    sourceUrl: "",
    ingredients: [
        {
            amount: 10,
            unit: "",
            item: "תפוחי אדמה (עדיף אדומים לטיגון)"
        },
        {
            amount: 5,
            unit: "כפות גדושות",
            item: "מיונז הלמנס"
        },
        {
            amount: 1,
            unit: "כפית גדושה",
            item: "חרדל דיז'ון"
        },
        {
            amount: 5,
            unit: "",
            item: "ביצים קשות"
        },
        {
            amount: 0.75,
            unit: "קופסא",
            item: "שימורי מלפפון חמוץ (קופסא בינונית)"
        },
        {
            amount: null,
            unit: "",
            item: "פלפל שחור"
        },
        {
            amount: null,
            unit: "",
            item: "שמן זית"
        },
        {
            amount: null,
            unit: "",
            item: "מלח גס"
        }
    ],
    instructions: "חותכים את תפוחי האדמה לחצי, ומסדרים בתבנית על נייר אפייה כאשר תפוחי האדמה שוכבים על החלק החתוך.\nמזלפים בנדיבות שמן זית ומוסיפים מלח גס.\nמכניסים לתנור בחום של 220 מעלות, עד שתפוחי האדמה מזהיבים (סמי חרוכים מלמטה).\nנותנים להם להתקרר מעט וחותכים חיתוך גס לקוביות.\nמוספים את הביצים הקשות (גם בחיתוך גס).\nמוסיפים את המלפפון החמוץ חתוך לפרוסות.\nמוסיפים את המיונז והחרדל ומעט פלפל שחור.\nמכניסים למקרר להצטננות קלה, \nובתיאבון"
},
{
    id: "coffee_tort",
    title: "טורט אגוזים וקפוצ'ינו",
    author: "(אופק) מיקי שמו",
    tags: [
        "חלבי",
        "עוגות"
    ],
    image: "images/coffee_tort.jpg",
    sourceUrl: "https://www.mako.co.il/food-recipes/recipes_column-hospitality/Recipe-c819d7f427a6331006.htm",
    ingredients: [
        {
            sectionName: "לטורט",
            items: [
                {
                    amount: 6,
                    unit: "",
                    item: "חלמונים (L)"
                },
                {
                    amount: 250,
                    unit: "גרם",
                    item: "סוכר"
                },
                {
                    amount: 2,
                    unit: "כוסות",
                    item: "אגוזי מלך קצוצים דק"
                },
                {
                    amount: 0.5,
                    unit: "כוס",
                    item: "קמח לבן"
                }
            ]
        },
        {
            sectionName: "לקצפת קפה",
            items: [
                {
                    amount: 2,
                    unit: "מיכלים",
                    item: "שמנת מתוקה"
                },
                {
                    amount: 0.5,
                    unit: "כוס",
                    item: "סוכר"
                },
                {
                    amount: 2,
                    unit: "כפיות",
                    item: "אבקת קפה נמס"
                }
            ]
        },
        {
            sectionName: "לציפוי",
            items: [
                {
                    amount: 1,
                    unit: "כוס",
                    item: "אגוזי לוז גרוסים גס וקלויים קלות"
                }
            ]
        }
    ],
    instructions: "כמות לתבנית עגולה 24\n\n1. מחממים תנור ל-160 מעלות.\n\n2. מכינים את הטורט: מקציפים חלבונים עם סוכר בקערת מיקסר כ-5 דקות במהירות בינונית לקצף יציב. מקפלים אגוזים וקמח בעזרת מרית לתערובת אחידה.\n\n3. מסמנים בעזרת עט או עיפרון 4 עיגולים בקוטר 22 ס”מ על 2 ניירות אפייה. הופכים את הניירות לצידם השני (כדי שהבצק לא יבוא במגע עם הסימון) ומניחים ב-2 תבניות תנור. מורחים בעזרת מרית 4 עיגולי בצק בקוטר הסימון ועובי כ-1/2 ס”מ.\n\n4. אופים כ-20 דקות עד הזהבה ומצננים היטב.\n\n5. מכינים את הקצפת: מקציפים שמנת מתוקה עם סוכר וקפה נמס לקצפת יציבה בגוון מוקה אחיד.\n\n6. מרכיבים את העוגה: מניחים שכבת טורט בתחתית תבנית קפיצית בקוטר 24 ס”מ ומורחים 1/4 מן המלית. מניחים שכבת טורט שנייה, דוחסים מעט ומורחים עוד 1/4 מן הקצפת. חוזרים על הפעולה עוד פעמיים. מפזרים אגוזי לוז, מכסים בניילון נצמד ומעבירים למקרר לשעתיים להתייצבות.\n\n7. מאחסנים מכוסה במקרר עד 3 ימים.\n\n<u>גיוונים</u>:\n\n• במקום אגוזי לוז משתמשים בבוטנים או בקוקוס טחון לציפוי העוגה.\n\n• מכינים רק 3 שכבות של בצק אגוזים מאותה כמות חומרים (הבצק יוצא יותר עבה) ומורחים ב-3 שכבות קצפת קפה עבות ומודגשות יותר."
},
{
    id: "earl_grey_cake",
    title: "עוגת ארל גריי",
    author: "אופק",
    tags: [
        "חלבי",
        "עוגות"
    ],
    image: "images/earl_grey_cake.jpg",
    sourceUrl: "https://www.haaretz.co.il/food/sweets/2020-08-14/ty-article-magazine/0000017f-f113-d8a1-a5ff-f19b62690000?utm_source=App_Share&utm_medium=Android_Native&utm_campaign=Share",
    ingredients: [
        {
            amount: 2,
            unit: "כוסות",
            item: "קמח לבן"
        },
        {
            amount: 1,
            unit: "כפית",
            item: "מלח"
        },
        {
            amount: 0.5,
            unit: "כפית",
            item: "אבקת אפיה"
        },
        {
            amount: 1,
            unit: "כפית",
            item: "סודה לשתייה"
        },
        {
            amount: 2,
            unit: "",
            item: "ביצים (L)"
        },
        {
            amount: 0.5,
            unit: "",
            item: "גרידה מלימון\\תפוז"
        },
        {
            amount: 200,
            unit: "גרם",
            item: "סוכר לבן"
        },
        {
            amount: 1,
            unit: "גביע",
            item: "יוגורט לא ממותק"
        },
        {
            amount: 0.25,
            unit: "כוס",
            item: "תה ארל גריי חזק בטמפ' החדר"
        },
        {
            amount: 26,
            unit: "גרם",
            item: "תה ארל גריי Twinings (או 13 תיונים מפורקים)"
        },
        {
            amount: 2,
            unit: "כפיות",
            item: "תמצית וניל"
        },
        {
            amount: 0.75,
            unit: "כוס",
            item: "שמן קנולה"
        },
        {
            sectionName: "לשכבת ביניים (לא חובה)",
            items: [
                {
                    amount: 2,
                    unit: "כפות",
                    item: "מייפל"
                }
            ]
        },
        {
            sectionName: "לפיזור מעל העוגה",
            items: [
                {
                    amount: 1,
                    unit: "כף",
                    item: "סוכר דמררה"
                }
            ]
        }
    ],
    instructions: "במקור זו עוגה של מיכל שמיר, שאחרי הרבה הכנות עשינו בה כמה שינויים.\n\nתבנית אינגליש קייק גדולה\n\n1. מחממים תנור ל-165 מעלות, ומשמנים את התבנית בשמן\\חמאה.\n2. מכינים 1/4 כוס תה ארל גריי, ונותנים לו לנוח עד שהוא מצטנן מעט (עם התיון בכוס), על מנת לקבל תה חזק מאוד.\n3. טורפים ביצים עם סוכר בקערה גדולה. טורפים את הביצים לפחות דקה, עד שהתערובת אוורירית ובצבע צהבהב בהיר.\n4. מערבבים את היבשים בקערה: קמח, מלח, אבקת אפייה ואבקת סודה לשתייה.\n5. מוסיפים לתערובת הביצים יוגורט, תה גרוס, התה שהכנו מראש, גרידת לימון\\תפוז ותמצית וניל. טורפים היטב עד שהכל מתאחד.\n6. מוסיפים שמן בהדרגה תוך כדי טריפה של התערובת.\n7. מוסיפים את תערובת החומרים היבשים ומערבבים עד לאיחודם בתערובת (לא יותר מדי).\n8. שופכים חצי מהבלילה לתבנית המשומנת.\n9. מפזרים מעל כמות נדיבה של מייפל.\n10. שופכים את שארית הבלילה, ומפזרים מעל סוכר דמררה.\n11. מכניסים לתנור החם לאפייה של כשעה, עד שקיסם הננעץ בעוגה יוצא נקי לגמרי.\n12. מניחים לעוגה להצטנן לחלוטין לפני שחותכים ממנה."
},{
    id: "sapir_cake",
    title: "העוגה של ספיר (עוגת שקדים שוודית)",
    author: "לייזה פאנלים",
    tags: [
        "חלבי",
        "עוגות"
    ],
    image: "images/sapir_cake.jpg",
    sourceUrl: "https://lizapanelim.com/%D7%A2%D7%95%D7%92%D7%AA-%D7%A9%D7%A7%D7%93%D7%99%D7%9D-%D7%A9%D7%95%D7%95%D7%93%D7%99%D7%AA/",
    ingredients: [
        {
            sectionName: "לבסיס",
            items: [
                {
                    amount: 1.5,
                    unit: "כוסות",
                    item: "קמח"
                },
                {
                    amount: 1,
                    unit: "כפית",
                    item: "אבקת אפייה"
                },
                {
                    amount: 3,
                    unit: "",
                    item: "ביצים"
                },
                {
                    amount: 100,
                    unit: "גרם",
                    item: "אבקת סוכר"
                },
                {
                    amount: 1,
                    unit: "כף",
                    item: "גרידת תפוז"
                },
                {
                    amount: 100,
                    unit: "מ\"ל",
                    item: "מיץ תפוזים"
                },
                {
                    amount: 200,
                    unit: "מ\"ל",
                    item: "יוגורט"
                },
                {
                    amount: 100,
                    unit: "גרם",
                    item: "חמאה מומסת"
                }
            ]
        },
        {
            sectionName: "לטופינג",
            items: [
                {
                    amount: 150,
                    unit: "גרם",
                    item: "שקדים פרוסים"
                },
                {
                    amount: 0.6666666666666666,
                    unit: "כוס",
                    item: "סוכר חום"
                },
                {
                    amount: 100,
                    unit: "גרם",
                    item: "חמאה"
                },
                {
                    amount: 0.125,
                    unit: "כפית",
                    item: "מלח"
                },
                {
                    amount: 0.25,
                    unit: "כוס",
                    item: "שמנת מתוקה"
                }
            ]
        }
    ],
    instructions: "נחמם תנור ל-170 מעלות\n\n<u>בסיס:</u>\n1. מערבבים לקצף תפוח ביצים ואבקת סוכר\n2. בקערה נפרדת מערבבים חמאה מומסת עם יוגורט, גרידה ומיץ תפוזים. \n3. מאחדים תערובות, ומנפים פנימה קמח ואבקת אפייה עד איחוד.\n4. מכניסים לתנור: 170 מעלות כ-25 דקות עד הזהבה קלה.\n\n<u>טופינג:</u> \n1. בסיר קטן ממיסים חמאה, סוכר חום ומלח. כשנמס מוסיפים שמנת מתוקה ומערבבים. \n2. מוסיפים לסיר שקדים פרוסים ומערבבים עד איחוד.\n3. דוקרים בעוגה חורים קטנים עם מזלג.\n4. יוצקים את נוזל השקדים הסמיך והחם על העוגה.\n\nמורידים את חום התנור ל 160 מעלות ואופים את העוגה עוד 15 דקות. \nמצננים היטב לפני הגשה, ובתיאבון! (:"
},{
    id: "marinated_eggplant",
    title: "חצילים בתחמיץ",
    author: "אופק",
    tags: [
        "צמחוני",
		"סלטים"
    ],
    image: "images/marinated_eggplant.jpg",
    sourceUrl: "https://lizapanelim.com/%D7%97%D7%A6%D7%99%D7%9C%D7%99%D7%9D-%D7%91%D7%AA%D7%97%D7%9E%D7%99%D7%A5/",
    ingredients: [
        {
            amount: 2,
            unit: "",
            item: "חצילים"
        },
		{
		sectionName: "לתחמיץ",
            items: [
        {
            amount: 4,
            unit: "כפות",
            item: "שמן זית"
        },
        {
            amount: 4,
            unit: "כפות",
            item: "מים"
        },
        {
            amount: 4,
            unit: "כפות",
            item: "חומץ"
        },
		{
            amount: 1,
            unit: "כף",
            item: "סויה"
		},
        {
            amount: 0.5,
            unit: "",
            item: "לימון סחוט"
        },
        {
            amount: 1,
            unit: "כפית",
            item: "מייפל\\דבש\\סילאן"
        },
        {
            amount: 5,
            unit: "",
            item: "שיני שום קצוצות"
        },
        {
            amount: 0.5,
            unit: "כוס",
            item: "עלי פטרוזיליה קצוצים דק"
        },
        {
            amount: 0.25,
            unit: "כפית",
            item: "מלח"
        },
        {
            amount: 0.25,
            unit: "כפית",
            item: "פפריקה"
        } ] }
    ],
    instructions: "1. מחממים תנור ל 200 מעלות\n2. חותכים את החציל לפרוסות בעובי 1.5 ס\"מ.\n3. מושחים את הפרוסות בשמן זית, מפזרים מעל קצת מלח, ומסדרים על 2 תבניות עם נייר אפיה. \n4. מכניסים לתנור עד להזהבה. לוקח כ 30-25 דקות.\n5. בינתיים מערבבים את כל מרכיבי התחמיץ ומשאירים בצד ל 10 דק' לפחות.\n6. מסדרים את הפרוסות בקופסה\\כלי הגשה, ועל כל פרוסה ניצוק מהתחמיץ.\n7. ממתינים לפחות שעה לפני האכילה. עדיף 4 שעות או יותר."
},
{
    id: "bar_salad",
    title: "סלט בר",
    author: "בר",
    tags: [
        "צמחוני",
        "סלטים"
    ],
    image: "images/bar_salad2.webp",
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לסלט:",
            items: [
                {
                    amount: 2,
                    unit: "",
                    item: "חסות קרועות לרצועות"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "בצל סגול חתוך לרצועות דקות"
                },
                {
                    amount: 1,
                    unit: "חבילה",
                    item: "עגבניות שרי חצויות"
                }
            ]
        },
        {
            sectionName: "רוטב",
            items: [
                {
                    amount: 2,
                    unit: "",
                    item: "שיני שום כתושות"
                },
                {
                    amount: 1,
                    unit: "כפית",
                    item: "סוכר"
                },
                {
                    amount: 1,
                    unit: "כף גדושה",
                    item: "מיונז"
                },
                {
                    amount: 1,
                    unit: "כפית גדושה",
                    item: "חרדל"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "לימון סחוט"
                },
                {
                    amount: null,
                    unit: "",
                    item: "שמן זית"
                },
                {
                    amount: null,
                    unit: "",
                    item: "מלח"
                },
                {
                    amount: null,
                    unit: "",
                    item: "פלפל"
                }
            ]
        }
    ],
    instructions: "מערבבים את כל מרכיבי הרוטב.\nמוסיפים שמן זית, מלח ופלפל לפי הטעם.\n\nמוסיפים לסלט ומערבבים הכל ביחד, ואפשר להוסיף מה שבא.\nבתיאבון!"
},
{
    id: "almond_dough",
    title: "בצק שקדים פריך לטארטים",
    author: "(אופק) מיכל מוזס",
    tags: [
        "עוגות"
    ],
    image: "images/almond_dough.jpg",
    sourceUrl: "https://www.hashulchan.co.il/%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%91%D7%A6%D7%A7-%D7%A9%D7%A7%D7%93%D7%99%D7%9D-%D7%A4%D7%A8%D7%99%D7%9A/#google_vignette",
    ingredients: [
        {
            amount: 300,
            unit: "גרם",
            item: "חמאה בטמפרטורת החדר"
        },
        {
            amount: 1.5,
            unit: "כוסות",
            item: "אבקת סוכר"
        },
        {
            amount: 0.5,
            unit: "כוס",
            item: "שקדים טחונים"
        },
        {
            amount: 0.25,
            unit: "כפית",
            item: "מלח"
        },
        {
            amount: 1,
            unit: "כפית",
            item: "תמצית וניל"
        },
        {
            amount: 2,
            unit: "",
            item: "ביצים (L) בטמפרטורת החדר"
        },
        {
            amount: 500,
            unit: "גרם",
            item: "קמח"
        }
    ],
    instructions: "1. מעבדים חמאה, אבקת סוכר, שקדים, מלח ווניל לקרם רך במעבד מזון עם להב מתכת. \n2. מוסיפים ביצים בהדרגה עד שהן נטמעות בקרם. מנפים לקערה קמח ומעבדים רק עד שנוצר בצק במרקם אחיד ודחוס.\n3. מפרידים את הבצק ל 3 חתיכות שוות, יוצרים דיסקית מכל אחת ועוטפים בניילון נצמד. כל דיסקית מספיקה בדיוק לתבנית טארט סטנדרטית. מומלץ להשתמש באחת ולהקפיא את השתיים האחרות."
},
{
    id: "simone_salad",
    title: "סלט סימון (סלט מרוקאי)",
    author: "סבתא סימון",
    tags: ["סלטים", "צמחוני", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: 3, unit: "", item: "עגבניות קלופות וחתוכות לקוביות" },
        { amount: 2, unit: "", item: "פלפלים חריפים (חלפיניו) קצוצים" },
        { amount: 2, unit: "", item: "שן שום כתושה" },
        { amount: null, unit: "", item: "שמן זית" },
        { amount: null, unit: "", item: "מלח" }
    ],
    instructions: "מערבבים את הכל, מוסיפים שמן זית ומלח (כן, בלי פלפל), ובתיאבון!",
    english: {
        title: "Moroccan Salad (Simone Salad)",
        author: "Grandma Simone",
        ingredients: [
            { amount: 2.5, unit: "", item: "peeled diced tomatoes" },
            { amount: 2, unit: "", item: "diced jalapeños" },
            { amount: null, unit: "", item: "Minced garlic" },
            { amount: null, unit: "", item: "Olive oil" },
            { amount: null, unit: "", item: "Salt" }
        ],
        instructions: "Mix everything, add Olive oil and salt (yes, no pepper), and bon appétit!"
    }
},
{
    id: "simone_couscous_chicken",
    title: "קוסקוס ועוף",
    author: "סבתא סימון",
    tags: ["בשרי", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: null, unit: "", item: "קוסקוס" },
        {
            sectionName: "למרק ולעוף",
            items: [
                { amount: 5, unit: "חתיכות", item: "עוף (אופציונלי)" },
                { amount: 3, unit: "", item: "גזרים" },
                { amount: 2.5, unit: "", item: "גבעולי סלרי" },
                { amount: 3, unit: "", item: "קישואים" },
                { amount: 1, unit: "חתיכת", item: "דלעת או חצי דלורית" },
                { amount: 1.5, unit: "", item: "בטטות (אופציונלי)" },
                { amount: 1, unit: "קופסת שימורים", item: "גרגירי חומוס (אופציונלי)" },
                { amount: 1, unit: "", item: "בצל קטן (אופציונלי)" },
                { amount: 1.5, unit: "", item: "קוביות מרק (כתושות) או ציר ירקות/עוף" },
                { amount: 0.5, unit: "כפית", item: "מלח (לפי הטעם, תלוי במליחות המרק)" },
                { amount: 0.25, unit: "כפית", item: "פלפל" },
                { amount: 0.25, unit: "כפית", item: "קינמון" },
                { amount: 0.25, unit: "כפית", item: "כורכום" }
            ]
        },
        {
            sectionName: "להגשה",
            items: [
                { amount: null, unit: "", item: "סוכר" },
                { amount: null, unit: "", item: "קינמון" },
                { amount: null, unit: "", item: "צנוברים" }
            ]
        }
    ],
    instructions: "1. מפשירים את העוף: שמים בסיר עם מים רגילים ומביאים לרתיחה. ברגע שהמים רותחים, מנמיכים מעט את האש ומבשלים כשעה (יש לוודא שהמים עדיין מבעבעים).\n2. בינתיים, מקלפים וחותכים את הירקות.\n3. אחרי שהעוף התבשל כ-30 דקות, מוסיפים את הירקות והתבלינים ומבשלים 30 דקות נוספות. הערה: אם הוספתם חומוס, צריך להכניס אותו מעט קודם לכן.\n4. מכינים את הקוסקוס לפי הוראות היצרן - שמים בקערה מים רותחים מהסיר (או ציר) על הקוסקוס ומכסים בצלחת עד שמוכן.\n5. מערבבים מעט סוכר וקינמון (לפי הטעם). מגישים בצד כדי שכל סועד יוכל לפזר מעל המנה, יחד עם הצנוברים.",
    english: {
        title: "Couscous",
        author: "Grandma Simone",
        ingredients: [
            { amount: null, unit: "", item: "Couscous" },
            {
                sectionName: "Soup & Chicken",
                items: [
                    { amount: 5, unit: "pieces", item: "Chicken (optional)" },
                    { amount: 3, unit: "", item: "Carrots" },
                    { amount: 2.5, unit: "stems", item: "Celery" },
                    { amount: 3, unit: "", item: "Zucchini" },
                    { amount: 1, unit: "piece", item: "Pumpkin or half squash" },
                    { amount: 1.5, unit: "", item: "Sweet potatoes (optional)" },
                    { amount: 1, unit: "can", item: "Garbanzo beans (optional)" },
                    { amount: 1, unit: "small", item: "Onion (optional)" },
                    { amount: 1.5, unit: "", item: "Smashed bouillon or vegetable/chicken stock" },
                    { amount: 0.5, unit: "teaspoon", item: "Salt (to taste, depends on bouillon)" },
                    { amount: 0.25, unit: "teaspoon", item: "Pepper" },
                    { amount: 0.25, unit: "teaspoon", item: "Cinnamon" },
                    { amount: 0.25, unit: "teaspoon", item: "Turmeric" }
                ]
            },
            {
                sectionName: "To Serve",
                items: [
                    { amount: null, unit: "", item: "Sugar" },
                    { amount: null, unit: "", item: "Cinnamon" },
                    { amount: null, unit: "", item: "Pine nuts" }
                ]
            }
        ],
        instructions: "1. Defrost chicken: place in pot of plain water and boil. Once the water boils, lower the heat slightly, leave for ~1 hour, make sure water is still boiling.\n2. Meanwhile, cut and peel vegetables.\n3. After the chicken has cooked for ~30 minutes, add the vegetables and spices, then cook for the remaining 30 minutes. Note: If using garbanzo beans, add them slightly earlier.\n4. Follow box instructions for couscous – place boiling water from the pot in a bowl with couscous and cover with plate until ready (or instead of boiling water add bouillon broth or veggie broth).\n5. Mix some cinnamon and sugar, to taste. Can be placed on top of prepared dish by individual. Same with pine nuts."
    }
},
{
    id: "simone_fish_hummus",
    title: "דג וחומוס",
    author: "סבתא סימון",
    tags: ["דגים", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לחלוקה (חצי לחומוס, חצי לדג)",
            items: [
                { amount: 1, unit: "", item: "גמבה אדומה (חתוכה)" },
                { amount: 9, unit: "שיני", item: "שום (כתוש או פרוס)" },
                { amount: 5, unit: "כפות", item: "שמן זית" },
                { amount: 1, unit: "חופן", item: "פטרוזיליה/כוסברה קצוצה" }
            ]
        },
        {
            sectionName: "לחומוס",
            items: [
                { amount: 4, unit: "קופסאות שימורים", item: "גרגירי חומוס (שטופים)" },
                { amount: 1, unit: "כף", item: "פפריקה" },
                { amount: 0.5, unit: "כפית", item: "כמון" },
                { amount: 0.25, unit: "כפית", item: "כורכום" },
                { amount: 1, unit: "כפית", item: "מלח" },
                { amount: 0.25, unit: "כפית", item: "פלפל" },
                { amount: 3, unit: "כוסות", item: "מים" }
            ]
        },
        {
            sectionName: "לדגים",
            items: [
                { amount: 2, unit: "", item: "דגי פורל (עם או בלי ראש)" },
                { amount: 1, unit: "", item: "לימון" },
                { amount: 0.25, unit: "כפית", item: "כורכום" },
                { amount: 0.5, unit: "כפית", item: "מלח" },
                { amount: 0.25, unit: "כפית", item: "פלפל" },
                { amount: 0.5, unit: "כוס", item: "מים" }
            ]
        }
    ],
    instructions: "1. הכנת החומוס: שמים בסיר את מחצית מכמות השמן, גרגירי החומוס, הגמבה והשום. מוסיפים את תבליני החומוס והמים. מכסים ומביאים לרתיחה. מנמיכים ללהבה בינונית-נמוכה ומבשלים עד שרוב המים מתאדים.\n2. הכנת הדג: בסיר נפרד (רחב) שמים את את המחצית השנייה של השמן, הדגים, הגמבה והשום. מוסיפים את תבליני הדג והמים. מכסים ומביאים לרתיחה. מנמיכים ללהבה בינונית ומבשלים 20-30 דקות עד שהמים מצטמצמים.\n3. לקראת סוף הבישול בשני הסירים, מחלקים את עשבי התיבול בין שני הסירים. סוחטים את הלימון מעל הדגים.\n4. גרסה משודרגת (למשקיענים): במקום לשים את הכל יחד, מטגנים תחילה את השום, הגמבה והתבלינים בשמן כ-15-20 דקות תוך כדי ערבוב, ורק אז מוסיפים את שאר המרכיבים וממשיכים כרגיל.",
    english: {
        title: "Hummus and Fish",
        author: "Grandma Simone",
        ingredients: [
            {
                sectionName: "To Split (Half for Fish, Half for Hummus)",
                items: [
                    { amount: 1, unit: "", item: "Red bell pepper (cut)" },
                    { amount: 9, unit: "cloves", item: "Garlic (crushed or sliced)" },
                    { amount: 5, unit: "tbsp", item: "Olive oil" },
                    { amount: 1, unit: "handful", item: "Chopped Parsley/Cilantro" }
                ]
            },
            {
                sectionName: "For the Hummus",
                items: [
                    { amount: 4, unit: "cans", item: "Garbanzo beans (washed)" },
                    { amount: 1, unit: "tbsp", item: "Paprika" },
                    { amount: 0.5, unit: "tsp", item: "Cumin" },
                    { amount: 0.25, unit: "tsp", item: "Turmeric" },
                    { amount: 1, unit: "tsp", item: "Salt" },
                    { amount: 0.25, unit: "tsp", item: "Pepper" },
                    { amount: 3, unit: "cups", item: "Water" }
                ]
            },
            {
                sectionName: "For the Fish",
                items: [
                    { amount: 2, unit: "", item: "Trout (head/tail optional)" },
                    { amount: 1, unit: "", item: "Lemon" },
                    { amount: 0.25, unit: "tsp", item: "Turmeric" },
                    { amount: 0.5, unit: "tsp", item: "Salt" },
                    { amount: 0.25, unit: "tsp", item: "Pepper" },
                    { amount: 0.5, unit: "cup", item: "Water" }
                ]
            }
        ],
        instructions: "1. Prepare the Hummus: Put the chickpeas, half the oil, pepper, and garlic (from the shared list), plus the hummus spices and water in a pot. Cover and bring to a boil. Simmer on medium-low heat until most water evaporates.\n2. Prepare the Fish: In a separate wide pan, put the fish, the other half of the oil, pepper, and garlic, plus the fish spices and water. Cover and bring to a boil. Lower heat to medium and cook for 20-30 minutes until water reduces.\n3. Towards the end of cooking in both pots, divide the chopped herbs between them. Squeeze lemon over the fish.\n4. Fancy Version: Instead of putting everything in at once, sauté the garlic, pepper, and spices in the oil for 15-20 minutes while stirring, then add the rest of the ingredients and proceed as written."
    }
},
{
    id: "pilaf",
    title: "פילאף",
    author: "סבתא שרה",
    tags: [
        "בשרי"
    ],
    image: "images/pilaf.jpeg",
    sourceUrl: "",
    ingredients: [
        {
            amount: 3,
            unit: "",
            item: "בצלים"
        },
        {
            amount: 4,
            unit: "",
            item: "תפוחי אדמה בינוניים"
        },
        {
            amount: 8,
            unit: "",
            item: "כרעיים עוף"
        },
        {
            amount: 1,
            unit: "",
            item: "חבילה גזר (אפשר גם X1.5)"
        },
        {
            amount: 3,
            unit: "כוסות",
            item: "אורז"
        },
        {
            amount: 0.5,
            unit: "שקית",
            item: "צימוקים שחורים"
        },
        {
            amount: 1,
            unit: "חופן",
            item: "שקדים\\צנוברים"
        },
        {
            amount: null,
            unit: "",
            item: "מלח"
        },
        {
            amount: null,
            unit: "",
            item: "פלפל"
        },
        {
            amount: null,
            unit: "",
            item: "קינמון"
        }
    ],
    instructions: "הכמות היא ל 8 מנות.\n\n<u>הכנה:‏</u>\n1. לפני הבישול להשרות את האורז והצימוקים במים כשעה.‏\n2. מטגנים את הבצל ומשחימים <u>היטב</u> את העוף היטב עדי כדי כמעט בישול סופי. שמים בצד.\n3. קולפים את תפוחי האדמה והגזר. פורסים את הגזר לקיסמים דקים ואת תפוחי האדמה לפרוסות בעובי בינוני.‏\n4. מסננים את המים מהאורז ומתבלים במלח, פלפל וקינמון. קולים את השקדים במחבת ומוסיפים אותם לאורז עם הצימוקים, מערבבים היטב.‏\n\n<u>התקנת המנה:‏</u>\n1. בתחתית הסיר מסדרים פרוסות תפוחי אדמה ומעליהן קצת מהגזר.\n2. מוסיפים את העוף מעליו את שארית הגזר.‏\n3. מוסיפים את בלילת האורז ומכסים במים רותחים עד גובה האורז.‏\n4. מביאים לרתיחה ומכסים את הסיר במכסה עם מגבת על אש קטנה כ-45 דקות. תוך כדי הבישול יוצרים בעזרת כף עץ \"ארובות\" לאידוי. בתום הבישול לתת לסיר לעמוד כ-10 דקות ולהגיש חם.‏"
},
{
    id: "creamed_mushroom_soup",
    title: "מרק פטריות בשמנת",
    author: "סבא יאיר",
    tags: [
        "חלבי",
        "צמחוני"
    ],
    image: "",
    sourceUrl: "",
    ingredients: [
        {
            amount: 1,
            unit: "",
            item: "בצל בינוני קצוץ"
        },
        {
            amount: 2,
            unit: "כפות",
            item: "חמאה"
        },
        {
            amount: 6,
            unit: "",
            item: "עלי דפנה"
        },
        {
            amount: 1,
            unit: "כף",
            item: "גרגירי פלפל שחור שלמים"
        },
        {
            amount: 1,
            unit: "כוס",
            item: "יין לבן יבש (אחד טוב)"
        },
        {
            amount: 1,
            unit: "כוס ",
            item: "מים"
        },
        {
            amount: 4,
            unit: "כוסות",
            item: "מרק עוף\\ירקות"
        },
        {
            amount: 2,
            unit: "סלסלות",
            item: "פטריות שמפיניון פרוסות"
        },
        {
            amount: 1,
            unit: "מיכל",
            item: "שמנת מתוקה"
        },
        {
            amount: null,
            unit: "",
            item: "מלח"
        }
    ],
    instructions: "מטגנים את הבצל בחמאה עד להזהבה. מוסיפים גרגרי פלפל, עלי דפנה, מלח ויין, מאדים כחצי שעה על אש נמוכה. מסירים את עלי הדפנה וגרגרי הפלפל, מוסיפים את המרק והמים וממשיכים לבשל עד לרתיחה. ממש לפני ההגשה, מוסיפים שמנת ופטריות ומבשלים 10-15 דקות. מגישים חם."
},
{
    id: "tomato_soup",
    title: "מרק עגבניות",
    author: "סבתא ברטה",
    tags: [
        "צמחוני"
    ],
    image: "",
    sourceUrl: "",
    ingredients: [
	 {
            amount: 1,
            unit: "כף",
            item: "קמח לבן"
        },
        {
            amount: null,
            unit: "",
            item: "שמן צמחי"
        },
        {
            amount: 12,
            unit: "כוסות",
            item: "מים"
        },
        {
            amount: 11,
            unit: "",
            item: "עגבניות (חתוכות לקוביות)"
        },
        {
            amount: 12,
            unit: "כפיות",
            item: "סוכר"
        },
        {
            amount: 2,
            unit: "כפיות",
            item: "מלח"
        },
        {
            amount: 12,
            unit: "כפיות",
            item: "רסק עגבניות"
        },
        {
            amount: 12,
            unit: "כפות",
            item: "אורז"
        }
    ],
    instructions: "מתכון לסיר גדול:\n1.\tמשחימים את הקמח בשמן\n2.\tמוסיפים מים, עגבניות ורסק עגבניות, ומתבלים בסוכר ומלח.\n6.\tמביאים לרתיחה. <b>לא חובה</b>: תוך כדי ניתן לרסק את העגבניות בבלנדר מוט לקבלת מרקם אחיד.\n7.\tמוסיפים את האורז ומבשלים על אש קטנה 20 דקות.\n\nבתיאבון!\n"
},
{
    id: "pineapple_meatballs",
    title: "כדורי בשר ברוטב אננס (טראש נוסטלגי)",
    author: "ענבל",
    tags: ["בשרי", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לקציצות",
            items: [
                { amount: 0.5, unit: "ק\"ג", item: "בשר טחון" },
                { amount: 1, unit: "", item: "ביצה טרופה" },
                { amount: 1, unit: "כף", item: "רוטב סויה" },
                { amount: 1, unit: "כפית", item: "ג'ינג'ר טרי מגורד" },
                { amount: 3, unit: "כפות", item: "פירורי לחם טריים" },
                { amount: 3, unit: "כפות", item: "שמן (לטיגון)" },
                { amount: null, unit: "", item: "מלח" },
                { amount: null, unit: "", item: "פלפל" }
            ]
        },
        {
            sectionName: "לרוטב",
            items: [
                { amount: 1, unit: "קופסה", item: "קוביות אננס (בסירופ טבעי)" },
                { amount: 3, unit: "", item: "בצלים ירוקים פרוסים" },
                { amount: 1, unit: "כפית", item: "ג'ינג'ר טרי קצוץ" },
                { amount: 1, unit: "", item: "פלפל אדום חתוך לקוביות" },
                { amount: 1, unit: "כף", item: "עמילן תירס (קורנפלור)" },
                { amount: 3, unit: "כפות", item: "חומץ" },
                { amount: 3, unit: "כפות", item: "סוכר" },
                { amount: null, unit: "", item: "מלח" },
                { amount: null, unit: "", item: "פלפל" }
            ]
        }
    ],
    instructions: "1. שמים את הבשר בקערה, מוסיפים את הביצה, הסויה, הג'ינג'ר ופירורי הלחם. מתבלים במלח ופלפל ולשים היטב.\n2. יוצרים כדורים קטנים בגודל כדורי פלאפל.\n3. מחממים את השמן במחבת ומטגנים את הכדורים עד שישחימו מכל הצדדים. מוציאים לקערה נפרדת.\n4. באותה מחבת מטגנים קלות את הבצלים הירוקים והג'ינג'ר. מוסיפים את הפלפל האדום, מערבבים ומבשלים מספר דקות.\n5. מסננים את מיץ האננס לתוך קערה (צריך כוס אחת של נוזל). מוסיפים למיץ את החומץ, הסוכר וכף עמילן תירס. שופכים למחבת ומבשלים מספר דקות עד שהרוטב מסמיך. טועמים ומתקנים תיבול עם מלח ופלפל.\n6. מוסיפים לרוטב את כדורי הבשר וכוס מקוביות האננס (ללא המיץ).\n7. מבשלים עוד מספר דקות עד לרתיחה ואיחוד טעמים. מגישים.",
    english: {
        title: "Meatballs in Pineapple Sauce (Nostalgic Trash)",
        author: "Inbal",
        ingredients: [
            {
                sectionName: "For the Meatballs",
                items: [
                    { amount: 0.5, unit: "kg", item: "Ground meat" },
                    { amount: 1, unit: "", item: "Beaten egg" },
                    { amount: 1, unit: "tbsp", item: "Soy sauce" },
                    { amount: 1, unit: "tsp", item: "Grated fresh ginger" },
                    { amount: 3, unit: "tbsp", item: "breadcrumbs" },
                    { amount: 3, unit: "tbsp", item: "Oil (for frying)" },
                    { amount: null, unit: "", item: "Salt" },
                    { amount: null, unit: "", item: "Pepper" }
                ]
            },
            {
                sectionName: "For the Sauce",
                items: [
                    { amount: 1, unit: "can", item: "Pineapple chunks (in natural syrup)" },
                    { amount: 3, unit: "", item: "Sliced green onions" },
                    { amount: 1, unit: "tsp", item: "Chopped fresh ginger" },
                    { amount: 1, unit: "", item: "Red bell pepper (diced)" },
                    { amount: 1, unit: "tbsp", item: "Cornstarch" },
                    { amount: 3, unit: "tbsp", item: "Vinegar" },
                    { amount: 3, unit: "tbsp", item: "Sugar" },
                    { amount: null, unit: "", item: "Salt" },
                    { amount: null, unit: "", item: "Pepper" }
                ]
            }
        ],
        instructions: "1. Place the meat in a bowl and add the egg, soy sauce, grated ginger, and breadcrumbs. Season with salt and pepper and knead well.\n2. Form small balls, about the size of falafel balls.\n3. Heat oil in a pan and fry the meatballs until browned on all sides. Remove to a separate bowl.\n4. In the same pan, lightly fry the green onions and chopped ginger. Add the red bell pepper, stir, and cook for a few minutes.\n5. Strain the pineapple juice into a bowl (you need 1 cup of liquid). Add the vinegar, sugar, and cornstarch to the juice. Pour into the pan and cook for a few minutes until the sauce thickens. Taste and adjust seasoning with salt and pepper.\n6. Add the meatballs and 1 cup of pineapple chunks (without the juice) to the sauce.\n7. Cook for a few more minutes until boiling and flavors are combined. Serve."
    }
},
{
    id: "meatballs_eggplant_tomato",
    title: "קציצות וחצילים ברוטב עגבניות",
    author: "סבתא ברטה",
    tags: ["בשרי", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לקציצות",
            items: [
                { amount: 0.5, unit: "ק\"ג", item: "בשר טחון (עוף או בקר)" },
                { amount: 1, unit: "", item: "בצל קצוץ" },
                { amount: 1, unit: "חופן", item: "פטרוזיליה קצוצה" },
                { amount: 2, unit: "", item: "ביצים טרופות" },
                { amount: 3, unit: "כפות", item: "פירורי לחם" },
                { amount: 1, unit: "כף", item: "אבקת מרק עוף" },
                { amount: 1, unit: "כפית", item: "פפריקה מתוקה" },
                { amount: null, unit: "", item: "מלח" },
                { amount: null, unit: "", item: "פלפל" }
            ]
        },
        {
            sectionName: "לרוטב",
            items: [
                { amount: 2, unit: "קופסאות קטנות", item: "רסק עגבניות" },
                { amount: 4, unit: "כוסות", item: "מים (לפי הצורך לדילול הרסק)" },
                { amount: 3, unit: "שיני", item: "שום כתוש" },
                { amount: 1, unit: "חופן", item: "פטרוזיליה קצוצה" },
                { amount: null, unit: "", item: "תבלינים (מלח, פלפל, פפריקה)" }
            ]
        },
        {
            sectionName: "לחצילים",
            items: [
                { amount: 1, unit: "", item: "חציל מקולף ופרוס" },
                { amount: 2, unit: "כפות", item: "קמח תופח" },
                { amount: 1, unit: "", item: "ביצה" },
                { amount: null, unit: "", item: "שמן (לטיגון)" }
            ]
        }
    ],
    instructions: "1. הכנת הרוטב: בסיר בינוני, מערבבים את רסק העגבניות עם המים, השום, הפטרוזיליה והתבלינים. מביאים לרתיחה ומבשלים על אש קטנה.\n2. הכנת הקציצות: מערבבים בקערה את הבשר, הבצל, הפטרוזיליה, הביצים, פירורי הלחם והתבלינים. יוצרים קציצות עגולות.\n3. הכנת החצילים: מכינים בלילה מהביצה והקמח (מערבבים יחד). טובלים כל פרוסת חציל בבלילה ומטגנים במחבת חמה עם שמן עד להזהבה.\n4. הרכבת המנה: מעבירים את פרוסות החציל המטוגנות ישר מהמחבת אל סיר הרוטב המבעבע. מוסיפים בזהירות את כדורי הבשר לרוטב.\n5. מבשלים הכל יחד עד שהקציצות מוכנות והטעמים מתמזגים.",
    english: {
        title: "Meatballs & Eggplant in Tomato Sauce",
        author: "Grandma Berta",
        ingredients: [
            {
                sectionName: "For the Meatballs",
                items: [
                    { amount: 0.5, unit: "kg", item: "Ground meat (Chicken/Beef)" },
                    { amount: 1, unit: "", item: "Chopped onion" },
                    { amount: 1, unit: "handful", item: "Chopped Parsley" },
                    { amount: 2, unit: "", item: "Beaten eggs" },
                    { amount: 3, unit: "tbsp", item: "Breadcrumbs" },
                    { amount: 1, unit: "tbsp", item: "Chicken soup powder" },
                    { amount: 1, unit: "tsp", item: "Sweet Paprika" },
                    { amount: null, unit: "", item: "Salt" },
                    { amount: null, unit: "", item: "Pepper" }
                ]
            },
            {
                sectionName: "For the Sauce",
                items: [
                    { amount: 2, unit: "small cans", item: "Tomato paste" },
                    { amount: 4, unit: "cups", item: "Water (to dilute paste)" },
                    { amount: 3, unit: "cloves", item: "Crushed garlic" },
                    { amount: 1, unit: "handful", item: "Chopped Parsley" },
                    { amount: null, unit: "", item: "Spices (Salt, Pepper, Paprika)" }
                ]
            },
            {
                sectionName: "For the Eggplant",
                items: [
                    { amount: 1, unit: "", item: "Eggplant (peeled and sliced)" },
                    { amount: 2, unit: "tbsp", item: "Self-rising flour" },
                    { amount: 1, unit: "", item: "Egg" },
                    { amount: null, unit: "", item: "Oil (for frying)" }
                ]
            }
        ],
        instructions: "1. Prepare the sauce: In a medium pot, mix the tomato paste with water, garlic, parsley, and spices. Bring to a boil and simmer.\n2. Prepare the meatballs: In a bowl, mix the meat, onion, parsley, eggs, breadcrumbs, and spices. Form into round balls.\n3. Prepare the eggplant: Make a batter by mixing the egg and flour. Dip each eggplant slice in the batter and fry in a pan with oil until golden.\n4. Assemble: Transfer the fried eggplant slices directly from the pan into the simmering sauce pot. Carefully add the meatballs to the sauce as well.\n5. Cook everything together until the meatballs are cooked through and flavors combine."
    }
},
{
    id: "zvi_paprika_chicken_nokedli",
    title: "עוף בפפריקה ונוקדלי",
    author: "סבא צבי",
    tags: ["עוף", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לעוף",
            items: [
                { amount: 5, unit: "חתיכות", item: "כרעיים (ללא עור)" },
                { amount: 1, unit: "", item: "בצל קצוץ גדול" },
                { amount: null, unit: "", item: "שמן (לטיגון)" },
                { amount: null, unit: "", item: "פפריקה מתוקה" },
                { amount: null, unit: "", item: "פפריקה חריפה" },
                { amount: null, unit: "", item: "אבקת מרק (אופציונלי)" },
                { amount: null, unit: "", item: "מים" }
            ]
        },
        {
            sectionName: "לנוקדלי (בצקניות)",
            items: [
                { amount: 500, unit: "גרם", item: "קמח" },
                { amount: 3, unit: "", item: "ביצים" },
                { amount: null, unit: "", item: "מים (לפי הצורך)" },
                { amount: null, unit: "", item: "מלח" },
                { amount: null, unit: "", item: "מחמאה או מרגרינה (להגשה)" }
            ]
        }
    ],
    instructions: "1. הכנת העוף: מטגנים את הבצל בסיר. מוסיפים את העוף והופכים אותו מעט (צריבה). מוסיפים ממש מעט מים (טיפה).\n2. מתבלים בתבלינים (פפריקה מתוקה, חריפה ואבקת מרק אם רוצים) על כל צד של העוף.\n3. מוסיפים מים עד לכיסוי העוף. מבשלים על אש קטנה למשך שעה, תוך כדי הפיכת העוף מדי פעם.\n4. הכנת הנוקדלי: מערבבים את הקמח, הביצים והמלח. מוסיפים מים בהדרגה ולשים עד שמתקבל בצק.\n5. מבשלים את הנוקדלי במים רותחים (נוטפים את הבצק למים בעזרת מכשיר לנוקדלי או כפית) ומסננים.\n6. בסיום, שמים את הנוקדלי המוכנים על מגש ומוסיפים מעט מחמאה או מרגרינה למניעת הידבקות.",
    english: {
        title: "Paprika Chicken & Nokedli",
        author: "Grandpa Zvi",
        ingredients: [
            {
                sectionName: "For the Chicken",
                items: [
                    { amount: 5, unit: "pieces", item: "Chicken legs/quarters (skinless)" },
                    { amount: 1, unit: "", item: "Large chopped onion" },
                    { amount: null, unit: "", item: "Oil (for frying)" },
                    { amount: null, unit: "", item: "Sweet Paprika" },
                    { amount: null, unit: "", item: "Hot Paprika" },
                    { amount: null, unit: "", item: "Soup powder (optional)" },
                    { amount: null, unit: "", item: "Water" }
                ]
            },
            {
                sectionName: "For the Nokedli (Dumplings)",
                items: [
                    { amount: 0.5, unit: "kg", item: "Flour" },
                    { amount: 3, unit: "", item: "Eggs" },
                    { amount: null, unit: "", item: "Water (as needed)" },
                    { amount: null, unit: "", item: "Salt" },
                    { amount: null, unit: "", item: "Margarine or Butter (for serving)" }
                ]
            },
        ],
        instructions: "1. Prepare the Chicken: Fry the onion in a pot. Add the chicken and flip/sear it. Add a tiny drop of water.\n2. Season with spices (sweet paprika, hot paprika, and soup powder if desired) on every side of the chicken.\n3. Add water until the chicken is covered. Cook on low heat for an hour, flipping the chicken occasionally.\n4. Prepare the Nokedli: Mix the flour, eggs, and salt. Add water gradually until a dough forms.\n5. Cook the dumplings in boiling water (drop batter into water) and drain.\n6. Place the cooked Nokedli on a tray and coat with a little margarine or butter to prevent sticking."
    }
},
{
    id: "ensaladia",
    title: "סלט תפוחי אדמה",
    author: "פלמיניה",
    tags: ["סלטים", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: 3, unit: "", item: "תפוחי אדמה" },
        { amount: 4, unit: "", item: "ביצים" },
        { amount: 1, unit: "קופסת שימורים", item: "אפונה וגזר (או תירס)" },
        { amount: 1, unit: "קופסת שימורים", item: "טונה (אופציונלי)" },
        { amount: 1, unit: "קופסת שימורים", item: "זיתים" },
        { amount: null, unit: "", item: "מיונז (לפי הטעם)" }
    ],
    instructions: "1. מבשלים את הביצים כ-10 דקות (ביצים קשות).\n2. מבשלים את תפוחי האדמה כ-20 דקות או עד שהם מתרככים.\n3. מקלפים וחותכים את הביצים ותפוחי האדמה לקוביות.\n4. מערבבים את כל המרכיבים בקערה.",
    english: {
        title: "Ensaladia (Potato Salad)",
        author: "Flaminia",
        ingredients: [
            { amount: 3, unit: "", item: "Potatoes" },
            { amount: 4, unit: "", item: "Eggs" },
            { amount: 1, unit: "can", item: "Peas and carrots (or corn)" },
            { amount: 1, unit: "can", item: "Tuna (optional)" },
            { amount: 1, unit: "can", item: "Olives" },
            { amount: null, unit: "", item: "Mayo (to taste)" }
        ],
        instructions: "1. Boil eggs for 10 minutes.\n2. Boil potatoes for 20 minutes or until soft.\n3. Peel and cut eggs and potatoes.\n4. Mix all the ingredients."
    }
},
{
    id: "flaminia_risotto",
    title: "ריזוטו",
    author: "פלמיניה",
    tags: ["צמחוני", "חלבי", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: 2.5, unit: "כוסות", item: "אורז ארבוריו (לריזוטו)" },
        { amount: 1, unit: "", item: "בצל פרוס" },
        { amount: null, unit: "", item: "שמן זית" },
        { amount: null, unit: "קורט", item: "זעפרן (או 1/4-1/2 כפית כורכום)" },
        { amount: 1, unit: "קוביה", item: "אבקת מרק (Bouillon)" },
        { amount: 5, unit: "כוסות", item: "מים (כמות כפולה מהאורז)" },
        { amount: null, unit: "", item: "פרמזן (לפי הטעם)" },
        { amount: null, unit: "", item: "חמאה (מעט)" },
        { amount: null, unit: "", item: "פטריות פרוסות (אופציונלי)" }
    ],
    instructions: "1. מערבבים בקערה נפרדת מים חמים עם קוביית מרק וזעפרן.\n2. בסיר, מטגנים את הבצל עד לשקיפות. אם משתמשים בפטריות, מוסיפים אותן כעת וממשיכים לבשל. לאחר שהם מוכנים, מוציאים אותם לקערה בצד.\n3. מוסיפים את האורז לסיר ומטגנים קלות.\n4. מתחילים להוסיף את נוזל המרק בהדרגה (חצי כוס עד כוס בכל פעם) ומערבבים ללא הפסקה עד שהמים נספגים באורז.\n5. חוזרים על הפעולה עד שהאורז מוכן (אל דנטה).\n6. מחזירים לסיר את הבצל והפטריות.\n7. מוסיפים פרמזן.\n8. מוסיפים מעט חמאה, מערבבים היטב עד להמסה ולהסמכה, ומגישים.",
    english: {
        title: "Risotto",
        author: "Flaminia",
        ingredients: [
            { amount: 2.5, unit: "cups", item: "Arborio rice" },
            { amount: 1, unit: "", item: "Onion (sliced)" },
            { amount: null, unit: "", item: "Olive oil" },
            { amount: null, unit: "pinch", item: "Saffron (or 1/4 - 1/2 tsp turmeric)" },
            { amount: 1, unit: "cube", item: "Bouillon" },
            { amount: 5, unit: "cups", item: "Water (double the amount of rice)" },
            { amount: null, unit: "", item: "Parmesan (to taste)" },
            { amount: null, unit: "", item: "Butter" },
            { amount: null, unit: "", item: "Mushrooms, sliced (optional)" }
        ],
        instructions: "1. Mix warm water with bouillon and saffron in a separate bowl.\n2. Fry onions, once transparent add mushrooms (if using). Remove from pot into a separate bowl when done.\n3. Add rice to the pot and cook (toast) a bit.\n4. Add a little bit of the prepared water (1/2 cup to 1 cup) and mix until water is absorbed.\n5. Repeat adding water and mixing until rice is al dente.\n6. Add the mushrooms and onions back in.\n7. Add Parmesan.\n8. Add butter and mix in before serving."
    }
},
{
    id: "simone_yellow_chicken",
    title: "עוף ותפוחי אדמה ברוטב צהוב",
    author: "סבתא סימון",
    tags: ["בשרי", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: 5, unit: "", item: "ירכי עוף" },
        { amount: 5, unit: "", item: "תפוחי אדמה צהובים (קלופים וחתוכים לקוביות גדולות)" },
        { amount: 0.5, unit: "", item: "גמבה אדומה" },
        { amount: 4, unit: "שיני", item: "שום (פרוסות)" },
        { amount: 3, unit: "כפות", item: "שמן זית" },
        { amount: 1, unit: "קוביה", item: "אבקת מרק (Bouillon)" },
        { amount: 0.35, unit: "כפית", item: "כורכום" },
        { amount: 0.35, unit: "כפית", item: "פלפל" },
        { amount: null, unit: "", item: "מלח (לפי הטעם)" },
        { amount: null, unit: "", item: "מים (עד לכיסוי כמעט מלא של העוף)" }
    ],
    instructions: "1. מכניסים את כל המרכיבים לסיר רחב. ממלאים מים עד שהעוף כמעט מכוסה.\n2. מביאים לרתיחה על אש גבוהה עם מכסה. לאחר הרתיחה, מנמיכים מעט את הלהבה.\n3. מבשלים כ-20-30 דקות.\n4. הערה: ניתן להתחיל לבשל את כל המרכיבים למעט תפוחי האדמה, ולהוסיף אותם בשלב מאוחר יותר כדי שלא יתבשלו יתר על המידה. יש לוודא שהעוף מבושל לחלוטין ואם צריך להוסיף עוד זמן או מים.",
    english: {
        title: "Yellow Chicken and Potatoes",
        author: "Grandma Simone",
        ingredients: [
            { amount: 5, unit: "", item: "Chicken thighs" },
            { amount: 5, unit: "", item: "Yellow potatoes (peeled and big cubed)" },
            { amount: 0.5, unit: "", item: "Red bell pepper" },
            { amount: 4, unit: "cloves", item: "Garlic (cut)" },
            { amount: 3, unit: "tbsp", item: "Olive oil" },
            { amount: 1, unit: "cube", item: "Bouillon" },
            { amount: 0.35, unit: "tsp", item: "Turmeric" },
            { amount: 0.35, unit: "tsp", item: "Pepper" },
            { amount: null, unit: "", item: "Salt (to taste)" },
            { amount: null, unit: "", item: "Water (until chicken is almost covered)" }
        ],
        instructions: "1. Put all the ingredients in a pan/pot. Add water until chicken is almost covered.\n2. Cover and put on high heat until boiling, then lower heat slightly.\n3. Cook for 20-30 minutes.\n4. Note: You can start with everything except the potatoes and add them in later. Check if chicken needs more time or water."
    }
},
{
    id: "flaminia_tofu_brown_sugar",
    title: "טופו בסוכר חום",
    author: "מריו",
    tags: ["צמחוני", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: 1, unit: "חבילה", item: "טופו קשה (סחוט מנוזלים וחתוך לקוביות)" },
        { amount: null, unit: "", item: "סוכר חום" },
        { amount: null, unit: "", item: "דבש" },
        { amount: null, unit: "", item: "שמן זית" },
        { amount: 1, unit: "כפית", item: "כורכום" },
        { amount: null, unit: "", item: "רוטב מוקפץ מתוק-חריף" }
    ],
    instructions: "1. מחממים שמן זית במחבת על חום בינוני.\n2. מקפיצים את קוביות הטופו עד שהן הופכות לפריכות (קראנצ'יות).\n3. מוסיפים את הכורכום.\n4. מוסיפים את הרוטב המתוק-חריף.\n5. לסיום, מוסיפים את הדבש והסוכר החום, מערבבים ומגישים.",
    english: {
        title: "Brown Sugar Tofu",
        author: "Mario",
        ingredients: [
            { amount: 1, unit: "package", item: "Firm tofu (pressed dry and cubed)" },
            { amount: null, unit: "", item: "Brown sugar" },
            { amount: null, unit: "", item: "Honey" },
            { amount: null, unit: "", item: "Olive oil" },
            { amount: 1, unit: "tsp", item: "Turmeric" },
            { amount: null, unit: "", item: "Sweet and spicy stir fry sauce" }
        ],
        instructions: "1. Put olive oil in a pan on medium heat.\n2. Toss tofu until crunchy.\n3. Add turmeric.\n4. Add stir fry sauce.\n5. Then add honey and brown sugar."
    }
},
{
    id: "flaminia_cherry_tomato_meatballs",
    title: "קציצות סויה ברוטב עגבניות",
    author: "פלמיניה",
    tags: ["צמחוני", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: 1, unit: "חבילה", item: "קציצות סויה (קפואות)" },
        { amount: 0.35, unit: "כוס", item: "חומץ בלסמי" },
        { amount: 3, unit: "", item: "בצלים ירוקים (חתוכים לפרוסות בעובי 2.5 ס\"מ)" },
        { amount: 1, unit: "כף", item: "סוכר חום" },
        { amount: 1, unit: "קופסה", item: "עגבניות שרי" },
        { amount: 1, unit: "", item: "בצל פרוס" },
        { amount: null, unit: "", item: "שמן זית" },
        { amount: null, unit: "", item: "מלח" },
        { amount: null, unit: "", item: "פלפל" },
        { amount: 1, unit: "קוביה", item: "אבקת מרק עוף (או משחה)" }
    ],
    instructions: "1. מחממים שמן זית במחבת על אש בינונית-גבוהה ומטגנים את הבצל הפרוס.\n2. מוסיפים את עגבניות השרי והחומץ הבלסמי.\n3. מנמיכים את האש לבעבוע עדין (Simmer).\n4. מוסיפים את הבצל הירוק.\n5. מוסיפים את הסוכר החום.\n6. מתבלים במלח ופלפל לפי הטעם ומוסיפים את אבקת המרק.\n7. מכסים את המחבת ומבשלים עד שהעגבניות מתקמטות ומתרככות.\n8. מוסיפים את קציצות הסויה ומבשלים עד שהן מוכנות (כשהן כבר לא קפואות, כ-3-5 דקות).",
    english: {
        title: "Cherry Tomato Soy Meatballs",
        author: "Flaminia",
        ingredients: [
            { amount: 1, unit: "pack", item: "Soy meatballs (frozen)" },
            { amount: 0.35, unit: "cup", item: "Balsamic vinegar" },
            { amount: 3, unit: "", item: "Green onions (sliced into 1 inch lengths)" },
            { amount: 1, unit: "spoon", item: "Brown sugar" },
            { amount: 1, unit: "pack", item: "Cherry tomatoes" },
            { amount: 1, unit: "", item: "Onion (sliced)" },
            { amount: null, unit: "", item: "Olive oil" },
            { amount: null, unit: "", item: "Salt" },
            { amount: null, unit: "", item: "Pepper" },
            { amount: 1, unit: "cube", item: "Chicken bouillon (or paste)" }
        ],
        instructions: "1. Put olive oil and sliced onion to heat in a pan on medium-high heat.\n2. Add tomatoes and balsamic vinegar.\n3. Lower heat to a simmer.\n4. Add green onion.\n5. Add brown sugar.\n6. Add salt and pepper to taste and add the bouillon.\n7. Cover pan and wait until tomatoes are wrinkly.\n8. Add meatballs and cook until ready (when meatballs are not frozen anymore, 3-5 minutes)."
    }
},
{
    id: "simone_savta_meatballs",
    title: "קציצות בשר",
    author: "סבתא סימון",
    tags: ["בשרי", "עיקרית", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לקציצות",
            items: [
                { amount: 0.5, unit: "ק\"ג", item: "בשר טחון" },
                { amount: 1, unit: "", item: "בצל קצוץ דק (מטוגן ומקורר)" },
                { amount: 1, unit: "צרור גדול", item: "פטרוזיליה או כוסברה (קצוצה דק)" },
                { amount: 2, unit: "שיני", item: "שום כתוש" },
                { amount: 1, unit: "", item: "ביצה" },
                { amount: 1, unit: "", item: "עגבניה מגורדת" },
                { amount: 0.25, unit: "כוס", item: "פירורי לחם או פנקו" },
                { amount: 0.25, unit: "כפית", item: "כמון" },
                { amount: 0.5, unit: "כפית", item: "ראס אל חנות (כורכום, פלפל שחור, פפריקה, אגוז מוסקט, קינמון)" }
            ]
        },
        {
            sectionName: "לרוטב",
            items: [
                { amount: 2, unit: "", item: "עגבניות מגורדות" },
                { amount: 1, unit: "", item: "גמבה אדומה (חתוכה לרצועות)" },
                { amount: 1, unit: "כף", item: "שום כתוש" },
                { amount: 2.5, unit: "כפות", item: "חומץ בלסמי" },
                { amount: 1, unit: "קוביה", item: "אבקת מרק (Bouillon)" },
                { amount: null, unit: "", item: "מלח" },
                { amount: null, unit: "", item: "פלפל שחור" },
                { amount: null, unit: "", item: "כורכום" },
                { amount: null, unit: "", item: "מים (לפי הצורך)" }
            ]
        }
    ],
    instructions: "1. הכנת הקציצות: מערבבים את כל מרכיבי הקציצות בקערה (בזהירות, לא ללוש יותר מדי). יוצרים כדורים ומניחים על תבנית מרופדת בנייר אפייה.\n2. אופים בתנור שחומם מראש ל-200 מעלות למשך 15 דקות. מוציאים ומניחים לקירור.\n3. הכנת הרוטב: בסיר רחב, מטגנים את רצועות הגמבה. מוסיפים את העגבניות המגורדות והשום. מוסיפים את החומץ הבלסמי ואת שאר התבלינים.\n4. מבשלים על אש קטנה כ-20-30 דקות. אם הרוטב מתייבש במהלך הבישול, מוסיפים מעט מים.\n5. מוסיפים את הקציצות לרוטב ומבשלים ברתיחה עדינה (בעבוע קל) כ-15-20 דקות נוספות.",
    english: {
        title: "Savta Meatballs",
        author: "Grandma Simone",
        ingredients: [
            {
                sectionName: "For the Meatballs",
                items: [
                    { amount: 1, unit: "lb", item: "Ground beef" },
                    { amount: 1, unit: "", item: "Onion, diced small (fried and cooled)" },
                    { amount: 1, unit: "big bunch", item: "Parsley or Cilantro (cut small)" },
                    { amount: 2, unit: "cloves", item: "Garlic (minced)" },
                    { amount: 1, unit: "", item: "Egg" },
                    { amount: 1, unit: "", item: "Grated tomato" },
                    { amount: 0.25, unit: "cup", item: "Bread crumbs or Panko" },
                    { amount: 0.25, unit: "tsp", item: "Cumin" },
                    { amount: 0.5, unit: "tsp", item: "Ras el Hanout (turmeric, black pepper, paprika, nutmeg, cinnamon)" }
                ]
            },
            {
                sectionName: "For the Sauce",
                items: [
                    { amount: 2, unit: "", item: "Grated tomatoes" },
                    { amount: 1, unit: "", item: "Red pepper (strips)" },
                    { amount: 1, unit: "tbsp", item: "Minced garlic" },
                    { amount: 2.5, unit: "tbsp", item: "Balsamic vinegar" },
                    { amount: 1, unit: "cube", item: "Bouillon" },
                    { amount: null, unit: "", item: "Salt" },
                    { amount: null, unit: "", item: "Black pepper" },
                    { amount: null, unit: "", item: "Turmeric" },
                    { amount: null, unit: "", item: "Water (as needed)" }
                ]
            },
        ],
        instructions: "1. Prepare the Meatballs: Mix all the meatball ingredients together (don't over mix). Form into balls and place onto parchment paper.\n2. Bake in an oven at 400°F (200°C) for 15 minutes. Let them cool afterwards.\n3. Prepare the Sauce: Fry the red pepper strips, then add the grated tomatoes and garlic. Add 2-3 tablespoons of balsamic vinegar and the rest of the spices.\n4. Cook for about 20-30 minutes on low heat. Add water if it gets dry while cooking.\n5. Add the meatballs to the sauce and let it simmer on low (bubbling) for 15-20 minutes."
    }
},
{
    id: "flaminia_sabich",
    title: "סביח",
    author: "פלמיניה",
    tags: ["צמחוני", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לחצילים",
            items: [
                { amount: 1.5, unit: "", item: "חצילים" },
                { amount: null, unit: "", item: "מלח (להגרת נוזלים)" },
                { amount: null, unit: "", item: "שמן (לטיגון עמוק/חצי עמוק)" }
            ]
        },
        {
            sectionName: "לתיבול",
            items: [
                { amount: 1, unit: "", item: "לימון (סחוט)" },
                { amount: 2, unit: "שיני", item: "שום כתוש" },
                { amount: 1, unit: "חופן", item: "פטרוזיליה או כוסברה (קצוצה)" },
                { amount: null, unit: "", item: "צנוברים" }
            ]
        },
        {
            sectionName: "להגשה (תוספות סביח)",
            items: [
                { amount: null, unit: "", item: "פיתות" },
                { amount: null, unit: "", item: "חומוס" },
                { amount: null, unit: "", item: "טחינה" },
                { amount: null, unit: "", item: "סלט ירקות (עגבניה ומלפפון)" },
                { amount: null, unit: "", item: "ביצים קשות" }
            ]
        }
    ],
    instructions: "1. כ-4-5 שעות לפני הבישול: מקלפים את החצילים חלקית (פסים/זברה) ופורסים אותם לרוחב.\n2. שמים את הפרוסות במסננת, מפזרים מלח ומניחים צלחת מלמעלה (כמשקולת) כדי להגיר נוזלים. מניחים בצד.\n3. פורסים מגבת עם נייר סופג ולוחצים על החצילים כדי לייבש אותם היטב מהנוזלים.\n4. מטגנים במחבת עם הרבה שמן (החציל לא צריך לגעת בתחתית המחבת). הופכים באמצע הטיגון עד להזהבה. מוציאים לנייר סופג.\n5. מערבבים את הפטרוזיליה (או כוסברה), השום הכתוש והלימון, ומזלפים מעל החצילים המוכנים.\n6. מפזרים מעל צנוברים ומגישים לצד התוספות (פיתה, חומוס, טחינה, סלט וביצים).",
    english: {
        title: "Sabich",
        author: "Flaminia",
        ingredients: [
            {
                sectionName: "For the Eggplant",
                items: [
                    { amount: 1.5, unit: "", item: "Eggplants" },
                    { amount: null, unit: "", item: "Salt (for sweating)" },
                    { amount: null, unit: "", item: "Oil (for frying)" }
                ]
            },
            {
                sectionName: "Dressing & Garnish",
                items: [
                    { amount: 1, unit: "", item: "Lemon (juiced)" },
                    { amount: 2, unit: "cloves", item: "Minced garlic" },
                    { amount: 1, unit: "handful", item: "Parsley or Cilantro" },
                    { amount: null, unit: "", item: "Pine nuts" }
                ]
            },
            {
                sectionName: "Toppings",
                items: [
                    { amount: null, unit: "", item: "Pita bread" },
                    { amount: null, unit: "", item: "Hummus" },
                    { amount: null, unit: "", item: "Tahini" },
                    { amount: null, unit: "", item: "Tomato/Cucumber salad" },
                    { amount: null, unit: "", item: "Hard boiled eggs" }
                ]
            }
        ],
        instructions: "1. 4-5 hours before cooking: Partly peel the eggplant (stripes), slice the short way.\n2. Put slices in a strainer, add salt, and cover with a plate on top to press it down so it releases juices. Let sit.\n3. Lay out a towel with paper towel and then press the slices to get the liquid out.\n4. Fry in a pan with lots of oil (eggplant should not touch the bottom of the pan). Flip halfway. Remove from pan onto paper towels.\n5. Mix parsley (or cilantro), minced garlic, and lemon, then drizzle on top of the fried eggplant.\n6. Top with pine nuts and serve with the toppings."
    }
},
{
    id: "flaminia_tortilla",
    title: "טורטייה ספרדית (פריטטה)",
    author: "פלמיניה",
    tags: ["צמחוני", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        { amount: 4, unit: "", item: "תפוחי אדמה צהובים" },
        { amount: 1, unit: "קטן", item: "בצל" },
        { amount: 4, unit: "", item: "ביצים" },
        { amount: null, unit: "", item: "שמן זית" },
        { amount: null, unit: "", item: "מלח" }
    ],
    instructions: "1. מקלפים ופורסים את תפוחי האדמה והבצל.\n2. שמים אותם יחד בקערת זכוכית ומערבבים עם מעט שמן זית. מכסים (משאירים פתח קטן לאוורור) ומפעילים במיקרוגל ל-5 דקות.\n3. מערבבים ומפעילים ל-4 דקות נוספות. אם צריך, מוסיפים עוד 3-4 דקות עד שתפוחי האדמה רכים.\n4. מניחים לתערובת להתקרר מעט. מערבבים פנימה את הביצים והמלח.\n5. מחממים מעט שמן במחבת (המחבת צריכה להיות לוהטת). מנמיכים לחום בינוני ושופכים את כל התערובת פנימה. מנענעים את המחבת בתנועות מעגליות כדי שהחביתה לא תידבק, אך לא מערבבים. כשהחביתה מתייצבת, הופכים אותה על צלחת ומחליקים אותה חזרה למחבת לצד השני למספר דקות נוספות.",
    english: {
        title: "Spanish Tortilla (frittata)",
        author: "Flaminia",
        ingredients: [
            { amount: 4, unit: "", item: "Yellow potatoes" },
            { amount: 1, unit: "small", item: "Onion" },
            { amount: 4, unit: "", item: "Eggs" },
            { amount: null, unit: "", item: "Olive oil" },
            { amount: null, unit: "", item: "Salt" }
        ],
        instructions: "1. Peel and slice potatoes and onions.\n2. Put together in a glass bowl, mix with olive oil. Microwave for 5 minutes covered (leave a slit for steam).\n3. Mix again, microwave for 4 more minutes. Add another 3-4 minutes if needed until soft.\n4. Let it cool a bit, then mix in the eggs and salt.\n5. Heat a tiny bit of oil in a pan (needs to be super hot). Lower to medium heat and pour the whole mixture in. Shake in a round motion so it doesn't stick, but don't mix. Flip onto a plate once it's set, then slide it back into the pan for a few more minutes."
    }
},
{
    id: "challah",
    title: "חלה",
    author: "פלמיניה",
    tags: ["צמחוני", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לבצק",
            items: [
                { amount: 3.5, unit: "כוסות", item: "קמח רגיל (מנופה)" },
                { amount: 0.25, unit: "כוס", item: "סוכר (1/3 כוס לחלה עגולה)" },
                { amount: 1, unit: "כף", item: "שמרים יבשים" },
                { amount: 0.5, unit: "כף", item: "מלח" },
                { amount: 0.25, unit: "כוס", item: "שמן צמחי" },
                { amount: 1, unit: "", item: "ביצה" },
                { amount: 1, unit: "כוס", item: "מים חמימים (בין 3/4 ל-1 כוס)" }
            ]
        },
        {
            sectionName: "לציפוי",
            items: [
                { amount: 1, unit: "", item: "ביצה (להברשה, מעורבבת עם מים ומלח)" },
                { amount: null, unit: "", item: "שומשום" }
            ]
        },
        {
            sectionName: "לזיגוג (אופציונלי לחלה עגולה)",
            items: [
                { amount: 0.5, unit: "כוס", item: "סוכר" },
                { amount: 0.5, unit: "כוס", item: "מים" },
                { amount: 1, unit: "כף", item: "דבש" },
                { amount: 0.5, unit: "כף", item: "מיץ לימון" }
            ]
        }
    ],
    instructions: "1. מערבבים את החומרים היבשים (יש לנפות את הקמח).\n2. מוסיפים למיקסר ומוסיפים את החומרים הרטובים אחד אחד. את המים מוסיפים בהדרגה.\n3. להשאיר את הבצק ללישה במיקסר במשך 7-10 דקות.\n4. משמנים תחתית קערה, מניחים את הבצק בפנים ומשמנים גם את חלקו העליון של הבצק.\n5. מכסים במגבת ומתפיחים למשך שעה-שעה וחצי.\n6. אם מכינים חלה עגולה ורוצים להוסיף זיגוג: מבשלים את חומרי הזיגוג על אש גבוהה במשך 10-15 דקות ומצננים.\n7. קולעים את החלה (מומלץ להיעזר בסרטון הדרכה).\n8. מכסים במגבת ומתפיחים שנית למשך שעה לפחות.\n9. מורחים בביצה (בלילה עם מעט מים ומלח) ומפזרים שומשום.\n10. אופים ב-180 מעלות למשך 20-30 דקות.\n11. מוציאים מהתנור ומכסים במגבת. אם זו חלה עגולה עם זיגוג - מורחים את הזיגוג ולא מכסים במגבת.",
    english: {
        title: "Challah",
        author: "Flaminia",
        ingredients: [
            {
                sectionName: "For the Dough",
                items: [
                    { amount: 3.5, unit: "cups", item: "All purpose flour (sifted)" },
                    { amount: 0.25, unit: "cup", item: "Sugar (1/3 cup for round challah)" },
                    { amount: 1, unit: "tbsp", item: "Dried yeast" },
                    { amount: 0.5, unit: "tbsp", item: "Salt" },
                    { amount: 0.25, unit: "cup", item: "Vegetable oil" },
                    { amount: 1, unit: "", item: "Egg" },
                    { amount: 1, unit: "cup", item: "Water, slightly warm (3/4 to 1 cup)" }
                ]
            },
            {
                sectionName: "For Topping",
                items: [
                    { amount: 1, unit: "", item: "Egg (for wash, mixed with water/salt)" },
                    { amount: null, unit: "", item: "Sesame seeds" }
                ]
            },
            {
                sectionName: "Glaze (Optional for round challah)",
                items: [
                    { amount: 0.5, unit: "cup", item: "Sugar" },
                    { amount: 0.5, unit: "cup", item: "Water" },
                    { amount: 1, unit: "tbsp", item: "Honey" },
                    { amount: 0.5, unit: "tbsp", item: "Lemon juice" }
                ]
            }
        ],
        instructions: "1. Mix dry ingredients (only sift flour).\n2. Add wet ingredients one at a time while mixer is going, add the water slowly.\n3. Let dough knead for 7-10 minutes.\n4. Put oil on bottom of bowl and place dough in bowl and place oil on top.\n5. Let rise for 1-1.5 hours covered with a towel.\n6. If making round challah, make glaze by putting ingredients over high heat for ~10-15 minutes and then let cool.\n7. Braid it (watch video).\n8. Let it rise 1 hour at least covered with a towel.\n9. Put egg wash (add water and salt) and sesame seeds on dough.\n10. Bake at 355°F (180°C) for 20-30 minutes.\n11. Take it out and cover with towel OR for round challah put glaze on and do not cover with towel."
    }
},
{
    id: "flaminia_sushi",
    title: "אורז לסושי",
    author: "פלמיניה",
    tags: ["צמחוני", "English"],
    image: "", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לאורז",
            items: [
                { amount: 2, unit: "כוסות", item: "אורז עגול" },
                { amount: 3, unit: "כוסות", item: "מים" }
            ]
        },
        {
            sectionName: "לתחמיץ (רוטב לאורז)",
            items: [
                { amount: 4, unit: "כפות", item: "חומץ אורז" },
                { amount: 1, unit: "כף", item: "מירין" },
                { amount: 2, unit: "כפות", item: "סוכר" },
                { amount: 2, unit: "כפיות", item: "מלח" }
            ]
        }
    ],
    instructions: "1. הכנת האורז: מבשלים את 2 כוסות האורז עם 3 כוסות המים (מביאים לרתיחה, מנמיכים אש ומבשלים עד שהמים נספגים). לאחר הבישול, מכסים את הסיר במגבת וממתינים 30 דקות.\n2. הכנת התחמיץ: מערבבים בקערה את החומץ, המירין, הסוכר והמלח. מחממים במיקרוגל עד שהסוכר והמלח נמסים לחלוטין. מניחים לצינון.\n3. ערבוב: שופכים את התחמיץ לאט לתוך האורז ומערבבים בעדינות (בתנועות קיפול). מכסים שוב במגבת ומניחים למשך שעה לספיגת טעמים וצינון.\n4. כשהאורז התקרר, מתחילים לגלגל סושי (עם אצות ותוספות לבחירה).",
    english: {
        title: "Sushi Rice",
        author: "Flaminia",
        ingredients: [
            {
                sectionName: "Rice Base",
                items: [
                    { amount: 2, unit: "cups", item: "Rice (Sushi/Short grain)" },
                    { amount: 3, unit: "cups", item: "Water" }
                ]
            },
            {
                sectionName: "Vinegar Mixture",
                items: [
                    { amount: 4, unit: "tbsp", item: "Rice vinegar" },
                    { amount: 1, unit: "tbsp", item: "Mirin" },
                    { amount: 2, unit: "tbsp", item: "Sugar" },
                    { amount: 2, unit: "tsp", item: "Salt" }
                ]
            }
        ],
        instructions: "1. Make the rice: Cook the 2 cups of rice with the 3 cups of water. Once cooked, turn off heat and wait 30 minutes with a towel covering the rice pot.\n2. Make vinegar mixture: Mix the vinegar, mirin, sugar, and salt. Microwave until sugar and salt are dissolved. Let cool.\n3. Mix the vinegar mixture slowly into the rice and let sit with a towel covering it for an hour.\n4. When rice is cool, begin rolling!"
    }
},
{
    id: "inbal_roasted_cauliflower",
    title: "סלט כרוביות צלויות",
    author: "ענבל",
    tags: ["סלטים", "חלבי", "English"],
    image: "images/caul_salad.jpeg", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לסלט",
            items: [
                { amount: 1, unit: "", item: "כרובית לבנה וטרייה" },
                { amount: 4, unit: "כפות", item: "שמן זית (לתיבול הכרובית)" },
                { amount: 0.5, unit: "כפית", item: "מלח" },
                { amount: 5, unit: "", item: "צנוניות" },
                { amount: 0.5, unit: "", item: "בצל סגול (קלוף)" },
                { amount: 1, unit: "חופן", item: "עלי זעתר טריים (או כוסברה/עירית)" },
                { amount: 0.5, unit: "כוס", item: "גרגירי חומוס מבושלים" },
                { amount: 20, unit: "", item: "זיתי קלמטה (ללא גלעין)" }
            ]
        },
        {
            sectionName: "לקרם היוגורט",
            items: [
                { amount: 1, unit: "גביע", item: "שמנת חמוצה (\"של פעם\")" },
                { amount: 1, unit: "גביע", item: "יוגורט BIO 3%" }
            ]
        },
        {
            sectionName: "לרוטב",
            items: [
                { amount: 4, unit: "כפות", item: "שמן זית" },
                { amount: 0.5, unit: "", item: "לימון (סחוט למיץ)" },
                { amount: null, unit: "", item: "פלפל שחור גרוס" },
                { amount: 2, unit: "כפות", item: "סירופ מייפל" },
                { amount: 0.5, unit: "", item: "פלפל צ'ילי טרי" }
            ]
        }
    ],
    instructions: "1. מפרקים את הכרובית לפרחים בגודל 4-5 ס”מ ושוטפים היטב. מבשלים במים רותחים במשך 10 דקות ומסננים (זה בסדר אם הכרוביות עדיין לא רכות לגמרי).\n2. מעבירים לתבנית עם נייר אפייה, מזלפים שמן זית בנדיבות, ממליחים ואופים בתנור שחומם מראש ל-180 מעלות עד להזהבה יפה.\n3. פורסים את הצנוניות והבצל לפרוסות דקות מאוד.\n4. הכנת קרם היוגורט: מערבבים את השמנת והיוגורט ומורחים על צלחת הגשה (כמו שמצלחתים חומוס).\n5. בקערה נפרדת מערבבים את כל מרכיבי הסלט (כרובית אפויה, צנוניות, בצל, עשבי תיבול, חומוס וזיתים).\n6. מניחים את הסלט מעל קרם היוגורט שבצלחת.\n7. מערבבים את כל מרכיבי הרוטב, מזלפים בנדיבות מעל הסלט ומגישים בטמפרטורת החדר.",
    english: {
        title: "Roasted Cauliflower Salad",
        author: "Inbal",
        ingredients: [
            {
                sectionName: "For the Salad",
                items: [
                    { amount: 1, unit: "", item: "Fresh white cauliflower" },
                    { amount: 4, unit: "tbsp", item: "Olive oil (for roasting)" },
                    { amount: 0.5, unit: "tsp", item: "Salt" },
                    { amount: 5, unit: "", item: "Radishes" },
                    { amount: 0.5, unit: "", item: "Red onion (peeled)" },
                    { amount: 1, unit: "handful", item: "Fresh Za'atar leaves (or cilantro/chives)" },
                    { amount: 0.5, unit: "cup", item: "Cooked chickpeas" },
                    { amount: 20, unit: "", item: "Kalamata olives (pitted)" }
                ]
            },
            {
                sectionName: "For the Yogurt Cream",
                items: [
                    { amount: 1, unit: "container", item: "Sour cream (Rich/Old fashioned style)" },
                    { amount: 1, unit: "container", item: "Bio Yogurt 3%" }
                ]
            },
            {
                sectionName: "For the Sauce",
                items: [
                    { amount: 4, unit: "tbsp", item: "Olive oil" },
                    { amount: 0.5, unit: "", item: "Lemon (juiced)" },
                    { amount: null, unit: "", item: "Ground black pepper" },
                    { amount: 2, unit: "tbsp", item: "Maple syrup" },
                    { amount: 0.5, unit: "", item: "Fresh chili" }
                ]
            }
        ],
        instructions: "1. Break the cauliflower into 4-5 cm florets and wash well. Boil in water for 10 minutes and drain (it's okay if not completely soft).\n2. Transfer to a baking sheet lined with parchment paper, drizzle generously with olive oil, add salt, and bake in a preheated oven at 180°C (355°F) until beautifully golden.\n3. Slice the radishes and onion into very thin slices.\n4. Prepare the yogurt cream: Mix the sour cream and yogurt and spread on a serving plate (plating it like Hummus).\n5. In a separate bowl, mix all the salad ingredients (roasted cauliflower, radishes, onion, herbs, chickpeas, and olives).\n6. Place the salad on top of the yogurt cream.\n7. Mix all the sauce ingredients, drizzle generously over the salad, and serve at room temperature."
    }
},
{
    id: "inbal_pulled_meat_veggies",
    title: "בשר מפורק וירקות בתנור",
    author: "ענבל",
    tags: ["בשרי", "English"],
    image: "images/oven_meat_veg.jpeg", 
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לבשר ולירקות",
            items: [
                { amount: 1.5, unit: "ק\"ג", item: "בשר צלי ברשת (כתף/צלעות/צוואר)" },
                { amount: 3, unit: "", item: "בצלים (פרוסים גס)" },
                { amount: 3, unit: "", item: "כרישה (חתוכה למקטעים של 10 ס\"מ)" },
                { amount: 10, unit: "", item: "תפוחי אדמה (או כמה שנכנס)" },
                { amount: 10, unit: "", item: "בצלצלי שאלוט (שלמים)" },
                { amount: 3, unit: "", item: "מיני בטטה" },
                { amount: 15, unit: "", item: "שזיפים יבשים (מגולענים)" }
            ]
        },
        {
            sectionName: "לתיבול ונוזלים",
            items: [
                { amount: 0.33, unit: "כוס", item: "שמן זית" },
                { amount: 1, unit: "כפית", item: "פלפל שחור גרוס" },
                { amount: 1, unit: "כפית", item: "מלח ים אטלנטי" },
                { amount: 5.5, unit: "כפות", item: "מייפל אמיתי" },
                { amount: 1, unit: "כוס", item: "מים" }
            ]
        }
    ],
    instructions: "1. מחממים תנור ל-150 מעלות.\n2. מניחים את הבשר בסיר (מומלץ סיר ברזל יצוק). מוזגים עליו חלק משמן הזית, המלח והפלפל ומעסים היטב בידיים.\n3. מסדרים את הירקות: מניחים את הבצלים הפרוסים (חלקם מתחת לבשר עצמו), מוסיפים את הכרישה, בצלי השאלוט, הבטטות, תפוחי האדמה והשזיפים.\n4. מוזגים את שארית שמן הזית, מתבלים בעוד מלח ופלפל, מזלפים מעל את המייפל ומוזגים את כוס המים.\n5. מכסים ומכניסים לתנור למשך כשעתיים. לאחר שעתיים, פותחים, מרטיבים את הבשר והירקות בנוזלים שהצטברו וטועמים כדי לתקן תיבול.\n6. ממשיכים לבשל עוד כ-3 שעות (סך הכל כ-5 שעות) או עד שהבשר רך לחלוטין (סכין ננעצת בו בצורה חלקה).\n7. סמוך להגשה: מוציאים מהסיר, גוזרים את הרשת ומפרקים את הבשר בעזרת שני מזלגות ('פול ד ביף'). מגישים לצד הירקות מהסיר ואורז לבן.",
    english: {
        title: "Slow Roasted Pulled Meat & Vegetables",
        author: "Inbal",
        ingredients: [
            {
                sectionName: "Meat & Vegetables",
                items: [
                    { amount: 1.5, unit: "kg", item: "Roast beef in netting (Chuck/Ribs/Neck/Brisket)" },
                    { amount: 3, unit: "", item: "Onions (roughly sliced)" },
                    { amount: 3, unit: "", item: "Leeks (cut into 10cm segments)" },
                    { amount: 10, unit: "", item: "Potatoes (As many as fit!)" },
                    { amount: 10, unit: "", item: "Shallots (whole)" },
                    { amount: 3, unit: "", item: "Mini sweet potatoes" },
                    { amount: 15, unit: "", item: "Prunes (pitted)" }
                ]
            },
            {
                sectionName: "Seasoning & Liquids",
                items: [
                    { amount: 0.33, unit: "cup", item: "Olive oil" },
                    { amount: 1, unit: "tsp", item: "Coarse black pepper" },
                    { amount: 1, unit: "tsp", item: "Atlantic sea salt" },
                    { amount: 5.5, unit: "tbsp", item: "Pure maple syrup" },
                    { amount: 1, unit: "cup", item: "Water" }
                ]
            }
        ],
        instructions: "1. Preheat oven to 150°C (300°F).\n2. Place the meat in a pot (cast iron recommended). Pour some of the olive oil, salt, and pepper over it and rub well with your hands.\n3. Arrange the vegetables: Place the sliced onions (some underneath the meat), add the leeks, shallots, sweet potatoes, potatoes, and prunes.\n4. Pour the remaining olive oil, season with more salt and pepper, drizzle the maple syrup over everything, and pour in the water.\n5. Cover and bake for about 2 hours. After 2 hours, open the pot, baste the meat and veggies with the juices, and taste to adjust seasoning.\n6. Continue cooking for another 3 hours (Total ~5 hours) or until the meat is completely soft (a knife should slide in smoothly).\n7. Close to serving time: Remove from pot, cut the net, and pull the meat apart using two forks. Serve alongside the roasted vegetables and white rice."
    }
},
{
    id: "malka_chraime",
    title: "החריימה של מלכה",
    author: "מלכה",
    tags: ["דגים"],
    image: "images/malka_chraime.jpeg", 
    sourceUrl: "",
    ingredients: [
        { amount: 5, unit: "חתיכות", item: "פילה דג (לברק, נסיכת הנילוס או דג לבן בשרני)" },
        { amount: 240, unit: "גרם", item: "רסק עגבניות" },
        { amount: 1.5, unit: "כפיות", item: "פלפל צ'ומה (לפי הטעם)" },
        { amount: 1, unit: "כפית שטוחה", item: "פפריקה מתוקה" },
        { amount: 0.5, unit: "כפית", item: "כמון" },
        { amount: 0.25, unit: "כפית", item: "סוכר (פחות מרבע כפית, לא חובה)" },
        { amount: 1, unit: "כפית", item: "מלח" },
        { amount: 1, unit: "כפית", item: "מלח גס" },
        { amount: null, unit: "קורט", item: "קימל טחון" },
        { amount: 0.5, unit: "", item: "לימון" },
        { amount: null, unit: "", item: "שמן זית (בנדיבות)" },
        { amount: 1, unit: "כוס", item: "מים (לא רותחים)" },
        { amount: null, unit: "", item: "מלח גס נוסף (להשריית הדג)" }
    ],
    instructions: "1. הכנת הדג: שוטפים את חתיכות הדג, ואז מפזרים עליהן לימון ומלח גס. משרים לרבע שעה.\n2. הכנת הרוטב: מחממים שמן בנדיבות בסיר רחב. מוסיפים כפית וחצי פלפל צ'ומה ופותחים בשמן.\n3. מוסיפים את שאר התבלינים: כמון, כפית מלח גס, פפריקה מתוקה, סוכר ורסק עגבניות. מטגנים קלות.\n4. מנמיכים את האש ומוסיפים כוס מים (לא רותחים). מביאים לרתיחה, מנמיכים ומבשלים 15-20 דקות עד שהרוטב מצטמצם.\n5. בישול הדג: מוסיפים את חתיכות הדג לסיר. מפזרים מעט קימל ביד על כל חתיכה. מכסים את הדגים ברוטב (זה בסדר אם הם עולים אחד על השני).\n6. מנמיכים לאש נמוכה ומבשלים כ-15 דקות.\n7. מכבים את האש. מומלץ לתת לתבשיל לנוח כ-20 דקות לפני ההגשה."
},
{
    id: "neta_pretzel_dogs",
    title: "פרעצל דוגס (נקניקיות בלחמניות פרעצל)",
    author: "(ענבל) נטע לויה",
    tags: [
        "בשרי",
        "English"
    ],
    image: "images/neta_pretzel_dogs.jpeg",
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "לבצק",
            items: [
                {
                    amount: 500,
                    unit: "גרם",
                    item: "קמח (3.5 כוסות)"
                },
                {
                    amount: 10,
                    unit: "גרם",
                    item: "שמרים יבשים (2 כפיות)"
                },
                {
                    amount: 50,
                    unit: "גרם",
                    item: "סוכר (1/4 כוס)"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "ביצים"
                },
                {
                    amount: 70,
                    unit: "גרם",
                    item: "שמן (1/3 כוס)"
                },
                {
                    amount: 3/4,
                    unit: "כוס",
                    item: "מים חמימים"
                },
                {
                    amount: 1,
                    unit: "כפית",
                    item: "מלח"
                }
            ]
        },
        {
            sectionName: "לאמבטיית סודה (לבישול)",
            items: [
                {
                    amount: 4,
                    unit: "ליטר",
                    item: "מים"
                },
                {
                    amount: 2,
                    unit: "כפות",
                    item: "אבקת סודה לשתייה"
                }
            ]
        },
        {
            sectionName: "להרכבה וציפוי",
            items: [
                {
                    amount: 12,
                    unit: "",
                    item: "נקניקיות (עוף/בקר/צמחוני)"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "ביצה טרופה (להברשה)"
                },
                {
                    amount: null,
                    unit: "",
                    item: "מלח גס/שומשום/קצח (לפיזור)"
                }
            ]
        },
        {
            sectionName: "אופציונלי",
            items: [
                {
                    amount: 5,
                    unit: "כפות",
                    item: "שמן זית"
                },
                {
                    amount: 1,
                    unit: "שן",
                    item: "שום כתוש"
                }
            ]
        }
    ],
    instructions: "<u>הכנת הבצק:</u>\n בקערת המיקסר שמים את הקמח, השמרים, הסוכר, הביצים והשמן. מתחילים ללוש עם וו לישה במהירות נמוכה.\n2. מוסיפים בהדרגה את המים החמימים ולשים עד שנוצר בצק.\n3. מוסיפים את המלח ומגבירים למהירות בינונית. לשים כ-7 דקות עד לקבלת בצק חלק ומעט דביק (הבצק אמור להידבק לתחתית המיקסר).\n4. מכסים בניילון נצמד ומתפיחים שעה-שעה וחצי (עד להכפלת הנפח).\n5. הכנת הנקניקיות: מניחים את הנקניקיות על צלחת ומייבשים היטב עם נייר סופג (חשוב כדי שהבצק יידבק).\n<u>עיצוב: </u>\n6. מעבירים את הבצק למשטח מקומח ומשטחים למלבן עבה. מחלקים ל-12 רצועות שוות.\n7. מלפפים כל רצועה סביב נקניקייה מקצה לקצה (משאירים את הקצוות חשופים). מהדקים היטב את הבצק בקצוות ולוחצים עם היד לוודא שהוא דבוק.\n8. מניחים בתבניות מרופדות בנייר אפייה (במרווחים של 3 ס\"מ), מכסים ומתפיחים 20 דקות נוספות.\n<u>בישול ואפייה: </u>\n9. מחממים תנור ל-180 מעלות (טורבו). מרתיחים בסיר את המים עם הסודה לשתייה.\n10. טובלים את הנקניקיות העטופות במים הרותחים בסבבים (2-3 בכל פעם) למשך 2 דקות (דקה מכל צד). מוציאים עם כף מחוררת ומחזירים לתבנית.\n11. מברישים בביצה ומפזרים תוספות (מלח גס, שומשום וכו').\n12. אופים כ-20 דקות עד להזהבה.\n<u>אופציונלי:</u>\nמברישים בשמן שום מיד כשהן יוצאות מהתנור. מצננים 10 דקות ומגישים."
},
{
    id: "stuffed_grape_leaves_rice",
    title: "עלי גפן ממולאים באורז",
    author: "ענבל",
    tags: [
        "צמחוני"
    ],
    image: "images/stuffed_grape_leaves_rice.jpeg",
    sourceUrl: "",
    ingredients: [
        {
            sectionName: "למילוי",
            items: [
                {
                    amount: 2.5,
                    unit: "כוסות",
                    item: "אורז יסמין"
                },
                {
                    amount: null,
                    unit: "",
                    item: "עלי גפן טריים"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "עגבניות בינוניות חתוכות דק"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "בצל חתוך דק"
                },
                {
                    amount: 7,
                    unit: "שיני",
                    item: "שום קצוצות"
                },
                {
                    amount: 7,
                    unit: "כפות",
                    item: "שמן קנולה"
                },
                {
                    amount: 4,
                    unit: "כפות",
                    item: "רכז רימונים"
                },
                {
                    amount: 3,
                    unit: "כפות",
                    item: "רכז תמרהינדי"
                },
                {
                    amount: 1.5,
                    unit: "כפות",
                    item: "מלח דק"
                },
                {
                    amount: 1,
                    unit: "חופן",
                    item: "נענע יבשה"
                },
                {
                    amount: 7,
                    unit: "עלי",
                    item: "נענע קצוצים"
                },
                {
                    amount: 0.5,
                    unit: "כפית",
                    item: "פלפל שחור טחון"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "בצלים (למילוי אופציונלי)"
                }
            ]
        },
        {
            sectionName: "לרוטב ולבישול",
            items: [
                {
                    amount: 0.33,
                    unit: "כוס",
                    item: "שמן זית (לזילוף לפני הרוטב)"
                },
                {
                    amount: 2,
                    unit: "כוסות",
                    item: "מים רותחים"
                },
                {
                    amount: 5,
                    unit: "כפות",
                    item: "שמן זית"
                },
                {
                    amount: 1,
                    unit: "בינוני",
                    item: "לימון סחוט"
                },
                {
                    amount: 1.5,
                    unit: "כפות",
                    item: "סוכר לבן"
                },
                {
                    amount: 1,
                    unit: "כפית",
                    item: "מלח דק"
                },
                {
                    amount: 0.5,
                    unit: "כפית",
                    item: "פלפל שחור טחון"
                }
            ]
        }
    ],
    instructions: "1. מכינים את המילוי: משרים את האורז בקערה עם מים למשך חצי שעה. לאחר מכן מסננים את המים.\n2. מוסיפים לקערת האורז את העגבניות, הבצל, השום, השמן, רכז הרימונים, רכז התמרהינדי, המלח, הנענע היבשה, עלי הנענע הקצוצים והפלפל השחור. מערבבים היטב.\n3. ממלאים את עלי הגפן במילוי ומגלגלים.\n\nאופציונלי: למילוי בצלים, יוצרים חריץ בבצל ומבשלים במים כדי שיתרכך מעט ויהיה אלסטי למילוי. במידה ומשתמשים בהם, יש להניח את הבצלים בתחתית הסיר לקבלת קרמול.\n4. מרפדים את תחתית הסיר עם עלי גפן ריקים ועליהם מסדרים בצפיפות את עלי הגפן הממולאים.\n5. מזלפים מעל שמן זית בנדיבות ומבשלים על אש בינונית במשך 10 דקות ללא נוזלים.\n6. מכינים את הרוטב: מערבבים בקערה מים רותחים, שמן זית, מיץ לימון, סוכר, מלח ופלפל.\n7. שופכים בעדינות את הרוטב לסיר עד לגובה הממולאים (אם חסר נוזל, מוסיפים מעט מים).\n8. מבשלים על אש קטנה במשך שעה וחצי עד שעתיים.\n9. בודקים את הסיר מדי פעם; אם המים התאדו לגמרי, מוסיפים מעט מים חמים."
},
    {
        id: "silvi_mushroom_pie",
        title: "פשטידת פטריות",
        author: "סבתא סילוי",
        tags: [
            "חלבי",
            "צמחוני"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                sectionName: "לבצק",
                items: [
                    {
                        amount: 100,
                        unit: "גרם",
                        item: "חמאה"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "קמח"
                    },
                    {
                        amount: 1,
                        unit: "",
                        item: "ביצה"
                    },
                    {
                        amount: null,
                        unit: "קצת",
                        item: "מלח"
                    }
                ]
            },
            {
                sectionName: "למילוי",
                items: [
                    {
                        amount: 1,
                        unit: "סלסלת",
                        item: "פטריות שמפיניון"
                    },
                    {
                        amount: 1,
                        unit: "סלסלת",
                        item: "פטריות פורטבלו"
                    },
                    {
                        amount: 2,
                        unit: "",
                        item: "בצלים בינוניים (קצוצים)"
                    }
                ]
            },
            {
                sectionName: "לבלילה",
                items: [
                    {
                        amount: 1,
                        unit: "מיכל",
                        item: "שמנת מתוקה"
                    },
                    {
                        amount: 2,
                        unit: "",
                        item: "ביצים"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "מלח"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "פלפל"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "אורגנו"
                    }
                ]
            }
        ],
        instructions: "1. הכנת הבצק: לשים את כל חומרי הבצק, מרדדים ומשטחים על התבנית. מחוררים את הבצק בעזרת מזלג.\n2. הכנת המילוי: חותכים את הבצלים והפטריות. מטגנים את הבצל עד לשקיפות, מוסיפים את הפטריות ומטגנים מעט. מניחים בצד להתקרר.\n3. הרכבה: כשהמילוי התקרר, מניחים אותו על הבצק.\n4. מערבבים את כל חומרי הבלילה (שמנת, ביצים ותבלינים) ושופכים מעל הפטריות.\n5. אופים ב-180 מעלות כ-40 דקות."
    },
    {
        id: "silvi_hot_chocolate_cake",
        title: "עוגת שוקולד חמה",
        author: "סבתא סילוי",
        tags: [
            "חלבי",
            "עוגות"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                sectionName: "לעוגה",
                items: [
                    {
                        amount: 6,
                        unit: "",
                        item: "ביצים"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "סוכר"
                    },
                    {
                        amount: 0.75,
                        unit: "כוס",
                        item: "שמן"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "קמח"
                    },
                    {
                        amount: 1,
                        unit: "שקית",
                        item: "אבקת אפייה"
                    },
                    {
                        amount: 1,
                        unit: "שקית",
                        item: "סוכר וניל"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "שוקולית"
                    }
                ]
            },
            {
                sectionName: "לקרם",
                items: [
                    {
                        amount: 200,
                        unit: "גרם",
                        item: "שוקולד מריר"
                    },
                    {
                        amount: 1,
                        unit: "מיכל",
                        item: "שמנת מתוקה"
                    },
                    {
                        amount: 3,
                        unit: "כפות",
                        item: "ממרח שוקולד"
                    }
                ]
            }
        ],
        instructions: "1. מקציפים יחד את הביצים והסוכר.\n2. מוסיפים את שאר מרכיבי העוגה (יבשים ושמן) לסירוגין ומערבבים לאיחוד.\n3. מעבירים את הבלילה לתבנית ואופים ב-170 מעלות כ-30 דקות.\n4. הכנת הקרם: ממיסים יחד את השוקולד המריר, השמנת המתוקה וממרח השוקולד.\n5. כשהעוגה מוכנה, חותכים אותה כשהיא חמה בשתי וערב (חריצים) ושופכים עליה את הקרם.\n6. מומלץ להגיש חם (אפשר להוסיף קצפת או גלידה בצד)."
    },
    {
        id: "silvi_cauliflower_bechamel",
        title: "פשטידת כרובית בבשמל",
        author: "סבתא סילוי",
        tags: [
            "חלבי",
            "צמחוני"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                sectionName: "כרובית",
                items: [
                    {
                        amount: 1,
                        unit: "",
                        item: "כרובית גדולה (מפורקת לפרחים)"
                    }
                ]
            },
            {
                sectionName: "לרוטב (הכמות הוכפלה)",
                items: [
                    {
                        amount: 100,
                        unit: "גרם",
                        item: "חמאה"
                    },
                    {
                        amount: 6,
                        unit: "כפות",
                        item: "קמח"
                    },
                    {
                        amount: 2,
                        unit: "כוסות",
                        item: "חלב"
                    },
                    {
                        amount: 1,
                        unit: "כפית",
                        item: "מלח"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "גבינה קשה מגוררת (צהובה)"
                    }
                ]
            },
            {
                sectionName: "לציפוי",
                items: [
                    {
                        amount: 0.5,
                        unit: "כוס",
                        item: "פירורי לחם"
                    },
                    {
                        amount: 25,
                        unit: "גרם",
                        item: "חמאה (לפיזור מעל)"
                    }
                ]
            }
        ],
        instructions: "1. מנקים את הכרובית, מסירים עלים ירוקים, ומבשלים את הפרחים בסיר עם מי מלח כ-25 דקות (הכרובית צריכה להיות פריכה במידת מה). מסננים את המים.\n2. הכנת הרוטב: ממיסים את החמאה (100 גרם) בסיר בינוני על אש נמוכה. בוזקים פנימה את הקמח ובוחשים כ-3 דקות. מסירים מהאש.\n3. מוסיפים את החלב ובוחשים היטב. מחזירים לאש ומבשלים תוך ערבוב עד שהרוטב מסמיך (כ-5 דקות).\n4. מוסיפים את המלח והגבינה המגוררת, ומערבבים עד שהגבינה נמסה.\n5. משמנים תבנית אפייה ומסדרים עליה את פרחי הכרובית. יוצקים מעל את רוטב הגבינה.\n6. מפזרים את פירורי הלחם לכיסוי אחיד, ומפוררים מעל את שארית החמאה (25 גרם).\n7. אופים בחום בינוני במשך 35 דקות, או עד שפני המאפה משחימים יפה. מגישים חם."
    },
	{
    id: "kumara_bean_chili",
    title: "צ'ילי שעועית ובטטה",
    author: "ענאל",
    tags: [
        "צמחוני",
        "English"
    ],
    image: "",
    sourceUrl: "",
    ingredients: [
        {
            amount: 4,
            unit: "כפות",
            item: "שמן זית"
        },
        {
            amount: 1,
            unit: "קופסת שימורים",
            item: "עגבניות חתוכות עם צ'ילי"
        },
        {
            amount: 1,
            unit: "",
            item: "בצל לבן"
        },
        {
            amount: 3,
            unit: "שיני",
            item: "שום"
        },
        {
            amount: 2,
            unit: "",
            item: "בטטות גדולות"
        },
        {
            amount: 2.5,
            unit: "קופסאות שימורים",
            item: "שעועית (שעועית שחורה או מיקס קטניות)"
        },
        {
            amount: 1,
            unit: "כוס",
            item: "ציר ירקות או מים"
        },
        {
            amount: null,
            unit: "חבילת",
            item: "טחון מן הצומח (אופציונלי)"
        },
        {
            sectionName: "תבלינים",
            items: [
                {
                    amount: null,
                    unit: "",
                    item: "פפריקה"
                },
                {
                    amount: null,
                    unit: "",
                    item: "טחון צ'ילי"
                },
                {
                    amount: null,
                    unit: "",
                    item: "כמון"
                },
                {
                    amount: null,
                    unit: "",
                    item: "פלפל קאיין"
                },
                {
                    amount: null,
                    unit: "",
                    item: "מלח"
                },
				{
                    amount: null,
                    unit: "",
                    item: "פלפל"
                }
            ]
        }
    ],
    instructions: "1. מחממים 2-3 כפות שמן זית במחבת או סיר.\n2. מוסיפים את השום הכתוש והבצל הקצוץ לשמן ומטגנים עד שעולה ריח.\n3. מוסיפים עוד 1-2 כפות שמן ומוסיפים את הבטטה (חתוכה לקוביות). משחימים אותן מעט (כ-5 דקות תוך כדי ערבוב).\n4. מוסיפים את השעועית (יש לסנן את הנוזלים מהקופסה, אך אין צורך לשטוף את השעועית), העגבניות, ציר הירקות (או המים) ואת כל התבלינים. מערבבים ומכסים.\n5. כ-5 דקות לפני שהתבשיל מוכן, מוסיפים את הטחון מן הצומח (או שמבשלים אותו בנפרד לפי הוראות היצרן ומוסיפים).\n6. משאירים מכוסה על אש בינונית, תוך ערבוב מדי פעם. כדי לבדוק אם זה מוכן, בודקים חתיכת בטטה. אם היא עדיין קשה, צריך עוד זמן. אם היא נמעכת בקלות - זה מוכן!",
    english: {
        title: "Kumara and Bean Chili",
        author: "Anael",
        ingredients: [
            {
                amount: 4,
                unit: "tbsp",
                item: "Olive oil (3-5 TBSP)"
            },
            {
                amount: 1,
                unit: "can",
                item: "Diced tomatoes with chilis"
            },
            {
                amount: 1,
                unit: "",
                item: "Yellow onion"
            },
            {
                amount: 3,
                unit: "cloves",
                item: "Garlic (3+)"
            },
            {
                amount: 2,
                unit: "",
                item: "Large kumara (sweet potato) or 3 medium"
            },
            {
                amount: 2.5,
                unit: "cans",
                item: "Beans (Black beans or 4 bean mix)"
            },
            {
                amount: 1,
                unit: "cup",
                item: "Veggie stock or water"
            },
            {
                amount: null,
                unit: "",
                item: "Vegetarian ground beef (optional)"
            },
            {
                sectionName: "Spices",
                items: [
                    {
                        amount: null,
                        unit: "",
                        item: "Paprika"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "Chili powder"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "Cumin"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "Cayenne pepper"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "Salt & pepper"
                    }
                ]
            }
        ],
        instructions: "1. Add about 2-3 TBSP Olive oil to pan and heat.\n2. Add the minced garlic and diced onion to the oil and cook until fragrant.\n3. Add 1-2 more TBSP of oil and add in the cubed kumara. Brown them a little (5 minutes while stirring a little).\n4. Add the beans (drain the cans before adding, but no need to rinse the beans), the tomatoes, veggie stock or water and all of the spices. Stir it up and cover.\n5. About 5 minutes before it’s done, add the ground beef (or cook according to package instructions).\n6. Leave covered on medium heat, stirring regularly. To see if it's done, test a piece of kumara. If it is still hard, it needs longer. If it squishes, it's ready!"
    }
	},
    {
        id: "flaminia_salsa",
        title: "סלסה",
        author: "ענאל",
        tags: [
            "סלטים",
            "צמחוני",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                amount: 2,
                unit: "קופסאות שימורים",
                item: "עגבניות חתוכות עם צ'ילי"
            },
            {
                amount: 1,
                unit: "",
                item: "בצל צהוב (קצוץ)"
            },
            {
                amount: 3,
                unit: "שיני",
                item: "שום (או 2, קצוצות דק מאוד)"
            },
            {
                amount: 3,
                unit: "",
                item: "פלפלי סראנו גדולים (או 2-4, פרוסים דק ככל האפשר)"
            },
            {
                amount: null,
                unit: "",
                item: "מלח ופלפל (לפי הטעם)"
            },
            {
                amount: null,
                unit: "",
                item: "כמון"
            },
            {
                amount: null,
                unit: "",
                item: "פפריקה"
            },
            {
                amount: null,
                unit: "",
                item: "פלפל קאיין"
            }
        ],
        instructions: "פשוט זורקים הכל לקערה, מערבבים וטועמים!",
        english: {
            title: "Salsa",
            author: "Anael",
            ingredients: [
                {
                    amount: 2,
                    unit: "cans",
                    item: "Diced tomatoes with chili"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "Yellow onion (diced)"
                },
                {
                    amount: 3,
                    unit: "cloves",
                    item: "Garlic (2-3, chopped real small)"
                },
                {
                    amount: 3,
                    unit: "",
                    item: "Big Serrano peppers (2-4, sliced as SMALL as you can)"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Salt and pepper to taste"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Cumin, paprika, and Cayenne pepper"
                }
            ],
            instructions: "1. Just throw it all together and taste!"
        }
    },
    {
        id: "flaminia_shakshuka",
        title: "שקשוקה",
        author: "פלמיניה",
        tags: [
            "צמחוני",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                amount: 0.25,
                unit: "כוס",
                item: "שמן"
            },
            {
                amount: 1,
                unit: "",
                item: "גמבה אדומה קצוצה"
            },
            {
                amount: 2,
                unit: "",
                item: "פלפלי חלפיניו קצוצים"
            },
            {
                amount: 4,
                unit: "שיני",
                item: "שום כתוש"
            },
            {
                amount: 1,
                unit: "כף",
                item: "פפריקה"
            },
            {
                amount: null,
                unit: "",
                item: "קימל טחון"
            },
            {
                amount: null,
                unit: "",
                item: "כמון"
            },
            {
                amount: null,
                unit: "",
                item: "מלח ופלפל"
            },
            {
                amount: 0.5,
                unit: "כף",
                item: "רסק עגבניות"
            },
            {
                amount: 8,
                unit: "",
                item: "עגבניות קלופות (חתוכות דק)"
            },
            {
                amount: 1,
                unit: "כף",
                item: "סוכר"
            },
            {
                amount: 7,
                unit: "",
                item: "ביצים בטמפרטורת החדר (6-8 ביצים)"
            }
        ],
        instructions: "1. מחממים את השמן ומטגנים את הגמבה והחלפיניו.\n2. מוסיפים את השום מס' דקות לפני שהירקות מוכנים.\n3. מוסיפים את התבלינים ורסק העגבניות.\n4. מוסיפים את העגבניות והסוכר.\n5. מבשלים על אש בינונית ללא מכסה עד שכמעט ואין נוזלים (10-20 דקות).\n6. מוסיפים את הביצים, מכסים את המחבת ומבשלים על אש בינונית-גבוהה עד למידת העשייה הרצויה.",
        english: {
            title: "Shakshuka",
            author: "Flaminia",
            ingredients: [
                {
                    amount: 0.25,
                    unit: "cup",
                    item: "Oil"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "Diced red bell pepper"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "Jalapeños diced"
                },
                {
                    amount: 4,
                    unit: "cloves",
                    item: "Garlic minced"
                },
                {
                    amount: 1,
                    unit: "Tbsp",
                    item: "Paprika"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Ground Caraway"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Cumin"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Salt and pepper"
                },
                {
                    amount: 0.5,
                    unit: "tbsp",
                    item: "Tomato paste"
                },
                {
                    amount: 8,
                    unit: "",
                    item: "Tomatoes peeled, diced small"
                },
                {
                    amount: 1,
                    unit: "tbsp",
                    item: "Sugar"
                },
                {
                    amount: 7,
                    unit: "",
                    item: "Eggs room temp (6-8)"
                }
            ],
            instructions: "1. Sauté oil, pepper, jalapeno.\n2. Add garlic a few minutes before step 1 is done.\n3. Add spices, tomato paste.\n4. Add tomatoes and sugar.\n5. Cook on medium heat without a lid until approximately no liquid 10-20 minute.\n6. Cover after adding eggs and put medium high heat."
        }
    },
    {
        id: "flaminia_sweet_potato_pie",
        title: "פאי בטטה",
        author: "ענאל",
        tags: [
            "עוגות",
            "חלבי",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                amount: 1.3,
                unit: "ק\"ג",
                item: "בטטות מבושלות וקלופות (עדיף מאודות)"
            },
            {
                amount: 2,
                unit: "",
                item: "ביצים"
            },
            {
                amount: 0.75,
                unit: "כוס",
                item: "סוכר חום (בין 2/3 ל-3/4 כוס)"
            },
            {
                amount: 0.5,
                unit: "כוס",
                item: "חמאה מומסת"
            },
            {
                amount: 1,
                unit: "כפית",
                item: "מלח"
            },
            {
                amount: 1,
                unit: "כפית",
                item: "קינמון"
            },
            {
                amount: 1,
                unit: "כוס",
                item: "פקאנים"
            },
            {
                amount: 0.5,
                unit: "כוס",
                item: "מיץ תפוזים (עד כוס, לפי הצורך) או שרי לטעם"
            }
        ],
        instructions: "1. מועכים את הבטטות (צריך כ-6 כוסות מחית).\n2. טורפים פנימה את הביצים, רבע כוס סוכר, רבע כוס חמאה, מלח וקינמון.\n3. אם הבטטות נראות יבשות, מוסיפים עוד קצת מיץ תפוזים עד שהתערובת לחה ואוורירית.\n4. מעבירים לתבנית אפייה (קסרול).\n5. מסדרים את האגוזים מלמעלה, מפזרים את יתרת הסוכר ומזלפים את שארית החמאה.\n6. אופים ללא כיסוי ב-190 מעלות למשך 10-15 דקות או עד שהפאי חם כולו.",
        english: {
            title: "Sweet Potato Pie",
            author: "Anael",
            ingredients: [
                {
                    amount: 2.75,
                    unit: "lbs",
                    item: "Sweet potatoes (2.5-3 lbs cooked/peeled)"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "Eggs"
                },
                {
                    amount: 0.75,
                    unit: "cup",
                    item: "Brown sugar (2/3 to 3/4 cup)"
                },
                {
                    amount: 0.5,
                    unit: "cup",
                    item: "Melted butter"
                },
                {
                    amount: 1,
                    unit: "tsp",
                    item: "Salt"
                },
                {
                    amount: 1,
                    unit: "tsp",
                    item: "Cinnamon"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "Pecans"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "OJ (up to a cup, or can add sherry)"
                }
            ],
            instructions: "1. Mash Sweet potatoes (need about 6 cups when done).\n2. Beat in eggs, 1/4 cup sugar, 1/4 cup butter, salt & cinnamon.\n3. If potatoes seem dry, add some more OJ until moist and fluffy.\n4. Put in casserole dish.\n5. Arrange nuts on top and sprinkle with remaining sugar and drizzle with remaining butter.\n6. Bake uncovered @ 375°F for 10-15 minutes or until heated thru."
        }
    },
    {
        id: "simone_apples_honey",
        title: "תפוחים בדבש ויין",
        author: "סבתא סימון",
        tags: [
            "קינוחים",
            "צמחוני",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                amount: 3,
                unit: "",
                item: "תפוחים (2-4, קלופים וחתוכים לשמיניות)"
            },
            {
                amount: 0.3,
                unit: "",
                item: "לימון (רבע עד חצי לימון)"
            },
            {
                amount: 1,
                unit: "כף",
                item: "סוכר חום"
            },
            {
                amount: 0.5,
                unit: "כפית",
                item: "קינמון"
            },
            {
                amount: null,
                unit: "",
                item: "דבש (לפי הטעם)"
            },
            {
                amount: 0.5,
                unit: "כוס",
                item: "יין לבן או מים"
            }
        ],
        instructions: "1. שמים את המים או היין בסיר.\n2. סוחטים את הלימון לתוך הנוזל.\n3. מוסיפים לנוזל את הסוכר החום והקינמון.\n4. מביאים לרתיחה ואז מנמיכים לאש בינונית.\n5. מוסיפים את התפוחים ומבשלים מספר דקות (התפוחים צריכים להיות רכים אך לא רכים מדי/מתפרקים).\n6. מוזגים את התפוחים לצלחת (זה בסדר אם נשאר קצת נוזל) ומזלפים דבש מלמעלה.",
        english: {
            title: "Apples and Honey",
            author: "Grandma Simone",
            ingredients: [
                {
                    amount: 3,
                    unit: "",
                    item: "Apples (2-4, peeled and cut into eights)"
                },
                {
                    amount: 0.3,
                    unit: "",
                    item: "Lemon (1/4 - 1/2)"
                },
                {
                    amount: 1,
                    unit: "tbsp",
                    item: "Brown sugar"
                },
                {
                    amount: 0.5,
                    unit: "tsp",
                    item: "Cinnamon"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Honey (to taste)"
                },
                {
                    amount: 0.5,
                    unit: "glass",
                    item: "White wine OR water"
                }
            ],
            instructions: "1. Put water or white wine into pot/pan.\n2. Squeeze lemon into water/wine.\n3. Add brown sugar and cinnamon to water.\n4. Bring water/wine to boil and then lower to medium.\n5. Add apples and cook for a couple minutes (apples should be soft but not too soft, shouldn’t fall apart or squish).\n6. Pour out apples (a little liquid left is fine) and drizzle honey on top."
        }
    },
    {
        id: "simone_cookies",
        title: "עוגיות שושנים",
        author: "סבתא סימון",
        tags: [
            "קינוחים",
            "חלבי",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                sectionName: "לבצק",
                items: [
                    {
                        amount: 5,
                        unit: "כוסות",
                        item: "קמח רגיל"
                    },
                    {
                        amount: 5,
                        unit: "",
                        item: "חלמונים"
                    },
                    {
                        amount: 1,
                        unit: "שקית",
                        item: "שמרים יבשים"
                    },
                    {
                        amount: 1,
                        unit: "קורט",
                        item: "מלח"
                    },
                    {
                        amount: 1.5,
                        unit: "כוסות",
                        item: "סוכר"
                    },
                    {
                        amount: 400,
                        unit: "גרם",
                        item: "חמאה (מומסת או רכה מאוד)"
                    }
                ]
            },
            {
                sectionName: "למילוי",
                items: [
                    {
                        amount: 5,
                        unit: "",
                        item: "חלבונים"
                    },
                    {
                        amount: 0.5,
                        unit: "חבילת",
                        item: "אינסטנט פודינג וניל"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "סוכר"
                    },
                    {
                        amount: 1,
                        unit: "קורט",
                        item: "מלח"
                    }
                ]
            }
        ],
        instructions: "1. מערבבים את השמרים עם 2 כפות מים חמימים ומניחים בצד ל-10 דקות.\n2. מערבבים את כל החומרים היבשים (למעט השמרים).\n3. מוסיפים את החלמונים, תערובת השמרים והחמאה.\n4. מעבדים את הבצק עד לאיחוד.\n5. אם הבצק מרגיש יבש, מוסיפים מעט מים חמימים.\n6. מחלקים ל-4 כדורים.\n7. מכניסים למקרר ל-4 שעות לפחות.\n8. מקציפים את החלבונים והסוכר לקצף תפוח.\n9. מוסיפים בהדרגה את הפודינג.\n10. מעצבים את העוגיות (ממלאים).\n11. אופים בחום של 175 מעלות (350 פרנהייט) כ-20 דקות לכל נגלה.",
        english: {
            title: "Savta's Cookies",
            author: "Grandma Simone",
            ingredients: [
                {
                    sectionName: "Dough",
                    items: [
                        {
                            amount: 5,
                            unit: "cups",
                            item: "All purpose flour"
                        },
                        {
                            amount: 5,
                            unit: "",
                            item: "Egg yolks"
                        },
                        {
                            amount: 1,
                            unit: "packet",
                            item: "Dried yeast"
                        },
                        {
                            amount: 1,
                            unit: "pinch",
                            item: "Salt"
                        },
                        {
                            amount: 1.5,
                            unit: "cups",
                            item: "Sugar"
                        },
                        {
                            amount: 3.5,
                            unit: "sticks",
                            item: "Butter, melted or very soft (~400g)"
                        }
                    ]
                },
                {
                    sectionName: "Filling",
                    items: [
                        {
                            amount: 5,
                            unit: "",
                            item: "Egg whites"
                        },
                        {
                            amount: 0.5,
                            unit: "packet",
                            item: "Instant vanilla pudding"
                        },
                        {
                            amount: 1,
                            unit: "cup",
                            item: "Sugar"
                        },
                        {
                            amount: 1,
                            unit: "pinch",
                            item: "Salt"
                        }
                    ]
                }
            ],
            instructions: "1. Put yeast in 2 tbsp of warm water, set aside for 10 minutes.\n2. Mix all the dry, except yeast.\n3. Add eggs, yeast, and butter.\n4. Mix the dough until combined.\n5. If dough seems dry, add a little bit of warm water.\n6. Separate into 4 balls.\n7. Refrigerate for 4 hours at least.\n8. Beat egg whites and sugar until fluffy.\n9. Slowly add instant pudding.\n10. Form the cookies.\n11. Oven at 350°F, put in oven for approximately 20 minutes each batch."
        }
    },
    {
        id: "flaminia_flourless_chocolate_cake",
        title: "עוגת שוקולד ללא קמח",
        author: "פלמיניה",
        tags: [
            "עוגות",
            "חלבי",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                amount: 7,
                unit: "",
                item: "ביצים (מופרדות)"
            },
            {
                amount: 1,
                unit: "כוס",
                item: "סוכר"
            },
            {
                amount: 1,
                unit: "כוס",
                item: "קמח שקדים"
            },
            {
                amount: 200,
                unit: "גרם",
                item: "שוקולד מריר"
            },
            {
                amount: 100,
                unit: "גרם",
                item: "חמאה"
            },
            {
                amount: 1,
                unit: "חבילה",
                item: "שמנת מתוקה (להקצפה - אופציונלי)"
            }
        ],
        instructions: "1. מפרידים את הביצים לחלמונים וחלבונים.\n2. ממיסים במיקרוגל את החמאה והשוקולד ומערבבים לאיחוד.\n3. לאחר שהשוקולד המומס התקרר מעט, מוסיפים את החלמונים אחד אחרי השני ומערבבים.\n4. מוסיפים את קמח השקדים ומערבבים.\n5. מקציפים את החלבונים עם הסוכר עד לקבלת קצף יציב.\n6. מקפלים את תערובת השוקולד לתוך קצף החלבונים.\n7. משמנים ומקמחים תבנית אפייה.\n8. שופכים את התערובת לתבנית.\n9. אופים ב-180 מעלות  למשך כ-40 דקות.\n10. לאחר שהעוגה הצטננה, ניתן להוסיף קצפת מלמעלה.",
        english: {
            title: "Flourless Chocolate Cake",
            author: "Flaminia",
            ingredients: [
                {
                    amount: 7,
                    unit: "",
                    item: "Eggs (separated)"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "Sugar"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "Almond flour"
                },
                {
                    amount: 200,
                    unit: "grams",
                    item: "Semi sweet chocolate"
                },
                {
                    amount: 100,
                    unit: "gram",
                    item: "Butter"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Whipping cream (Optional)"
                }
            ],
            instructions: "1. Separate egg yolks and egg whites.\n2. Microwave butter and chocolate together for a bit and then mix it.\n3. Once melted chocolate has cooled down a little bit add egg yolks one by one and mix.\n4. Add almond flour and mix.\n5. Beat egg whites with sugar until peaks form.\n6. Fold chocolate mixture into egg white mixture.\n7. Grease and flour pan.\n8. Pour mixture in.\n9. Bake 355 degree F for ~40 minutes.\n10. Once cool, put whipped cream on top."
        }
    },
    {
        id: "flaminia_majadera",
        title: "מג'דרה",
        author: "סבתא סימון",
        tags: [
            "צמחוני",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                amount: 2,
                unit: "כוסות",
                item: "אורז יסמין (או כל אורז לבן ארוך)"
            },
            {
                amount: 1,
                unit: "כוס",
                item: "עדשים (ירוקות), מושרות לשעה ומסוננות"
            },
            {
                amount: 1,
                unit: "",
                item: "בצל גדול (חתוך לרצועות)"
            },
            {
                amount: 4,
                unit: "שיני",
                item: "שום כתוש"
            },
            {
                amount: null,
                unit: "",
                item: "כמון, מלח, מעט כורכום (אופציונלי)"
            },
            {
                amount: null,
                unit: "",
                item: "שמן"
            },
            {
                amount: 4,
                unit: "כוסות",
                item: "מים"
            }
        ],
        instructions: "1. שמים בסיר את העדשים עם 3 כוסות מים ומלח. מביאים לרתיחה.\n2. ברגע שרותח, מוסיפים את האורז ועוד כוס מים.\n3. מבשלים על אש קטנה (Simmer) במשך 15-20 דקות.\n4. בינתיים, במחבת על אש בינונית, מטגנים את הבצל בהרבה שמן זית, הרבה כמון, מלח וכורכום (אופציונלי). מוסיפים את השום בסוף ומטגנים כ-30 שניות או עד שעולה ריח.\n5. מוסיפים את תערובת הבצל (עם השמן והכל) לסיר האורז.\n6. ממשיכים לבשל על אש קטנה עד שהאורז מוכן והנוזלים התאדו.",
        english: {
            title: "Majadera",
            author: "Grandma Simone",
            ingredients: [
                {
                    amount: 2,
                    unit: "cups",
                    item: "Jasmine rice (or any long grain white rice)"
                },
                {
                    amount: 1,
                    unit: "cup",
                    item: "Lentils, soaked for 1 hour and drained (Green)"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "Big onion, julienned"
                },
                {
                    amount: 4,
                    unit: "cloves",
                    item: "Minced garlic"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Cumin, salt, little bit of turmeric (optional)"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Oil"
                },
                {
                    amount: 4,
                    unit: "cups",
                    item: "Water"
                }
            ],
            instructions: "1. Put lentils in pot with 3 cups water and salt. Boil.\n2. When boiling, add rice and 1 cup water.\n3. Simmer for 15-20.\n4. Meanwhile, sauté onion in skillet on medium heat with lots of olive oil, lots of cumin, salt, and turmeric (optional). Add garlic at the end and cook for ~30 seconds or until fragrant.\n5. Add onion mix to the rice (with oil and all).\n6. Simmer until rice cooked and liquid gone."
        }
    },
    {
        id: "flaminia_peas_eggs",
        title: "אפונה וביצים",
        author: "סבתא סימון",
        tags: [
            "צמחוני",
            "English"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                amount: null,
                unit: "",
                item: "אפונה קפואה"
            },
            {
                amount: 1,
                unit: "",
                item: "בצל"
            },
            {
                amount: null,
                unit: "",
                item: "ביצים"
            },
            {
                amount: null,
                unit: "",
                item: "מלח, פלפל, כורכום"
            },
            {
                amount: null,
                unit: "",
                item: "אבקת מרק (Bouillon)"
            },
            {
                amount: null,
                unit: "",
                item: "מים"
            }
        ],
        instructions: "1. מטגנים את הבצל.\n2. מוסיפים את האפונה הקפואה ומים.\n3. מוסיפים כורכום, אבקת מרק, מלח ופלפל.\n4. מבשלים על אש קטנה (Simmer) כ-30 דקות (עד שנשארים מעט נוזלים).\n5. שוברים פנימה את הביצים (ומבשלים עד מידת עשייה רצויה).",
        english: {
            title: "Peas and Eggs",
            author: "Grandma Simone",
            ingredients: [
                {
                    amount: null,
                    unit: "",
                    item: "Frozen peas"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "Onion"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Eggs"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Salt, pepper, turmeric"
                },
                {
                    amount: null,
                    unit: "",
                    item: "Bouillon"
                }
            ],
            instructions: "1. Saute onion.\n2. Add frozen peas and water.\n3. Add turmeric, bouillon, salt, pepper.\n4. Simmer for 30 minutes (until a little bit of water).\n5. Crack eggs into it."
        }
    },
	{
        id: "silvi_nut_pie",
        title: "פאי פיצוחים",
        author: "(סבתא סילוי) חן קורן",
        tags: [
            "עוגות",
            "חלבי"
        ],
        image: "images/nuts_pie.jpg",
        sourceUrl: "https://boxfromjerus.co.il/%D7%A4%D7%90%D7%99-%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D-%D7%A9%D7%9C-%D7%93%D7%95%D7%93%D7%94-%D7%97%D7%A0%D7%94/",
        ingredients: [
            {
                sectionName: "לבצק",
                items: [
                    {
                        amount: 100,
                        unit: "גרם",
                        item: "חמאה (או 80 גרם שמן קוקוס)"
                    },
                    {
                        amount: 1.25,
                        unit: "כוס",
                        item: "קמח"
                    },
                    {
                        amount: 1,
                        unit: "",
                        item: "ביצה (או בננה מרוסקת)"
                    },
                    {
                        amount: 2,
                        unit: "שקיות",
                        item: "סוכר וניל"
                    },
                    {
                        amount: 1,
                        unit: "שקית",
                        item: "אבקת אפייה"
                    },
                    {
                        amount: 1,
                        unit: "קורט",
                        item: "מלח"
                    }
                ]
            },
            {
                sectionName: "לשכבת האגוזים והחלבה",
                items: [
                    {
                        amount: 200,
                        unit: "גרם",
                        item: "חלבה בטעם טבעי"
                    },
                    {
                        amount: 30,
                        unit: "גרם",
                        item: "אגוזי מלך קצוצים גס"
                    },
                    {
                        amount: 30,
                        unit: "גרם",
                        item: "אגוזי לוז קצוצים גס"
                    },
                    {
                        amount: 30,
                        unit: "גרם",
                        item: "פיסטוקים קצוצים גס"
                    },
                    {
                        amount: 30,
                        unit: "גרם",
                        item: "קשיו קצוץ גס"
                    },
                    {
                        amount: 30,
                        unit: "גרם",
                        item: "גרעיני דלעת"
                    },
                    {
                        amount: 30,
                        unit: "גרם",
                        item: "גרעיני חמנייה"
                    },
                    {
                        amount: 30,
                        unit: "גרם",
                        item: "שקדים פרוסים"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "מייפל טבעי"
                    }
                ]
            }
        ],
        instructions: "1. מחממים תנור ל-180 מעלות.\n2. הכנת הבצק: מערבבים את כל מצרכי הבצק לבצק אחיד ומשטחים בתבנית (חד פעמית 35X25 או עגולה בקוטר 24).\n3. הרכבה: מפוררים את החלבה בידיים לשכבה אחידה מעל הבצק.\n4. מפזרים מעל החלבה את כל האגוזים והגרעינים מלבד השקדים הפרוסים (סדר מומלץ: גרעיני חמניה ודלעת בהתחלה, פיסטוקים ולוז בסוף). מוודאים שכל השטח מכוסה.\n5. מפזרים את השקדים הפרוסים מלמעלה.\n6. אופים במשך כ-30 דקות, עד שהשקדים משחימים יפה.\nהערה לגרסה טבעונית: אם הבצק הוכן ללא ביצים/חמאה, לאחר 30 דקות מכסים את העוגה בנייר כסף ואופים 15 דקות נוספות בתחתית התנור.\n7. מוציאים מהתנור ובוזקים מיד את סירופ המייפל (כ-3/4 כוס) על העוגה החמה."
    },
    {
        id: "silvi_hot_apple_cake",
        title: "עוגת תפוחים חמה",
        author: "(סבתא סילוי) חנה לוי",
        tags: [
            "עוגות"
        ],
        image: "images/hot_apple_pie.jpg",
        sourceUrl: "https://boxfromjerus.co.il/%D7%A4%D7%90%D7%99-%D7%A4%D7%99%D7%A6%D7%95%D7%97%D7%99%D7%9D-%D7%A9%D7%9C-%D7%93%D7%95%D7%93%D7%94-%D7%97%D7%A0%D7%94/",
        ingredients: [
            {
                sectionName: "לתפוחים",
                items: [
                    {
                        amount: 5,
                        unit: "",
                        item: "תפוחים (קלופים, ללא ליבה, פרוסים דק)"
                    },
                    {
                        amount: 2,
                        unit: "כפות",
                        item: "סוכר"
                    },
                    {
                        amount: 1,
                        unit: "כפית",
                        item: "קינמון"
                    }
                ]
            },
            {
                sectionName: "לבלילה",
                items: [
                    {
                        amount: 3,
                        unit: "",
                        item: "ביצים"
                    },
                    {
                        amount: 0.5,
                        unit: "כוס",
                        item: "שמן"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "קמח תופח"
                    },
                    {
                        amount: 1,
                        unit: "כוס",
                        item: "סוכר"
                    },
                    {
                        amount: 2,
                        unit: "כפות",
                        item: "סוכר (נוספות)"
                    },
                    {
                        amount: 1,
                        unit: "חופן",
                        item: "אגוזים (לא חובה)"
                    }
                ]
            }
        ],
        instructions: "1. מחממים תנור ל-180 מעלות.\n2. מסדרים את פרוסות התפוחים בתבנית בינונית ומפזרים עליהם באופן שווה את 2 כפות הסוכר והקינמון.\n3. בקערה נפרדת, מערבבים את כל חומרי הבלילה (ביצים, קמח, שמן, סוכר ואגוזים) עד לקבלת מרקם חלק.\n4. שופכים את הבלילה על התפוחים שבתבנית ומשטחים באופן שווה.\n5. אופים במשך 25 דקות, או עד שקיסם יוצא יבש והעוגה מקבלת צבע יפה.\n6. מומלץ להגיש חם לצד גלידה ומייפל."
    },
    {
        id: "silvi_date_rolled_cookies",
        title: "עוגיות מגולגלות תמרים",
        author: "(סבתא סילוי) חן מזרחי",
        tags: [
            "קינוחים",
            "חלבי"
        ],
        image: "images/date_rolled_cookies.jpg",
        sourceUrl: "https://heninthekitchen.com/blog/2019/07/21/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%9E%D7%92%D7%95%D7%9C%D7%92%D7%9C%D7%95%D7%AA-%D7%AA%D7%9E%D7%A8%D7%99%D7%9D/",
        ingredients: [
            {
                sectionName: "לבצק",
                items: [
                    {
                        amount: 3.5,
                        unit: "כוסות",
                        item: "קמח (חצי קילו)"
                    },
                    {
                        amount: 2,
                        unit: "כפות",
                        item: "אבקת סוכר"
                    },
                    {
                        amount: 0.25,
                        unit: "כפית",
                        item: "מלח"
                    },
                    {
                        amount: 1,
                        unit: "שקית",
                        item: "אבקת אפייה"
                    },
                    {
                        amount: 200,
                        unit: "גרם",
                        item: "חמאה רכה"
                    },
                    {
                        amount: 0.5,
                        unit: "כוס",
                        item: "מיץ תפוזים"
                    },
                    {
                        amount: 0.25,
                        unit: "כוס",
                        item: "שמן"
                    },
                    {
                        amount: 1,
                        unit: "כפית",
                        item: "תמצית וניל"
                    },
                    {
                        amount: 1,
                        unit: "",
                        item: "חלמון"
                    }
                ]
            },
            {
                sectionName: "למלית ולציפוי",
                items: [
                    {
                        amount: 450,
                        unit: "גרם",
                        item: "ממרח תמרים (חבילה אחת)"
                    },
                    {
                        amount: 1,
                        unit: "כפית",
                        item: "קינמון"
                    },
                    {
                        amount: 100,
                        unit: "גרם",
                        item: "אגוזי מלך קלויים וקצוצים דק (לא חובה)"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "אבקת סוכר (לפיזור)"
                    }
                ]
            }
        ],
        instructions: "1. הכנת הבצק: מערבבים בקערה גדולה את היבשים (קמח, אבקת סוכר, מלח, אבקת אפייה). מוסיפים את הרטובים (חמאה, מיץ, שמן, וניל, חלמון) ומערבבים לקבלת בצק אחיד.\n2. מחלקים את הבצק ל-4 חלקים שווים.\n3. מרדדים כל חלק בין שני דפי נייר אפייה למלבן ארוך ודק. מסירים את הנייר העליון ומיישרים קצוות.\n4. מורחים שכבה דקה של ממרח תמרים, מפזרים מעט קינמון ואגוזים.\n5. מגלגלים לגליל ומניחים בתבנית מרופדת בנייר אפייה.\n6. מכניסים את הגלילים לקירור של 30-60 דקות.\n7. מחממים תנור ל-180 מעלות.\n8. חורצים את הגלילים (חותכים עד הסוף אך לא מפרידים את העוגיות).\n9. אופים 20-25 דקות. מצננים לגמרי, מפרידים את העוגיות ומפזרים אבקת סוכר."
    },
	{
        id: "dafna_cold_pecan_cake",
        title: "העוגה של סתיו (עוגת פקאן וריבת חלב)",
        author: "דפנה",
        tags: [
            "עוגות",
            "חלבי"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                sectionName: "לבסיס",
                items: [
                    {
                        amount: 200,
                        unit: "גרם",
                        item: "אגוזי פקאן (טחונים בינוני)"
                    },
                    {
                        amount: 70,
                        unit: "גרם",
                        item: "חמאה מומסת"
                    },
                    {
                        amount: null,
                        unit: "מעט",
                        item: "סוכר חום (לפיזור)"
                    }
                ]
            },
            {
                sectionName: "לשכבת ריבת חלב",
                items: [
                    {
                        amount: 1,
                        unit: "מיכל",
                        item: "שמנת מתוקה"
                    },
                    {
                        amount: 4,
                        unit: "כפות",
                        item: "ריבת חלב"
                    }
                ]
            },
            {
                sectionName: "לשכבת היוגורט",
                items: [
                    {
                        amount: 1,
                        unit: "מיכל",
                        item: "שמנת מתוקה"
                    },
                    {
                        amount: 0.25,
                        unit: "גביע",
                        item: "יוגורט 4.5%"
                    },
                    {
                        amount: 0.5,
                        unit: "גביע",
                        item: "שמנת חמוצה"
                    },
                    {
                        amount: 3,
                        unit: "כפות",
                        item: "סוכר"
                    }
                ]
            },
            {
                sectionName: "לציפוי",
                items: [
                    {
                        amount: 200,
                        unit: "גרם",
                        item: "פקאן מסוכר (טחון דק)"
                    }
                ]
            }
        ],
        instructions: "1. הכנת הבסיס: מערבבים את הפקאן הטחון עם החמאה המומסת. משטחים בתבנית ומפזרים מעט סוכר חום מלמעלה.\n2. אופים בתנור (בחום בינוני) עד לקבלת גוון צהבהב/זהוב (לשים לב שלא יישרף). מוציאים ומצננים.\n3. שכבה ראשונה: מקציפים מיכל שמנת מתוקה עם ריבת החלב. משטחים מעל הבסיס הקר ומכניסים למקפיא לשעה.\n4. שכבה שנייה: מקציפים את מיכל השמנת השני עם היוגורט, השמנת החמוצה והסוכר. משטחים מעל שכבת ריבת החלב ומחזירים למקפיא.\n5. הגשה: לפני ההגשה, טוחנים דק את הפקאן המסוכר ומפזרים מעל העוגה."
    },
 {
    id: "ofek_pancrepe",
    title: "פנקרפ (פנקייק דק)",
    author: "אופק",
    tags: [
        "חלבי",
        "קינוחים"
    ],
    image: "",
    sourceUrl: "",
    ingredients: [
        {
            amount: 140,
            unit: "גרם",
            item: "קמח (כוס)"
        },
        {
            amount: 24,
            unit: "גרם",
            item: "סוכר (2 כפות)"
        },
        {
            amount: 3,
            unit: "גרם",
            item: "מלח (חצי כפית)"
        },
        {
            amount: 360,
            unit: "מ",
            item: "חלב (1.5 כוסות)"
        },
        {
            amount: 1,
            unit: "כפית",
            item: "תמצית וניל"
        },
        {
            amount: 30,
            unit: "גרם",
            item: "חמאה מומסת (2 כפות)"
        },
        {
            amount: 2,
            unit: "",
            item: "ביצים (L)"
        }
    ],
    instructions: "1. מערבבים את כל חומרי הבלילה היבשים בקערה, ואז מוסיפים את הרטובים ומערבבים עד לקבלת מרקם אחיד. ייתכן שיהיו טיפה גושים, זה בסדר גמור.\n2. מחממים מחבת קטנה לחום בינוני-גבוה ומשמנים בנדיבות בחמאה.\n3. יוצקים מהבלילה למחבת: יש לצקת כמות קטנה יחסית של נוזל, כדי שיתפרס בהדרגה לבד על כל המחבת ויגיע לעובי דק שמזכיר קרפ.\n4. בניגוד לפנקייקים רגילים שהופכים רק כשמופיעות בועות, כאן צריך להפוך לצד השני הרבה יותר מוקדם.\n5. יש לשמן את המחבת בחמאה כל כמה קרפים כדי שלא יידבק."
},
{
        id: "easy_baguette",
        title: "באגט בקלות",
        author: "(אופק) מקס מלכיאל",
        tags: [
            "צמחוני"
        ],
        image: "images/baguette.jpg",
        sourceUrl: "https://www.youtube.com/watch?v=umvZmyQK8tk",
        ingredients: [
            {
                amount: 600,
                unit: "גרם",
                item: "קמח"
            },
            {
                amount: 500,
                unit: "גרם",
                item: "מים"
            },
            {
                amount: 2,
                unit: "כפיות",
                item: "שמרים יבשים"
            },
            {
                amount: 2,
                unit: "כפיות",
                item: "מלח"
            },
            {
                amount: 1,
                unit: "כפית",
                item: "סוכר"
            }
        ],
        instructions: "1. מערבבים את כל החומרים בקערה, מכסים ונותנים לבצק לנוח 90 דקות.\n2. יוצרים 2 באגטים על משטח עבודה מקומח היטב (הבצק דביק מאוד).\n3. מתפיחים חצי שעה נוספת.\n4. אופים בתנור שחומם ל-240 מעלות במשך 25 דקות.\n5. מומלץ להמתין לפחות שעה לפני האכילה כדי שהקרום החיצוני יתקשה."
    },
    {
        id: "yoram_apple_cake",
        title: "עוגת תפוחים של יורם",
        author: "סבא יורם",
        tags: [
            "עוגות"
        ],
        image: "",
        sourceUrl: "",
        ingredients: [
            {
                sectionName: "יבשים",
                items: [
                    {
                        amount: 210,
                        unit: "גרם",
                        item: "קמח"
                    },
                    {
                        amount: 1,
                        unit: "כפית",
                        item: "אבקת אפייה"
                    },
                    {
                        amount: 1,
                        unit: "כפית",
                        item: "סודה לשתייה"
                    },
                    {
                        amount: 200,
                        unit: "גרם",
                        item: "סוכר חום"
                    },
                    {
                        amount: 0.3,
                        unit: "כפית",
                        item: "ציפורן טחון (בין רבע לשליש כפית, לפי הטעם)"
                    },
                    {
                        amount: 1,
                        unit: "כפית",
                        item: "קינמון"
                    }
                ]
            },
            {
                sectionName: "רטובים ותוספות",
                items: [
                    {
                        amount: 3,
                        unit: "",
                        item: "ביצים"
                    },
                    {
                        amount: 180,
                        unit: "גרם",
                        item: "שמן (כוס)"
                    },
                    {
                        amount: 2,
                        unit: "",
                        item: "תפוחים חמוצים (סמית'), חתוכים לקוביות 2X2"
                    },
                    {
                        amount: null,
                        unit: "לפי הצורך",
                        item: "סילאן ודבש (4-8 כפות מכל אחד)"
                    },
                    {
                        amount: null,
                        unit: "",
                        item: "אגוזים קצוצים (אופציונלי)"
                    },
                    {
                        amount: 0.25,
                        unit: "כוס",
                        item: "מיץ תפוחים/חלב/מים (רק אם התערובת סמיכה מדי)"
                    }
                ]
            }
        ],
        instructions: "1. מחממים תנור ל-170 מעלות ומשמנים תבנית אינגליש קייק גדולה (או שתיים קטנות).\n2. מערבבים את כל החומרים היבשים בקערה.\n3. בנפרד, טורפים את הביצים עם השמן.\n4. מאחדים את התערובות ומערבבים עד לקבלת עיסה דביקה (לא בצק ולא נוזלי).\n5. מוסיפים את קוביות התפוחים ומערבבים.\n6. בדיקת סמיכות: אם התערובת סמיכה מדי (לא נשפכת כשמטים את הקערה), מוסיפים עד רבע כוס נוזלים (מיץ תפוחים, חלב או מים - בסדר עדיפות זה) ומערבבים שוב.\n7. הרכבה: שופכים חצי מהתערובת לתבנית. מפזרים מעל כף סילאן וכף דבש.\n8. שופכים את שארית התערובת וחוזרים על הפעולה (כף סילאן וכף דבש מעל).\n9. אם רוצים להוסיף אגוזים, מפזרים אותם כעת ומשקיעים אותם מעט בבלילה.\n10. אופים כ-40 דקות עד שקיסם יוצא יבש."
    },
	{
    id: "pear_almond_tart",
    title: "טארט אגסים וקרם שקדים",
    author: "(אופק) קרן אגם",
    tags: [
        "חלבי",
        "עוגות"
    ],
    image: "images/pear_almond_tart.jpeg",
    sourceUrl: "https://kerenagam.co.il/%D7%98%D7%90%D7%A8%D7%98-%D7%90%D7%92%D7%A1%D7%99%D7%9D-%D7%95%D7%A7%D7%A8%D7%9D-%D7%A9%D7%A7%D7%93%D7%99%D7%9D/",
    ingredients: [
        {
            sectionName: "לבצק (או להשתמש בבצק שקדים)",
            items: [
                {
                    amount: 210,
                    unit: "גרם",
                    item: "קמח לבן (1.5 כוסות)"
                },
                {
                    amount: 3,
                    unit: "כפות",
                    item: "אבקת סוכר"
                },
                {
                    amount: 150,
                    unit: "גרם",
                    item: "חמאה קרה (חתוכה לקוביות)"
                },
                {
                    amount: 3,
                    unit: "כפות",
                    item: "מי קרח (או מים קרים מאוד)"
                }
            ]
        },
        {
            sectionName: "לאגסים",
            items: [
                {
                    amount: 3,
                    unit: "",
                    item: "אגסים בינוניים"
                },
                {
                    amount: 1,
                    unit: "ליטר",
                    item: "מים"
                },
                {
                    amount: 200,
                    unit: "גרם",
                    item: "סוכר חום בהיר / דמררה (1 כוס)"
                }
            ]
        },
        {
            sectionName: "לקרם שקדים",
            items: [
                {
                    amount: 180,
                    unit: "גרם",
                    item: "אבקת שקדים או שקדים טחונים (1.75 כוסות)"
                },
                {
                    amount: 180,
                    unit: "גרם",
                    item: "אבקת סוכר (1.5 כוסות)"
                },
                {
                    amount: 180,
                    unit: "גרם",
                    item: "חמאה רכה"
                },
                {
                    amount: 1,
                    unit: "כפית",
                    item: "תמצית/מחית וניל"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "ביצים (L)"
                },
                {
                    amount: 1,
                    unit: "כף",
                    item: "רוזטה (או כפית תמצית שקדים)"
                },
                {
                    amount: 20,
                    unit: "גרם",
                    item: "קמח (2 כפות)"
                }
            ]
        },
        {
            sectionName: "לעיטור וקישוט",
            items: [
                {
                    amount: null,
                    unit: "",
                    item: "אבקת קינמון"
                },
                {
                    amount: 1,
                    unit: "חופן",
                    item: "שקדים פרוסים"
                },
                {
                    amount: null,
                    unit: "",
                    item: "אבקת סוכר (להגשה)"
                }
            ]
        }
    ],
    instructions: "<u>אגסים בסירופ: </u>\n1. קולפים את האגסים, מנקים מהליבה ופורסים לחצי. מחממים בסיר גדול את המים והסוכר עד להמסה. מוסיפים את האגסים, מביאים לרתיחה עדינה ומבשלים 20-25 דקות עד שהם רכים. מוציאים לצינון. \nחשוב: לשמור את מי הסירופ!\n2. הכנת הבצק: (מומלץ להשתמש במתכון 'בצק שקדים פריך' הקיים באתר במקום). \nאם מכינים את הבצק הזה: מעבדים במעבד מזון קמח ואבקת סוכר. מוסיפים חמאה ומעבדים לפירורים. מוסיפים מי קרח ומעבדים לכדור. מרדדים על נייר אפייה לעיגול הגדול מקוטר התבנית. הופכים על התבנית, דוקרים במזלג ושמים במקפיא.\n3. קרם שקדים: מערבבים קמח שקדים, סוכר, וניל וחמאה לתערובת תפוחה. מוסיפים ביצים, רוזטה ולבסוף את הקמח עד לאיחוד.\n<u>הרכבה:</u>\n4. מחממים תנור ל-180 מעלות. פורסים את האגסים המבושלים למניפה (לא עד הסוף). מורחים את קרם השקדים על הבצק הקפוא. מסדרים מעל את האגסים ולוחצים מעט.\n5. מפזרים קינמון על האגסים ושקדים פרוסים על השטח הנותר. אופים 35 דקות להשחמה.\n6. לאחר האפייה, מברישים את האגסים בסירופ שנשמר. לפני ההגשה מפזרים אבקת סוכר.\n\n<u>הערה</u>: כנראה שלא תצטרכו את כל הסירופ בסוף המתכון, ומומלץ בחום להשתמש בשארית לקוקטייל."
},
{
    id: "lemon_halva_tart",
    title: "טארט לימון וחלבה עם פיסטוקים",
    author: "(אופק) נטלי לוין",
    tags: [
        "חלבי",
        "עוגות"
    ],
    image: "images/lemon_halva_tart.jpg",
    sourceUrl: "https://www.oogio.net/pistachio_halva_lemon_tart",
    ingredients: [
        {
            sectionName: "לבצק פריך לימון",
            items: [
                {
                    amount: 175,
                    unit: "גרם",
                    item: "קמח"
                },
                {
                    amount: 20,
                    unit: "גרם",
                    item: "אבקת שקדים"
                },
                {
                    amount: 65,
                    unit: "גרם",
                    item: "אבקת סוכר"
                },
                {
                    amount: 0.5,
                    unit: "כפית",
                    item: "מלח"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "לימון מגורר (קליפה)"
                },
                {
                    amount: 100,
                    unit: "גרם",
                    item: "חמאה קרה"
                },
                {
                    amount: 45,
                    unit: "גרם",
                    item: "ביצים (כביצה אחת קטנה)"
                }
            ]
        },
        {
            sectionName: "למחית פיסטוק",
            items: [
                {
                    amount: 70,
                    unit: "גרם",
                    item: "פיסטוקים קלויים"
                },
                {
                    amount: 12,
                    unit: "גרם",
                    item: "שמן זית"
                }
            ]
        },
        {
            sectionName: "לקרם לימון חלבה",
            items: [
                {
                    amount: 110,
                    unit: "מ",
                    item: "מיץ לימון"
                },
                {
                    amount: 150,
                    unit: "גרם",
                    item: "סוכר"
                },
                {
                    amount: 2,
                    unit: "",
                    item: "ביצים"
                },
                {
                    amount: 1,
                    unit: "",
                    item: "לימון מגורר (קליפה)"
                },
                {
                    amount: 100,
                    unit: "גרם",
                    item: "חמאה רכה"
                },
                {
                    amount: 150,
                    unit: "גרם",
                    item: "חלבה מפוררת"
                }
            ]
        },
        {
            sectionName: "לקישוט",
            items: [
                {
                    amount: 30,
                    unit: "גרם",
                    item: "פיסטוקים קלויים (קצוצים גס)"
                },
                {
                    amount: null,
                    unit: "מעט",
                    item: "לימון מגורר (קליפה)"
                }
            ]
        }
    ],
    instructions: "1. הכנת הבצק: במעבד מזון (או במיקסר עם וו גיטרה) מעבדים קמח, אבקת שקדים, אבקת סוכר, מלח, קליפת לימון וחמאה לתערובת פירורית. מוסיפים את הביצים ומעבדים רק עד שנוצרים גושי בצק. מאחדים לדיסקית, עוטפים בניילון ומצננים במקרר כשעה.\n2. רידוד ואפייה עיוורת: מרדדים את הבצק לעובי 3-4 מ\"מ ומרפדים את התבנית (חשוב להקפיד על זווית ישרה בין הדופן לבסיס). דוקרים את הבסיס ומקפיאים לשעה. מחממים תנור ל-170 מעלות.\n3. מניחים ניילון עמיד בחום/נייר אפייה עם משקולות (קטניות) על הבצק ואופים 12 דקות. מסירים את המשקולות וממשיכים לאפות עד הזהבה יפה. מצננים לחלוטין.\n4. מחית פיסטוק: טוחנים את הפיסטוקים לעיסה, מוסיפים שמן זית וטוחנים למחית חלקה. מורחים שכבה דקה על הקלתית האפויה.\n5. קרם לימון וחלבה: בסיר, מבשלים מיץ לימון, סוכר, ביצים וקליפת לימון תוך טריפה נמרצת עד להסמכה (82-84 מעלות). מסירים מהאש ומסננים. מוסיפים חמאה וחלבה וטוחנים בבלנדר מוט לקרם חלק.\n6. הרכבה: יוצקים את הקרם על שכבת הפיסטוק, מיישרים ומצננים במקרר כשעתיים. לפני ההגשה מקשטים בפיסטוקים וקליפת לימון."
}
];