$(function () {
  var methods = {


  }

  var init = function () {
    $(window).on('scroll', function () {
      methods.handleTabsFixed()
      methods.handleTabScroll()
    });
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