// 🔁 Recycle Form Submission
const recycleForm = document.getElementById("recycleForm");
if (recycleForm) {
  recycleForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("♻️ Thank you for choosing to recycle! We’ll get back to you soon.");
    recycleForm.reset();
  });
}

// 📦 Donation Form Submission
const donateForm = document.getElementById("donateForm");
if (donateForm) {
  donateForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎁 Thank you for your donation! We’ll reach out for pickup details.");
    donateForm.reset();
  });
}

// 📅 Awareness Camp Booking
const awarenessForm = document.getElementById("awarenessForm");
if (awarenessForm) {
  awarenessForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("📢 Awareness camp booked successfully! We’ll connect soon for further arrangements.");
    awarenessForm.reset();
  });
}
