import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBreadcrumb, IonButton, IonCardHeader, IonIcon, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';
import './App.css';
import mydata from './portaljobscrap.json';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import assert from 'assert';
import { type } from 'os';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <div>
  <div className="nav" id="mynav">
        <div className="f-b-40 d-flex">
          <a href="#" className='home'>PortalJob</a>
          <h5 className='home2'>Job Lists</h5>
        </div>
      </div>
      <div className="bodycontent">
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[1].Title}</h3> 
                <h4>Company : {mydata[1].Company}</h4> 
                <h5>Type : {mydata[1].Type}</h5>
                <p>Desc : {mydata[1].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[2].Title}</h3> 
                <h4>Company : {mydata[2].Company}</h4> 
                <h5>Type : {mydata[2].Type}</h5>
                <p>Desc : {mydata[2].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[4].Title}</h3> 
                <h4>Company : {mydata[4].Company}</h4> 
                <h5>Type : {mydata[4].Type}</h5>
                <p>Desc : {mydata[4].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[5].Title}</h3> 
                <h4>Company : {mydata[5].Company}</h4> 
                <h5>Type : {mydata[5].Type}</h5>
                <p>Desc : {mydata[5].Info}</p>
              </div>
        </div>
        </div>

        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[6].Title}</h3> 
                <h4>Company : {mydata[6].Company}</h4> 
                <h5>Type : {mydata[6].Type}</h5>
                <p>Desc : {mydata[6].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[7].Title}</h3> 
                <h4>Company : {mydata[7].Company}</h4> 
                <h5>Type : {mydata[7].Type}</h5>
                <p>Desc : {mydata[7].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[8].Title}</h3> 
                <h4>Company : {mydata[8].Company}</h4> 
                <h5>Type : {mydata[8].Type}</h5>
                <p>Desc : {mydata[8].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[10].Title}</h3> 
                <h4>Company : {mydata[10].Company}</h4> 
                <h5>Type : {mydata[10].Type}</h5>
                <p>Desc : {mydata[10].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[11].Title}</h3> 
                <h4>Company : {mydata[11].Company}</h4> 
                <h5>Type : {mydata[11].Type}</h5>
                <p>Desc : {mydata[11].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[12].Title}</h3> 
                <h4>Company : {mydata[12].Company}</h4> 
                <h5>Type : {mydata[12].Type}</h5>
                <p>Desc : {mydata[12].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[13].Title}</h3> 
                <h4>Company : {mydata[13].Company}</h4> 
                <h5>Type : {mydata[13].Type}</h5>
                <p>Desc : {mydata[13].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[14].Title}</h3> 
                <h4>Company : {mydata[14].Company}</h4> 
                <h5>Type : {mydata[14].Type}</h5>
                <p>Desc : {mydata[14].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[15].Title}</h3> 
                <h4>Company : {mydata[15].Company}</h4> 
                <h5>Type : {mydata[15].Type}</h5>
                <p>Desc : {mydata[15].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[16].Title}</h3> 
                <h4>Company : {mydata[16].Company}</h4> 
                <h5>Type : {mydata[16].Type}</h5>
                <p>Desc : {mydata[16].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[16].Title}</h3> 
                <h4>Company : {mydata[16].Company}</h4> 
                <h5>Type : {mydata[16].Type}</h5>
                <p>Desc : {mydata[16].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[17].Title}</h3> 
                <h4>Company : {mydata[17].Company}</h4> 
                <h5>Type : {mydata[17].Type}</h5>
                <p>Desc : {mydata[17].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[18].Title}</h3> 
                <h4>Company : {mydata[18].Company}</h4> 
                <h5>Type : {mydata[18].Type}</h5>
                <p>Desc : {mydata[18].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[19].Title}</h3> 
                <h4>Company : {mydata[19].Company}</h4> 
                <h5>Type : {mydata[19].Type}</h5>
                <p>Desc : {mydata[19].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[20].Title}</h3> 
                <h4>Company : {mydata[20].Company}</h4> 
                <h5>Type : {mydata[20].Type}</h5>
                <p>Desc : {mydata[20].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[21].Title}</h3> 
                <h4>Company : {mydata[21].Company}</h4> 
                <h5>Type : {mydata[21].Type}</h5>
                <p>Desc : {mydata[21].Info}</p>
              </div>
        </div>
        </div>
        <div className="content">
        <div className="logo">
        <h3>Company <br /> Logo</h3>
        </div>
        <div className="inputContainer">
              <div className="inputText">               
                <h3>Poste : {mydata[22].Title}</h3> 
                <h4>Company : {mydata[22].Company}</h4> 
                <h5>Type : {mydata[22].Type}</h5>
                <p>Desc : {mydata[22].Info}</p>
              </div>
        </div>
        </div>

        </div>
        <footer>
        <div className="footer-gray">
          <div className="footer-custom">
            <h3>2021-2022</h3>
            <p>@Created By webscrapping websites </p>
          </div>
        </div>
      </footer>
      </div>
  </IonApp>
);

export default App;
