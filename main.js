//document.getElementsByTagName("footer")[0].innerHTML = ''
function setupIndex() {
  document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].innerHTML = data['name'];
  document.getElementsByTagName("header")[0].getElementsByTagName("h2")[0].innerHTML = "LVL: "+data['lvl']+" EXP: "+data['exp']+"/"+data['maxEXP'];
}
const baseVals = {
  lvl: 1,
  exp: -1,
  maxEXP: 250
};
let data = {};
data['name'] = localStorage.getItem('name') || "PLAYERNAME";
Object.keys(baseVals).forEach(key => {
  data[key] = parseInt(localStorage.getItem(key),10) || baseVals[key];
  if (data[key] <= 0) {
    data[key] = 0;
  }
});
window.addEventListener('unload', () => {
  Object.keys(data).forEach(key => {
    localStorage.setItem(key, data[key]);
  });
});