import keyboardJS from "keyboardjs";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
//ctx.fillRect(20, 20, 20, 20);
var keys = {
  w: 0,
  a: 0,
  s: 0,
  d: 0
};
var player = {
  x: 40,
  y: 40,
  moveX: function(d) {
    this.x += d;
  },
  moveY: function(d) {
    this.y += d;
  },
  draw: function(ctx) {
    ctx.fillRect(this.x, this.y, 20, 20);
  }
};
/*keyboardJS.on([a", function(e) {
  console.log("yo");
});*/
keyboardJS.on(
  ["a", "d"],
  function(e) {
    keys[e.getKey()] = 1;
  },
  function(e) {
    keys[e.getKey()] = 0;
  }
);
var start = null;
function update(timestamp) {
  if (!start) {
    start = timestamp;
  }
  var deltaTime = timestamp - start;
  ctx.clearRect(0, 0, 480, 500);
  if (keys.a) {
    player.moveX(-1 * deltaTime);
    console.log("yo");
  }
  if (keys.d) {
    player.moveX(1 * deltaTime);
  }
  //player.moveY(0.001 * deltaTime);
  player.draw(ctx);

  requestAnimationFrame(update);
}
requestAnimationFrame(update);
