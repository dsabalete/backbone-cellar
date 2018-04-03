define(
    ['jquery', 'lodash', 'utils/tpl', 'backbone'],
    function($, _, tpl, Backbone) {

    WineView = Backbone.View.extend({

        initialize: () => {
            this.template = _.template( tpl.get('wine-details') )
            this.model.bind( 'change', this.render, this)
        },
        
        render: () => {
            this.$el.html( this.template(this.model.toJSON()))
            return this.el;
        },
        
        events: {
            'click .save': 'saveWine',
            'click .delete': 'deleteWine',
        },
        
        saveWine: () => {
            this.model.set({
                name: $('#name').val(),
                grapes: $('#grapes').val(),
                country: $('#country').val(),
                region: $('#region').val(),
                year: $('#year').val(),
                description: $('#description').val()
            })
            if ( this.model.isNew() ) {
                var self = this
                app.wineList.create( this.model, {
                    success: () => {
                        app.navigate( 'wines/' + self.model.id, false)
                    }
                })
            } else {
                this.model.save()
            }
            return false
        },
        
        deleteWine: () => {
            this.model.destroy({
                success: () => {
                    alert('Wine was deleted successfully')
                    window.history.back()
                }
            })
            return false
        }

    })

    return WineView
})