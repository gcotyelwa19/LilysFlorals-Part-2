// Get the lightbox and its elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery img');

// Add a click event to each image to open the lightbox
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const fullsizeImage = img.getAttribute('data-full');
    lightboxImg.setAttribute('src', fullsizeImage);
    lightbox.style.display = 'flex'; // Show the lightbox
  });
});

// Close lightbox on "×" click
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
// Dynamic search filter for services
const serviceFilter = document.getElementById('serviceFilter');
const serviceArticles = document.querySelectorAll('#services article');

serviceFilter.addEventListener('input', () => {
  const query = serviceFilter.value.toLowerCase();

  serviceArticles.forEach(article => {
    const text = article.textContent.toLowerCase();
    article.style.display = text.includes(query) ? 'block' : 'none';
  });
});
// Enquiry form validation
const enquiryForm = document.querySelector('form');
const serviceSelect = document.getElementById('service');

enquiryForm.addEventListener('submit', function (e) {
  if (serviceSelect.value === '') {
    alert('Please select a service type.');
    serviceSelect.focus();
    e.preventDefault(); // Stop form from submitting
  }
});
// Quote logic
const quoteSection = document.getElementById('quote-section');
const quantityInput = document.getElementById('quantity');
const quoteOutput = document.getElementById('quote-output');

serviceSelect.addEventListener('change', () => {
  const selected = serviceSelect.value;
  if (selected === 'bouquet' || selected === 'event') {
    quoteSection.style.display = 'block';
    updateQuote();
  } else {
    quoteSection.style.display = 'none';
    quoteOutput.textContent = 'Estimated Quote: R0';
  }
});

quantityInput.addEventListener('input', updateQuote);

function updateQuote() {
  const qty = parseInt(quantityInput.value) || 0;
  const rate = serviceSelect.value === 'bouquet' ? 250 : 400;
  const total = qty * rate;
  quoteOutput.textContent = `Estimated Quote: R${total}`;
}
enquiryForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop actual submission
  alert('Form submitted successfully (simulated).');
});
const enquiryForm = document.querySelector('form');
const serviceSelect = document.getElementById('service');
const quoteSection = document.getElementById('quote-section');
const quantityInput = document.getElementById('quantity');
const quoteOutput = document.getElementById('quote-output');

// Validate service selection
enquiryForm.addEventListener('submit', function (e) {
  if (serviceSelect.value === '') {
    alert('Please select a service type.');
    serviceSelect.focus();
    e.preventDefault();
  }
});

// Show quote section for bouquet or event
serviceSelect.addEventListener('change', () => {
  const selected = serviceSelect.value;
  if (selected === 'bouquet' || selected === 'event') {
    quoteSection.style.display = 'block';
    updateQuote();
  } else {
    quoteSection.style.display = 'none';
    quoteOutput.textContent = 'Estimated Quote: R0';
  }
});

quantityInput.addEventListener('input', updateQuote);

function updateQuote() {
  const qty = parseInt(quantityInput.value) || 0;
  const rate = serviceSelect.value === 'bouquet' ? 250 : 400;
  const total = qty * rate;
  quoteOutput.textContent = `Estimated Quote: R${total}`;
}