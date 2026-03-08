import PageTemplate from "../../components/PageTemplate/PageTemplate";

export default function ContactPage() {
  return (
    <PageTemplate
      topContent={
        <h1>Contacto</h1>
      }
      specialFooter={null}
      bottomContent={
        <div>
          <p>Links para redes sociais, email, GitHub, etc.</p>
        </div>
      }
    />
  );
}