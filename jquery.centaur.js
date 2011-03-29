
$.fn.centaur = function(el) {
	el = $(el);

	html = el.html();
	  
    var text = html.replace(/[^a-zA-Z0-9]/g, '');
    var centaured_text = [];
    if(text.length >= $.fn.centaur.centaur.replace(/[^a-zA-Z0-9]/g, '').length) {
      text = text.split('').reverse();
      for (var i =  0; i < $.fn.centaur.centaur.length; i++) {
        var c = $.fn.centaur.centaur[i];
        if (c === '|') {
          centaured_text.push('\n');
        } else if (c === ' ') {
          centaured_text.push(c);
        } else {
          centaured_text.push(text.pop());
        }
      }
      el.html("<pre>"+centaured_text.join('') + text.reverse().join('')+"</pre>");
    } else {
      el.html("Cannot Centaur Text: Needs More Letters");
    }
}

$.fn.centaur.centaur = '   x|  xxx|  xxx|  xxx|  xxx|  xxx|  xxx|xxxxxxx      xxxxx|  xxx       xxxxxxx       xxx|  xxx       xxxxxxx       xxx|  xxx       xxxxxxx       xxx|  xxx         xxx         xxx|  xxxx       xxxxx       xxxx|    xxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|          xxxxxxxxxxxxxx              xxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxx|          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxx|           xxxxxxxx                 xxxxxxxxxxxxx     xxxx|            xxxxxx                    xxxxxxxx       xxxx|             xxxx                      xxxxxx        xxx|            xxxx                       xxxxx         xx|           xxxx                       xxxxx          xx|            xxxx                       xxxxx         x|            xxxx                       xxxxx|             xxxx                      xxxx|             xxxx                      xxxx|            xxxxxx                    xxxxxx|            xxxxxx                    xxxxxx|';

