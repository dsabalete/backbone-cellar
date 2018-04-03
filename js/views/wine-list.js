define(
    ['jquery', 'lodash', 'utils/tpl' , 'backbone'],
    function($, _, tpl, Backbone) {

    WineListView = Backbone.View.extend({
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

    WineListItemView = Backbone.View.extend({
        tagName: 'li',

        initialize: () => {
            this.template = _.template( tpl.get('wine-list-item') )
            this.model.bind( 'change', this.render(), this)
            this.model.bind( 'destroy', this.close(), this)
        },

        render: () => {
            this.$el.html( this.template( this.model.toJSON()))
            return this.el
        }
    })

    return WineListView
})