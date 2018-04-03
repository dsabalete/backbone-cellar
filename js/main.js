Backbone.View.prototype.close = (listitem) => {
    console.log( 'Closing view ' + this )
    if ( this.beforeClose ) {
        this.beforeClose()
    }
    this.remove()
    this.unbind()
}

var AppRouter = Backbone.Router.extend({

    initialize: () => {
        $('#header').html(new HeaderView().render())
    },

    routes: {
        "": "list",
        "wines/new": "newWine",
        "wines/:id": "wineDetails"
    },

    list: () => {
        this.before(function () {
            this.showView('#content', new StartView())
        })
    },

    wineDetails: (id) => {
        this.before( () => {
            var wine = this.wineList.get(id)
            this.showView('#content', new WineView({
                model: wine
            }))
        })
    },
    newWine: () => {
        this.before(function () {
            this.showView('#content', new WineView({
                model: new Wine()
            }));
        });
    },
    
    showView: (selector, view) => {
        if (this.currentView) this.currentView.close()
        $(selector).html(view.render())
        this.currentView = view
        return view
    },

    before: (callback) => {
        if (this.wineList) {
            if (callback) callback.call(this)
        } else {
            this.wineList = new WineCollection()
            var self = this
            this.wineList.fetch({
                success: () => {
                    var winelist = new WineListView({
                        model: self.wineList
                    }).render()
                    $('#sidebar').html(winelist)
                    if (callback) callback.call(self)
                }
            })
        }
    }
})


tpl.loadTemplates(['header', 'wine-details', 'wine-list-item', 'start'], function () {
    app = new AppRouter()
    Backbone.history.start()
})