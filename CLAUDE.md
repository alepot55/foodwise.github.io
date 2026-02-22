# Foodwise — Prototipo Interattivo

Prototipo high-fidelity di **Foodwise**, app mobile kitchen assistant per il corso High-Tech Startups al Politecnico di Milano. Output: screenshot pixel-perfect per il report finale.

## Tech Stack

- **React** (Vite 5, template JS)
- **Tailwind CSS v3** — utility classes + classe `.no-scrollbar` per nascondere scrollbar
- **lucide-react** — icone UI (ChefHat, Refrigerator, Camera, Bell, ecc.)
- **Node 18** — compatibilita' verificata

## Comandi

| Comando | Cosa fa |
|---|---|
| `npx vite` | Dev server (default: http://localhost:5173) |
| `npx vite build` | Build produzione in `dist/` |
| `npx vite preview` | Preview build produzione |

## Struttura

```
src/
  App.jsx               # Orchestratore: phone frame + routing + bottom nav
  main.jsx              # Entry point React
  index.css             # Tailwind directives + no-scrollbar utility
  constants.js          # Brand colors (oggetto C)
  components/
    BottomNav.jsx       # Barra navigazione 5 tab
  screens/
    CookScreen.jsx      # Tab 1 — Magic Cook (home)
    PantryScreen.jsx    # Tab 2 — Inventario
    PlanScreen.jsx      # Tab 3 — Meal planner
    ShopScreen.jsx      # Tab 4 — Shopping list
    ProfileScreen.jsx   # Tab 5 — Profilo + savings
    ReceiptScanScreen.jsx  # Sub-screen da Pantry
    WeeklyRecapScreen.jsx  # Sub-screen da Profile
schermate/              # Immagini di riferimento originali
```

## Brand Identity

| Token | Valore | Uso |
|---|---|---|
| Primary | `#4CAF50` | CTA, tab attivo, accenti |
| PrimaryDeep | `#1B5E20` | Bottoni CTA su gradient |
| Secondary | `#FF9800` | Warning, item in scadenza |
| Danger | `#F44336` | Scaduti, alert urgenti |
| Background | `#F8F9FA` | Sfondo app |
| Text Primary | `#1A1A2E` | Testo principale |
| Text Secondary | `#6B7280` | Testo secondario |

## Schermate (7 totali)

1. **Cook** (Magic Cook) — Home screen, ricette suggerite, item in scadenza
2. **Pantry** — Inventario a griglia con barre scadenza, filtri categoria
3. **Plan** — Meal planner settimanale con suggerimento AI
4. **Shop** — Shopping list smart con categorie e motivi (ha layout flex interno con summary bar)
5. **Profile** — Dashboard risparmio gamificata, grafico settimanale
6. **Receipt Scan** — Risultati scansione scontrino con confidence levels (sub-screen, no bottom nav)
7. **Weekly Recap** — Check-in domenicale stile Tinder (sub-screen, no bottom nav)

## Principi Design

- **Mobile-first**: frame iPhone 390x844px, border-radius 40px
- **Emoji come food thumbnail**: emoji grandi su gradienti colorati (non icone SVG per cibo)
- **Icone SVG per UI**: lucide-react per navigazione e azioni
- **Card style**: bg-white, shadow-sm, rounded-2xl
- **Gerarchia info**: item urgenti (in scadenza) sempre visibili per primi
- **Zero effort UX**: l'app lavora per l'utente, non viceversa
- **No scrollbar visibile**: classe `.no-scrollbar` su tutti gli scroll container

## Convenzioni Codice

- Un file per schermata in `src/screens/`
- Colori brand in `src/constants.js` (oggetto `C`)
- `App.jsx` gestisce solo routing tra tab e sub-screen
- `useState` per navigazione tab e sub-screen
- Dati tutti hardcoded/mock — no backend, no API
- Schermate con bottom bar interna (es. Shop) usano layout `flex flex-col h-full` per non coprire la bottom nav

## Note Importanti

- "Cook" e' il tab di default (non Pantry) — scelta product deliberata
- Le date di scadenza nel receipt scan sono **stimate** (Probabilistic Estimation Engine)
- Il Weekly Recap risolve il "Ghost Inventory" — sync rapido della dispensa
- Lo scopo e' generare screenshot per il report, non un'app funzionante
- ShopScreen ha layout speciale: flex col con scroll interno + summary bar fissa in fondo, gestito diversamente in App.jsx
