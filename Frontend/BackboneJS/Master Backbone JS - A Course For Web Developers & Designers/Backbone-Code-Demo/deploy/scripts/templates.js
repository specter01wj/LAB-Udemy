this["JST"] = this["JST"] || {};

this["JST"]["templates/template-view.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Task for today is ' +
((__t = ( task )) == null ? '' : __t) +
'</h1>';

}
return __p
};