import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import HomePage from "./Container/HomePage";



function App() {
  return (
      <div className={"App"}>
          <div className={"container"}>
              <HomePage></HomePage>
          </div>
        {/*<RssToJson></RssToJson>*/}

      </div>

  );
}

export default App;
