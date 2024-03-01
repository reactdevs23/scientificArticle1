import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  header,
  authors,
  affiliation,
  abstract,
  introduction,
  methodlogy,
  keyFindings,
  implications,
  conclusions,
  futureDirection,
  reference,
  contact,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        <div className={classes.headingContainer}>
          <h3
            className={classes.subHeading}
            style={{ "--color": header.subHeadingColor }}
          >
            {header.subHeading}
          </h3>
          <h1
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h1>
        </div>
        <div className={classes.wrapper}>
          <div
            className={[classes.row, classes.authorsAndaffiliation].join(" ")}
          >
            {authors && (
              <div
                className={[classes.box, classes.authors].join(" ")}
                style={{ "--border": authors.border, "--bg": authors.bg }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": authors.titleColor }}
                >
                  {authors.title}
                </h2>
                <p
                  className={classes.info}
                  style={{ "--color": authors.infoColor }}
                >
                  {authors.info}
                </p>
              </div>
            )}
            {affiliation && (
              <div
                className={[classes.box, classes.affiliation].join(" ")}
                style={{
                  "--border": affiliation.border,
                  "--bg": affiliation.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": affiliation.titleColor }}
                >
                  {affiliation.title}
                </h2>
                <p
                  className={classes.info}
                  style={{ "--color": affiliation.infoColor }}
                >
                  {affiliation.info}
                </p>
              </div>
            )}
          </div>
          <div className={classes.row}>
            {abstract && (
              <div
                className={[classes.box, classes.abstract].join(" ")}
                style={{ "--border": abstract.border, "--bg": abstract.bg }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": abstract.titleColor }}
                >
                  {abstract.title}
                </h2>
                <p
                  className={classes.info}
                  style={{ "--color": abstract.infoColor }}
                >
                  {abstract.info}
                </p>
              </div>
            )}
          </div>
          <div className={classes.row}>
            {introduction && (
              <div
                className={[classes.box, classes.introduction].join(" ")}
                style={{
                  "--border": introduction.border,
                  "--bg": introduction.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": introduction.titleColor }}
                >
                  {introduction.title}
                </h2>
                {introduction.data.map((el, i) => (
                  <p
                    className={classes.info}
                    style={{ "--color": introduction.infoColor }}
                    key={i}
                  >
                    <span className={classes.subTitle}>{el.subTitle}</span>
                    {el.info}
                  </p>
                ))}
              </div>
            )}
            {methodlogy && (
              <div
                className={[classes.box, classes.methodlogy].join(" ")}
                style={{
                  "--border": methodlogy.border,
                  "--bg": methodlogy.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": methodlogy.titleColor }}
                >
                  {methodlogy.title}
                </h2>
                {methodlogy.data.map((el, i) => (
                  <p
                    className={classes.info}
                    style={{ "--color": methodlogy.infoColor }}
                    key={i}
                  >
                    <span className={classes.subTitle}>{el.subTitle}</span>
                    {el.info}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={classes.rowWrapper}>
            <div className={classes.row}>
              {keyFindings && (
                <div
                  className={[
                    classes.box,
                    implications && classes.keyFindings,
                  ].join(" ")}
                  style={{
                    "--border": keyFindings.border,
                    "--bg": keyFindings.bg,
                  }}
                >
                  <h2
                    className={classes.title}
                    style={{ "--color": keyFindings.titleColor }}
                  >
                    {keyFindings.title}
                  </h2>
                  <div className={classes.findings}>
                    {keyFindings.findings.map((el, i) => (
                      <div className={classes.finding} key={i}>
                        <img src={el.img} alt="#" className={classes.img} />
                        <p
                          className={classes.info}
                          style={{ "--color": keyFindings.infoColor }}
                        >
                          {el.info}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>{" "}
            <div className={classes.row}>
              {implications && (
                <div
                  className={[
                    classes.box,
                    keyFindings && classes.implications,
                  ].join(" ")}
                  style={{
                    "--border": implications.border,
                    "--bg": implications.bg,
                  }}
                >
                  <h2
                    className={classes.title}
                    style={{ "--color": implications.titleColor }}
                  >
                    {implications.title}
                  </h2>
                  <div className={classes.allImplications}>
                    {implications.infos.map((info, i) => (
                      <div className={classes.implication} key={i}>
                        <h4
                          className={classes.id}
                          style={{
                            "--bg": implications.idBg,
                            "--color": implications.idColor,
                          }}
                        >
                          {i + 1}
                        </h4>
                        <p
                          className={classes.info}
                          style={{ "--color": implications.infoColor }}
                        >
                          {info}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={[
              classes.row,
              classes.conclusionsAndfutureDirection,
            ].join(" ")}
          >
            {conclusions && (
              <div
                className={[classes.box, classes.conclusions].join(" ")}
                style={{
                  "--border": conclusions.border,
                  "--bg": conclusions.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": conclusions.titleColor }}
                >
                  {conclusions.title}
                </h2>
                {conclusions.infos.map((el, i) => (
                  <p
                    className={classes.info}
                    style={{ "--color": conclusions.infoColor }}
                    key={i}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}
            {futureDirection && (
              <div
                className={[classes.box, classes.futureDirection].join(" ")}
                style={{
                  "--border": futureDirection.border,
                  "--bg": futureDirection.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": futureDirection.titleColor }}
                >
                  {futureDirection.title}
                </h2>
                {futureDirection.infos.map((el, i) => (
                  <p
                    className={classes.info}
                    style={{ "--color": futureDirection.infoColor }}
                    key={i}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={[classes.row, classes.referenceAndContact].join(" ")}>
            {reference && (
              <div
                className={[classes.box, contact && classes.reference].join(
                  " "
                )}
                style={{
                  "--border": reference.border,
                  "--bg": reference.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": reference.titleColor }}
                >
                  {reference.title}
                </h2>
                {reference.infos.map((el, i) => (
                  <p
                    className={classes.info}
                    style={{ "--color": reference.infoColor }}
                    key={i}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}
            {contact && (
              <div
                className={[classes.box, reference && classes.contact].join(
                  " "
                )}
                style={{
                  "--border": contact.border,
                  "--bg": contact.bg,
                }}
              >
                <h2
                  className={classes.title}
                  style={{ "--color": contact.titleColor }}
                >
                  {contact.title}
                </h2>

                <p
                  className={classes.info}
                  style={{ "--color": contact.infoColor }}
                >
                  {contact.info}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
