export default function footer() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
        <section class="footer-contacts">
            <a href=""> Send me a message </a>
            <a href=""> Leave a Feedback </a>
            <a href=""> Download my CV </a>
        </section>

        <section class="footer-copyright">
            <p>Thanks for visiting my portfolio! Feel free to reach out if you have any questions or opportunities.</p>
            <p>© 2026 Henrique Azevedo. All rights reserved.</p>
        </section>
    `;

    return footer;
}