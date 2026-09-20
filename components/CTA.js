function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-1 row-cols-lg-2 gx-5">
  <div class="text-body col py-5">
    <h2 class="title fw-bold">
      Ante grandes retos, soluciones 360°
    </h2>
    <p>
      Cuéntanos el reto de tu institución y te conectamos con el
      integrador correcto dentro de nuestro ecosistema, con seguimiento
      unificado de principio a fin.
    </p>
    <div class="mt-5">
      <a class="button btn-theme-1" href="#Footer">Escríbenos</a>
    </div>
  </div>
  <div class="col container-body overflow-hidden">
    <img class="img-fluid" src="./assets/tech-2.jpg" alt="Equipo Astra Global Solutions" />
  </div>
</div>
  `;
  CTA.appendChild(Container);
}
CTA();
