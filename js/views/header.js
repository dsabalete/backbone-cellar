window.HeaderView = Backbone.View.extend({

    initialize: () => {
        this.template = _.template( tpl.get('header') )
    },

    render: () => {
        this.$el.html( this.template() )
        return this.el;
    },

    events: {
        "click .new" : "newWine"
    },

    newWine: () => {
        app.navigate('wines/new', true)
        return false
    }
    
})