define(
    ['jquery', 'lodash', 'utils/tpl', 'backbone'],
    function($, _, tpl, Backbone) {

    StartView = Backbone.View.extend({

        initialize: () => {
            this.template = _.template( tpl.get('start') )
        },

        render: () => {
            this.$el.html( this.template() )
            return this.el
        }
    })

    return StartView
})