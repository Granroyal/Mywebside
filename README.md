# Personlig hjemmeside

Min personlige hjemmeside og mit lille hyggeprojekt. Her samler jeg mine projekter og hobbyer, så jeg kan følge min udvikling over tid.

Jeg bygger siden fra bunden for at øve mig og holde det, jeg lærer, ved lige.

## Formål

- At lave min egen personlige hjemmeside fra bunden
- At samle mine projekter et sted
- At bygge en portfolio, som kan vise min udvikling over tid

## Indhold

- **Forside:**
- **Projekter:** Raspberry Pi, NAS Ser
- **Hobby:** TCG (One Piece, Pokémon og Dragon Ball), 3D-printer og Top10-spilanbefalinger

Hobby-siden samler oversigten. One Piece, Pokémon og Dragon Ball har hver deres side, mens
de enkelte chase cards fortsat vises på deres egen TCG-side. Selve indholdet, såsom
projekter, kortsamlinger og 3D-print, er stadig under opbygning.

## Teknologi

Siden er bygget med HTML, CSS og JavaScript uden frameworks eller et build-trin. Python 3 bruges til den medfølgende lokale webserver.

## Automatiske tjek

GitHub Actions kører en pipeline, som automatisk kontrollerer projektet ved push til
`main` og `html` samt ved pull requests til `main`.

Pipelinen installerer først de præcise værktøjsversioner fra `package-lock.json` med
`npm ci`. Derefter kører den HTML-tjek, tjek for døde lokale links og manglende filer,
JavaScript-syntaks og Prettier-formatering. OWASP ZAP-scanningen er foreløbig slået fra.

### Overvej disse pipeline-tjek

Mulige næste skridt for at automatisere flere af de manuelle tjek:

- [x] Tjek af JavaScript-syntaks.
- [x] Tjek for døde links og manglende lokale filer, fx billeder og scripts.
- [x] Tjek af formatering, så koden følger samme stil på tværs af filer.
- [ ] Tjek af CSS for fejl og ensartet kodestil.
- [ ] Tjek af tilgængelighed, fx kontrast, formularlabels og alt-tekst på billeder.
- [ ] Browsertest af navigation og knapper i projekt- og hobbysektionerne.
- [ ] Tjek af sidernes indlæsningstid og størrelse for at opdage tunge ressourcer.

## Todo

- [x] Oprette sider og fælles navigation
- [x] Tilføje sektioner til Raspberry Pi, TCG (One Piece, Pokémon og Dragon Ball), 3D-printer og Top10
- [x] Opsætte automatiske HTML-tjek og en sikkerhedsscanning
- [ ] Tilføje beskrivelser og billeder af mine projekter
- [ ] Tilføje kort og produkter til mine TCG-samlinger
- [ ] Tilføje billeder og beskrivelser af 3D-printprojekter
- [ ] Opdatere footer og links til GitHub og LinkedIn
- [ ] Arbejde videre med design og layout
- [ ] Overveje et eget grading check til hjemmesiden

## Status

Projektet er under opbygning. Grundstrukturen, navigationen og de første emnesektioner er på plads. Næste skridt er at erstatte pladsholdertekst med mit eget indhold og bygge videre på designet.

## Lavet af

Chris
