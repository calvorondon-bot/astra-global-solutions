function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");
  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");
  Container1.classList.add("container", "border-top", "border-bottom", "py-4");
  Container2.classList.add("container");
  Container1.innerHTML = `
  <div
          class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gy-5 justify-content-center"
        >
          <div class="col d-flex justify-content-center ClientLogo">
            <span class="fw-bold">Ecopetrol</span>
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <span class="fw-bold">Banco de Venezuela</span>
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <span class="fw-bold">Microsoft</span>
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <span class="fw-bold">BID</span>
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <span class="fw-bold">ProColombia</span>
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <span class="fw-bold">Cobeca</span>
          </div>
        </div>
  `;
  Container2.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 gy-5 gx-5">
          <div class="text-body col">
            <h2 class="title fw-bold">Nuestro ecosistema de aliados estratégicos</h2>
            <p class="Description mt-2">
              PandoLab, Nexo, A+, Decimetrix e Inversora Latinoamericana de Proyectos:
              articulamos a cada uno según la necesidad y el alcance de tu proyecto.
            </p>
          </div>
          <div class="content col">
            <img class='img-fluid' src="./assets/tech-2.jpg" alt="Ecosistema de aliados Astra Global Solutions" srcset="" />
          </div>
        </div>
  `;
  LogoCloud1.appendChild(Container1);
  LogoCloud2.appendChild(Container2);
}
LogoCloud();
