// Select the page elements
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

// Select the buttons
const btnToPage2 = document.getElementById('toPage2');
const btnToPage1 = document.getElementById('toPage1');

// Function to switch pages
btnToPage2.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
});

btnToPage1.addEventListener('click', () => {
    page2.classList.add('hidden');
    page1.classList.remove('hidden');
});