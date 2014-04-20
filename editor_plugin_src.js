/*
Copyright [2014] [Wilby C. Jackson Jr.]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
tinymce.PluginManager.add('imgembedder', function (editor, url) {
	editor.addButton('imgembedder', {
		text: 'Embed',
		icon: 'image',
		onclick: function () {
			var options = {
				title: 'Image Embedder',
				file: url + '/embed.html',  					
				width: 400,
				height: 250,
				buttons: [
				{
					text: 'Ok',	
					onclick: function(e) {
						var win = editor.windowManager.getWindows()[0];									
						var doc = win.getContentWindow().document;
						var title = doc.getElementById("imgtitle");
						var height = doc.getElementById("imgheight");
						var width = doc.getElementById("imgwidth");									
						var images = doc.getElementById('images');
						var flow = doc.getElementById('flow');
						
						var reader = new FileReader();							
						reader.onprogress = function() { tinymce.activeEditor.setProgressState(true); }
						reader.onloadend = function(e) {
							if(e.target.result) {
								var attrs = {src : e.target.result, alt: null, title: null, height: null, width: null, style: ''}
								
								if(title && title.value) {									
									attrs.alt = title.value;
									attrs.title = title.value;
								}
								
								if(height && height.value) {
									attrs.height = height.value;
								}
								
								if(width && width.value) {
									attrs.width = width.value;
								}
								
								if(flow && flow.checked) {										
									attrs.style = 'float:left; margin-right: 1em; margin-bottom: 1em;';
								}								
								tinyMCE.activeEditor.selection.setContent(tinyMCE.activeEditor.dom.createHTML('img', attrs));									
							}
							tinymce.activeEditor.setProgressState(false);
						};
						reader.onerror = function(e) { console.log(e.error.message); }
						
						for(var i =0; i < images.files.length; i++) {
							reader.readAsDataURL(images.files[i]);
						}
						win.close();
					}
				},
				{
					text: 'Close',
					onclick: 'close'
				}]

			};
			editor.windowManager.open(options);
		},
		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
				return {
						longname : 'Image Embedder',
						author : 'Wilby C. Jackson Jr.',
						authorurl : 'https://github.com/wilby',
						infourl : 'https://github.com/wilby/tmce_imgembedder',
						version : "1.0"
				};
		}
	});
	/*
	// Adds a menu item to the tools menu
	editor.addMenuItem('imgembedder', {
		text: 'Image Embedder',
		icon: 'image',
		context: 'tools',
		onclick: function () {
			// Open window with a specific url
			editor.windowManager.open({
				title: 'TinyMCE site',
				url: 'http://www.tinymce.com',
				width: 800,
				height: 600,
				buttons: [{
					text: 'Close',
					onclick: 'close'
				}]
			});
		}
	});
	*/
});