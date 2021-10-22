var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2e897cb9-711b-4b98-a8be-2f48f9608209","965b87a8-0068-4be2-87ae-3400873a9365","fb796015-be4b-4cc8-8c87-d68634bdf2ab"],"propsByKey":{"2e897cb9-711b-4b98-a8be-2f48f9608209":{"name":"dagger","sourceUrl":"assets/api/v1/animation-library/gamelab/eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi/category_video_games/dagger.png","frameSize":{"x":220,"y":398},"frameCount":1,"looping":true,"frameDelay":45,"version":"eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi/category_video_games/dagger.png"},"965b87a8-0068-4be2-87ae-3400873a9365":{"name":"sword","sourceUrl":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png","frameSize":{"x":306,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png"},"fb796015-be4b-4cc8-8c87-d68634bdf2ab":{"name":"red","sourceUrl":"assets/api/v1/animation-library/gamelab/hGgbUlFZW3AlCFSdrs.p7vb577JI3zjn/category_video_games/gameplay_redstar.png","frameSize":{"x":376,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"hGgbUlFZW3AlCFSdrs.p7vb577JI3zjn","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hGgbUlFZW3AlCFSdrs.p7vb577JI3zjn/category_video_games/gameplay_redstar.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

paddle=createSprite(200,390,100,20)
ball=createSprite(200,200,20,20)
ball.setAnimation("sword")
ball.scale=0.3
paddle.setAnimation("red")
paddle.scale=0.2
function draw() {
  background("white");
  if(ball.isTouching(paddle))
{
playSound("https://audio.code.org/win1.mp3", false);
}
if (ball.isTouching(battomEdge))
playSound(https://audio.code.org/losepoint1.mp3)
  if(keyDown("a")){
    ball.velocityX=3
    ball.velocityY=3
    
  }
 paddle.x= World.mouseX
createEdgeSprites()
ball.bounceOff(topEdge)
ball.bounceOff(rightEdge)
ball.bounceOff(leftEdge)
ball.bounceOff(paddle)
if(ball.isTouching(box1)){
  box1.destroy()
}
if(ball.isTouching(box2)){
  box2.destroy()
}
if(ball.isTouching(box3)){
  box3.destroy()
}
if(ball.isTouching(box4)){
  box4.destroy()
}
if(ball.isTouching(box5)){
  box5.destroy()
}
if(ball.isTouching(box6)){
  box6.destroy()
}
if(ball.isTouching(box7)){
  box7.destroy()
}
if(ball.isTouching(box8)){
  box8.destroy()
}
if(ball.isTouching(box9)){
  box9.destroy()
}
if(ball.isTouching(box10)){
  box10.destroy()

}
if(ball.isTouching(box11)){
  box11.destroy()
}
if(ball.isTouching(box12)){
  box12.destroy()
}
  if(ball.isTouching(box13)){
    box13.destroy()
    
  }
  if(ball.isTouching(box14)){
  box14.destroy()
}
if(ball.isTouching(box15)){
  box15.destroy()
}
if(ball.isTouching(box16)){
  box16.destroy()
}




  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
