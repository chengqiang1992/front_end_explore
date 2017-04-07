import _ from 'lodash';
import css from './test.css';

var moment = require('moment');
console.log(moment().format());
console.log('test');

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
