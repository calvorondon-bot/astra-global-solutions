function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
                Ante grandes retos, soluciones 360°
              </h1>
              <p class="mt-3">
                Para qué buscar a un simple proveedor si en el Ecosistema de Astra Global
                encuentras soluciones integrales a retos complejos, con rapidez, tecnología
                e innovación.
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-default" href="#Footer">Hablar con el equipo</a>
              <a class="button btn-theme-2" href="#Metric"
                ><i class="bi bi-arrow-repeat me-2"></i> Ver el modelo 360°</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <img class="" src="./assets/tech-1.jpg" alt="Equipo de Astra Global Solutions trabajando" id="" />
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
