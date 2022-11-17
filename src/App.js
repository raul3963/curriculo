import './App.css';
import perfil from './Styles/Perfil.jpg'

function App() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="App">
      <div id="topInfo">
        <div id="topIcon">
          <img id="perfil" src={perfil} alt="Foto de Raul Schmitz"></img>
        </div>
        <div id='topRightInfo'>
          <p className='infotop'><b>Raul Schmitz</b></p>
          <p className='infotop'><b>Celular:</b> 47 99240-5669</p>
          <p className='infotop'><b>Email:</b> raulsc396@gmail.com</p>
        </div>
      </div>
      <div id="body">
        <div id="leftInfo">
          <h2>Formação Profissional</h2>
          <p>Estou atualmente em busca de meu primeiro imprego nas areas de tecnologia. Mais especificamente, eu busco trabalhar com denvolvimento de sistemas</p>
          <h2>Formação Academica</h2>
          <p>Atualmente estudante do ensino médio, 1° série em 2022.</p>
          <h2>Idiomas Conhecidos</h2>
          <span className='idiomas'>
            <b>Portugues</b><p>Nativo</p>
          </span>
          <span className='idiomas'>
            <b>Ingles</b><p>Fluente</p>
          </span>
        </div>
        <div id="centerInfo">
          <h2>Conhecimentos e Qualidades</h2>
          <h4>Linguagens de programação</h4>
          <li>ReactJS</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>Flutter</li>
          <li>Python basico</li>
          <br />
          <h4>Qualidades</h4>
          <li>Aprendizado rapido</li>
          <li>Boa logica de programação</li>
        </div>
        <div id="rightInfo">
          <h2>Meus Projetos</h2>
          <span id="rightSpan">
            <a href="#" onClick={() => openInNewTab("https://github.com/raul3963")}>Meu GitHub</a>
            <h4>Desenvolvido em Flutter</h4>
            <a href="#" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.flutter.seugasapp")}>Sua Gasolina</a>
            <a href="#" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.flutter.seufutebol")}>Seu Futebol</a>
          </span>
          <p style={{textAlign: "center"}}>Em meu GitHub possui de forma publica todas as minhas aulas de HTML e ReactJS e Flutter</p>
        </div>
      </div>
    </div>
  );
}

export default App;
