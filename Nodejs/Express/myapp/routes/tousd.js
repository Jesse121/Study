var express = require('express');
var router = express.Router();

var rate = 6.4;

exports.toUSD = function(count){
    return count * rate;
}
