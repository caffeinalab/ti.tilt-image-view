Titanium | Facebook Paper tilt-fullscreen
======================================
**Module ref.** | com.caffeinalab.titanium.tiltimageview

### This module emulate the [Facebook Paper](https://www.facebook.com/paper) tilt-fullscreen ImageViewer.

It provides a **scrollable, pinchable, zoomable** and fullscreen ImageViewer.

On iOS, it uses the new [ti.coremotion](http://docs.appcelerator.com/titanium/latest/#!/guide/Core_Motion_Module) Titanium module to achieve the natural movement. So you need to **install the ti.coremotion module** or it will not work.

![image](http://f.cl.ly/items/0P3U2a2A2U0X1J2f2818/Image%202014-06-13%20at%2010.52.10%20AM.png)

### [Watch the demonstration video by Facebook](http://subjc.com/media/2014-02-12-facebook-paper-photo-panner/video/title-video.m4v)

*Thanks to [http://subjc.com/facebook-paper-photo-panner/](SubjC) for making me understand some things about this widget.*

## Installation


#### Via Gittio

```
gittio install com.caffeinalab.titanium.tiltimageview
```

#### Via Github

```
git clone git@github.com:CaffeinaLab/com.caffeinalab.titanium.tiltimageviewgit app/widgets/com.caffeinalab.titanium.tiltimageview
```

And add in your *config.json*, under `dependencies`:

```
"dependencies": {
    "com.caffeinalab.titanium.tiltimageview": "*"
}
```

## Usage

#### Require in the Views

```xml
<Widget src="com.caffeinalab.titanium.tiltimageview" id="paperImageView" image="http://lorempixel.com/1024/1024/city" title="This is the title!" />
```

#### Open in controller

```javascript
$.paperImageView.open();
```

#### Args

* **image**: The image *(String|Blob)*

#### Optional args

* **closeOnClick**: Add a listener to close the modal on click over the image
* **title**: The title to show
* **subtitle**: The subtitle to show

## Screenshot

![image](http://f.cl.ly/items/2R3Y2z0w3Z282Y1j0P3g/Screenshot%202014.06.13%2010.48.22.png)


## Example without View

```javascript
var tilter = Alloy.createWidget('com.caffeinalab.titanium.tiltimageview', {
	image: "http://lorempixel.com/1024/1024/city",
	title: "What is this?",
	subtitle: "Oh, but this is really beautiful!"
});

tilter.open();
```
