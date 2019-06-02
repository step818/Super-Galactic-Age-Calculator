import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DOB } from './calculator';

$(document).ready(function() {

  console.log("atleast this");

  let i = 0;
  for(i= new Date().getFullYear(); i > 1800; i--)
  {
    $('#year').append($('<option> </option>').val(i).html(i));
  }
  let j = 0;
  for(j= 1; j <= 12; j++)
  {
    $('#month').append($('<option> </option>').val(j).html(j));
  }
  let k = 0;
  for(k= 1; k <= 31; k++)
  {
    $('#day').append($('<option> </option>').val(k).html(k));
  }

  $('#calc-form').submit(function(event) {
    event.preventDefault();  

    let year = $('#year').val();
    let month = $('#month').val();
    let day = $('#day').val();
    let sex = $('#sex').val();
    let d = new DOB(year, month, day, sex);

    console.log("herro");
    $('#mercury').text(d.mercuryAge(year, month,day, sex));
    $('#venus').text(d.venusAge(year, month, day, sex));
    $('#earth').text(d.earthAge(year, month, day, sex));
    $('#mars').text(d.marsAge(year, month, day, sex));
    $('#jupiter').text(d.jupiterAge(year, month,day, sex));
    $('#saturn').text(d.saturnAge(year, month, day, sex));

    $('#eaLE').text(d.LifeExp(year, month, day, sex));
  });
});