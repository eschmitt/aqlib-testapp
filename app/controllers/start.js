var openInTabGroup = function() {
      Alloy.createController('tab_group').getView().open();
    }

  , open = function() {
      Alloy.createController('manual').getView().open();
    }

$.start_in_tab.addEventListener('click', openInTabGroup);
$.start.addEventListener('click', open);
