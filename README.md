# WestCoast Education – Kursbokningsapplikation
Projekt för kursuppgift utvecklat med Vanilla JavaScript, JSON Server och TypeScript.

Detta projekt är en webbaserad applikation för **WestCoast Education**, där användare kan bläddra bland kurser, se kursdetaljer och boka kurser online.

Applikationen är byggd med **Vanilla JavaScript**, **ES6-moduler** och **JSON Server** som REST API.

Projektet utvecklades som en del av en webbutvecklingskursuppgift.

---

# Funktioner

## Publika användare
Användare kan:

- Se alla tillgängliga kurser
- Se detaljerad information om en kurs
- Registrera ett nytt konto
- Logga in i systemet
- Boka en kurs
- Se sina egna bokningar

---

## Admin
Administratörer kan:

- Lägga till nya kurser
- Ta bort kurser
- Se alla bokningar

---

# Använda teknologier

- HTML5
- CSS3
- Vanilla JavaScript (ES6-moduler)
- JSON Server (REST API)
- LocalStorage för autentisering
- TypeScript (VG-krav)
- Jest för tester (TDD)

---

# Projektstruktur
westcoast-education
│
├── css
│ └── style.css
│
├── js
│ ├── admin.js
│ ├── api.js
│ ├── auth.js
│ ├── booking.js
│ ├── login.js
│ ├── main.js
│ ├── myBookings.js
│ └── signup.js
│
├── ts
│ ├── booking.ts
│ └── booking.test.ts
│
├── images
│
├── db.json
├── package.json
├── jest.config.js
├── index.html
├── login.html
├── signup.html
├── booking.html
├── courseDetails.html
├── myBookings.html
├── admin.html
│
└── README.md

---

# Installation

Klonas repositoryt eller ladda ner projektet.

Installera sedan beroenden:
npm install

---

# Starta API

Starta JSON Server:
npm run start

API:et körs på:
http://localhost:3000

Tillgängliga endpoints:

/courses  
/users  
/bookings

---

# Köra tester

Detta projekt inkluderar ett **TypeScript-modul testad med Jest enligt TDD-principer**.

Kör tester med:
npm test

Exempel på testutdata:
PASS ts/booking.test.ts  
✓ calculate booking price

---

# Exempel på användare

Exempelanvändare i databasen:
Email: kalle@westcoast.se  
Lösenord: 123456

Email: lisa@westcoast.se  
Lösenord: 654321

---

# Flöde för kursbokning

1. Användaren registrerar sig eller loggar in
2. Användaren väljer en kurs
3. Användaren fyller i bokningsinformation
4. Bokningen sparas i JSON Server-databasen
5. Användaren kan se bokningar under **Mina bokningar**

---

# Använda principer

Projektet följer dessa utvecklingsprinciper:

### DRY – Don't Repeat Yourself
API-förfrågningar är centraliserade i:
api.js

### KISS – Keep It Simple Stupid
Applikationen använder enkel och lättläst JavaScript utan onödig komplexitet.

---

# TypeScript

Jag inkluderade:

- A**TypeScript-modul**
- **Enhetstester med Jest**
- Utveckling enligt **Test Driven Development (TDD)** principer

Exempel på modul:
ts/booking.ts

Exempel på test:
ts/booking.test.ts

---

# Författare

Najma Hasan – projekt utvecklat för utbildningssyfte.

WestCoast Education