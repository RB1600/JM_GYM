document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const ctaButton = document.querySelector(".cta-button");
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

   
    ctaButton.addEventListener("click", function () {
        alert("Welcome to JM Gym! Start your fitness journey today!");
    });

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.innerHTML = `<img src="${img.src}" alt="Gym Image">`;
            lightbox.classList.add("active");
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    // Login Functionality
    document.getElementById("login-btn").addEventListener("click", function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if(username === "admin" && password === "1234") {
            alert("Login successful!");
        } else {
            alert("Invalid credentials");
        }
    });

    // Signup Functionality
    document.getElementById("signup-btn").addEventListener("click", function() {
        let newUser = document.getElementById("new-username").value;
        let newPass = document.getElementById("new-password").value;
        if(newUser && newPass) {
            alert("Signup successful! Please login.");
        } else {
            alert("Please fill all fields.");
        }
    });

    // BMI Calculator
    document.getElementById("bmi-btn").addEventListener("click", function() {
        let weight = parseFloat(document.getElementById("weight").value);
        let height = parseFloat(document.getElementById("height").value) / 100;
        let bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("bmi-result").innerText = "Your BMI: " + bmi;
    });

    // Workout Tracker
    document.getElementById("add-workout").addEventListener("click", function() {
        let workout = document.getElementById("workout").value;
        let duration = document.getElementById("duration").value;
        if(workout && duration) {
            let workoutList = document.getElementById("workout-list");
            let newWorkout = document.createElement("li");
            newWorkout.innerText = `${workout} - ${duration} mins`;
            workoutList.appendChild(newWorkout);
        } else {
            alert("Please enter workout details.");
        }
    });

    // Payment Integration (Mock)
    document.getElementById("pay-btn").addEventListener("click", function() {
        alert("Redirecting to payment gateway...");
    });
});
