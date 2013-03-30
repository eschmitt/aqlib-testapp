function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.manual = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "manual"
    });
    $.addTopLevelView($.__views.manual);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId1"
    });
    $.__views.manual.add($.__views.__alloyId1);
    $.__views.scan = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        title: "Scan Vin",
        id: "scan"
    });
    $.__views.__alloyId1.add($.__views.scan);
    $.__views.vin = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "vin#",
        id: "vin"
    });
    $.__views.__alloyId1.add($.__views.vin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var aqlibscanner = require("com.looprecur.aqlibandroid"), setVin = function(vin) {
        $.vin.text = vin;
    }, launchScanner = function() {
        aqlibscanner.scanVin({
            success: function(e) {
                Ti.API.info("logging vin from success callback  ====================");
                Ti.API.info(e.vin);
                setVin(e.vin);
            },
            error: function(e) {
                Ti.API.info("logging error from error callback =====================");
            }
        });
    };
    $.scan.addEventListener("click", launchScanner);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;