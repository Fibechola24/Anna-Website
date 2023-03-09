(function (app) {
    app.homepage = function () {
      setCopyrightDate();
      wireContactForm();
    };
  
    app.portfolio = function () {
      setCopyrightDate();
    };
  
    app.workItem = function () {
      setCopyrightDate();
    };
  
    function setCopyrightDate() {
      const date = new Date();
      document.getElementById('copyrightYear').innerText = date.getFullYear();
    }
  
    function wireContactForm() {
      const contactForm = document.getElementById('contact-form');
      contactForm.onsubmit = contactFormSubmit;
    }
  
    function contactFormSubmit(e) {
      e.preventDefault();
  
      const contactForm = document.getElementById('contact-form');
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');

      if (!name || !email || !message) {
        console.error('Could not find input elements');
        return;
      }
    
  
      const mailTo = `mailto:${email.value}?subject=ContactFrom ${name.value}&body=${message.value}`;
      window.open(mailTo);  //open a link i.e an email client. ? means parameters
  
      name.value = '';
      email.value = '';
      message.value = '';   //clear up contact after sending
    }
  })((window.app = window.app || {}));
  