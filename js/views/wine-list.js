window.WineListView = Backbone.View.extend({

    tagName: 'ul',
    
    initialize: () => {
        this.model.bind( 'reset', this.render, this)
        this.model.bind( 'add', this.appendNewWine, this)
    },
    
    render: () => {
        _.each( this.model.models, function( wine ) {
            this.appendNewWine( wine )
        }, this)
        return this.el
    },
    
    appendNewWine: ( wine ) => {
        this.$el.append(new WineListItemView({model:wine}).render())
    }

})


window.WineListItemView = Backbone.View.extend({

    tagName: 'li',

    initialize: () => {
        this.template = _.template( $('#wine-list-item-template').html() )
        this.model.bind( 'change', this.render(), this)
        this.model.bind( 'destroy', this.close(), this)
    },

    render: () => {
        this.$el.html( this.template( this.model.toJSON()))
        return this.el
    }

})