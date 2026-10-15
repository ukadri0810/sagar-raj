# Sagar Raj Beach Resort — Studio concept V3

A bespoke, responsive static website concept for manager review. Built with plain HTML/CSS/JavaScript; no framework or build step.

## Publish on GitHub Pages
1. Extract the ZIP.
2. Upload **index.html**, **styles.css**, **script.js**, and the **assets/** folder to the ROOT of a public GitHub repository (not inside an extra folder).
3. Repository Settings → Pages → Deploy from a branch → main → /(root) → Save.
4. Wait for the Pages link to appear.

## WhatsApp enquiries
The booking form checks valid dates and then navigates in the **same tab** to WhatsApp's send page with a prefilled enquiry. This avoids mobile popup blockers that affected the earlier version.

**IMPORTANT:** Edit `WHATSAPP_NUMBER` on line 2 of `script.js` to the resort's VERIFIED WhatsApp-enabled reservations number, using digits only, including `91` country code. The placeholder is `917588144741`, based on a phone number listed in earlier project information; its WhatsApp registration has NOT been verified. If that number is not on WhatsApp, the link cannot deliver a message. The visitor must still press Send in WhatsApp.

For testing: choose future check-in and check-out dates and click 'Enquire on WhatsApp'. If WhatsApp is not installed, the WhatsApp web/send page should appear.

## Notes
- All eight images are supplied by the client in this conversation.
- No real-time inventory, payment gateway, or confirmed reservation integration is included.
- Google Fonts used: Newsreader, Manrope and DM Mono (instead of commercial fonts requiring paid licensing).
- Room types, prices, availability, business contact details and resort policies must be verified before launch.


## V4 brand update
- Original SR gold logo recreation is in `assets/sagar-raj-logo.png` (transparent background). This is a recreated artwork based on the supplied signage, not an exact vector trace.
- Typography now uses Libre Baskerville (headlines) and Jost (interface), with DM Mono for small editorial labels. Fonts load from Google Fonts; Georgia/Arial fallbacks apply offline.
- Header and footer use the supplied brand logo.
- WhatsApp enquiry still uses the provisional number in `script.js`. Confirm that this number has an active WhatsApp account before publishing.
