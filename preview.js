"use strict";

// Local design prototype. No API, persistence, analytics, or actual form delivery.
document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-nav");
function closeMenu(returnFocus = false) {
  if (!menu || !menuButton) return;
  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menu";
  if (returnFocus) menuButton.focus();
}
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Zavřít" : "Menu";
  menu.classList.toggle("is-open", open);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") closeMenu(true);
});
menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenu()));
window.matchMedia("(min-width: 800px)").addEventListener("change", () => closeMenu());

// Summaries only from S03–S15; no product guarantees or financial advice.
const services = {
  reality: {
    name: "Reality a bydlení", group: "Bydlení a financování", source: "S13",
    intro: "Koupě, prodej, pronájem i financování. Propojte své plány s bydlením a společně proberme možnosti.",
    context: "Ať už své bydlení teprve hledáte, nebo řešíte další krok, vyberte téma pro společnou konzultaci.",
    visual: "Od prvního plánu k vlastnímu domovu.", cta: "Probrat moje bydlení",
    offerings: [["Koupě a prodej nemovitostí", "Byty, domy, pozemky i komerční nemovitosti."], ["Hypoteční financování", "Financování bydlení, rekonstrukce nebo rekreační nemovitosti."], ["Pronájem a správa", "Pronájem a správa nemovitostí i související pojištění."], ["Investice do nemovitostí", "Samostatné téma podle vašich plánů a možností."]],
    related: ["uvery", "majetek", "investice"]
  },
  uvery: {
    name: "Úvěry a refinancování", group: "Bydlení a financování", source: "S06",
    intro: "Nové financování i stávající závazky. Proberme možnosti úvěrů, refinancování nebo konsolidace.",
    context: "Začněme vaší současnou situací a tím, co potřebujete financovat.", visual: "Vaše plány a možnosti financování.", cta: "Probrat financování",
    offerings: [["Konsolidace a refinancování", "Téma sloučení a úpravy stávajících úvěrů."], ["Spotřebitelské úvěry", "Financování osobních potřeb."], ["Úvěry na bydlení", "Financování spojené s bydlením."], ["Firemní financování", "Úvěry a nastavení splátek pro podnikání."]], related: ["reality", "poradenstvi", "firmy"]
  },
  poradenstvi: {
    name: "Osobní finanční poradenství", group: "Vaše finance", source: "S15",
    intro: "Vaše cíle, současná situace a další kroky. Pojďme dát osobním financím společný směr.",
    context: "Konzultace může začít jednotlivým tématem i širším pohledem na vaše finance.", visual: "Nejdřív vaše cíle. Potom řešení.", cta: "Probrat moje finance",
    offerings: [["Individuální konzultace", "Prostor pro vaše otázky a plány."], ["Analýza situace", "Pohled na současné uspořádání vašich financí."], ["Návrh řešení", "Možnosti podle vaší životní situace."], ["Dlouhodobý plán", "Spolupráce s ohledem na další životní kroky."]], related: ["investice", "rodina", "reality"]
  },
  investice: {
    name: "Investice a zhodnocení", group: "Vaše finance", source: "S12",
    intro: "Plány pro vás, vaše děti i další životní etapy. Proberme témata investování podle vašich cílů.",
    context: "Nabídka témat pro konzultaci — konkrétní možnosti se odvíjejí od vaší situace.", visual: "Pro vaše další životní plány.", cta: "Probrat investování",
    offerings: [["Investiční poradenství", "Cíle a možnosti investování."], ["Fondy, ETF a akcie", "Jednotlivé investiční nástroje jako téma konzultace."], ["Plány pro rodinu a stáří", "Investice pro děti, penzijní spoření a renty."], ["Další investiční oblasti", "Nemovitosti, dluhopisy, spořicí produkty a udržitelné investice."]], related: ["poradenstvi", "reality", "rodina"]
  },
  rodina: {
    name: "Zabezpečení rodiny", group: "Pojištění a ochrana", source: "S14",
    intro: "Život, zdraví i příjem. Promluvme si o pojištění a finančních plánech pro vás a vaše blízké.",
    context: "Zvolte téma, které je pro vaši rodinu právě důležité.", visual: "Lidé, na kterých vám záleží.", cta: "Probrat ochranu rodiny",
    offerings: [["Životní a úrazové pojištění", "Pojištění související se životem a zdravím."], ["Pracovní neschopnost", "Téma ochrany příjmu při pracovní neschopnosti."], ["Pojištění pro děti", "Možnosti pojištění vašich dětí."], ["Další rodinné potřeby", "Spoření na stáří, domácnost a cestování."]], related: ["majetek", "investice", "cestovani"]
  },
  auta: {
    name: "Pojištění aut a motorek", group: "Pojištění a ochrana", source: "S11",
    intro: "Auto, motorka nebo obytný vůz. Proberme možnosti pojištění pro vaše cesty.",
    context: "Vyberte téma podle vozidla a toho, co potřebujete řešit.", visual: "Pro každodenní i výjimečné cesty.", cta: "Probrat pojištění vozidla",
    offerings: [["Povinné ručení", "Pojištění odpovědnosti spojené s provozem vozidla."], ["Havarijní pojištění", "Možnosti pojištění vašeho vozidla."], ["Motorky a obytné vozy", "Pojištění motocyklů, karavanů a obytných vozů."], ["Doplňková témata", "Připojištění skel, asistence a právní ochrana."]], related: ["cestovani", "majetek", "poradenstvi"]
  },
  majetek: {
    name: "Majetkové pojištění", group: "Pojištění a ochrana", source: "S08",
    intro: "Domov, vybavení i další majetek. Proberme možnosti pojištění podle toho, co je pro vás důležité.",
    context: "Vaše situace je výchozím bodem pro konzultaci o majetkovém pojištění.", visual: "Pro to, co má pro vás hodnotu.", cta: "Probrat pojištění majetku",
    offerings: [["Domácnost", "Vybavení, elektronika a cennosti."], ["Nemovitosti", "Rodinné domy, byty a rekreační objekty."], ["Vozidla a další majetek", "Auta, motocykly, plavidla a letadla."], ["Cenné věci", "Šperky, umění a sbírky."]], related: ["reality", "auta", "rodina"]
  },
  cestovani: {
    name: "Cestovní pojištění", group: "Pojištění a ochrana", source: "S09",
    intro: "Dovolená, pracovní cesta i sport. Proberme cestovní pojištění podle vašich plánů.",
    context: "Destinace a charakter cesty pomohou určit témata konzultace.", visual: "Co plánujete na své další cestě?", cta: "Probrat cestovní pojištění",
    offerings: [["Léčebné výlohy a asistence", "Možnosti pojištění pro cesty do zahraničí."], ["Storno a další události", "Storno cesty, zpoždění nebo zavazadla jako témata konzultace."], ["Sport a aktivity", "Pojištění s ohledem na plánované aktivity."], ["Rodinné cestování", "Společné cesty a cestování s mazlíčky."]], related: ["rodina", "mazlicci", "auta"]
  },
  mazlicci: {
    name: "Pojištění mazlíčků", group: "Pojištění a ochrana", source: "S10",
    intro: "I péče o čtyřnohé členy rodiny patří do vašich plánů. Pojďme probrat možnosti jejich pojištění.",
    context: "Konkrétní rozsah krytí je potřeba projít u zvoleného produktu; zde vybíráte téma konzultace.", visual: "Pro vaše čtyřnohé členy rodiny.", cta: "Probrat pojištění mazlíčka",
    offerings: [["Veterinární péče", "Pojištění nákladů na vyšetření, léčbu a operace jako téma konzultace."], ["Úrazy a nemoci", "Možnosti pojištění při zdravotních potížích."], ["Individuální nastavení", "Téma podle typu, věku a potřeb mazlíčka."], ["Cesty do zahraničí", "Možnosti pojištění a asistence při cestování."]], related: ["cestovani", "rodina", "majetek"]
  },
  firmy: {
    name: "Pro firmy", group: "Práce a podnikání", source: "S03",
    intro: "Financování, zaměstnanecké benefity i realitní projekty. Proberme potřeby vašeho podnikání.",
    context: "Konzultace může propojit finance firmy i témata důležitá pro její zaměstnance.", visual: "Finance pro další kroky vaší firmy.", cta: "Probrat potřeby firmy",
    offerings: [["Zaměstnanecké benefity", "Finanční benefity a skupinové pojištění."], ["Firemní financování", "Možnosti financování podnikání."], ["Realitní projekty", "Financování a reality v souvislostech."], ["Individuální konzultace", "Finanční poradenství pro firmu."]], related: ["zamestnanci", "uvery", "reality"]
  },
  zamestnanci: {
    name: "Pro zaměstnance", group: "Práce a podnikání", source: "S04",
    intro: "Bydlení, finance a pojištění pro jednotlivé životní situace. Proberme témata, která jsou pro vás důležitá.",
    context: "Nabídka témat pro osobní konzultace zaměstnanců.", visual: "Vaše osobní plány mají prostor.", cta: "Domluvit konzultaci",
    offerings: [["Bydlení a úvěry", "Hypotéky, refinancování a konsolidace."], ["Investice a osobní finance", "Plány pro úspory a pravidelné investování."], ["Pojištění a cestování", "Životní, majetkové a cestovní pojištění, vozidla i mazlíčci."], ["Reality", "Koupě, prodej, pronájem a investice do nemovitostí."]], related: ["firmy", "poradenstvi", "reality"]
  }
};
const requestedTopic = new URLSearchParams(window.location.search).get("tema");
const topic = Object.hasOwn(services, requestedTopic) ? requestedTopic : "reality";
const data = services[topic];
if (document.querySelector("#service-title")) {
  document.title = `${data.name} — Návrh Finance web`;
  document.querySelectorAll("[data-service]").forEach(element => {
    element.textContent = data[element.dataset.service];
  });
  document.querySelectorAll(".service-cta").forEach((link, index) => {
    link.href = `konzultace.html?tema=${topic}`;
    if (index === 0) link.replaceChildren(document.createTextNode(`${data.cta} `), arrow());
  });
  const list = document.querySelector("#offering-list");
  list.replaceChildren(...data.offerings.map(([title, description]) => {
    const li = document.createElement("li");
    const heading = document.createElement("h3"); heading.textContent = title;
    const paragraph = document.createElement("p"); paragraph.textContent = description;
    li.append(heading, paragraph); return li;
  }));
  document.querySelector("#related-links").replaceChildren(...data.related.map(key => {
    const a = document.createElement("a"); a.href = `sluzba.html?tema=${key}`;
    const span = document.createElement("span"); span.textContent = services[key].name;
    a.append(span, arrow()); return a;
  }));
  // The house drawing only illustrates the housing example; other topics use neutral linework.
  if (topic !== "reality") {
    const svg = document.querySelector(".service-visual svg");
    svg.innerHTML = '<path d="M28 25h152v85H72l-34 25v-25H28V25Zm60 99h99l34 24v-24h12V58h-39M55 52h97M55 72h80M55 92h52" stroke="currentColor" stroke-width="2"/>';
  }
}
function arrow() {
  const span = document.createElement("span"); span.className = "arrow";
  span.setAttribute("aria-hidden", "true"); span.textContent = "↗"; return span;
}

const form = document.querySelector("#consultation-form");
if (form) {
  const select = document.querySelector("#topic");
  if (Object.hasOwn(services, requestedTopic)) select.value = requestedTopic;
  // No native submit even if Enter is used. No data appears in the URL.
  form.addEventListener("submit", event => { event.preventDefault(); validatePreview(); });
  document.querySelector("#form-submit").addEventListener("click", validatePreview);
  ["name", "email"].forEach(id => document.getElementById(id).addEventListener("input", () => {
    document.getElementById(id).removeAttribute("aria-invalid");
    document.getElementById(`${id}-error`).hidden = true;
    document.getElementById("form-result").hidden = true;
  }));
}
function validatePreview() {
  const errors = [];
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  if (!name.value.trim()) errors.push([name, "Doplňte prosím své jméno."]);
  if (!email.value.trim()) errors.push([email, "Doplňte prosím e-mail, na který vám můžeme odpovědět."]);
  else if (!email.validity.valid) errors.push([email, "Zkontrolujte prosím e-mailovou adresu, například jmeno@example.cz."]);
  [name, email].forEach(input => {
    input.removeAttribute("aria-invalid");
    document.querySelector(`#${input.id}-error`).hidden = true;
  });
  const result = document.querySelector("#form-result");
  result.hidden = false;
  result.classList.toggle("is-error", errors.length > 0);
  if (errors.length) {
    errors.forEach(([input, message]) => {
      input.setAttribute("aria-invalid", "true");
      const error = document.querySelector(`#${input.id}-error`);
      error.textContent = message; error.hidden = false;
    });
    result.textContent = "Zkontrolujte označená pole. Jde pouze o ukázku validace; nic se neodesílá.";
    errors[0][0].focus();
  } else {
    result.textContent = "Zkušební kontrola je v pořádku. Nic nebylo odesláno ani uloženo. Ve finálním webu zde potvrzení přijde až po skutečném přijetí zprávy serverem.";
    result.focus();
  }
}
