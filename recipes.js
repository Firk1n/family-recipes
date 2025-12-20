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
    id: "simone_ensaladia",
    title: "סלט תפוחי אדמה",
    author: "סבתא סימון",
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
        author: "Grandma Simone",
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
    author: "פלמיניה",
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
        author: "Flaminia",
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
    id: "simone_challah",
    title: "חלה",
    author: "סבתא סימון",
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
        author: "Grandma Simone",
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
}
];