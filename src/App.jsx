import "./App.css";
import userImg from "./assets/image-victor.jpg";

function App() {
  return (
    <main>
      <div className="ImgContainer">
        <div className="ImgContainer-ImgBox">
          <img src={userImg} alt="victor crest" />
        </div>
      </div>
      <div className="TxtContainer">
        <h1 className="TxtContainer-UserName">
          victor crest <span>26</span>
        </h1>
        <p className="TxtContainer-Location">london</p>
        <div className="TxtContainer-Line"></div>
        <div className="TxtContainer-Status">
          <div className="TxtContainer-Status-ValBox">
            <strong>80k</strong>
            <p>follower</p>
          </div>
          <div className="TxtContainer-Status-ValBox">
            <strong>803k</strong>
            <p>likes</p>
          </div>
          <div className="TxtContainer-Status-ValBox">
            <strong>1.4k</strong>
            <p>photos</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
