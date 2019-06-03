var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
//ctx.fillRect(20, 20, 20, 20);
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
var start = null;
function update(timestamp) {
  if (!start) {
    start = timestamp;
  }
  var deltaTime = timestamp - start;
  ctx.clearRect(0, 0, 480, 500);
  player.moveY(0.001 * deltaTime);
  player.draw(ctx);

  requestAnimationFrame(update);
}
requestAnimationFrame(update);
