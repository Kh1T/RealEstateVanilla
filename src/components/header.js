class HeaderNav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  <header class="header">
  <!-- Top Bar -->
  <div class="container top-bar">
    <div class="social-links">
      <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-telegr am-plane"></i></a>
    </div>
        <div class="contact-info">
        <div class="app-select">
            <i class="fas fa-mobile-alt mobile-icon"></i>
            <select class="select">
            <option value="en">APP</option>
            <option value="appstore">Appstore</option>
            <option value="googleplay">Google Play</option>
            </select>
        </div>
        <span class="phone-number">+855 61 777 090</span>
        <select class="select">
            <option value="English">English</option>
            <option value="Khmer">Khmer</option>
        </select>
        <select class="select">
            <option value="usd">USD</option>
            <option value="khr">KHR</option>
        </select>
        </div>
    </div>

    <!-- Menu  -->
    <div class="nav-container">
        <img
          width="232px"
          src="https://www.realestate.com.kh/static/img/logo.svg"
        />

        <nav>
        <ul class="nav-menu">
            <!-- Example menu items with dropdowns -->
            <li class="dropdown">
            <span>Buy</span>
            <div class="dropdown-content">
                <a href="#">House</a>
                <a href="#">Apartment</a>
                <a href="#">Land</a>
                <a href="#">Shophouse</a>
                <a href="#">Condo</a>
                <a href="#">Borey</a>
                <a href="#">Commercial</a>
            </div>
            </li>
            <li class="dropdown">
            <span>Rent</span>
            <div class="dropdown-content">
                <a href="#">House</a>
                <a href="#">Apartment</a>
                <a href="#">Land</a>
                <a href="#">Shophouse</a>
                <a href="#">Condo</a>
                <a href="#">Borey</a>
                <a href="#">Commercial</a>
            </div>
            </li>
            <!-- Add additional menu items as in your file -->
            <!-- ... -->
            <li class="dropdown">
            <span>More</span>
            <div class="dropdown-content">
                <a href="#">Cambodia Investment Guide</a>
                <a href="#">Foreign Property Ownership</a>
                <a href="#">Buying Advice and Tips</a>
                <a href="#">Guide to Battambang</a>
                <a href="#">Guide to Phnom Penh</a>
                <a href="#">Guide to Siem Reap</a>
                <a href="#">Guide to Sihanoukville</a>
                <a href="#">Guide to Kampot</a>
            </div>
            </li>
        </ul>
        </nav>
        <div class="auth-buttons">
        <!-- Login Button trigger modal -->
        <a
            href="#"
            class="auth-link"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            >Login</a
        >
        <a href="#" class="auth-link">Register</a>
        <button class="add-property">+ Add Property</button>
        </div>
        </div>
    </header>
    `;
  }
}
customElements.define('header-nav', HeaderNav);