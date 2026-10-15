// IMPORTANT: Confirm this is the resort's WhatsApp-enabled reservation number.
const WHATSAPP_NUMBER = '917588144741';
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => {const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));menu.hidden=open;});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');}));
const checkin=document.getElementById('checkin');const checkout=document.getElementById('checkout');const feedback=document.getElementById('formFeedback');
function localISO(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
const today=localISO(new Date());checkin.min=today;checkout.min=today;
checkin.addEventListener('change',()=>{checkout.min=checkin.value||today;if(checkout.value&&checkout.value<=checkin.value)checkout.value='';});
document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();if(!checkin.value||!checkout.value||checkout.value<=checkin.value){feedback.textContent='Please choose a check-out date after your check-in date.';return;}const guests=document.getElementById('guests').selectedOptions[0].textContent;const message=`Hello Sagar Raj Beach Resort!\nI would like to enquire about room availability.\n\nCheck-in: ${checkin.value}\nCheck-out: ${checkout.value}\nGuests: ${guests}\n\nPlease share available rooms and rates. Thank you!`;const url=`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;feedback.textContent='Opening WhatsApp with your enquiry…';window.location.href=url;});
document.getElementById('year').textContent=new Date().getFullYear();
