Congo.BreadcrumbView = Backbone.View.extend({
    initialize: function () {
        Congo.router.on("route:index", this.renderIndex, this);
        Congo.router.on("route:showDatabase", this.renderDatabase, this);
    },
    renderIndex: function () {
        this.$el.empty();
        $(this.el).html("<li><h3>DATABASES</h3></li>");
    },

    renderDatabase: function (db) {
        this.$el.empty();
        this.$el.append("<li><h3><a href='#' id='summary' >DATABASES</a><span class='divider'>/</span></a></h3></li>");
        this.$el.append("<li><h3>" + db + "</h3></li>");
        return this;
    },

    events: {
        "click #summary": "navIndex"
    },

    navIndex: function (ev) {
        ev.preventDefault();
        Congo.router.navigate("", true);
    }
});