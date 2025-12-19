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
                    unit: "יח'",
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
                    unit: "יח'",
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
                    unit: "יח'",
                    item: "מקל קינמון"
                },
                {
                    amount: 2,
                    unit: "יח'",
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
                    unit: "יח'",
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
            unit: "יח'",
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
            unit: "יח'",
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
    author: "מיקי שמו",
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
                    unit: "יח'",
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
            unit: "יח'",
            item: "ביצים (L)"
        },
        {
            amount: 0.5,
            unit: "יח'",
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
                    unit: "יח'",
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
    title: " חצילים בתחמיץ",
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
            unit: "יח'",
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
    author: "מיכל מוזס",
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
    title: "קוסקוס",
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
    image: "",
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
    author: "יאיר",
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
}
];