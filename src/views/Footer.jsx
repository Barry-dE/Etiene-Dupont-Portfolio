import footerImage from "/footer.jpg";

function Footer() {
  const links = ["Phone", "Instagram", "Email"];
  const footerTexts = ["Étienne", "Dupont"];
  const policyTexts = ["© 2024", "Terms"];

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__links">
          {links.map((link, index) => (
            <li key={index} className="footer__link">
              <a href="#" className="footer__link__item">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__policy">
          <p className="footer__policy__copyright">{policyTexts[0]}</p>
          <div className="footer__policy__privacy">
            <p>{policyTexts[1]}</p>
          </div>
        </div>
        <div className="footer__title">
          <p className="footer__title__text">{footerTexts[0]}</p>
          <figure className="footer__title__media">
            <img
              src={footerImage}
              alt="an image of Étienne Dupont, a French photographer"
              className="footer__title__media__image"
              width={300}
            />
          </figure>
          <p className="footer__title__text">{footerTexts[1]}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
