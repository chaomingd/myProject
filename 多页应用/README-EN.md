# Intel Template Library

> The components of the Intel project can directly generate the required project component templates.



## Run command

``` bash
# Install dependency packages
npm install

# serve with hot reload at localhost:8080
npm run dev

# Resource independent packaging (large files)
npm run build

# Resource sharing package (smaller files)
npm run build-light

```


# Tool Introduction

```
Tool path: ./tool/*

1. cjsTool: Animate CC animation processing tool. (build before running)
Replace Animation CC code manually, To solve the problem of naming and image size of Animation CC export files.
Run command: npm run cjs (npm run cjs ./	'./' Refers to the location of the images folder relative to the animation JS file, by default './')。

2. imageLoadTool: Used for image preloading. (build before running)
Traverses all the images under the image and images folders in the search component.Image preloading requires Loading components, and no Loading components will be ignored.If there are Loading components, the Loading.vue file under this component will be automatically found, Modify the content between '<!-- ImageLoad Start -->' and '<!-- ImageLoad End -->'.

3. moveVideos: Used to process video. (automatically run at build)
- Decide to read the MultipleVideo/data/config.txt file in the main frame to get the video module (SingVideo) to be clipped
- Modify video loading path in configuration file "link": "../../SingleVideo.html"  ---> "link": "../SingleVideo"
- Move 'SingVideo' path deploy/SingleVideo ---> deploy/MultipleVideo/videos/SingleVideo
```



#Functional Introduction

	1. Add AnimationCC animation components <CjsAnim>
	
		JavaScript Code:
		import cjsId from '../../cjs/frog.js';
		import CjsAnim from '../../../../components/CjsAnim/CjsAnim.vue';
		this.$refs.cjsComp.initCjs(cjsId, obj => {});
		
	    Vue Code:
		<CjsAnim class="frog" ref="cjsComp"></CjsAnim>


	
	2. Text displacement animation adds 'animate-move' class, text fade into animation, add 'animate-opacity' class. The animation is as follows:
	
	    TweenMax.staggerTo($('.Text .animate-move'), 0.6, {
	        autoAlpha: 1,
	    }, 0.1, () => {
	    });


	
	3. If the font is Intel Clear (Bold) bold（font-weight: bold）instead of Intel Clear Bd font, the iPhone and Safari browsers will not recognize it.


	
	4. ./src/style/_mixin.scss: The '_mixin.scss' file is used to simplify the CSS style writing:
	
		4.1. font-face: It is used to load the required font files and put them on the top of each component's app.scss file.
			 @include font-face('IntelClearPro_W_Bd', 'Intel Clear Pro');
			 @include font-face('IntelClear_WLat_Rg', 'Intel Clear');
			 
		4.2. font-size-desktop: Calculate the value of the corresponding attributes, browser greater than or equal to 1200px (default size, parameters can be modified) with PX unit as a fixed value, less than 1200px (default size, parameters can be modified) with VW unit scaling.
			 @include font-size-desktop(24);	Default is font size(font-size)
			 @include font-size-desktop(490, $type: 'width');	Set width size
		
		4.3. cal-font-size: A unit converted to VW based on incoming values (mainly used under 768 dimensions, when used in mobile layout).
			 width: cal-font-size(252, 414);	Indicates that when the browser width is 414px, the width of the element is 252px.
			 font-size: cal-font-size(24, 414);	Indicates that the font size of the element is 24px when the browser width is 414px.
		
		4.4. breakpoint: Because each module is embedded in an iframe, there are errors in the width of the iframe when the scroll bar appears in the main frame, so you need to set multiple values to suit various situations.
			 @include breakpoint(767px){...}	Indicates that different values are set when the browser width is 767.
			 @include breakpoint(767px, 'rtl'){...}		Indicates that different values are set in the RTL version of browser width 767.


	
	5. Adding an extension called imageLoader to jQuery to pre-load images ensures that all elements exist before they are used. In the './vendor/Utils.js' file. The following methods are used:
	
		$('.loading-img').imageLoader({delay:0})
			.on('progress', (evt, progress) => {
				this.progress = progress - 1;
			}).on('loaded', () => {
	            if (callback){
	            	callback();
	            }
	        });


	
	6. ./src/style/_clearbug.scss: The '_clearbug.scss' file is used to solve the development of Chrome browser debugging bug, do not control.


	
	7. The CSS style description component (Notes) is added, and by default each module exists, and all descriptions and comments on the style are written into the 'Notes/Notes. scss' file.


	
	8. After build is deleted, 'SingVideo' generates media and video files. (see moveVideos tools in detail)


	
	10. Moving the development of SingVideo to a common development framework adds a local development mode, which makes it easy for video debugging (isLocalVideo = true)  /SingVideo to embed directly into the main page without nesting a layer. (see moveVideos tools in detail)


	
	11. The RTL version index-rtl.html is added to the build command.


	
	12. After build, each module is added to the favicon.ico icon.


# Component Introduction

| NAME          | DESCRIBE                                                     |
| ------------- | ------------------------------------------------------------ |
| Header        | Header module.                                               |
| Chart         | Chart module，Used for chip comparison.                      |
| MultipleVideo | Multiple video modules are usually used to display three videos, each of which is a single video component. |
| SingleVideo   | A single video component displays a single video in general. |
| Retailer      | Retailer module.                                             |
| Legal         | The Legal text component is used to display the Legal text.  |
| Loading       | Module loading component is used to display the progress of module loading. |
| Animate       | Animation components for loading Animate CC animation.       |
| Text          | Text component to display text.                              |
| Background    | Background components to display background colors and background pictures. |
| Notes         | The CSS style component is used to write CSS style annotations. |
| CjsAnim       | Animate CC animation package component, wrapped the canvas generated by Animate CC animation into a component. |
| ...           | ...                                                          |

