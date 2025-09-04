const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      showErrorMessage("Parollar mos emas!");
      return;
    }

    const userData = { firstName, lastName, email, password };
    signupAPI(userData);
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const credentials = { email, password };
    loginAPI(credentials);
  });
}

async function signupAPI(userData) {
  try {
    const response = await fetch("https://682f107d746f8ca4a47fa71c.mockapi.io/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (data.id) {
      showSuccessMessage("Muvaffaqiyatli ro'yxatdan o‘tdingiz!");
      setTimeout(() => {
        window.location.href = "index2.html";
      }, 1500);
    } else {
      showErrorMessage("Xatolik yuz berdi");
    }
  } catch (error) {
    showErrorMessage("Server bilan bog‘lanishda xatolik");
  }
}

async function loginAPI(credentials) {
  try {
    const response = await fetch("https://682f107d746f8ca4a47fa71c.mockapi.io/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (data.id) {
      showSuccessMessage("Muvaffaqiyatli kirdingiz!");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      showErrorMessage("Email yoki parol noto‘g‘ri");
    }
  } catch (error) {
    showErrorMessage("Server bilan bog‘lanishda xatolik");
  }
}

function showSuccessMessage(message) {
  alert(message);
}

function showErrorMessage(message) {
  alert(message);
}
