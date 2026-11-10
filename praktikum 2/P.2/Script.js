// Mengambil referensi elemen HTML
const tombolUbah = document.getElementById("btnUbah");
const tombolReset = document.getElementById("btnReset");
// Menyimpan teks awal untuk fitur reset
const teksAwal = document.getElementById("judul").innerHTML;
// Event klik tombol Ubah
tombolUbah.addEventListener("click", function() {
document.getElementById("judul").innerHTML
= "yeee !";
document.getElementById("deskripsi").innerHTML
= "ayo kita menikah";
console.log("DOM berhasil dimanipulasi");
});
// Event klik tombol Reset
tombolReset.addEventListener("click", function() {
document.getElementById("judul").innerHTML = teksAwal;
document.getElementById("deskripsi").innerHTML
= "ulangi  sekali lagi";
console.log("Halaman direset");
});