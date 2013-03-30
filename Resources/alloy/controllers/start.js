function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win"
    });
    $.addTopLevelView($.__views.win);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.win.add($.__views.__alloyId2);
    $.__views.start_in_tab = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        title: "start app in tabgroup",
        id: "start_in_tab"
    });
    $.__views.__alloyId2.add($.__views.start_in_tab);
    $.__views.start = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        top: "20dp",
        title: "start app",
        id: "start"
    });
    $.__views.__alloyId2.add($.__views.start);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var openInTabGroup = function() {
        Alloy.createController("tab_group").getView().open();
    }, open = function() {
        Alloy.createController("manual").getView().open();
    };
    $.start_in_tab.addEventListener("click", openInTabGroup);
    $.start.addEventListener("click", open);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;