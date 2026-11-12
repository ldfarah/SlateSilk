/* Mailchimp signup is handled by a standard HTML form POST in index.html.
 * Do not place private Mailchimp API keys in this public repository.
 * Business contact email can be changed in CONFIG below.
 */
const CONFIG = { businessEmail: 'ldfarah@yahoo.com' };
document.getElementById('year').textContent = new Date().getFullYear();
const businessLink = document.getElementById('business-link');
if (CONFIG.businessEmail) {
  businessLink.href = `mailto:${CONFIG.businessEmail}?subject=Slate%20%2B%20Silk%20business%20inquiry`;
  businessLink.removeAttribute('aria-disabled');
  businessLink.parentElement.querySelector('.fine-print')?.remove();
} else {
  businessLink.addEventListener('click', e => e.preventDefault());
}
