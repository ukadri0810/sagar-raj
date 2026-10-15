// WhatsApp contact displayed beside the WhatsApp icon on the resort's existing website.
const WHATSAPP_NUMBER = '919527520146';
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu.hidden = open;
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {menu.hidden=true;toggle.setAttribute('aria-expanded','false');}));
const checkin=document.getElementById('checkin');
const checkout=document.getElementById('checkout');
const feedback=document.getElementById('formFeedback');
const guestName=document.getElementById('guestName');
function localISO(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
const today=localISO(new Date());checkin.min=today;checkout.min=today;
checkin.addEventListener('change',()=>{
  checkout.min=checkin.value||today;
  if(checkout.value&&checkout.value<=checkin.value)checkout.value='';
});
document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=guestName.value.trim().replace(/\s+/g,' ');
  if(!name){feedback.textContent='Please enter the guest name.';guestName.focus();return;}
  if(!checkin.value||!checkout.value||checkout.value<=checkin.value){
    feedback.textContent='Please choose a check-out date after your check-in date.';return;
  }
  const guests=document.getElementById('guests').selectedOptions[0].textContent;
  const message=`Hello Sagar Raj Beach Resort!\nI would like to enquire about room availability.\n\nGuest name: ${name}\nCheck-in: ${checkin.value}\nCheck-out: ${checkout.value}\nGuests: ${guests}\n\nPlease share available rooms and rates. Thank you!`;
  const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  feedback.textContent='Opening WhatsApp with your enquiry…';
  window.location.assign(url);
});
document.getElementById('year').textContent=new Date().getFullYear();
