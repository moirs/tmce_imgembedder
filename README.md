TinyMCE Image Embedder Plugin
=============================

A TinyMCE plugin that allows embedded images using base64 dataUrls. 

No need to upload images, much less confusing for users.

## Browser Support
 	
- Firefox 3.6+
- Chrome 7+
- Internet Explorer 10+
- Opera 12.02+
- Safari 6.0.2+

## Installation

1. Clone the repository into the tinymce plugin directory 
	- cd tinymce/plugins
	- git clone https://github.com/wilby/tmce_imgembedder.git imgembedder (the plugin must be in a directory named imgembedder in the plugins directory)
2. Include the plugin in the toolbar on init by adding imgembedder to plugins and toolbar
```
tinymce.init({
	selector: ".editor",
	height: 425,
	plugins: ["advlist textcolor link hr paste preview print hr anchor",
				 "table imgembedder contextmenu"],
	toolbar: "undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | link imgembedder | styleselect formatselect fontsizeselect | bullist numlist outdent indent blockquote subscript superscript"
});
```