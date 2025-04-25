function submitRating(rating) {
  console.log("Oy verildi:", rating);

  // Normalde burada veritabanına gönderirdik
  // Bu sürümde sadece teşekkür mesajı gösteriyoruz

  document.getElementById("emojis").style.display = "none";
  document.getElementById("thankYou").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("emojis").style.display = "block";
    document.getElementById("thankYou").classList.add("hidden");
  }, 2000); // 2 saniye sonra sıfırla
}
