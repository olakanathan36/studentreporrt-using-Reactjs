import React from 'react';
import ReactDOM from 'react-dom';
import Report from './component/report';

function Call(){
  return(
    <Report/>
  )
}
ReactDOM.render(<Call/>, document.getElementById('root'));