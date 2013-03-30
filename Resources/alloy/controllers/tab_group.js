function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabs = Ti.UI.createTabGroup({
        id: "tabs"
    });
    $.__views.manual_win = Alloy.createController("manual", {
        id: "manual_win"
    });
    $.__views.manual_tab = Ti.UI.createTab({
        window: $.__views.manual_win.getViewEx({
            recurse: !0
        }),
        title: "Manual",
        id: "manual_tab"
    });
    $.__views.tabs.addTab($.__views.manual_tab);
    $.__views.__alloyId4 = Ti.UI.createWindow({
        id: "__alloyId4"
    });
    $.__views.reports_tab = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        title: "Reports",
        id: "reports_tab"
    });
    $.__views.tabs.addTab($.__views.reports_tab);
    $.__views.__alloyId5 = Ti.UI.createWindow({
        id: "__alloyId5"
    });
    $.__views.consumers_tab = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Consumers",
        id: "consumers_tab"
    });
    $.__views.tabs.addTab($.__views.consumers_tab);
    $.__views.__alloyId6 = Ti.UI.createWindow({
        id: "__alloyId6"
    });
    $.__views.messages_tab = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Messages",
        id: "messages_tab"
    });
    $.__views.tabs.addTab($.__views.messages_tab);
    $.addTopLevelView($.__views.tabs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;