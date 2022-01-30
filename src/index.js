import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
/*

 function greeting(props) {
     return (<h1 className="block">Hi! {props.name} </h1>)
 }


 function withHi(WrappedComponent) {
     return function (Companion) {
         return function (props) {
             return (
                 <React.Fragment>
                     <WrappedComponent {...props}/>
                     <Companion {...props}/>
                 </React.Fragment>
             );
         }
     }

 }

 function CompanionComponent(props) {
     return (<h1 className="inline">I'm your companion, {props.name}</h1>)
 }


 const Hi = withHi(greeting)(CompanionComponent);


 function App() {
     return (
         <div className="text-center text-white">
             <Hi name="Ricardo"/>
         </div>
     );
 }
*/
const root = document.getElementById('root');
ReactDOM.render(
    <App/>,
    root
);