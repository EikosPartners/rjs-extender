'use strict';

var extender = require('../extender.js');

var filePath = './test/rjsconfig.js',
    additionalConfig = {
        scalejs: {
            extensions: [
                'scalejs.mvvm',
                'scalejs.statechart-scion'
            ]
        },
        map: {
            '*': {
                sandbox: 'scalejs.sandbox',
                bindings: 'scalejs.mvvm.bindings',
                views: 'scalejs.mvvm.views'
            }
        }
    };

extender(filePath, additionalConfig);
