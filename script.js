// Replace with the resort's verified WhatsApp-enabled reservation number, digits only.
const WHATSAPP_NUMBER = '917588144741';
const menuButton = document.getElementById('menuButton');
const mobileNav = document.getElementById('mobileNav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.hidden = isOpen;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
}));
const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');
const feedback = document.getElementById('formFeedback');
const today = new Date();
const todayLocal = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
checkin.min = todayLocal;
checkout.min = todayLocal;
checkin.addEventListener('change', () => {
  checkout.min = checkin.value || todayLocal;
  if (checkout.value && checkout.value <= checkin.value) checkout.value = '';
});
document.getElementById('bookingForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!checkin.value || !checkout.value || checkout.value <= checkin.value) {
    feedback.textContent = 'Please choose a valid check-in and check-out date.';
    return;
  }
  const guests = document.getElementById('guests').selectedOptions[0].textContent;
  const message = `Hello Sagar Raj Beach Resort! I'd like to enquire about a stay.\nCheck-in: ${checkin.value}\nCheck-out: ${checkout.value}\nGuests: ${guests}\nPlease share available rooms and rates. Thank you!`;
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  feedback.textContent = 'Opening WhatsApp with your enquiry…';
  // Same-tab navigation avoids popup blockers on mobile and GitHub Pages.
  window.location.assign(url);
});
document.getElementById('year').textContent = new Date().getFullYear();
