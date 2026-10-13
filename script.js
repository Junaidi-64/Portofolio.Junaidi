// 1. Set Tahun Otomatis di Footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Fitur Ganti Tema (Dark / Light Mode)
const themeToggleBtn = document.getElementById('themeToggle');
const html = document.documentElement;

// Cek preferensi tema tersimpan
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});

// 3. Menu Responsif untuk HP (Mobile Toggle)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// 4. Efek Ketik Animasi (Typing Effect) pada Hero
const roles = [
  "Mahasiswa S1 Teknik Informatika",
  "Calon Magang IT & IT Support",
  "Aspiring Web Developer",
  "Data & Inventory Specialist"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextEl = document.getElementById("typedText");

function type() {
  if (!typedTextEl) return;

  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedTextEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 1800; // Jeda saat kalimat selesai
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 400; // Jeda sebelum mulai kata berikutnya
  }

  setTimeout(type, typeSpeed);
}

// Mulai animasi
type();