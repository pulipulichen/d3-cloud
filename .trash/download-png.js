document.getElementById('download-png-button').addEventListener('click', function (e) {
  //console.log('AAA')
  let svg = document.querySelector("#vis > svg:last-of-type")
  svg = svg.innerHTML
  //svg = '<svg>' + svg.innerHTML + '</svg>'
  //console.log(svg)
  //svg = btoa(svg)
  svgString2Image(svg, 600, 480, 'image/png', (blob, fileSize) => {
    console.log(blob, fileSize)
  })
  
  return
  var dt = canvas.toDataURL('image/png')
  
  let a = document.getElementById('download-list')
  a.href = dt.replace(/^data:image\/[^;]/, 'data:application/octet-stream')
  a.click()
  
  e.stopPropagation()
  e.preventDefault()
})

function svgString2Image( svgString, width, height, format, callback ) {
	var format = format ? format : 'png';

	//var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL
  var imgsrc = 'data:image/svg+xml;base64,'+ btoa( svgString ); // Convert SVG string to data URL

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var image = new Image();
	image.onload = function() {
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width, height);
    console.log('aaa')
		canvas.toBlob( function(blob) {
			var filesize = Math.round( blob.length/1024 ) + ' KB';
			if ( callback ) callback( blob, filesize );
		});

		
	};
  console.log(imgsrc)
	//image.src = '<svg>' + imgsrc + '</svg>';
  console.log('aaa')
  
  image.src = imgsrc
}
