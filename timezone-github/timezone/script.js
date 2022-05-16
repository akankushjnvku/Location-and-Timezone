var myInterval;// Used to save previous interval if one has been started
function run(){
  var timeZone = document.getElementById("selectTimezone");
  
  var i = timeZone.selectedIndex;
  var removeParenthesis = timeZone.options[i].text.replace(/[()]/g, '')
  var splitString = removeParenthesis.split(' ')
  var d = new Date('Nov 1, 2017 ' + ' ' +  splitString[0])
  
  var $clock = $('#clock'),
      eventTime = moment(d.getTime()).unix(),
      currentTime = moment(new Date().getTime()).unix(),
      diffTime = eventTime - currentTime,
      duration = moment.duration(diffTime * 1000, 'milliseconds'),
      interval = 1000;
  
  // if time to countdown
  if(diffTime > 0) {
    
    // Show clock
    // $clock.show();
    
    clearInterval(myInterval);
    myInterval = setInterval(function(){
      
      duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
      var d = moment.duration(duration).days(),
          h = moment.duration(duration).hours(),
          m = moment.duration(duration).minutes(),
          s = moment.duration(duration).seconds();
      
      d = $.trim(d).length === 1 ? '0' + d : d;
      h = $.trim(h).length === 1 ? '0' + h : h;
      m = $.trim(m).length === 1 ? '0' + m : m;
      s = $.trim(s).length === 1 ? '0' + s : s;
      
      // show how many hours, minutes and seconds are left
      $('.days').text(d + 'days');
      $('.hours').text(h + 'hours');
      $('.minutes').text(m + 'minutes');
      $('.seconds').text(s + 'seconds');
      
    }, interval);
    
  }  
}