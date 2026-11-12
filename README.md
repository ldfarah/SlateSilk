# Slate + Silk — GitHub Pages landing page

Responsive single-page site, now wired to the Mailchimp embed-form action supplied by the site owner.

## Publish
1. Create a GitHub repository named `slate-silk`.
2. Upload `index.html`, `styles.css`, and `script.js` from this folder to the repository root.
3. Under **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`.
4. Visit `https://YOUR-USERNAME.github.io/slate-silk/` after deployment.

## Mailchimp signup
The form submits `EMAIL` (required) and `FNAME` (optional) directly to the Mailchimp public signup endpoint, opening the Mailchimp response in a new tab. It retains Mailchimp's hidden anti-bot field. No API key is needed. The original Mailchimp-generated validation scripts and styles were omitted so the form fits the site design.

**Before launch:**
- Test with an email address you control. Confirm that it reaches the intended Mailchimp audience and completes any confirmation step. This integration has not been live-tested.
- If your Mailchimp audience also serves other ventures, apply a Slate + Silk tag or dedicated segmentation in Mailchimp; the supplied embed code does not itself tag subscribers.
- Review Mailchimp audience settings, double opt-in, consent wording, and footer/compliance requirements.
- Publish a privacy policy and link it from the signup area.

## Business inquiries
The business inquiry link is active and uses `ldfarah@yahoo.com`. To change it later, edit `CONFIG.businessEmail` in `script.js`.

## Creative and legal notes
Visuals are CSS abstract concepts, not actual product photography. This is a prelaunch site, not proof by itself of trademark use in commerce.

## Mailchimp tagging

The signup form includes `<input type="hidden" name="tags" value="855458">` to request the `Slate + Silk | Launch List` tag. This ID was inferred from the Mailchimp tag View URL and must be verified with a live test. Subscribe with a test address and check its contact record for the tag. The form opens Mailchimp in a new tab; no signup is confirmed by the site itself.
