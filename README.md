# 🛒 Projekt: The Modern Store (API Edition)

Välkomna till veckans huvudprojekt! Ni ska bygga en modern webbshop med **Next.js** som pratar med ett externt API. Vi kommer att använda **Platzi Fake Store API**, vilket är ett kraftfullt verktyg för att simulera en riktig butik med produkter, kategorier och priser.

## 🎯 Mål med projektet

Att bemästra datahämtning (`fetch`) i Next.js, hantera asynkron kod, och skapa ett dynamiskt gränssnitt baserat på extern data.

---

## 🛠️ API-Information

Vi använder **Platzi Fake Store API**.

* **Bas-URL:** `https://api.escuelajs.co/api/v1`
* **Produkter:** `/products`
* **Enskild produkt:** `/products/[id]`
* **Kategorier:** `/categories`

---

## 🚀 Steg-för-steg instruktioner

### Del 1: Produktlistan (Måndag)

Börja med att skapa en startsida som visar alla tillgängliga produkter.

* [ ] Skapa en mappning för produkten med hjälp av ett **Interface** (se tips nedan).
* [ ] Använd en `async` funktion för att hämta produkterna i `page.tsx`.
* [ ] Rendera produkterna i ett snyggt grid med Tailwind.
* [ ] **Bonus:** Lägg till felhantering med `try/catch` så att sidan inte dör om API:et ligger nere.

### Del 2: Dynamiska Produktsidor (Tisdag)

När man klickar på en produkt ska man komma till en unik sida för just den produkten.

* [ ] Skapa en dynamisk route: `app/products/[id]/page.tsx`.
* [ ] Använd `params` för att hämta rätt produkt-ID från URL:en.
* [ ] Gör ett nytt anrop mot `/products/[id]` för att hämta detaljerad info.
* [ ] Visa produktens fulla beskrivning och alla dess bilder.

### Del 3: Kategorier & Filtrering (Onsdag/Torsdag)

Gör det lättare för kunden att hitta rätt!

* [ ] Hämta listan på alla kategorier från `/categories`.
* [ ] Skapa en navigeringsmeny där man kan välja en kategori.
* [ ] Filtrera listan på startsidan så att bara produkter från vald kategori visas.

---

## 💡 Tekniska Tips & Hjälpmedel

### Produkt-interface

Använd detta interface för att få bra hjälp av TypeScript:

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

```

### Bild-hantering (Viktigt!)

Eftersom bilderna kommer från en extern server (`api.escuelajs.co`) måste ni antingen använda vanliga `<img>`-taggar eller konfigurera Next.js för att tillåta domänen om ni använder `<Image />`.

### Hur man "tvättar" bild-data

Ibland skickar API:et tillbaka bilder som en sträng inuti en array som ser ut så här: `["[\"https://placeimg.com/...\"]"]`. Om ni får problem med bilderna, testa att rensa strängen så här:

```javascript
const cleanUrl = product.images[0].replace(/[\[\]\"]/g, "");

```

---

## 🏆 Utmaning (För dig som blir klar snabbt)

1. **Sökfunktion:** Lägg till ett sökfält som filtrerar produkterna efter namn på klientsidan.
2. **Prisfilter:** Låt användaren sortera produkterna från billigast till dyrast.
3. **Loading States:** Skapa en snygg "skeleton loader" som visas medan datan hämtas.

---

### Inlämning & Redovisning

Projektet körs under hela veckan. Vi kommer att ha dagliga avstämningar där vi kollar på hur ni har löst era `fetch`-anrop och hur ni hanterar datan i era komponenter.

**Lycka till – nu bygger vi framtidens e-handel!**

---

**Är det något mer du vill att jag lägger till i README-filen, kanske något specifikt om hur de ska använda Biome eller Tailwind 4?**
