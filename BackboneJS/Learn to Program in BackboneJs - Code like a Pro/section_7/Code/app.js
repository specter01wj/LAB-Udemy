// var timeline = new com.eduonix.collection.Timeline();
// timeline.fetch();
// var timelineView = new com.eduonix.view.TimelineView();
// profileView = new com.eduonix.view.ProfileView();
$(function(){
	var timelineView = new com.eduonix.view.TimelineView(),
	profileView = new com.eduonix.view.ProfileView(),
	searchModel = new com.eduonix.model.Search(),
	searchView = new com.eduonix.view.SearchView({model: searchModel}),
	appRouter = new com.eduonix.router.AppRouter({searchModel: searchModel});
	Backbone.history.start();
});
