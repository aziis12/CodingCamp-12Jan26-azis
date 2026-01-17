// INPUT NAMA USER MENGGUNAKAN PROMPT
let visitorName = prompt("Masukkan nama Anda:");

if (!visitorName || visitorName.trim() === "") {
  visitorName = "Visitor";
}

document.getElementById(
  "welcome-text"
).textContent = `Hi ${visitorName}, Welcome To Website`;


document.getElementById(
  "welcome-text"
).textContent = `Hi ${visitorName}, Welcome To AZ Digital Solution`;

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthDate = document.getElementById("birthDate").value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("messageText").value.trim();
  const result = document.getElementById("result");

  if (!name || !birthDate || !genderInput || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  const gender = genderInput.value;
  const currentTime = new Date().toString();

  result.innerHTML = `
    <p><b>Current Time :</b> ${currentTime}</p>
    <p><b>Nama :</b> ${name}</p>
    <p><b>Tanggal Lahir :</b> ${birthDate}</p>
    <p><b>Jenis Kelamin :</b> ${gender}</p>
    <p><b>Pesan :</b> ${message}</p>
  `;
});


// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
