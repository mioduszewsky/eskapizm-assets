# eskapizm-assets

Publiczne zasoby banerow Eskapizmu serwowane przez GitHub + jsDelivr.

## Zasada osadzania u afiliantow

Afiliantowi przekazujemy embed przez `<script>`, nigdy przez iframe i nigdy jako statycznie skopiowany HTML banera.

Script pobiera aktualny plik banera z tego repo i renderuje go inline na stronie afilianta. Dzieki temu zmiana w repo aktualizuje baner bez proszenia afilianta o zmiane kodu u siebie. Klikniecie CTA jest zwyklym linkiem i przenosi uzytkownika na `eskapizm.com` z `ref` oraz UTM.

Przyklad:

```html
<script
  async
  src="https://cdn.jsdelivr.net/gh/mioduszewsky/eskapizm-assets@main/embed.js"
  data-banner="Baner_Tajlandia.html"
></script>
```

Dostepne wartosci `data-banner`:

- `Baner_Tajlandia.html`
- `Baner_Wietnam.html`
- `Baner_Filipiny.html`
- `Baner_Indonezja.html`
- `tajlandia.html`
- `wietnam.html`
- `filipiny.html`
- `indonezja.html`

## Linki afiliacyjne

Kazdy link CTA w banerze musi miec jeden spojny URL:

```text
https://eskapizm.com/<kierunek>?ref=<public_id>&utm_source=<partner>&utm_medium=baner&utm_campaign=<kierunek>
```

Przyklad Bartka w podrozy:

```text
https://eskapizm.com/tajlandia?ref=aff_5d9160048a15&utm_source=bartekwpodrozy&utm_medium=baner&utm_campaign=tajlandia
```

- `ref` zasila system afiliacji Eskapizmu.
- `utm_source`, `utm_medium`, `utm_campaign` zasilaja analityke.
- Sam link banerowy nie musi dawac rabatu klientowi. Rabat jest kontrolowany w dashboardzie afiliacji.

## Aktualizacje

Po zmianie pliku na branchu `main` jsDelivr odswieza CDN z opoznieniem. Jesli zmiana ma wejsc od razu, mozna wyczyscic cache:

```text
https://purge.jsdelivr.net/gh/mioduszewsky/eskapizm-assets@main/embed.js
https://purge.jsdelivr.net/gh/mioduszewsky/eskapizm-assets@main/Baner_Tajlandia.html
```

Warianty per afiliant/persona trzymajmy w osobnych folderach tylko wtedy, gdy jeden rootowy baner nie powinien byc wspoldzielony.
