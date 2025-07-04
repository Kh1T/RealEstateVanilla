class FooterCompo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
               
            </style>
            <div class="footer-compo-root">
                <div class="footer-main">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <img src="https://www.realestate.com.kh/static/img/logo-reverse.svg" alt="realestate.com.kh logo" />
                        </div>
                        <div class="footer-contact">
                            <div><span class="icon">📍</span> #306BCD, Monivong Blvd (93) Sangkat Chakto Mukh, Khan Doun Penh, Phnom Penh 12302</div>
                            <div><span class="icon">📞</span> +855 92 92 1000</div>
                        </div>
                    </div>
                    <div class="footer-nav">
                        <div class="footer-links">
                            <a href="#">About us</a>
                            <a href="#">Advertise with us</a>
                            <a href="#">Contact us</a>
                            <a href="#">Careers</a>
                            <a href="#">Legal</a>
                            <a href="#">Privacy</a>
                            <a href="#">Site map</a>
                        </div>
                        <div class="footer-partners">
                            <a href="#">Fazwaz-kh.com</a> |
                            <a href="#">Lamudi.co.id</a> |
                            <a href="#">Lamudi.com.ph</a> |
                            <a href="#">Bproperty.com</a> |
                            <a href="#">Hausples.com.pg</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('footer-compo', FooterCompo);