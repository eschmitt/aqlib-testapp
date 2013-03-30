var aqlibscanner = require('com.looprecur.aqlibandroid')

//+ setVin :: Vin -> Action(UI)
  , setVin = function(vin) { $.vin.text = vin; }

//+ launchScanner :: _ -> Action(UI)
  , launchScanner = function() {
      aqlibscanner.scanVin({
        success: function(e) {
          Ti.API.info('logging vin from success callback  ====================');
          Ti.API.info(e.vin);
          setVin(e.vin);
        },
        error: function(e) {
          Ti.API.info('logging error from error callback =====================');
        }
      });
    }

$.scan.addEventListener('click', launchScanner);
//$.manual.open();
