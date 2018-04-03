define(
    ['backbone'],
    function($) {

    Wine = Backbone.Model.extend({
        defaults: {
            "id": null,
            "name": "",
            "grapes": "",
            "country": "ES",
            "region": "Catalunya",
            "year": "",
            "description": "",
            "picture": ""
        },
        urlRoot: "wines/"
    })

    return Wine
})