/*jshint ignore:start*/
require.config({
    'scalejs': {
        'extensions': [
            'scalejs.mvvm',
            'scalejs.statechart-scion'
        ]
    },
    'map': {
        '*': {
            'sandbox': 'scalejs.sandbox',
            'bindings': 'scalejs.mvvm.bindings',
            'views': 'scalejs.mvvm.views'
        }
    },
    'shim': {},
    'paths': {},
    'packages': []
});
/*jshint ignore:end*/
