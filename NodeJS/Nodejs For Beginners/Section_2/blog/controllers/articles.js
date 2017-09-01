var articles = [];

module.exports.create = function(req, res){
	req.body.comments = [];
	articles.push(req.body);
	res.redirect('/articles');
	//console.log(req.body);
	//res.json(req.body);
};

module.exports.index = function(req, res){
	res.json(articles);
};

module.exports.new = function(req, res){
	res.send("<form method='post' action='/articles'>\
		<input type='text' placeholder='name' name='title'/>\
		<input type='text' placeholder='author' name='author'/>\
		<textarea placeholder='post' name='body'></textarea>\
		<button type='submit'>POST!</button>\
		</form>");
};