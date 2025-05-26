[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/t9fNoC-R)

# 🎬 Movie Ticket App

## 📌 Opgavebeskrivelse

I denne opgave skal I udvikle en **web-applikation til booking af biografbilletter**. Applikationen skal følge det medfølgende design, som er udarbejdet i Figma, og som dækker hele brugerrejsen fra filmudforskning til billetkøb og visning af e-billet.

I må arbejde **alene eller i en 2-personers gruppe**.

---

## 🎯 Formål

Formålet med opgaven er at:

- Øve jer i at omsætte et UI-design til en funktionel webapplikation.
- Arbejde med routing, state management og dynamisk rendering.
- Integrere formularer og brugerinteraktioner.
- Øve jer i versionsstyring og samarbejde via Git og GitHub.

---

## 🛠️ Krav

- Applikationen skal være bygget med **HTML, CSS og JavaScript** (evt. med et framework som React eller NextJS).
- Designet fra Figma skal følges så tæt som muligt.
- Der skal være **routing** mellem de forskellige sider.
- Brugeren skal kunne **vælge sæder**, **gennemføre en betaling** (simuleret), og **modtage en billet**.
- Inputfelter skal valideres
- Der skal være en **live version** af jeres løsning, hostet på fx Render.com, GitHub Pages, Netlify eller lignende.

---

## 🎊 Ændringer i designet

"Welcome Back" boksen på home er ændret til en popup, der forsvinder efter 3 sekunder.
- Dette gjorde vi det ikke passede resten af sitet's design og forsiden ingen main heading havde. En main heading er nu addet der kan ses når popup'en er forsvundet igen. Vi valgte at navngive siden TheMoviez, da den intet navn havdet.

Return knappen på explore, saved plans og profile siden er fjernet.
- Dette gjorde vi da det ikke gav meningen ifølge page navigation.

Genre visning på explore siden er ændret til at vise flere og have en baggrund.
- Dette gjorde vi da det ikke gav mening kun af vise en genre og at tilføje en baggrund gjorde dem lette af adskille.

Film længden på detalje siden er rygget over genres og deres baggrund fjernet.
- Dette gjorde vi fordi tiden lignede for meget genres.

Poster billedet på detalje siden er centreret og der er kun ét.
- Dette gjorde vi da det ingen mening gav' at have flere billeder at scroll i mellem.

Udgivelses dato er tilføjet ved siden af film længde.
- Dette gjorde vi da det er muligt at se detalje siden for film der endnu ikke udgivet.

Fjernet tal og dato for hver liste item på saved plans.
- Dette gjorde vi da det var mere forvirrende end det gavnede.

Fjernet muligheden for at book billeter direkte i saved plans.
- Dette gjorde vi da det var en dårligere måde at købe billet, da man ikke kunne se sæder.

Opdelt hver liste item i saved plans med en blå divider.
- Dette gjorde vi for at gøre det nemmere at se hvornår en ny film kom.

Billedet af et mastercard er ikke dynamisk og viser ikke brugeren's kort info.
- Dette gjorde vi da vi ikke kender en sikkert metode til at gemme betalingskort information.

Ændret deactivate account til delete account.
- Dette gjorde vi fordi det gav bedre mening og stoppede misforståelser brugere kunne have.

Fjernet "Film Hunter" under brugeren's brugernavn ved profil siden.
- Dette gjorde vi fordi det ikke gav mening hvad titlen gik ud på.

Ændret bookmark ikonet til et lignede ikon, men uden minus i det.
- Dette gjorde vi da det gav ideén at man fjernede fra saved plans, i stedet for at tilføje/se.

---

## 🌟 Ekstra Opgaver:

- **Opret bruger**: En formular hvor brugeren kan registrere sig med navn, e-mail og adgangskode.
- **Log ind**: En login-side hvor brugeren kan logge ind med e-mail og adgangskode.
- **Session-håndtering**: Når brugeren er logget ind, skal appen kunne huske brugeren.
- **Log ud**: Mulighed for at logge ud igen.
- **Gemte planer og billetter**: Disse skal kun være tilgængelige for den bruger, der er logget ind.

---

## ✅ Aflevering

1. Lav en **pull request** til `main` branch'en i jeres repository.
2. Inkludér et link til den **live version** af jeres web-app i pull request-beskrivelsen og i denne README-fil under afsnittet "Live Demo".

---

## 🌐 Live Demo
> [https://themoviez.onrender.com](https://themoviez.onrender.com)