Module.register("MMM-MoonPhase", {

  defaults: {
    position: "top_left",
    refreshInterval: 21600000
    },

  getScripts: function() {
    return "load_moon_phases.js";
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

  getDom: function example() {
    var configMoon = {
    lang  		:'fr',
    month 		:new Date().getMonth() + 1,
    year  		:new Date().getFullYear(),
    size		:150,
    lightColor	:"rgb(255,255,210)",
    shadeColor	:"black",
    texturize	:false,
}
    var wrapper = document.createElement("div");
    var svgwrapper = document.createElement("div");
    var phaseNamewrapper = document.createElement("div");
    var phaseLimitwrapper = document.createElement("div");
    wrapper.className = 'MoonPhase_container';
    wrapper.classList.add(this.config.position);
    var svg = moon.phase[day].svg
    var phaseName = moon.phase[day].phaseName
    var phaseLimit = ((moon.phase[day].isPhaseLimit )? ""  :   Math.round(moon.phase[day].lighting) + "%");
    wrapper.appendChild(svg);
    wrapper.appendChild(phaseName);
    wrapper.appendChild(phaseLimit);
    load_moon_phases(configMoon,example);
    return wrapper
  }

});
