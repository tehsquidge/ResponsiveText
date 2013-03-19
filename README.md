ResponsiveText
==============

Rescale text depending on browser width.

We rescale the text based on the max-width of its container. the general idea is that if we reduce the container 50%
the text-size should scale down accordingly by 50%.

to achieve this the container must have a max-width and a font-size of 1em. all containing elements must be sized
relative to the containing div in em.

usage
=====
```
<div id="container">
  <p>scale me down, sonny!</p>
</div>
```
```
#container {
  font-size: 1em;
	margin: auto;
	max-width: 550px;
}

#container p {
	font-size: 3em;
}
```

```
$('#container').responsiveText();
```

if you need to set the max-width via javscript (for example if your max-width in css needs to be a percentage) you
can use this option:
```
$('#container').responsiveText({maxWidth: 500 });
```
also, if you need to set a min-width and cannot do it in css:
```
$('#container').responsiveText({minWidth: 100 });
```

If you would like to specify a percentage for the font not to scale below (for example not to scale below 50%) you can do this:
```
$('#container').responsiveText({minFontSize: 0.5});
```
