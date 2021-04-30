gdjs.GameOverCode = {};
gdjs.GameOverCode.GDExitTextObjects1_1final = [];

gdjs.GameOverCode.GDExitTextObjects2_1final = [];

gdjs.GameOverCode.GDRestartTextObjects2_1final = [];

gdjs.GameOverCode.GDSnowBackgroundObjects1= [];
gdjs.GameOverCode.GDSnowBackgroundObjects2= [];
gdjs.GameOverCode.GDSnowBackgroundObjects3= [];
gdjs.GameOverCode.GDGameOverTextObjects1= [];
gdjs.GameOverCode.GDGameOverTextObjects2= [];
gdjs.GameOverCode.GDGameOverTextObjects3= [];
gdjs.GameOverCode.GDRestartTextObjects1= [];
gdjs.GameOverCode.GDRestartTextObjects2= [];
gdjs.GameOverCode.GDRestartTextObjects3= [];
gdjs.GameOverCode.GDExitTextObjects1= [];
gdjs.GameOverCode.GDExitTextObjects2= [];
gdjs.GameOverCode.GDExitTextObjects3= [];
gdjs.GameOverCode.GDFinalScoreObjects1= [];
gdjs.GameOverCode.GDFinalScoreObjects2= [];
gdjs.GameOverCode.GDFinalScoreObjects3= [];
gdjs.GameOverCode.GDSignArrowExitObjects1= [];
gdjs.GameOverCode.GDSignArrowExitObjects2= [];
gdjs.GameOverCode.GDSignArrowExitObjects3= [];
gdjs.GameOverCode.GDSignArrowRestartObjects1= [];
gdjs.GameOverCode.GDSignArrowRestartObjects2= [];
gdjs.GameOverCode.GDSignArrowRestartObjects3= [];
gdjs.GameOverCode.GDTimeSurvivedObjects1= [];
gdjs.GameOverCode.GDTimeSurvivedObjects2= [];
gdjs.GameOverCode.GDTimeSurvivedObjects3= [];
gdjs.GameOverCode.GDBronzeMedalObjects1= [];
gdjs.GameOverCode.GDBronzeMedalObjects2= [];
gdjs.GameOverCode.GDBronzeMedalObjects3= [];
gdjs.GameOverCode.GDSilverMedalObjects1= [];
gdjs.GameOverCode.GDSilverMedalObjects2= [];
gdjs.GameOverCode.GDSilverMedalObjects3= [];
gdjs.GameOverCode.GDGoldMedalObjects1= [];
gdjs.GameOverCode.GDGoldMedalObjects2= [];
gdjs.GameOverCode.GDGoldMedalObjects3= [];
gdjs.GameOverCode.GDEmptyMedalObjects1= [];
gdjs.GameOverCode.GDEmptyMedalObjects2= [];
gdjs.GameOverCode.GDEmptyMedalObjects3= [];
gdjs.GameOverCode.GDMedalTextObjects1= [];
gdjs.GameOverCode.GDMedalTextObjects2= [];
gdjs.GameOverCode.GDMedalTextObjects3= [];
gdjs.GameOverCode.GDQuestionMarksObjects1= [];
gdjs.GameOverCode.GDQuestionMarksObjects2= [];
gdjs.GameOverCode.GDQuestionMarksObjects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};
gdjs.GameOverCode.conditionTrue_2 = {val:false};
gdjs.GameOverCode.condition0IsTrue_2 = {val:false};
gdjs.GameOverCode.condition1IsTrue_2 = {val:false};
gdjs.GameOverCode.condition2IsTrue_2 = {val:false};
gdjs.GameOverCode.conditionTrue_3 = {val:false};
gdjs.GameOverCode.condition0IsTrue_3 = {val:false};
gdjs.GameOverCode.condition1IsTrue_3 = {val:false};
gdjs.GameOverCode.condition2IsTrue_3 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.GameOverCode.GDFinalScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("SignArrowExit"), gdjs.GameOverCode.GDSignArrowExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimeSurvived"), gdjs.GameOverCode.GDTimeSurvivedObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDSignArrowExitObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSignArrowExitObjects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameOverCode.GDFinalScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFinalScoreObjects1[i].setString("Final Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDTimeSurvivedObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTimeSurvivedObjects1[i].setString("Time Rolled: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + "s");
}
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitTextObjects3Objects = Hashtable.newFrom({"ExitText": gdjs.GameOverCode.GDExitTextObjects3});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartTextObjects3Objects = Hashtable.newFrom({"RestartText": gdjs.GameOverCode.GDRestartTextObjects3});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartTextObjects3Objects = Hashtable.newFrom({"RestartText": gdjs.GameOverCode.GDRestartTextObjects3});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitTextObjects2Objects = Hashtable.newFrom({"ExitText": gdjs.GameOverCode.GDExitTextObjects2});gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.GameOverCode.GDExitTextObjects2.length = 0;


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.GDExitTextObjects2_1final.length = 0;gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition0IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
gdjs.GameOverCode.condition1IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.GameOverCode.condition0IsTrue_2.val ) {
{
{gdjs.GameOverCode.conditionTrue_3 = gdjs.GameOverCode.condition1IsTrue_2;
gdjs.GameOverCode.conditionTrue_3.val = runtimeScene.getOnceTriggers().triggerOnce(8986556);
}
}}
gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val && gdjs.GameOverCode.condition1IsTrue_2.val;
}
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.GameOverCode.GDExitTextObjects3);
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition1IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitTextObjects3Objects, runtimeScene, true, false);
}gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val;
}
if( gdjs.GameOverCode.condition1IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameOverCode.GDExitTextObjects3.length;j<jLen;++j) {
        if ( gdjs.GameOverCode.GDExitTextObjects2_1final.indexOf(gdjs.GameOverCode.GDExitTextObjects3[j]) === -1 )
            gdjs.GameOverCode.GDExitTextObjects2_1final.push(gdjs.GameOverCode.GDExitTextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameOverCode.GDExitTextObjects2_1final, gdjs.GameOverCode.GDExitTextObjects2);
}
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignArrowExit"), gdjs.GameOverCode.GDSignArrowExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("SignArrowRestart"), gdjs.GameOverCode.GDSignArrowRestartObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDSignArrowRestartObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSignArrowRestartObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSignArrowExitObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSignArrowExitObjects2[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.GameOverCode.GDRestartTextObjects2.length = 0;


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.GDRestartTextObjects2_1final.length = 0;gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition0IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
gdjs.GameOverCode.condition1IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.GameOverCode.condition0IsTrue_2.val ) {
{
{gdjs.GameOverCode.conditionTrue_3 = gdjs.GameOverCode.condition1IsTrue_2;
gdjs.GameOverCode.conditionTrue_3.val = runtimeScene.getOnceTriggers().triggerOnce(8988900);
}
}}
gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val && gdjs.GameOverCode.condition1IsTrue_2.val;
}
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameOverCode.GDRestartTextObjects3);
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition1IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartTextObjects3Objects, runtimeScene, true, false);
}gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val;
}
if( gdjs.GameOverCode.condition1IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameOverCode.GDRestartTextObjects3.length;j<jLen;++j) {
        if ( gdjs.GameOverCode.GDRestartTextObjects2_1final.indexOf(gdjs.GameOverCode.GDRestartTextObjects3[j]) === -1 )
            gdjs.GameOverCode.GDRestartTextObjects2_1final.push(gdjs.GameOverCode.GDRestartTextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameOverCode.GDRestartTextObjects2_1final, gdjs.GameOverCode.GDRestartTextObjects2);
}
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignArrowExit"), gdjs.GameOverCode.GDSignArrowExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("SignArrowRestart"), gdjs.GameOverCode.GDSignArrowRestartObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDSignArrowExitObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSignArrowExitObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSignArrowRestartObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSignArrowRestartObjects2[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.GameOverCode.GDRestartTextObjects2.length = 0;


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.GDRestartTextObjects2_1final.length = 0;gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition0IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
gdjs.GameOverCode.condition1IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.GameOverCode.condition0IsTrue_2.val ) {
{
gdjs.GameOverCode.condition1IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}}
gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val && gdjs.GameOverCode.condition1IsTrue_2.val;
}
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameOverCode.GDRestartTextObjects3);
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition1IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
gdjs.GameOverCode.condition1IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartTextObjects3Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_2.val ) {
{
gdjs.GameOverCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val && gdjs.GameOverCode.condition1IsTrue_2.val;
}
if( gdjs.GameOverCode.condition1IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameOverCode.GDRestartTextObjects3.length;j<jLen;++j) {
        if ( gdjs.GameOverCode.GDRestartTextObjects2_1final.indexOf(gdjs.GameOverCode.GDRestartTextObjects3[j]) === -1 )
            gdjs.GameOverCode.GDRestartTextObjects2_1final.push(gdjs.GameOverCode.GDRestartTextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameOverCode.GDRestartTextObjects2_1final, gdjs.GameOverCode.GDRestartTextObjects2);
}
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play", false);
}}

}


{



}


{

gdjs.GameOverCode.GDExitTextObjects1.length = 0;


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.GDExitTextObjects1_1final.length = 0;gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition0IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
gdjs.GameOverCode.condition1IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.GameOverCode.condition0IsTrue_2.val ) {
{
gdjs.GameOverCode.condition1IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}}
gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val && gdjs.GameOverCode.condition1IsTrue_2.val;
}
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.GameOverCode.GDExitTextObjects2);
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition1IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
gdjs.GameOverCode.condition1IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitTextObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_2.val ) {
{
gdjs.GameOverCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.GameOverCode.conditionTrue_2.val = true && gdjs.GameOverCode.condition0IsTrue_2.val && gdjs.GameOverCode.condition1IsTrue_2.val;
}
if( gdjs.GameOverCode.condition1IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameOverCode.GDExitTextObjects2.length;j<jLen;++j) {
        if ( gdjs.GameOverCode.GDExitTextObjects1_1final.indexOf(gdjs.GameOverCode.GDExitTextObjects2[j]) === -1 )
            gdjs.GameOverCode.GDExitTextObjects1_1final.push(gdjs.GameOverCode.GDExitTextObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameOverCode.GDExitTextObjects1_1final, gdjs.GameOverCode.GDExitTextObjects1);
}
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 500;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BronzeMedal"), gdjs.GameOverCode.GDBronzeMedalObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDBronzeMedalObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDBronzeMedalObjects2[i].hide();
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2500;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SilverMedal"), gdjs.GameOverCode.GDSilverMedalObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDSilverMedalObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSilverMedalObjects2[i].hide();
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 5000;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoldMedal"), gdjs.GameOverCode.GDGoldMedalObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDGoldMedalObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGoldMedalObjects1[i].hide();
}
}}

}


};gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameOverCode.eventsList0(runtimeScene);
}


{


gdjs.GameOverCode.eventsList1(runtimeScene);
}


{


gdjs.GameOverCode.eventsList2(runtimeScene);
}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDSnowBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDSnowBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDSnowBackgroundObjects3.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects3.length = 0;
gdjs.GameOverCode.GDRestartTextObjects1.length = 0;
gdjs.GameOverCode.GDRestartTextObjects2.length = 0;
gdjs.GameOverCode.GDRestartTextObjects3.length = 0;
gdjs.GameOverCode.GDExitTextObjects1.length = 0;
gdjs.GameOverCode.GDExitTextObjects2.length = 0;
gdjs.GameOverCode.GDExitTextObjects3.length = 0;
gdjs.GameOverCode.GDFinalScoreObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreObjects3.length = 0;
gdjs.GameOverCode.GDSignArrowExitObjects1.length = 0;
gdjs.GameOverCode.GDSignArrowExitObjects2.length = 0;
gdjs.GameOverCode.GDSignArrowExitObjects3.length = 0;
gdjs.GameOverCode.GDSignArrowRestartObjects1.length = 0;
gdjs.GameOverCode.GDSignArrowRestartObjects2.length = 0;
gdjs.GameOverCode.GDSignArrowRestartObjects3.length = 0;
gdjs.GameOverCode.GDTimeSurvivedObjects1.length = 0;
gdjs.GameOverCode.GDTimeSurvivedObjects2.length = 0;
gdjs.GameOverCode.GDTimeSurvivedObjects3.length = 0;
gdjs.GameOverCode.GDBronzeMedalObjects1.length = 0;
gdjs.GameOverCode.GDBronzeMedalObjects2.length = 0;
gdjs.GameOverCode.GDBronzeMedalObjects3.length = 0;
gdjs.GameOverCode.GDSilverMedalObjects1.length = 0;
gdjs.GameOverCode.GDSilverMedalObjects2.length = 0;
gdjs.GameOverCode.GDSilverMedalObjects3.length = 0;
gdjs.GameOverCode.GDGoldMedalObjects1.length = 0;
gdjs.GameOverCode.GDGoldMedalObjects2.length = 0;
gdjs.GameOverCode.GDGoldMedalObjects3.length = 0;
gdjs.GameOverCode.GDEmptyMedalObjects1.length = 0;
gdjs.GameOverCode.GDEmptyMedalObjects2.length = 0;
gdjs.GameOverCode.GDEmptyMedalObjects3.length = 0;
gdjs.GameOverCode.GDMedalTextObjects1.length = 0;
gdjs.GameOverCode.GDMedalTextObjects2.length = 0;
gdjs.GameOverCode.GDMedalTextObjects3.length = 0;
gdjs.GameOverCode.GDQuestionMarksObjects1.length = 0;
gdjs.GameOverCode.GDQuestionMarksObjects2.length = 0;
gdjs.GameOverCode.GDQuestionMarksObjects3.length = 0;

gdjs.GameOverCode.eventsList3(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
