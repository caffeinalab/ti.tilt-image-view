# Caffeina.TiltImageView

### com.caffeinalab.titanium.tiltimageview

#### This module emulate the [Facebook Paper](https://www.facebook.com/paper) tilt-fullscreen ImageViewer.

It provides a **scrollable, pinchable, zoomable** and fullscreen ImageViewer.

The widget is fully compatible with iOS and Android, with different features.

On iOS 7+, it uses the new [ti.coremotion](http://docs.appcelerator.com/titanium/latest/#!/guide/Core_Motion_Module) Titanium module to move the image across your movements. So you need to **install the ti.coremotion module** or this feature will not work.

On Android, due system limitations, the image is not pinchable/zoomable.

*Thanks to [this post by SubjC](http://subjc.com/facebook-paper-photo-panner/) for making me understand some things about this widget.*

![image](http://cl.ly/image/2F1C3h1r0G2c/687474703a2f2f662e636c2e6c792f6974656d732f30653238304232523236323230453152326333682f6f75742e6a7067%20(1)_iphone5s_spacegrey_portrait.png)


## Original "Facebook Paper" Controller

![image](http://cl.ly/image/0Q3N35163j0P/title-video.gif)


## Installation

#### Via Gittio

```
gittio install com.caffeinalab.titanium.tiltimageview
```

#### Via Github

Download the latest release, and add in your *config.json*, under `dependencies`:

```json
"dependencies": {
    "com.caffeinalab.titanium.tiltimageview": "*"
}
```

## Usage

Require the widget in an Alloy View

```xml
<Widget src="com.caffeinalab.titanium.tiltimageview" id="paperImageView" image="http://lorempixel.com/1024/1024/city" title="This is the title!" />
```

And open when you need in the relative controller

```javascript
$.paperImageView.open();
```

**Constructor options**

* `image (String|Ti.Blob)`: The image to show. Must be a **URL** or a `Ti.Blob`
* `[closeOnClick] (Boolean, default: true)`: Add a listener to close the modal on the click over the image
* `[title] (String)`: The title to show on the bottom of the View.
* `[subtitle] (String)`: The subtitle to show


## Example without the View

```javascript
Alloy.createWidget('com.caffeinalab.titanium.tiltimageview', {
	image: "http://lorempixel.com/1024/1024/city",
	title: "What is this?",
	subtitle: "Oh, but this is really beautiful!"
}).open();
```
