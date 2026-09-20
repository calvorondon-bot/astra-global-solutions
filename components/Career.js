function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">Súmate a la red de aliados de Astra</h2>
      <p class="mt-2">
        ¿Tu empresa tiene una solución especializada para instituciones públicas
        o privadas? Conversemos sobre cómo articularla dentro de nuestro
        ecosistema de trabajo estratégico.
      </p>
      <a class="button btn-theme-default mt-3" href="#Footer"> Conversemos </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./assets/tech-3.jpg"
        alt="Alianzas estratégicas Astra Global Solutions"
      />
    </div>
  </div>
    `;
  Career.appendChild(Container);
}
Career();
