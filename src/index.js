﻿
require('./lib');

import 'bootstrap/dist/css/bootstrap.min.css';

import '../wwwroot/CSS/site.css';

import ES6Lib from './es6codelib';

document.getElementById("one").innerHTML = getText();

$('#two').html('What is the case—a fact—is the existence of atomic facts.');

let myES6Object = new ES6Lib();

$('#three').html(myES6Object.getData());