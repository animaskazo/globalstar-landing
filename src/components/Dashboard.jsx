import React from 'react';

export default function Dashboard() {
  return (
    <section className="sec-w" id="dashboard">
      <div className="split rev">
        <div className="reveal">
          <div className="ey ey-v">Dashboard en tiempo real</div>
          <h2 className="h2-l ls-tight">Todo tu día<br />en <span className="hi">una pantalla.</span></h2>
          <p className="body-l" style={{ marginTop: '14px' }}>Monitorea en tiempo real cada pedido desde que retiramos por la
            mañana hasta la última entrega de la tarde. Ve qué ya llegó, qué va en camino y qué necesita atención.</p>
          <div className="blist-l">
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Vista en vivo de todos tus envíos del día</h4>
                <p>Tabla actualizada en tiempo real con el estado de cada pedido: retirado, en ruta, llegando, entregado o
                  con incidencia.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>KPIs de la jornada same day</h4>
                <p>Cuántos fueron retirados esta mañana, cuántos ya se entregaron, cuántos van en camino y cuál es el ETA
                  del último conductor activo.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Gestión de incidencias al instante</h4>
                <p>Si un cliente no estaba, aparece marcado con la razón. Reactiva la entrega para el día siguiente o
                  coordina directamente desde el panel.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Historial por día descargable</h4>
                <p>Al cierre de cada jornada, descarga el reporte del día en CSV. Cuántos salieron, cuántos llegaron,
                  cuántos fallaron y por qué.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal d1">
          <div className="dash">
            <div className="dash-hdr">
              <span className="dash-title">Panel de Hoy · GlobalStar</span>
              <span className="dash-period">Lunes 18 Nov · En curso</span>
            </div>
            <div className="dash-kpis">
              <div className="kpi">
                <div className="kpi-n gn">98%</div>
                <div className="kpi-l">Tasa same day</div>
              </div>
              <div className="kpi">
                <div className="kpi-n">247</div>
                <div className="kpi-l">Retiros de hoy</div>
              </div>
              <div className="kpi">
                <div className="kpi-n or">4</div>
                <div className="kpi-l">Pendientes</div>
              </div>
              <div className="kpi">
                <div className="kpi-n">14h</div>
                <div className="kpi-l">Última entrega</div>
              </div>
            </div>
            <div className="dash-rows">
              <div className="dr">
                <span className="dr-id">GS-08471</span>
                <span className="dr-dest">Ana García · Ñuñoa</span>
                <span className="dr-s st-run">En camino</span>
                <span className="dr-t">~15:00</span>
              </div>
              <div className="dr">
                <span className="dr-id">GS-08468</span>
                <span className="dr-dest">Carlos López · Las Condes</span>
                <span className="dr-s st-ok">Entregado</span>
                <span className="dr-t">11:42</span>
              </div>
              <div className="dr">
                <span className="dr-id">GS-08465</span>
                <span className="dr-dest">María Soto · Maipú</span>
                <span className="dr-s st-ok">Entregado</span>
                <span className="dr-t">13:15</span>
              </div>
              <div className="dr">
                <span className="dr-id">GS-08460</span>
                <span className="dr-dest">Juan Pérez · Pudahuel</span>
                <span className="dr-s st-fail">Ausente</span>
                <span className="dr-t">12:30</span>
              </div>
              <div className="dr">
                <span className="dr-id">GS-08458</span>
                <span className="dr-dest">Rosa Vargas · Vitacura</span>
                <span className="dr-s st-pick">Retirado AM</span>
                <span className="dr-t">~16:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
