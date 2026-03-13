import "./Imagem.css";

export default function Imagem() {
  return (
    <section className="imagem-container">
      <img
        className="imagem"
        src="/images.jfif"
        width={500}
        height={300}
        alt="Caixa de CS"
      />
    </section>
  );
}