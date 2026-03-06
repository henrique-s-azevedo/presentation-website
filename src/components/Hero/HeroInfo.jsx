export default function heroInfo() {
    const hero_info = document.createElement("section");
    hero_info.className = "hero-info";
    hero_info.innerHTML = `
        <section class="hero-info">
            <h1>Henrique Azevedo</h1>
            <h2>Junior Developer</h2>
            
            <a href="" class="social-btn"> 
                <img 
                    width="24"
                    height="24"
                    src="../../assets/images/mainPage/linkedin-logo.png" alt="LinkedIn logo"
                > 
            </a>
            <br>
            <a href="" class="social-btn">
                <img
                    width="24"
                    height="24"
                    src="../../assets/images/mainPage/github-logo.png" alt="GitHub logo"
                > 
            </a>
            <br>
            <a href="" class="social-btn">
                <img
                    width="24"
                    height="24"
                    src="../../assets/images/mainPage/discord-logo.png" alt="Email"
                >
            </a>
        </section>
    `;

    return hero_info;
}