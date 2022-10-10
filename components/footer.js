function footerComponent(footer) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `<footer class="footer">
    <img src="./images/elclub.png" alt="" class="footer_logo">
    <div class="footer__social-networks-container">
    <div class="social-networks">
        <a href="" class="footer__link-social-network">Instagram</a>
        <a href=""><img src="./images/instagram.png" alt="" class="footer_img-instagram"></a>
    </div>
    <div class="social-networks">
        <a href="" class="footer__link-social-network">Linkedin</a>
        <a href=""><img src="./images/linkedin.png" alt="" class="footer_img-linkedin"></a>
    </div>
    <div class="social-networks">
        <a href="" class="footer__link-social-network">Github</a>
        <a href=""><img src="./images/github.png" alt="" class="footer_img-github"></a>
    </div>
</div>
</footer>`

footer.appendChild(newElement);
}