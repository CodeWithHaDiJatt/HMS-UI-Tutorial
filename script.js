document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Simulate login check (You can replace with real backend logic)
    if (username === "admin" && password === "admin123") {
      alert("Login successful!");
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });
  