import "./PageTemplate.css";

export default function PageTemplate({
  topContent,
  specialFooter,
  bottomContent
}) {
  return (
    <>
      <section className="section section-top">
        <div className="content-top">
          {topContent}
        </div>

        <div className="special-footer">
          {specialFooter}
        </div>
      </section>

      <section className="section section-bottom">
        <div className="content-bottom">
          {bottomContent}
        </div>
      </section>
    </>
  );
}