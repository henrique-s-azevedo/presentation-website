import PageTemplate from "../../components/PageTemplate/PageTemplate";

export default function AboutPage() {
  return (
    <PageTemplate
      topContent={
        <h1>Sobre mim</h1>
      }
      specialFooter={null}
      bottomContent={
        <p>Aqui podes colocar o conteúdo da segunda metade da página About.</p>
      }
    />
  );
}