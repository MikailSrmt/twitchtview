$(document).ready(function() {


  var streamers = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "erbilkutlu",
    "nl_kripp",
    "brunofin",
    "comster404"
  ];

  for (let i = 0; i < 12; i++) {
      //console.log(streamers[i]);
    let tuber = streamers[i]
    
    let sUrl = "https://wind-bow.glitch.me/twitch-api/streams/" + tuber;
     let cUrl = "https://wind-bow.glitch.me/twitch-api/channels/" + tuber;
    //console.log(mUrl);
    //console.log(tuber);
    $.ajax({
      url: sUrl,
      dataType: "json",
      success: function(streamStatus) {
        console.log(streamStatus);
        
        
       // console.log(tuber);
        
        if (streamStatus.stream) {
          $(".streamers").append(
            "<tr class="+"success"+"><td>" +
              tuber +
              "</td><td>" +
              '<a href="https://www.twitch.tv/' +
              tuber +
              '">Online</a> ' +
              "</td><td>" +
              streamStatus.stream.channel.status +
              "</td></tr>"
          );
          
          
        }
       /* else if (time < 20) {
    greeting = "Good day";
} */ else {
  
  $.ajax({
      url: cUrl,
      dataType: "json",
      success: function(channelStatus) {
        console.log(channelStatus.error);
        if(channelStatus.error === "Not Found"){
          $(".streamers").append(
            "<tr  class="+"danger"+"><td>" +
              tuber +
              "</td><td>" +
              
              "Not Exist" +
              "</td><td>" +
              "</td></tr>"
          );
        } else{
          $(".streamers").append(
            "<tr  class="+"danger"+"><td>" +
              tuber +
              "</td><td>" +
              '<a href="https://www.twitch.tv/' +
              tuber +
              '">Offline</a> ' +
              "</td><td>" +
              "Come Back Later..." +
              "</td></tr>"
          );
        }
        
        console.log(channelStatus);
        
         }
    });
    
  
         /* $(".streamers").append(
            "<tr  class="+"danger"+"><td>" +
              tuber +
              "</td><td>" +
              '<a href="https://www.twitch.tv/' +
              tuber +
              '">Offline</a> ' +
              "</td><td>" +
              "Come Back Later..." +
              "</td></tr>"
          );*/
        }
      }
    });
  }
});