# איפיון שרת

יצירת בקשות בצד השרת
יצירה, עדכון, ומחיקה 

# סוג שרת

השרת נבנה ב EXPREES + node.js

# מיקום השרת

השרת נבנה לוקאלי על המחשב שלי
בכתובת 
http://localhost:3003

# פורט 

אז כמו שכבר הבנתם השתמשתי בפורט 3003

# נתיב האפליקציה

אז הוספתי את שם שם האפליקציה לנתיב שכעת הנתיב המלא נראה כך: http://localhost:3003/linkodkod

# נתיבים לפוסטים

קבלת כל הפוסטים:
http://localhost:3003/linkodkod/posts
עם מתודה GET

קבלת פוסט ספציפי:
http://localhost:3003/linkodkod/posts/:id
עם מתודה GET

יצירת פוסט:
http://localhost:3003/linkodkod/posts
עם מתודה POST

עדכון פוסט: 
http://localhost:3003/linkodkod/posts/:id
עם מתודה PUT

מחיקת פוסט: 
http://localhost:3003/linkodkod/posts/:id
עם מתודה DELETE

# קבלת תמונות

על ידי גישה לתיקיית PUBLIC 
באמצעות הנתיב הבא
http://localhost:3003/linkodkod/images/:name file

לדוגמה:
http://localhost:3003/linkodkod/images/img.jpeg
