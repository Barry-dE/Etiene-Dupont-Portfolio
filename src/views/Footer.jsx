import footerImage from "/footer.jpg";
import maskImg from "/Mask.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__links">
          <li className="footer__link">
            <a href="#" className="footer__link__item">
              Phone
            </a>
          </li>
          <li className="footer__link">
            <a href="#" className="footer__link__item">
              Email
            </a>
          </li>
          <li className="footer__link">
            <a href="#" className="footer__link__item">
              Instagram
            </a>
          </li>
        </ul>
        <div className="footer__policy">
          <p className="footer__policy__copyright">© 2024</p>
          <div className="footer__policy__privacy">
            <p>Terms</p>
          </div>
        </div>
        <div className="footer__mask">
          <figure className="footer__mask__media">
            <img
              src={maskImg}
              alt="An image of a diamond"
              className="footer__mask__media__image"
            />
          </figure>
        </div>
        <div className="footer__title">
          <p className="footer__title__text">Étienne</p>
          <figure className="footer__title__media">
            <img
              src={footerImage}
              alt="an image of Étienne Dupont, a French photographer "
              className="footer__title__media__image"
              width={300}
            />
          </figure>
          <p className="footer__title__text">Dupont</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// © 2024 Étienne Dupont Photography. All Rights Reserved. | Privacy Policy | Terms
