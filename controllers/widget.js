var args = arguments[0] || {};
var IMGS, OUTS, SS, LAYOUT, MINZOOMSCALE;

/*  ============= Methods ============= */

function close() {
	$.index.close();
}

function open() {
	$.index.open();
}

function getMaxOffset() {
	return (IMGS.width*$.subindex.zoomScale)-OUTS.width;
}


/*  ============= Init ============= */

if (!args.image) {
	throw 'Specify almost an image.';
}

$.main.image = args.image;
if (args.title) $.mainText.text = args.title;
if (args.subtitle) $.mainDesc.text = args.subtitle;

if (OS_IOS) {

	$.subindex.addEventListener('scroll', function(){
		if (LAYOUT==='H') {
			$.scrollBarInset.animate({
				left: (SS-60)*($.subindex.contentOffset.x/getMaxOffset())
			});
		} else {
			$.scrollBarInset.animate({
				top: (SS-60)*($.subindex.contentOffset.y/getMaxOffset())
			});
		}
	});

	$.main.addEventListener('load', function(){
		var size = $.main.size;
		var rect = $.index.size;
		IMGS = { width: size.width, height: size.height	};
		OUTS = { width: rect.width, height: rect.height };
		var OR = OUTS.width/OUTS.height;
		var IR = IMGS.width/IMGS.height;

		// Recalculate if the min-height is not sufficient
		if (IMGS.height<OUTS.height) {
			$.main.height = OUTS.height;
			IMGS = {
				width: OUTS.height*(IMGS.width/IMGS.height),
				height: OUTS.height
			};
		}

		// Scroll horizontal or vertically ?
		if (IR>OR) {

			LAYOUT = 'H';
			MINZOOMSCALE = OUTS.height/IMGS.height;
			SS = OUTS.width-40;
			$.scrollBar.applyProperties({
				bottom: 90, left: 20, right: 20, top: null,
				height: 1, width: Ti.UI.FILL
			});
			$.scrollBarInset.width = 60;

		} else {

			LAYOUT = 'V';
			MINZOOMSCALE = OUTS.width/IMGS.width;
			SS = OUTS.height-20;
			$.scrollBar.applyProperties({
				right: 20, left: null, top: 10, bottom: 10,
				height: Ti.UI.FILL, width: 1
			});
			$.scrollBarInset.height = 60;

		}

		$.subindex.minZoomScale = MINZOOMSCALE;
		$.subindex.zoomScale = MINZOOMSCALE;
		$.subindex.maxZoomScale = 5;

	});

	var CoreMotion = require('ti.coremotion');
	if (CoreMotion && CoreMotion.isDeviceMotionAvailable()) {

		CoreMotion.setDeviceMotionUpdateInterval(4);

		CoreMotion.startDeviceMotionUpdates(function(e){
			if (!e.success) return;

			if ( Math.abs(e.rotationRate.y) > (Math.abs(e.rotationRate.x)+Math.abs(e.rotationRate.z)) ) {
				var co = $.subindex.contentOffset;
				$.subindex.setContentOffset({
					x: Math.max(0, Math.min(getMaxOffset(),
						co.x + ( 8 * $.subindex.zoomScale * e.rotationRate.y )
						)),
					y: co.y
				}, {
					animated: false
				});
			}

		});

	} else {
		Ti.API.error("CoreMotion not available");
	}

}



/*  ============= Listeners ============= */

if (OS_IOS && args.closeOnClick) {
	$.subindex.addEventListener('click', close);
}

/*  ============= Public interface ============= */

exports.close = close;
exports.open = open;