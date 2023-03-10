window.onload = () => {
  
  // dapatkan semua element button
  const button = document.querySelectorAll('.button');
  // looping tombol
  button.forEach(btn => {
    // ketika fombol ditekan
    btn.addEventListener('click', function() {
      // hapus class pada semua tombol
      button.forEach(btn => btn.classList.remove('active'));
      // berikan class active pada tombol yang ditekan
      this.classList.add('active');
      // teks tombol
      const value = this.textContent.toLowerCase();
      // jalankan fungsi filterContent()
      filterContent(value);
    });
  });
  
  function filterContent(value) {
    // dapatkan semua element carda
    const cards = document.querySelectorAll('.card');
    // looping
    cards.forEach(card => {
      // ambil value dari data-type
      const type = card.dataset.type.toLowerCase();
      // tampilkan kartu sesuai tipe yang ditekan
      card.parentElement.style.display = (value == type || value == 'all') ? '' : 'none';
    });
  }
  
}