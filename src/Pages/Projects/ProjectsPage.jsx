import PageTemplate from "../../components/PageTemplate/PageTemplate";

export default function ProjectsPage() {
  return (
    <PageTemplate
      topContent={
        <h1>Projetos</h1>
      }
      specialFooter={null}
      bottomContent={
        <div>
          <p>Aqui podes listar os teus projetos, cards, links, etc.</p>
        </div>
      }
    />
  );
}