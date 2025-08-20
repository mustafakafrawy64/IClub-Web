function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

const loadMoreBtn = document.getElementById('andMoreBtn');
const hiddenSpeakers = document.querySelectorAll('.hidden');

loadMoreBtn.addEventListener('click', () => {
    hiddenSpeakers.forEach(element => {
        element.classList.remove('hidden');
    });

    loadMoreBtn.style.display = 'none';
});