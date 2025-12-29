// script.js — form handler and small UI helpers
document.addEventListener('DOMContentLoaded', function(){
  // Set year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.classList.remove('hidden');
    status.textContent = 'Sending...';
    submitBtn.disabled = true;

    const data = new FormData(form);

    // Use fetch to submit to FormSubmit.co — this avoids a full page redirect
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) return response.json();
      return response.json().then(err => Promise.reject(err));
    })
    .then(data => {
      status.textContent = 'Thanks — your message was sent.';
      form.reset();
    })
    .catch(err => {
      console.error('Form submit error', err);
      status.textContent = 'Oops — there was a problem sending your message. You can also email mkprowrite@gmail.com or message our WhatsApp.';
    })
    .finally(()=>{
      submitBtn.disabled = false;
    });
  });
});
