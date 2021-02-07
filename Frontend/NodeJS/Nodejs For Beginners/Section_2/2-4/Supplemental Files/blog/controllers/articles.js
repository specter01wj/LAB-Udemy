var articles = [];

module.exports.create = function(req,res) {
	req.body.comments = [];
	articles.push(req.body);
	res.redirect('/articles');
};

module.exports.index = function(req,res) {
	res.json(articles);
}

/*
	a post is going to look like this:
	{
		title:"",
		body:"",
		author:"",
		comments:[]
	}

	a comment would like
	{
		name:"foo",
		text:"asdflkjdfskldfs"
	}
*/

//rendering an html form to let user create post
module.exports.new = function(req,res) {
	res.send("<form method='post' action='/articles'>\
				<input type='text' placeholder='title' name='title'/>\
				<input type='text' placeholder='author' name='author'/>\
				<textarea placeholder='post' name='body'></textarea>\
				<button type='submit'>Post!</button>\
			</form>");
};