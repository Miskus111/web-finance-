# Finance web — statický náhled pro Vercel

Balíček obsahuje pracovní návrh úvodu, všech 11 variant služby a formuláře. Formulář pouze kontroluje zkušební údaje; nic neodesílá ani neukládá. Náhled má nastavené noindex.

## Nahrání do GitHubu

1. ZIP nejprve rozbalte. Do GitHub repozitáře nahrajte **rozbalený obsah**, nikoli samotný ZIP ani obalovou složku.
2. V kořeni repozitáře musí být přímo `index.html`, `sluzba.html`, `konzultace.html`, `styles.css`, `preview.js`, `vercel.json` a složka `assets/`. Přiložte i ostatní soubory balíčku.
3. Při nahrazování původního balíčku se složkou `public/` použijte čistý cílový adresář / repozitář, nebo odstraňte jen staré soubory této aplikace. Zachovejte všechny nesouvisející soubory. Nový `vercel.json` musí zůstat v kořeni; tento balíček složku `public/` nepoužívá.
4. Změny uložte do nového commitu v branchi propojené s projektem Vercel.

## Nastavení projektu Vercel

Importujte správný GitHub repozitář, nebo u existujícího projektu ověřte:

| Nastavení | Hodnota |
| --- | --- |
| Root Directory | Kořen repozitáře; pole v UI nechte prázdné |
| Framework Preset | Other |
| Build Command | Prázdné — bez build kroku |
| Install Command | Prázdné — bez instalace |
| Output Directory | `.` (jedna tečka) |

`vercel.json` tyto hodnoty build/install/output a framework nastavuje. Odstraňte staré přepsání výstupu na `public` nebo `dist`; Root Directory nesmí ukazovat na `public`, `web` ani `docs/design-preview`. Projekt nevyžaduje npm, package.json ani proměnné prostředí.

Po commitu vyčkejte na **nový deployment z tohoto commitu**. Pokud automaticky nevznikl, spusťte nový deployment nejnovějšího commitu. Samotná změna nastavení nebo opětovné načtení prohlížeče starý deployment neopraví. Staré neměnné deployment URL ukazuje dál na starou verzi; otevřete URL nového deploymentu, případně projektovou doménu po jejím přiřazení nové verzi. V detailu deploymentu ověřte správný commit a stav Ready.

Otestujte `/`, `/sluzba.html?tema=reality` a `/konzultace.html`. Jestli nový deployment dál hlásí platformní `404 NOT_FOUND`, zkontrolujte propojený repozitář, Root Directory a log posledního deploymentu. Pro další diagnostiku přiložte jeho URL a Build Logs. Samotný ZIP nemůže opravit chybné přiřazení domény nebo neexistující deployment.

Návod Vercelu: https://vercel.com/docs/builds/configure-a-build#skip-build-step
