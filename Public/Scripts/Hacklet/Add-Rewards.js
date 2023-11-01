// -- Hacklet --
// @name         Add Rewards
// @version      1.0
// @author       Hacklet
// @urls         ["https://play.blooket.com/", "https://play.blooket.com/*"]
// -- Hacklet -- 

window.addEventListener('load', function () {
if (0 == document.location.pathname.indexOf("/play")) {
  var obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
  const axios = Object.values(webpackJsonp.push([
    [], {
      ['']: (_, a, b) => {
        a.cache = b.c
      },
    },
    [
      ['']
    ],
  ]).cache).find((x) => x.exports ?.a?.put).exports.a;
  axios.post("https://play.blooket.com/api/playersessions/solo", { gameMode: "Factory" }).then(session => {
    axios.get("https://play.blooket.com/api/users/me").then(blooket => {
      axios.put("https://play.blooket.com/api/users/add-rewards", {
        t: session.data.t,
        name: blooket.data.name,
        addedTokens: 500,
        addedXp: 300
      })
    })
  });
  let a = document.createElement("iframe");
  document.body.append(a);
  window.alert = a.contentWindow.alert.bind(window);
  a.remove();
  if (obj.xpAvailable === undefined) {
    obj.xpAvailable = 0
  }
  if (obj.tokensAvailable === undefined) {
    obj.tokensAvailable = 0
  }
  alert("Tokens Remaining: " + obj.tokensAvailable + "\nXp Remaining: " + obj.xpAvailable + "")
} else {
  let n = document.createElement('iframe');
  document.body.append(n);
  window.alert = n.contentWindow.alert.bind(window);
  n.remove();
  setTimeout(alert('You are being redirected to the correct page, once you are there, re-run this script'), window.location = 'https://play.blooket.com/play', 1000)
}
});
