import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import arrows from './arrows.svg';


console.log(arrows);

ReactDOM.render(<MainContainer />, document.getElementById('root'));



function MainContainer(){
    return <div className="maincontainer"> <Container/> <MessageForm/> </div>
}

//MESSAGE

function Container(){
 return  <div className="container"> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/></div>
}

function Sender(){
    return <div className="conversation sender"><p className="write">{"Oue a quel heure? a quel endrois? avec qui?"}</p></div>;
}

function Receiver(){
    return <div className="conversation receiver"><p className="write">{"hello les gars on boit un coup? oue avec Jean a Bruxelles vers 20h00  "}</p> </div>;
}

function Hour(){
    return <p className="hour">{"53 min ago"}</p>
}



// MESSAGE BOX

function MessageForm(){
    return <form className="messageForm"> <input className="text" /> <button className="arrows" ><i className="fa fa-arrow-circle-up"></i></button> </form>
}

