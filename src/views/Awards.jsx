import React from "react";

export default function Awards() {
  const awardsTextData = {
    title: "Awards & Recognitions",

    awards: [
      {
        award: "Prix de la Photographie Paris (PX3)",
        year: 2016,
      },
      {
        award: "World Press Photo Award",
        year: 2017,
      },
      {
        award: "Leica Oskar Barnack Award",
        year: 2018,
      },
      {
        award: "Sony World Photography Awards",
        year: 2019,
      },
      {
        award: "LensCulture Exposure Awards",
        year: 2021,
      },
      {
        award: "Pulitzer Prize for Photography",
        year: 2022,
      },
      {
        award: "Magnum Photography Awards",
        year: 2022,
      },
      {
        award: "Hasselblad Masters Award",
        year: 2022,
      },
    ],
  };

  return (
    <section className="awards" aria-labelledby="awards-title">
      <div className="awards__wrapper">
        <div className="awards__content" role="table">
          <header className="awards__header">
            <h2 id="awards-title" className="awards__title">
              {awardsTextData.title}
            </h2>
          </header>
          <div className="awards__content__content" role="row">
            <div className="awards__table">
              <div className="awards__table__body">
                {awardsTextData.awards.map((award, index) => (
                  <React.Fragment key={index}>
                    <div className="awards__row" role="row">
                      <p className="awards__column" data-animation="title">
                        {award.award}
                      </p>
                      <p className="awards__column" data-animation="title">
                        {award.year}
                      </p>
                    </div>
                    <div className="awards__divider"></div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
