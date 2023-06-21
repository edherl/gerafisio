import { Link } from "react-router-dom";

function Header() {
  return (
      <header>
        <div>
          <Link to="/">
            <a className="gerafisio"><span>✦</span> GERAFISIO</a>
          </Link>
        </div>
        <div role="button" aria-label="Redes Sociais">
          <a
            href="https://www.instagram.com/gera.fisio/"
            target="_blank"
            aria-label="Instagram"
            className="links"
          >
            Instagram
          </a>
          <a
            href=" mailto:gerafisio@uepg.br"
            target="_blank"
            aria-label="Email"
            className="links"
          >
            Email
          </a>
        </div>
      </header>
  );
}

export default Header;
