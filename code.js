var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5cc818ae-1678-4090-847d-780a8b28f896","9c9ffa0b-6d29-4c00-90d0-c3876c8f60d8","15e1c2cd-d8ad-49fb-8d69-279e5276517d","b8480e20-a700-4a80-97de-f933d077bf79","de6d4419-8132-45eb-b3e2-853db96c6b38","0db3bf01-0639-49e4-9586-7776bad29167","a0c9851a-d3e8-4107-99c9-7af59fa908dd","099500e7-ddbb-4c92-9fb1-61e807169b71","d5b5495b-1144-4bc8-80c9-57337116b521","972a8897-e02a-4f50-84d1-d4bc56a5ebbc","3dbdbe96-fc40-4712-9888-709a09ea59d6","c0e4acf5-a935-41d4-bb4a-716452fa75da","22574854-631e-4918-a183-f35353f631df","0e23d87f-f4eb-410c-8877-65d5926475b9","f34cb158-cf81-4006-af19-e5de9367aac6"],"propsByKey":{"5cc818ae-1678-4090-847d-780a8b28f896":{"name":"yes","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"KtNHRtG.VfAkYr_8NNR0dURr73nqAwd6","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/5cc818ae-1678-4090-847d-780a8b28f896.png"},"9c9ffa0b-6d29-4c00-90d0-c3876c8f60d8":{"name":"yes2","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"yD1ZlJOjq86fu8tRHRdoUoMQi6m1L2Id","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/9c9ffa0b-6d29-4c00-90d0-c3876c8f60d8.png"},"15e1c2cd-d8ad-49fb-8d69-279e5276517d":{"name":"no","sourceUrl":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/15e1c2cd-d8ad-49fb-8d69-279e5276517d.png","frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":4,"version":"L7PlPgwpmievKmXhJT95Bzyc.28rzR3m","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/15e1c2cd-d8ad-49fb-8d69-279e5276517d.png"},"b8480e20-a700-4a80-97de-f933d077bf79":{"name":"no_copy_1","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"R64N1RQhYWthtQo6yrn6fMRQdWNvlIwg","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/b8480e20-a700-4a80-97de-f933d077bf79.png"},"de6d4419-8132-45eb-b3e2-853db96c6b38":{"name":"money","sourceUrl":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/de6d4419-8132-45eb-b3e2-853db96c6b38.png","frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":4,"version":"r0NmwTpXG6vk6cyhGxJdAJg_QcqD1R5t","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/de6d4419-8132-45eb-b3e2-853db96c6b38.png"},"0db3bf01-0639-49e4-9586-7776bad29167":{"name":"money_copy_1","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"x5BkMrCFZvP3Hob5AFWu_wpn1pd1curZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/0db3bf01-0639-49e4-9586-7776bad29167.png"},"a0c9851a-d3e8-4107-99c9-7af59fa908dd":{"name":"clothes","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"I.OHkwrYTQZ0IaNrUnHN0vcrfder9WVp","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/a0c9851a-d3e8-4107-99c9-7af59fa908dd.png"},"099500e7-ddbb-4c92-9fb1-61e807169b71":{"name":"clothes_copy_1","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"n8EcqmwycID_wh2dlOgvsZ0.jbZw3XH3","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/099500e7-ddbb-4c92-9fb1-61e807169b71.png"},"d5b5495b-1144-4bc8-80c9-57337116b521":{"name":"society","sourceUrl":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/d5b5495b-1144-4bc8-80c9-57337116b521.png","frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":4,"version":"TU.Hfa5cJKLTMuj7guM8i5BKUM0UBkUX","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/d5b5495b-1144-4bc8-80c9-57337116b521.png"},"972a8897-e02a-4f50-84d1-d4bc56a5ebbc":{"name":"society_copy_1","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"BPRR79SxzzpQkbQDJ_y8teeor0ePBJpK","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/972a8897-e02a-4f50-84d1-d4bc56a5ebbc.png"},"3dbdbe96-fc40-4712-9888-709a09ea59d6":{"name":"school","sourceUrl":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/3dbdbe96-fc40-4712-9888-709a09ea59d6.png","frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":4,"version":"4sBz0OZneY26Ynx33xCDxZtN85.PdfS3","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/3dbdbe96-fc40-4712-9888-709a09ea59d6.png"},"c0e4acf5-a935-41d4-bb4a-716452fa75da":{"name":"school_copy_1","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"PkNtFXDKOmvga.8_i0O78cLIhrIX2cKE","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/c0e4acf5-a935-41d4-bb4a-716452fa75da.png"},"22574854-631e-4918-a183-f35353f631df":{"name":"food","sourceUrl":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/22574854-631e-4918-a183-f35353f631df.png","frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":4,"version":"bJHpYnXHmogmT1ZBZ7mgvdq1_YUhOc2t","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/v3/animations/T-fbjSFttlag34iSzZEW4Oe6_3hAJC9Xv4-IjIg1e2I/22574854-631e-4918-a183-f35353f631df.png"},"0e23d87f-f4eb-410c-8877-65d5926475b9":{"name":"food_copy_1","sourceUrl":null,"frameSize":{"x":1200,"y":654},"frameCount":1,"looping":true,"frameDelay":12,"version":"zAO46tZpS3exSfuHj.as7LOlABHysCTr","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":654},"rootRelativePath":"assets/0e23d87f-f4eb-410c-8877-65d5926475b9.png"},"f34cb158-cf81-4006-af19-e5de9367aac6":{"sourceSize":{"x":1200,"y":654},"frameSize":{"x":1200,"y":654},"frameCount":1,"frameDelay":12,"name":"submit","sourceUrl":null,"size":29727,"version":"MDazbOPXJWDq2kLhaaQL98yH3uV6awXe","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/f34cb158-cf81-4006-af19-e5de9367aac6.png"}}};
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

var yes=createSprite(30,110,10,10);
yes.setAnimation("yes");
yes.scale=0.3;
var no=createSprite(365,120,10,10);
no.setAnimation("no");
no.scale=0.3;
var money=createSprite(30,220,10,10);
money.setAnimation("food");
money.scale=0.3;
/*var food=createSprite(170,280,10,10);
food.setAnimation("food");
//food.scale=0.7;*/
var clothes=createSprite(365,230,10,10);
clothes.setAnimation("clothes");
clothes.scale=0.3;



var school=createSprite(360,330,10,10);
school.setAnimation("school");
school.scale=0.3;

var society=createSprite(33,367,10,10);
society.setAnimation("society");
society.scale=0.3;

function draw() {
  background("white");
  if(mousePressedOver(yes)){
    yes.setAnimation("yes2");
    no.x=5000;

   
  }
  if(mousePressedOver(no)){
    no.setAnimation("no_copy_1");
    yes.x=5000;
  }
  if(mousePressedOver(money)){
    money.setAnimation("food_copy_1");
    //food.x=5000;
    clothes.x=5000;
  }
  if(mousePressedOver(society)){
    society.setAnimation("society_copy_1");
    school.x=5000;
  }
  if(mousePressedOver(school)){
    school.setAnimation("school_copy_1");
    society.x=5000;
  }
  /*if(mousePressedOver(food)){
    food.setAnimation("food_copy_1");
    money.x=5000;
    clothes.x=5000;
  }*/
  if(mousePressedOver(clothes)){
    clothes.setAnimation("clothes_copy_1");
    money.visible=false;
  }
  if(mousePressedOver(clothes)){
    clothes.setAnimation("clothes_copy_1");
    money.visible=false;
  }
  
  
  textSize(19);
  fill('red');
  textFont('Candara');
  text('A Survey To Support Migrant Labour',0,35);
  textSize(15);
  textFont('Candara');
  fill('black');
  text('Q1.	Do you want to donate something for ',0,65);
  text('the migrant workers?',0,80);
  text('Q2.What do you want to donate?',0,185);
  text('Q3.	Are you able to hand it over to school  ',0,285);
  text('or to your residential society?',0,300);
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
