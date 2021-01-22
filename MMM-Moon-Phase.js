Module.register("MMM-MoonPhase", {

  defaults: {
    position: "top_left",
    refreshInterval: 21600000
    },

  getStyles: function() {
    return "MMM-MoonPhase.css"
  },

  start: function () {
    Log.info("Starting module: " + this.name);
    var self = this;
    var day = new Date().getDate();
    var dayWeek=moon.phase[day].dayWeek;
    setInterval(function() {
      self.updateDom();
    },this.config.refreshInterval);
  },

  GetPhase: function load_moon_phases(obj,callback){
    var gets=[]
    for (var i in obj){
        gets.push(i + "=" +encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}

var configMoon = {
lang  		:'fr',
month 		:new Date().getMonth() + 1,
year  		:new Date().getFullYear(),
size		:150,
lightColor	:"rgb(255,255,210)",
shadeColor	:"black",
texturize	:false,
}

  getDom: function moonphase(moon) {

    var day = new Date().getDate()
     var dayWeek=moon.phase[day].dayWeek
     var htmlwrapper = document.createElement("div");
     htmlwrapper.id = 'ex1';
     html = "<div>" +
     "<div shadow>" + moon.phase[day].svg + "</div>" +
     "<div>" + moon.phase[day].phaseName + " " +
     "" + ((moon.phase[day].isPhaseLimit )? ""  :   Math.round(moon.phase[day].lighting) + "%") +
     "</div>" +
     "</div>";

     /*document.getElementById('ex1').innerHTML = html;*/

     htmlwrapper.innerHTML = html;
     console.log(htmlwrapper.innerHTML);
     return htmlwrapper;
  }

});
