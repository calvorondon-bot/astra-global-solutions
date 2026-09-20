function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Nuestros servicios</h2>
  <p class="">
    Representamos marcas especializadas en distintos sectores para que resuelvas
    retos complejos con un solo interlocutor.
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <i class="bi bi-cpu" style="font-size: 2.5rem;"></i>
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Tecnología e inteligencia artificial</div>
      <div class="description text-center">
        Digitalización de procesos, desarrollos a medida y productos de data.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <i class="bi bi-truck" style="font-size: 2.5rem;"></i>
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Logística y comercio internacional</div>
      <div class="description text-center">
        Importación y soft landing comercial para operar en nuevos mercados.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <i class="bi bi-megaphone" style="font-size: 2.5rem;"></i>
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Comunicación corporativa</div>
      <div class="description text-center">
        Estrategias de relaciones públicas y producción de eventos que
        posicionan tu marca.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <i class="bi bi-gear-wide-connected" style="font-size: 2.5rem;"></i>
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Transformación digital e ingeniería</div>
      <div class="description text-center">
        City developer, inspección técnica y eficiencia en energía y petróleo.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <i class="bi bi-kanban" style="font-size: 2.5rem;"></i>
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Gestión y desarrollo de proyectos</div>
      <div class="description text-center">
        Articulación, dirección y unidad de desarrollo de negocios corporativos,
        junto a Inversora Latinoamericana de Proyectos.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <i class="bi bi-check2-circle" style="font-size: 2.5rem;"></i>
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Entrega con responsabilidad unificada</div>
      <div class="description text-center">
        Respondemos directamente por el resultado final, con hitos cumplidos
        y quick wins medibles.
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
