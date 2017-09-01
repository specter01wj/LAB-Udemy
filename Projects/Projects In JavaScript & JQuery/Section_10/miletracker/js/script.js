$(document).one('pageinit', function(){
	
	showRuns();
	
	$('#submitAdd').on('tap', addRun);
	$('#submitEdit').on('tap', editRun);
	$('#stats').on('tap', '#deleteLink', deleteRun);
	$('#stats').on('tap','#editLink', setCurrent);
	$('#clearRuns').on('tap', clearRun);
	
	function showRuns(){
		var runs = getRunsObj();
		
		if(runs != '' && runs != null){
			for(var i = 0; i < runs.length; i++){
				$('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date: </strong>' + runs[i]["date"] + '<br><strong>Distance: </strong>' + runs[i]["miles"] + 'mils<div class="controls"><a href="#edit" id="editLink" data-miles="' + runs[i]["miles"] + '" data-date="' + runs[i]["date"] + '">Edit</a> | <a href="#" id="deleteLink" data-miles="' + runs[i]["miles"] + '" data-date="' + runs[i]["date"] + '" onclick="return confirm(\'Are U sure?!\')">Delete</a></li>');
			}
			
			$('#home').bind('pageinit', function(){
				$('#stats').listview('refresh');
			});
		} else {
			$('#stats').html('<p>No logged runs!!!</p>');
		}
		
	}
	
	
	
	function addRun(){
		var miles = $('#addMiles').val();
		var date = $('#addDate').val();
		
		var run = {
			date: date,
			miles: parseFloat(miles)
		};
		
		var runs = getRunsObj();
		
		runs.push(run);
		alert('Run Added!');
		
		localStorage.setItem('runs', JSON.stringify(runs))
		
		window.location.href = "index.html"
		return false;
	}
	
	function editRun(){
		currentMiles = localStorage.getItem('currentMiles');
		currentDate = localStorage.getItem('currentDate');
		
		var runs = getRunsObj();
		
		for(var i = 0; i <  runs.length; i++){
			if(runs[i].miles == currentMiles && runs[i].date == currentDate){
				runs.splice(i,1);
			}
			localStorage.setItem('runs', JSON.stringify(runs))
		}
		
		var date = $('#editDate').val();
		var miles = $('#editMiles').val();
		
		var update_run = {
			date: date,
			miles: parseFloat(miles)
		};
		
		runs.push(update_run);
		alert('Run Updated!');
		
		localStorage.setItem('runs', JSON.stringify(runs))
		
		window.location.href = "index.html"
		return false;
	}
	
	function deleteRun(){
		localStorage.setItem('currentMiles', $(this).data('miles'));
		localStorage.setItem('currentDate', $(this).data('date'));
		
		currentMiles = localStorage.getItem('currentMiles');
		currentDate = localStorage.getItem('currentDate');
		
		var runs = getRunsObj();
		
		for(var i = 0; i <  runs.length; i++){
			if(runs[i].miles == currentMiles && runs[i].date == currentDate){
				runs.splice(i,1);
			}
			localStorage.setItem('runs', JSON.stringify(runs))
		}
		
		
		alert('Run Deleted!');
		
		window.location.href = "index.html"
		return false;
	}
	
	function clearRun(){
		localStorage.removeItem('runs');
		$('#stats').html('<p>No logged runs!!!</p>');
		
	}
	
	function getRunsObj(){
		var runsArr = new Array();
		var currentRuns = localStorage.getItem('runs');
		
		if(currentRuns != null){
			var runsArr = JSON.parse(currentRuns);
		}
		
		return runsArr.sort(function(a, b){
			return new Date(a.date) - new Date(b.date)
		});
	}
	
	function setCurrent(){
		localStorage.setItem('currentMiles', $(this).data('miles'));
		localStorage.setItem('currentDate', $(this).data('date'));
		
		$('#editMiles').val(localStorage.getItem('currentMiles'));
		$('#editDate').val(localStorage.getItem('currentDate'));
		
	}
	
});