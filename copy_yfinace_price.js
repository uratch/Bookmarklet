javascript:(
async function(){
  var target=document.getElementById('tbotyPortfolioList');
  var childNodes = target.childNodes;
  var num_skip = 0;
  var values = new Array();

  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].tagName == 'TR' && i > num_skip + 1) {
      var id_name = 'trPortfolioListRow'+(i - num_skip);

      if (toString(childNodes[i].getAttribute('id')) == toString(id_name)) {
        var lines = childNodes[i].childNodes;
        var k = 0;
        for (var j = 0; j < lines.length; j++) {
          if (lines[j].tagName == 'TD') {
            k = k + 1;
            if (k == 6) {
              var child = lines[j].childNodes;
              for (var l = 0; l < child.length; l++) {
                if (child[l].tagName == 'STRONG') {
                    values.push(child[l].textContent);
                }
              }
            }
          }
        }
      }
    }
  }

  var value = '';
  for (var i = 0; i < values.length; i++) {
    value = value + values[i] + "\n";
  }

  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = value;
  var bodyElm = document.getElementsByTagName("body")[0];
  bodyElm.appendChild(copyFrom);
  copyFrom.select();
  var retVal = document.execCommand('copy');
}
)();
