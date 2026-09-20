function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left d-flex" id="navbarNav">
  <a class="navbar-brand me-5" href="#">
    <img
      class="BrandLogo"
      src="./assets/logo-white.png"
      alt="Astra Global Solutions"
      srcset=""
    />
  </a>
  <ul class="navbar-nav d-none d-lg-flex">
    <li class="nav-item">
      <a class="nav-link" href="#Features">Servicios</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Metric">Modelo 360°</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Pricing">Quiénes somos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#FAQ">Preguntas frecuentes</a>
    </li>
  </ul>
</div>
<div class="nav-right d-flex align-items-center">
  <!--
    Dashboard y Login: se habilitarán cuando el portal de clientes esté disponible.
    <a class="nav-link me-3" href="#Login">Iniciar sesión</a>
    <a class="button btn-theme-default me-3" href="#Dashboard">Dashboard</a>
  -->
  <a class="button btn-theme-default d-none d-sm-inline-flex" href="#Footer">
    Hablar con el equipo
  </a>
  <button
    class="btn collapsed d-lg-none"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</div>
<div
  class="offcanvas offcanvas-end"
  tabindex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">
      Astra Global Solutions
    </h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#Features">Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Metric">Modelo 360°</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Pricing">Quiénes somos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#FAQ">Preguntas frecuentes</a>
      </li>
    </ul>
    <div class="mt-3">
      <!--
        Dashboard y Login: se habilitarán cuando el portal de clientes esté disponible.
        <a class="nav-link" href="#Login">Iniciar sesión</a>
        <a class="button btn-theme-default mt-2" href="#Dashboard">Dashboard</a>
      -->
      <a class="button btn-theme-default" href="#Footer">Hablar con el equipo</a>
    </div>
  </div>
</div>
    `;
  navbar.appendChild(Container);
}
Navbar();
