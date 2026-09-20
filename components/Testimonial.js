function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
  <div
          class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
        >
          <div class="text-body position-absolute">
            <h2 class="title fw-bold">Marcas que garantizan la calidad de nuestros aliados</h2>
            <p>Organizaciones líderes de la región que ya han trabajado con el grupo.</p>
          </div>
          <div class="col">
            <div class="testimonial-item bg-white rounded item-1">
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    Aliado internacional Decimetrix: certificaciones ISO, transformación
                    digital, city developer, inspección técnica y eficiencia en energía y petróleo.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold"> Ecopetrol · Perenco · GranTierra Energy </span>
                    <span class="per-role"> Sector energía e hidrocarburos </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="testimonial-item bg-white rounded">
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    Marcas nacionales que ya han trabajado con el grupo en banca,
                    telecomunicaciones y consumo masivo.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Banco de Venezuela · Movilnet · Cobeca</span>
                    <span class="per-role">Sector financiero y consumo</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-white rounded mt-4">
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    Organismos y redes internacionales que respaldan nuestro trabajo
                    de comercio e innovación en la región.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">BID · ProColombia · Ruta N Medellín</span>
                    <span class="per-role">Organismos multilaterales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();
