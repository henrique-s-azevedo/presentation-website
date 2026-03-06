export default function heroImage() {
    const hero_image = document.createElement("section");
    hero_image.className = "hero-image";
    hero_image.innerHTML = `
        <section class="hero-image">
            <img 
                width="400"
                height="400"
                src="../../assets/images/mainPage/presentation_photo.png" alt="Hero image"
            >
        </section>
    `;

    return hero_image;
}