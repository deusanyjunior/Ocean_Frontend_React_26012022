import React from "react";
import ReactDOM from "react-dom";
import Calendario from "./components/Calendario/Calendario";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {Button, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Button variant="outline-success">Olá</Button>
    <p></p>
    <Spinner animation="grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <p></p>
    <Calendario />  
    <p></p>
    <Calendar calendarType="US" />
  </div>
  ,
  document.getElementById('root')
)