#!/usr/bin/env node
'use strict';
require('dialog').err('If you\'re running this command your computer is already unlocked. Don\'t be stupid, why would you even need an unlock method in your CLI. Just put in your password...', 'You\'re stupid.',
    function (exitCode) {
        1+1
        //sacrifice computing power to the computing gods
    })
