function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
          <h2 class="text-center fw-bold">Quiénes somos y qué ofrecemos</h2>
          <p class="text-center">
            Somos un equipo de desarrollo de soluciones integrales que representa a marcas
            especializadas en distintos sectores industriales y corporativos.
          </p>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Resultados ágiles y asertivos</div>
              <div class="price">
                Tiempo récord <span class="duration">y mínima pérdida de recursos</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Entrega de soluciones de calidad</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Enfoque en resultados medibles</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Seguimiento en tiempo real</span
                    >
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#Footer" class="button btn-theme-1">Conocer más</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Ejecución técnica especializada</div>
              <div class="price">
                Sin improvisación <span class="duration">alianzas con especialistas</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Conocimiento técnico comprobado</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Alianzas estratégicas activas</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Experiencia en sectores exigentes</span
                    >
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#Footer" class="button btn-theme-1">Conocer más</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Conocimiento nacional e internacional</div>
              <div class="price">
                Metodología global <span class="duration">a la vanguardia</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Experiencia en LATAM y fuera de la región</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Nuevas prácticas y tecnología</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Soluciones a la medida de cada institución</span
                    >
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#Footer" class="button btn-theme-1">Conocer más</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
