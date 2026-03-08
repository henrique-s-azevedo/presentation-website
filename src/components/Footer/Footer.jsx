import "./Footer.css";

export default function Footer() {
  return (
    <footer className="global-footer">
      <p>© {new Date().getFullYear()} Henrique — Todos os direitos reservados</p>
    </footer>
  );
}