# Guideless travel redesign

React + Vite concept: homepage, Monaco trip page, five-step configurator, and interactive mobile trip companion. Choices persist on the device. No backend or environment variables required.

## Run locally

```sh
npm install
npm run dev
```

## Deploy to Vercel

Import the project repository. Framework: **Vite**. Build command: `npm run build`. Output directory: `dist`. These settings are included in `vercel.json`. Alternatively, run `npx vercel` in this folder. Hash routes support direct sharing without rewrites.

## Client presentation

Share `https://YOUR-VERCEL-DOMAIN/#/approach` for the interactive 60-second introduction. See PRESENTATION.md for a walkthrough script and application opening.

## Demo walkthrough

1. Open the Monaco weekend and select **Make this trip yours**.
2. Add a second traveler, then compare Nice and Monaco accommodation.
3. Choose a race view; add the coast boat for one traveler.
4. Review the live total, amount due today, and remaining balance.
5. Preview the app. Switch to Traveler 2 via the avatar: their morning stays free.
6. Explore the itinerary, sample tickets, group RSVP, and support preview.

## Checks

`npm run build` produces the deployment bundle.
`node verify-pricing.mjs` checks 320 pricing combinations.
`node verify-flow.mjs` tests the React journey in a simulated DOM, not a visual browser.

## Content

Independent proposal concept; all choices and booking states are illustrative. No payments, reservations, or messages are sent. The Nice and boat photographs come from the client's public website for this redesign presentation. The Monaco panorama is from https://unsplash.com/photos/a-harbor-filled-with-lots-of-boats-next-to-a-city-x5-sTSSoInw (photo-1635184574876-3ea265d09df3). The Paris photograph is an illustrative Unsplash image (photo-1502602898657-3e91760cbb34). Accommodation is illustrated with destination views rather than an unconfirmed property. Logo: original SVG concept. Fonts: DM Sans and Manrope via Google Fonts with system fallbacks.
