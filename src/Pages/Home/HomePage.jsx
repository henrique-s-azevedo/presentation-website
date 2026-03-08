import PageTemplate from "../../components/PageTemplate/PageTemplate";

export default function HomePage() {
  return (
    <PageTemplate
      topContent={
        <h1>Bem-vindo ao meu portfólio</h1>
      }
      specialFooter={
        <button className="scroll-down">↓</button>
      }
      bottomContent={
        <p>Conteúdo da segunda metade da Home</p>
      }
    />
  );
}