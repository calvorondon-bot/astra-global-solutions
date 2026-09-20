function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="brand-logo">
              <a class="navbar-brand" href="#">
                <img class="BrandLogo" src="./assets/logo.png" alt="Astra Global Solutions" srcset="" />
              </a>
            </div>
            <div class="nav-links d-flex flex-column mt-4">
              <ul class="nav justify-content-left row-1">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="mailto:lfernandes@astraglobal360.net"
                    >info@astraglobal360.net</a
                  >
                </li>
               <li class="nav-item">
                  <a class="nav-link" href="tel:+58"></a>
                </li>
              </ul>
              <ul class="nav justify-content-left row-2">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#Pricing"
                    >Quiénes somos</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Features">Servicios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Metric">Modelo 360°</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#LogoCloud2">Ecosistema</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#FAQ">Preguntas frecuentes</a>
                </li>
              </ul>
            </div>
            <div class="copyrights mt-4">
              © 2026 Astra Global Solutions. Todos los derechos reservados. Caracas, Venezuela.
            </div>
          </div>
          <div class="col-12 col-md-2 badges">
            <p></p>
            <div class="mt-2">
              <div class="fw-bold"></div>
              <div></div>
            </div>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
