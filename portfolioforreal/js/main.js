var s = skrollr.init();



$(document).ready(function() {
var menu = $('nav');

var watcher = scrollMonitor.create( menu );

watcher.lock();

watcher.stateChange(function() {
  $(menu).toggleClass('scrolled', this.isAboveViewport)
});


});