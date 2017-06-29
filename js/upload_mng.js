

$(document).ready(function() {

	
	var baseUrl = 'http://10.1.234.150:29800/chanknow/api/web/';
	// var baseUrl = 'http://172.18.7.37/yd_repository/api/web/';
	var $list=$("#thelist_mng");   //这几个初始化全局的百度文档上没说明，好蛋疼。  
	var $toUpload =$("#ctlBtn_mng");   //开始上传

	var uploader = WebUploader.create({
		// 是否自动上传
		auto: false, 

		// swf文件路径
		swf: '../common/upload/Uploader.swf',

		// 文件接收服务端。
		// server: 'http://webuploader.duapp.com/server/fileupload.php',
		// server: baseUrl + 'knowledge-files?access-token=xfbR4fAzjqar52sQ1VrO9FoEbVPB9Lde' ,
		server: baseUrl + 'knowledge-pre-files?access-token=xfbR4fAzjqar52sQ1VrO9FoEbVPB9Lde',
		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		pick: '#picker_mng',

		methods: 'POST',  

		resize: false
	});

	uploader.on( 'fileQueued', function( file ) {
		// console.log(file.getSource().getSource())
		uploader.options.formData = {
			knowledge_pre_id: 1,
			file_name: fixName(file.name),
			file_file: file.getSource().getSource(),
			file_type: 0,
		}

		// '<div class="file-delete" id="fileDel'+file.id +'">删除</div>' 文件删除按钮，去掉
		if (file.type == 'video/mp4' || file.type == 'video/flv') {
		$list.append( '<div id="' + file.id + '" class="item">' +
			'<div class="file-img"><img src="../static/video.png"></div>' +
			'<div class="file-name">' + changeName(file.name) + '</div>' +
			'<p class="state">等待上传</p>' +
			'</div>' 
			
			);
		} else  {
			uploader.options.formData.file_type = 1;
			console.log(uploader.options.formData);
			$list.append( '<div id="' + file.id + '" class="item">' +
			'<div class="file-img"><img src="../static/doc.png">' +
			'<div class="file-name">' + changeName(file.name) + '</div>' +
			'<p class="state">等待上传</p>' +
			'</div>' );
		}
	});

	uploader.on( 'FileDequeued', function(file) {
		removeFile(file)
	});

	uploader.on( 'uploadProgress', function( file, percentage ) {
		var $li = $( '#'+file.id ),
		$percent = $li.find('.progress .progress-bar');

		// 避免重复创建
		if ( !$percent.length ) {
			$percent = $('<div class="progress progress-striped active">' +
				'<div class="progress-bar" role="progressbar" style="width: 0%">' +
				'</div>' +
				'</div>').appendTo( $li ).find('.progress-bar');
		}

		$li.find('p.state').text('上传中');

		$percent.css( 'width', percentage * 100 + '%' );
	});

	uploader.on( 'uploadSuccess', function( file ) {
		$( '#'+file.id ).find('p.state').text('已上传');
	});

	uploader.on( 'uploadError', function( file ) {  
		var $li = $( '#'+file.id ),  
		$error = $li.find('div.error');  

		if ( !$error.length ) {  
			$error = $('<div class="error"></div>').appendTo( $li );  
		}  

		$error.text('上传失败');  
	}); 

	uploader.on( 'uploadComplete', function( file ) {
		$( '#'+file.id ).find('.progress').fadeOut();
	});
	// 上传文件
	$toUpload.on( 'click', function() {  
		console.log("上传...");  
		uploader.upload();  
		console.log("上传成功");  
	}); 
	// 单文件删除

	// 文件名处理
	function changeName(str) {
		var arr = str.split('.')
		var name = arr[0]
		var type = arr[arr.length - 1]
		if (name.length > 6) {
			return name.substr(0, 6) + '...' + type
		} else if (arr.length > 2) {
			return name + '...' + type
		}
		return name + '.' + type
	} 
	function fixName(str) {
		var arr = str.split('.');
		arr.pop();
		return arr.join('.');
	}
	// 文件销毁
	function removeFile( file ) {
		var $li = $('#'+file.id);
		console.log($li)
		$li.off().find('.state').off().end().remove();
	}
})