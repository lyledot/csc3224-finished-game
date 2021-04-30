gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDReadyTextObjects1_1final = [];

gdjs.InstructionsCode.GDReadyTextObjects2_1final = [];

gdjs.InstructionsCode.GDSnowBackgroundObjects1= [];
gdjs.InstructionsCode.GDSnowBackgroundObjects2= [];
gdjs.InstructionsCode.GDSnowBackgroundObjects3= [];
gdjs.InstructionsCode.GDSnowballStaticObjects1= [];
gdjs.InstructionsCode.GDSnowballStaticObjects2= [];
gdjs.InstructionsCode.GDSnowballStaticObjects3= [];
gdjs.InstructionsCode.GDReadyTextObjects1= [];
gdjs.InstructionsCode.GDReadyTextObjects2= [];
gdjs.InstructionsCode.GDReadyTextObjects3= [];
gdjs.InstructionsCode.GDInstructionsTitleObjects1= [];
gdjs.InstructionsCode.GDInstructionsTitleObjects2= [];
gdjs.InstructionsCode.GDInstructionsTitleObjects3= [];
gdjs.InstructionsCode.GDInstructionsTextObjects1= [];
gdjs.InstructionsCode.GDInstructionsTextObjects2= [];
gdjs.InstructionsCode.GDInstructionsTextObjects3= [];
gdjs.InstructionsCode.GDThisIsYouTextObjects1= [];
gdjs.InstructionsCode.GDThisIsYouTextObjects2= [];
gdjs.InstructionsCode.GDThisIsYouTextObjects3= [];
gdjs.InstructionsCode.GDArrowOppositeObjects1= [];
gdjs.InstructionsCode.GDArrowOppositeObjects2= [];
gdjs.InstructionsCode.GDArrowOppositeObjects3= [];
gdjs.InstructionsCode.GDArrowObjects1= [];
gdjs.InstructionsCode.GDArrowObjects2= [];
gdjs.InstructionsCode.GDArrowObjects3= [];
gdjs.InstructionsCode.GDStoneObjects1= [];
gdjs.InstructionsCode.GDStoneObjects2= [];
gdjs.InstructionsCode.GDStoneObjects3= [];
gdjs.InstructionsCode.GDAvoidTextObjects1= [];
gdjs.InstructionsCode.GDAvoidTextObjects2= [];
gdjs.InstructionsCode.GDAvoidTextObjects3= [];
gdjs.InstructionsCode.GDArrowSignObjects1= [];
gdjs.InstructionsCode.GDArrowSignObjects2= [];
gdjs.InstructionsCode.GDArrowSignObjects3= [];
gdjs.InstructionsCode.GDGoldStarObjects1= [];
gdjs.InstructionsCode.GDGoldStarObjects2= [];
gdjs.InstructionsCode.GDGoldStarObjects3= [];
gdjs.InstructionsCode.GDSilverBoltObjects1= [];
gdjs.InstructionsCode.GDSilverBoltObjects2= [];
gdjs.InstructionsCode.GDSilverBoltObjects3= [];
gdjs.InstructionsCode.GDPowerUpObjects1= [];
gdjs.InstructionsCode.GDPowerUpObjects2= [];
gdjs.InstructionsCode.GDPowerUpObjects3= [];
gdjs.InstructionsCode.GDShieldRedPowerupObjects1= [];
gdjs.InstructionsCode.GDShieldRedPowerupObjects2= [];
gdjs.InstructionsCode.GDShieldRedPowerupObjects3= [];
gdjs.InstructionsCode.GDpowerupsExplanationObjects1= [];
gdjs.InstructionsCode.GDpowerupsExplanationObjects2= [];
gdjs.InstructionsCode.GDpowerupsExplanationObjects3= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};
gdjs.InstructionsCode.conditionTrue_2 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_2 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_2 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_2 = {val:false};


gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReadyTextObjects1Objects = Hashtable.newFrom({"ReadyText": gdjs.InstructionsCode.GDReadyTextObjects1});gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ReadyText"), gdjs.InstructionsCode.GDReadyTextObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReadyTextObjects1Objects, runtimeScene, true, true);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArrowSign"), gdjs.InstructionsCode.GDArrowSignObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDArrowSignObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDArrowSignObjects1[i].hide();
}
}}

}


};gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReadyTextObjects3Objects = Hashtable.newFrom({"ReadyText": gdjs.InstructionsCode.GDReadyTextObjects3});gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReadyTextObjects2Objects = Hashtable.newFrom({"ReadyText": gdjs.InstructionsCode.GDReadyTextObjects2});gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.InstructionsCode.GDReadyTextObjects2.length = 0;


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition0IsTrue_0;
gdjs.InstructionsCode.GDReadyTextObjects2_1final.length = 0;gdjs.InstructionsCode.condition0IsTrue_1.val = false;
gdjs.InstructionsCode.condition1IsTrue_1.val = false;
{
{gdjs.InstructionsCode.conditionTrue_2 = gdjs.InstructionsCode.condition0IsTrue_1;
gdjs.InstructionsCode.condition0IsTrue_2.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_2.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}gdjs.InstructionsCode.conditionTrue_2.val = true && gdjs.InstructionsCode.condition0IsTrue_2.val;
}
if( gdjs.InstructionsCode.condition0IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ReadyText"), gdjs.InstructionsCode.GDReadyTextObjects3);
{gdjs.InstructionsCode.conditionTrue_2 = gdjs.InstructionsCode.condition1IsTrue_1;
gdjs.InstructionsCode.condition0IsTrue_2.val = false;
gdjs.InstructionsCode.condition1IsTrue_2.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReadyTextObjects3Objects, runtimeScene, true, false);
}if ( gdjs.InstructionsCode.condition0IsTrue_2.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.InstructionsCode.conditionTrue_2.val = true && gdjs.InstructionsCode.condition0IsTrue_2.val && gdjs.InstructionsCode.condition1IsTrue_2.val;
}
if( gdjs.InstructionsCode.condition1IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InstructionsCode.GDReadyTextObjects3.length;j<jLen;++j) {
        if ( gdjs.InstructionsCode.GDReadyTextObjects2_1final.indexOf(gdjs.InstructionsCode.GDReadyTextObjects3[j]) === -1 )
            gdjs.InstructionsCode.GDReadyTextObjects2_1final.push(gdjs.InstructionsCode.GDReadyTextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.InstructionsCode.GDReadyTextObjects2_1final, gdjs.InstructionsCode.GDReadyTextObjects2);
}
}
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play", false);
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 2);
}}

}


{



}


{

gdjs.InstructionsCode.GDReadyTextObjects1.length = 0;


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition0IsTrue_0;
gdjs.InstructionsCode.GDReadyTextObjects1_1final.length = 0;gdjs.InstructionsCode.condition0IsTrue_1.val = false;
gdjs.InstructionsCode.condition1IsTrue_1.val = false;
{
{gdjs.InstructionsCode.conditionTrue_2 = gdjs.InstructionsCode.condition0IsTrue_1;
gdjs.InstructionsCode.condition0IsTrue_2.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}gdjs.InstructionsCode.conditionTrue_2.val = true && gdjs.InstructionsCode.condition0IsTrue_2.val;
}
if( gdjs.InstructionsCode.condition0IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ReadyText"), gdjs.InstructionsCode.GDReadyTextObjects2);
{gdjs.InstructionsCode.conditionTrue_2 = gdjs.InstructionsCode.condition1IsTrue_1;
gdjs.InstructionsCode.condition0IsTrue_2.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReadyTextObjects2Objects, runtimeScene, true, false);
}gdjs.InstructionsCode.conditionTrue_2.val = true && gdjs.InstructionsCode.condition0IsTrue_2.val;
}
if( gdjs.InstructionsCode.condition1IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InstructionsCode.GDReadyTextObjects2.length;j<jLen;++j) {
        if ( gdjs.InstructionsCode.GDReadyTextObjects1_1final.indexOf(gdjs.InstructionsCode.GDReadyTextObjects2[j]) === -1 )
            gdjs.InstructionsCode.GDReadyTextObjects1_1final.push(gdjs.InstructionsCode.GDReadyTextObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.InstructionsCode.GDReadyTextObjects1_1final, gdjs.InstructionsCode.GDReadyTextObjects1);
}
}
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArrowSign"), gdjs.InstructionsCode.GDArrowSignObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDArrowSignObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDArrowSignObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 3);
}}

}


};gdjs.InstructionsCode.eventsList2 = function(runtimeScene) {

{


gdjs.InstructionsCode.eventsList0(runtimeScene);
}


{


gdjs.InstructionsCode.eventsList1(runtimeScene);
}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDSnowBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDSnowBackgroundObjects2.length = 0;
gdjs.InstructionsCode.GDSnowBackgroundObjects3.length = 0;
gdjs.InstructionsCode.GDSnowballStaticObjects1.length = 0;
gdjs.InstructionsCode.GDSnowballStaticObjects2.length = 0;
gdjs.InstructionsCode.GDSnowballStaticObjects3.length = 0;
gdjs.InstructionsCode.GDReadyTextObjects1.length = 0;
gdjs.InstructionsCode.GDReadyTextObjects2.length = 0;
gdjs.InstructionsCode.GDReadyTextObjects3.length = 0;
gdjs.InstructionsCode.GDInstructionsTitleObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsTitleObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsTitleObjects3.length = 0;
gdjs.InstructionsCode.GDInstructionsTextObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsTextObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsTextObjects3.length = 0;
gdjs.InstructionsCode.GDThisIsYouTextObjects1.length = 0;
gdjs.InstructionsCode.GDThisIsYouTextObjects2.length = 0;
gdjs.InstructionsCode.GDThisIsYouTextObjects3.length = 0;
gdjs.InstructionsCode.GDArrowOppositeObjects1.length = 0;
gdjs.InstructionsCode.GDArrowOppositeObjects2.length = 0;
gdjs.InstructionsCode.GDArrowOppositeObjects3.length = 0;
gdjs.InstructionsCode.GDArrowObjects1.length = 0;
gdjs.InstructionsCode.GDArrowObjects2.length = 0;
gdjs.InstructionsCode.GDArrowObjects3.length = 0;
gdjs.InstructionsCode.GDStoneObjects1.length = 0;
gdjs.InstructionsCode.GDStoneObjects2.length = 0;
gdjs.InstructionsCode.GDStoneObjects3.length = 0;
gdjs.InstructionsCode.GDAvoidTextObjects1.length = 0;
gdjs.InstructionsCode.GDAvoidTextObjects2.length = 0;
gdjs.InstructionsCode.GDAvoidTextObjects3.length = 0;
gdjs.InstructionsCode.GDArrowSignObjects1.length = 0;
gdjs.InstructionsCode.GDArrowSignObjects2.length = 0;
gdjs.InstructionsCode.GDArrowSignObjects3.length = 0;
gdjs.InstructionsCode.GDGoldStarObjects1.length = 0;
gdjs.InstructionsCode.GDGoldStarObjects2.length = 0;
gdjs.InstructionsCode.GDGoldStarObjects3.length = 0;
gdjs.InstructionsCode.GDSilverBoltObjects1.length = 0;
gdjs.InstructionsCode.GDSilverBoltObjects2.length = 0;
gdjs.InstructionsCode.GDSilverBoltObjects3.length = 0;
gdjs.InstructionsCode.GDPowerUpObjects1.length = 0;
gdjs.InstructionsCode.GDPowerUpObjects2.length = 0;
gdjs.InstructionsCode.GDPowerUpObjects3.length = 0;
gdjs.InstructionsCode.GDShieldRedPowerupObjects1.length = 0;
gdjs.InstructionsCode.GDShieldRedPowerupObjects2.length = 0;
gdjs.InstructionsCode.GDShieldRedPowerupObjects3.length = 0;
gdjs.InstructionsCode.GDpowerupsExplanationObjects1.length = 0;
gdjs.InstructionsCode.GDpowerupsExplanationObjects2.length = 0;
gdjs.InstructionsCode.GDpowerupsExplanationObjects3.length = 0;

gdjs.InstructionsCode.eventsList2(runtimeScene);
return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
