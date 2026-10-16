# Personlig hjemmeside

Min personlige hjemmeside og mit lille hyggeprojekt. Her samler jeg mine projekter, noter fra datamatikeruddannelsen og hobbyer, så jeg kan følge min udvikling over tid.

Jeg bygger siden fra bunden for at øve mig og holde det, jeg lærer, ved lige.

## Formål

- At lave min egen personlige hjemmeside fra bunden
- At samle mine projekter et sted
- At dokumentere ting, jeg lærer på datamatikeruddannelsen
- At bygge en portfolio, som kan vise min udvikling over tid

## Indhold

- **Forside:**
- **Om mig:**
- **Projekter:** Rasperry PI, NAS
- **Studie:** Datamatiker
- **Hobby:** TCG (One Piece, Pokémon og Dragon Ball), 3D-printer og Top10-spilanbefalinger.

Projekt- og hobbysektionerne har navigation på plads. Selve indholdet, såsom projekter, kortsamlinger og 3D-print, er stadig under opbygning.

## Teknologi

Siden er bygget med HTML, CSS og JavaScript uden frameworks eller et build-trin. Python 3 bruges til den medfølgende lokale webserver.

## Automatiske tjek

GitHub Actions kontrollerer HTML, lokale links og filer, JavaScript-syntaks og formatering. OWASP ZAP-scanningen er foreløbig slået fra. Workflowet kører ved push til `main` og `html` samt ved pull requests til `main`.

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
- [ ] Skrive en personlig præsentation på Om mig-siden (Måske)
- [ ] Tilføje beskrivelser og billeder af mine projekter
- [ ] Udfylde studiesiden med noter og emner (Måske)
- [ ] Tilføje kort og produkter til mine TCG-samlinger
- [ ] Tilføje billeder og beskrivelser af 3D-printprojekter
- [ ] Opdatere footer og links til GitHub og LinkedIn
- [ ] Arbejde videre med design og layout
- [ ] Overveje et eget grading check til hjemmesiden

## Status

Projektet er under opbygning. Grundstrukturen, navigationen og de første emnesektioner er på plads. Næste skridt er at erstatte pladsholdertekst med mit eget indhold og bygge videre på designet.

## Lavet af

Chris
