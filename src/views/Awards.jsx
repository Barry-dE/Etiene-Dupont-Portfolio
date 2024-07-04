import { useEffect } from "react";
import gsap from "gsap";

export default function Awards() {
  const awardsTextData = {
    title: "Awards & Recognitions",
    columns: ["Awards", "Category", "Year"],
    awards: [
      {
        award: "Prix de la Photographie Paris (PX3)",
        category: 'Silver Award in Fine Art/Abstract for "Mystic Patterns"',
        year: 2016,
      },
      {
        award: "World Press Photo Award",
        category: 'Contemporary Issues for the series "Faces of Change."',
        year: 2017,
      },
      {
        award: "Leica Oskar Barnack Award",
        category: 'Winner for the series "Life in Motion"',
        year: 2018,
      },
      {
        award: "Sony World Photography Awards",
        category: 'Photographer of the Year for "Timeless Moments"',
        year: 2019,
      },
      {
        award: "LensCulture Exposure Awards",
        category: 'Juror’s Pick for "Fragments of Time"',
        year: 2021,
      },
      {
        award: "Pulitzer Prize for Photography",
        category: 'Finalist for "In the Face of Adversity"',
        year: 2022,
      },
      {
        award: "Magnum Photography Awards",
        category: 'Winner in Fine Art for "Impressions of Reality"',
        year: 2022,
      },
      {
        award: "Hasselblad Masters Award",
        category: 'Documentary Photography for "The Forgotten Faces"',
        year: 2022,
      },
    ],
  };
  useEffect(() => {
    gsap.from(".awards__divider", {});
  }, []);
  return (
    <section className="awards" aria-labelledby="awards-title">
      <div className="awards__wrapper">
        <header className="awards__header">
          <h2 id="awards-title" className="awards__title">
            {awardsTextData.title}
          </h2>
        </header>
        <div className="awards__content">
          <table className="awards__table">
            <thead className="awards__table__head">
              <tr className="awards__content__row awards__content__row--nav">
                {awardsTextData.columns.map((col, index) => (
                  <th key={index} className="awards__column" scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="awards__table__body">
              {awardsTextData.awards.map((award, index) => (
                <>
                  <tr key={index} className="awards__divider"></tr>
                  <tr key={index} className="awards__row">
                    <td key={index} className="awards__column">
                      {award.award}
                    </td>
                    <td key={index} className="awards__column">
                      {award.category}
                    </td>
                    <td key={index} className="awards__column">
                      {award.year}
                    </td>
                  </tr>
                  <tr key={index} className="awards__divider"></tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
