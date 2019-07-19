$(function () {
  var methods = {
    handleClock: function () {

  }

  var init = function () {
    $('.att-btn').on('click', methods.handleClock);
  }

  var beforeunload = function () {
    $(window).on('beforeunload', function () {
      $(window).scrollTop(0);
      location.reload(true);
    });
  }

  init()
  beforeunload()
});