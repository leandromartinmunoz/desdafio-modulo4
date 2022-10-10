function componentContact(contact) {  
    const newElement = document.createElement("div");

    newElement.innerHTML = `<section class="contact">
    <h3 class="contact__title">Escribime</h3>
    <form class="contact__contact-form">
        <div class="contact-form__container">
            <label for="contact-form__name-input" class="contact-form__label">NOMBRE</label>
            <input id="contact-form__name-input" type="text" class="contact-form__input">
            <span id="validate-name"></span>
        </div>
        <div class="contact-form__container">
            <label for="contact-form__email-input" class="contact-form__label">EMAIL</label>
            <input id="contact-form__email-input" type="email" class="contact-form__input">
            <span id="validate-email"></span>
        </div>
        <div class="contact-form__container">
            <label for="contact-form__textarea" class="contact-form__label">MENSAJE</label>
            <textarea class="contact-form__textarea" name="contact-form__textarea" id="contact-form__textarea" cols="30" rows="10"></textarea>
            <span id="validate-message"></span>
        </div>
        <span id="send-message"></span>
        <button type="submit" class="contact-form__button">Enviar</button>
    </form>
</section>
`
    contact.appendChild(newElement)
}

function fetchForm() {   
    const inputEmailEl = document.getElementById("contact-form__email-input");
    const inputMessageEl = document.getElementById("contact-form__textarea");
    fetch("https://apx-api.vercel.app/api/utils/dwf", {    
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify({
                    "to":`${inputEmailEl.value}`,
                    "message":`${inputMessageEl.value}`
                })
            })
}




(function () {
    if (document.URL.includes("contacto.html")) {
        const footer = document.querySelector(".contact-footer");
        const header = document.querySelector(".contact-header");
        const contact = document.querySelector(".section-contact");

        headerComponent(header)
        footerComponent(footer)
        componentContact(contact)
        headerBurgerMenuFuncionality()
      
        document.querySelector(".contact").style.backgroundColor = "initial"
    }
    
    
})()