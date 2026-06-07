# eskapizm-assets

Publiczne zasoby banerow Eskapizmu serwowane przez GitHub + jsDelivr.

## Zasada osadzania u afiliantow

Afiliantowi przekazujemy iframe do pliku z CDN, a nie statycznie skopiowany HTML banera. Dzieki temu zmiana w tym repo aktualizuje baner na stronie afilianta bez ponownego wdrazania po jego stronie.

Przyklad:

```html
<iframe
  src="https://cdn.jsdelivr.net/gh/mioduszewsky/eskapizm-assets@main/Baner_Tajlandia.html"
  style="width:100%;border:0;min-height:560px;"
  loading="lazy"
  title="Eskapizm - plan podrozy po Tajlandii"
></iframe>
```

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
https://purge.jsdelivr.net/gh/mioduszewsky/eskapizm-assets@main/Baner_Tajlandia.html
```

Warianty per afiliant/persona trzymajmy w osobnych folderach tylko wtedy, gdy jeden rootowy baner nie powinien byc wspoldzielony.
