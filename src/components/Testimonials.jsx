import React from 'react';

export default function Testimonials() {
  return (
    <section className="sec-d">
      <div className="sec-header reveal">
        <div className="ey ey-w">Testimonios</div>
        <h2 className="h2-d ls-tight" style={{ textAlign: 'center' }}>Tiendas que ya<br /><span className="grad2">entregan el mismo día.</span></h2>
      </div>
      <div className="tgrid">
        <div className="tc reveal">
          <div className="tc-stars">★★★★★</div>
          <p className="tc-q">"Implementé same day el mes pasado y mis reseñas de Google subieron de 4.1 a 4.8 en 3 semanas.
            Los clientes valoran muchísimo que el pedido llegue el mismo día en que compraron."</p>
          <div className="tc-author">
            <div className="tc-ava" style={{ background: 'linear-gradient(135deg,#6d28d9,#1d4ed8)' }}>CA</div>
            <div>
              <div className="tc-name">Camila Astudillo</div>
              <div className="tc-role">Dueña · Tienda de ropa · Falabella Seller</div>
            </div>
          </div>
        </div>
        <div className="tc reveal d1">
          <div className="tc-stars">★★★★★</div>
          <p className="tc-q">"La diferenciación es brutal. Mis competidores entregan en 3 días y yo entrego el mismo día. Mis
            clientes lo comparten en redes sociales. GlobalStar se convirtió en parte del marketing."</p>
          <div className="tc-author">
            <div className="tc-ava" style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)' }}>MP</div>
            <div>
              <div className="tc-name">Matías Pereira</div>
              <div className="tc-role">Fundador · Ecommerce de suplementos · Ripley</div>
            </div>
          </div>
        </div>
        <div className="tc reveal d2">
          <div className="tc-stars">★★★★★</div>
          <p className="tc-q">"La rutina es perfecta: etiquetas listas la noche anterior, conductor llega a las 9 AM, todo
            cargado en 20 minutos, y a las 3 PM mis clientes ya tienen sus pedidos. Mágico."</p>
          <div className="tc-author">
            <div className="tc-ava" style={{ background: 'linear-gradient(135deg,#059669,#0891b2)' }}>KM</div>
            <div>
              <div className="tc-name">Karla Medina</div>
              <div className="tc-role">Operaciones · Tienda de calzado · 1.200 envíos/mes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
