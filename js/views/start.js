window.StartView = Backbone.View.extend({

    initialize: () => {
        this.template = _.template( tpl.get('start') )
    },

    render: () => {
        this.$el.html( this.template() )
        return this.el
    }
})