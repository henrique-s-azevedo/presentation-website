import GenericTopPage from "../../components/GenericTopPage/GenericTopPage";

export default function ContactTopPage() {
  return (
    <GenericTopPage onScrollNext={() => navigate("/contact/content")}>
      <h1>Top Contact Page</h1>
      <p>Press Down or scroll</p>
    </GenericTopPage>
  );
}