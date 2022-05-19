import '../WIP/WorkInProgress.scss';

export default function WIP() {
  return (
    <div className="container">
      <div className="container__wip">
        <h1 className="title __typing">Work in Progress...</h1>
        <p className="description">
          Hey! O novo portfólio está em construção e em alguns dias ele estará
          no ar novamente. Caso queira, pode entrar em contato comigo pelo link
          abaixo para conversarmos melhor. &#128578; &#128075;
        </p>
        <a
          href="https://wa.me/5511954409942"
          target="_blank"
          className="btn__contact"
          rel="noreferrer"
        >
          Vamos conversar?
        </a>
      </div>
    </div>
  );
}
