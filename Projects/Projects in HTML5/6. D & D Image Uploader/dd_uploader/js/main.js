$(function(){
	var picbox = $('#picbox'),
		back = $('.back', picbox);
		
		picbox.filedrop({
			paramname:'pic',
			maxfilesize: 2,
			maxfiles: 6,
			url: 'upload.php',
			
			uploadFinished: function(i,file,response){
				$.data(file).addClass('done');
				$('.uploaded').show();
			},
			error: function(err, file){
				switch(err){
					case 'BrowserNotSupported':
						showMessage('Your browser does not support HTML5 file uploads');
						break;
					case 'TooManyFiles':
						alert('You went over the max number of files');
						break;
					case 'FileTooLarge':
						alert(file.name+' is too big, please upload a smaller image');
						break;
					default:
						break;
				}
			},
			
			beforeEach: function(file){
				if(!file.type.match(/^image\//)){
					alert('Your file is not an image');
					return false;
				}
			},
			uploadStarted: function(i, file,len){
				createImage(file);
			},
			progressUpdated: function(i, file, progress){
				$.data(file).find('.progress').width(progress);
			}
		});
		
		var template = '<div class="preview">'+
							'<span class="imageHolder">'+
								'<span class="uploaded"></span>'+
								'<img />'+
							'</span>'+
							'<div class="progressHolder">'+
								'<div class="progress"></div>'+
							'</div>'+
						'</div>';	
		
		function createImage(file){
			var preview = $(template),
				image = $('img',preview);
				
			var reader = new FileReader();
			
			image.width = 100;
			image.height = 100;
			
			reader.onload = function(e){
				image.attr('src',e.target.result);
			};
			
			reader.readAsDataURL(file);
			
			back.hide();
			preview.appendTo(picbox);
			
			$.data(file,preview);
		}
		
		function showMessage(msg){
			back.html(msg);
		}
});