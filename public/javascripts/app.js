var make$Element = function(options) {
  // var $tag = $('<p class="dog"></p>');
  var $tag;
  if (options == null) {
    // console.log(options);
    $tag = $('<div>');
  } else {
    // console.log(options);
    var tagName = options.tagName;
    var className = options.className;
    var idName = options.id;
    $tag = $('<' + tagName + '>');
    $tag.addClass(className);
    $tag.attr( 'id', idName );
  }
  //console.log($tag);
  return $tag;
};

var Model = function(options) {

};

Model.prototype.options = {};

Model.prototype.get = function() {

};