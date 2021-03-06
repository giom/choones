#Choones

"Choones" is a jQuery plugin, with a little markup and some styles that mimics [Growl's](http://growl.info/)
"Music video" theme (pop up, from the bottom - its like watching rage/mtv)

![Non-imposing message display](https://github.com/benschwarz/choones/tree/master/example/screenshot.png?raw=true)

##About

Sending messages back to the user is often something that uses some strange
design pattern of adding a box to the top of a page, that pushes down the content or, even worse, thrown into a 'lightbox'. Choones is something that I've implemented a number of times, finally recognising this pattern I thought it was worth sharing.

Plans for a rails plugin that replaces flash[] messages is in the works (for regular or ajax requests). 

##Usage

Messages can be sent with either a 'success' or 'failure' context, that is; the icon changes.

Sending a regular message can be done like this:

    $.choones("AC/DC", "Thunderstruck");
  
Perhaps you only want to set a title?

    $.choones("Akka Dacca");
    
Or you want them to dissapear a little bit quicker? (3 seconds in the example below)

    $.choones("AC/DC", "Dirty Deeds Done Dirt Cheap", {display_time: 3000});

Setting a 'failure' message

    $.choones("Megadeath", "Sad, sad sad", {type: 'failure'});
    
Choones settings are public and can be set globally:

    $.choones.settings.display_time = 5000;
  or
    $.choones.settings = {...};

All further calls to $.choones("Keep talking", "I'm listening"); will use the global settings

## Markup and Styles

Markup and CSS can be taken from the example/index.html and lib/css/choones.css files respectively. 

    <div id="choones" class="success">
      <h1>Title</h1>
      <p>Message</p>
    </div>

The markup should not really be changed whatsoever, however you can add your own classes to the elements if need be. 

Styles can be changed as free as you like, the #choones element should be hidden using display: none; initially, everything else is basically pure aesthetic.

## Licence

All credit due to those who got here before me. Licence is MIT, use it as you wish.
    