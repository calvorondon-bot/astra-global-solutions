function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-lg-2 gy-5 gx-5">
          <div class="text-body col">
            <h2 class="fw-bold">El Modelo de Ejecución Astra 360°</h2>
            <p class="Description mt-2">
              Cuatro etapas con responsabilidad unificada, de principio a fin.
            </p>
          </div>
          <div class="content col">
            <div class="row row-cols-1 row-cols-md-2 gy-4 gx-4">
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <i class="bi bi-search" style="font-size: 1.8rem;"></i>
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">1. Diagnóstico</div>
                  <div class="Description">Levantamos la necesidad y diseñamos la hoja de ruta.</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <i class="bi bi-diagram-3" style="font-size: 1.8rem;"></i>
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">2. Articulación</div>
                  <div class="Description">Coordinamos a los especialistas idóneos de nuestra red.</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <i class="bi bi-clipboard-data" style="font-size: 1.8rem;"></i>
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">3. Gestión (PMO)</div>
                  <div class="Description">Metodologías ágiles y seguimiento digitalizado en tiempo real.</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <i class="bi bi-trophy" style="font-size: 1.8rem;"></i>
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">4. Entrega 360°</div>
                  <div class="Description">Resultados medibles y responsabilidad unificada.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  Metrics.appendChild(Container);
}
Metrics();
