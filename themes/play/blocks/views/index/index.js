var srvPath = '<%=bi.service%>';
ctrl.startup = function() {
  var str = srvPath.split('/').reverse()[0];
  srvPath = srvPath.replace(str, '');

  var req = { };
  ctrl.sel('.news').each(function(){
    var news = this;
    req.url = srvPath + 'view/' + $(news).attr('ngID');
    __.api(req, function(data) {
      $(news).prepend(data.value.body);
    });
  });

  changePanelStatus();
};

function changePanelStatus() {
  $('.panel-heading').click(function(e) {
    $('.panel-heading').removeClass('active');
    if ($(this).find('a').hasClass('collapsed')) {
      $(this).toggleClass('active');
    }
  });
}
