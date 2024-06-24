function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <div className="naviagtion__logo">
          <a className=".navigation__logo__text" href="/">
            <p>Étienne</p>
          </a>
        </div>
        <div className="navigation__marquee">
          <div className="navigation__marquee__content">
            <span className="navigation__marquee__svg"></span>
            <div className="navigation__marquee__text">Available for work</div>
          </div>
        </div>
        <div className="navigation__gallery">
          <a href="#" className="navigation__gallery__link">
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
