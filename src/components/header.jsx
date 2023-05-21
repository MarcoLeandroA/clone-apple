export function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#"><ion-icon name="logo-apple"></ion-icon></a>
          <button class="navbar-toggler bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-body-tertiary"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav d-flex align-items-start list-header">
              <li class="nav-item">
                <a class="nav-link " href="#">Mac</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">iPad</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">iPhone</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Watch</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">AirPods</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">TV y Casa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Entretenimiento</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sopporte</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Dónde Comprar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}