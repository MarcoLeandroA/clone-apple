export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <span className="aviso">
          <p>* El apple Watch Ultra no esta disponible en Costa Rica.</p>
        </span>
        <div className="sections-links">
          <details open className="uno">
            <summary><b>Detalle</b><ion-icon name="add-outline"></ion-icon></summary>
            <ul>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV y Casa</li>
              <li>AirTag</li>
            </ul>
          </details>
          <details open className="dos">
            <summary>
              <b>Apple Wallet</b>
              <ion-icon name="add-outline"></ion-icon>
            </summary>
            <ul>
              <li>Apple Pay</li>
            </ul>
          </details>
          <details open className="tres">
            <summary>
              <b>Cuenta</b>
              <ion-icon name="add-outline"></ion-icon>
            </summary>
            <ul>
              <li>Administrar tu Apple ID</li>
              <li>iCloud.com</li>
            </ul>
          </details>
          <details open className="cuatro">
            <summary>
              <b>Entretenimiento</b>
              <ion-icon name="add-outline"></ion-icon>
            </summary>
            <ul>
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </details>
          <details open className="cinco">
            <summary>
              <b>Para la empresa</b>
              <ion-icon name="add-outline"></ion-icon>
            </summary>
            <ul>
              <li>Apple y la empresa</li>
            </ul>
          </details>
          <details open className="seis">
            <summary>
              <b>Valores de Apple</b>
              <ion-icon name="add-outline"></ion-icon>
            </summary>
            <ul>
              <li>Accesibilidad</li>
              <li>Medio Ambiente</li>
              <li>Privacidad</li>
            </ul>
          </details>
          <details open className="siete">
            <summary>
              <b>Acerca de Apple</b>
              <ion-icon name="add-outline"></ion-icon>
            </summary>
            <ul>
              <li>Newsroom</li>
              <li>Directivos de Apple</li>
              <li>Oportunidades laborales</li>
              <li>Inversionistas</li>
              <li>Ética y cumplimiento de políticas</li>
              <li>Eventos</li>
              <li>Contactar a Apple</li>
            </ul>
          </details>
        </div>
        <div>
          <div className="dist"><a href="#">Busca un distribuidor</a> cerca de ti.</div>
          <div className="idiomas">
            <p>Copyright © 2023 Apple Inc. Todos los derechos reservados.</p>
            <p>América Latina y el Caribe | English</p>
          </div><br />
          <span>Política de privacidad | Aviso legal | Mapa del sitio</span>
        </div>
      </div>
    </div>
  );
}