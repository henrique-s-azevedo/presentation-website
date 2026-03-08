import PageTemplate from "../../components/PageTemplate/PageTemplate";

export default function PathPage() {
  return (
    <PageTemplate
      topContent={
        <h1>O meu percurso</h1>
      }
      specialFooter={null}
      bottomContent={
        <p>Aqui podes colocar a tua timeline, skills, etc.</p>
      }
    />
  );
}