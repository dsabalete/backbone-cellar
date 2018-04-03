Backbone.View.prototype.close = () => {
    console.log( 'Closing view ' + this )
    if ( this.beforeClose ) {
        this.beforeClose()
    }
    this.remove()
    this.unbind()
}