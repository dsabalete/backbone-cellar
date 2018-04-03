// Set the require.js configuration for your application.
require.config({
    shim: {
        'backbone': {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        }
    },
    
    // Initialize the application with the main application file
    deps: ['main'],

    baseUrl: 'js',

    paths: {
        //Libraries
        jquery: "lib/jquery-3.3.1.min",
        lodash: "lib/lodash.core.min",
        backbone: "lib/backbone.min"
    },
    
})