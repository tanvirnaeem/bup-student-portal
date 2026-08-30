// Dark Mode

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}


// Back To Top Button

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// Service Search

const serviceSearch = document.getElementById("serviceSearch");

if (serviceSearch) {

    serviceSearch.addEventListener("keyup", function () {

        let value = serviceSearch.value.toLowerCase();

        let services = document.querySelectorAll(".service-item");

        services.forEach(function (service) {

            let text = service.innerText.toLowerCase();

            if (text.includes(value)) {

                service.style.display = "block";

            } else {

                service.style.display = "none";

            }

        });

    });

}
// Event Registration

const registerButtons = document.querySelectorAll(".registerBtn");
const selectedEvent = document.getElementById("selectedEvent");

registerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const eventName = button.parentElement.querySelector(".card-title").innerText;

        selectedEvent.value = eventName;

        document.getElementById("registrationSection").scrollIntoView({
            behavior: "smooth"
        });

    });

});


const eventForm = document.getElementById("eventForm");

if (eventForm) {

    eventForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("eventName").value;
        const selected = selectedEvent.value;

        document.getElementById("registrationMessage").innerText =
            "Thank you, " + name + "! You have successfully registered for " + selected + ".";

        const registrationModal = new bootstrap.Modal(
            document.getElementById("registrationModal")
        );

        registrationModal.show();

        eventForm.reset();

    });

}
// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value;

        const successMessage =
            document.getElementById("successMessage");

        successMessage.innerText =
            "Thank you, " + name + "! Your message has been sent successfully. 🎉";

        successMessage.classList.remove("d-none");

        contactForm.reset();

    });

}