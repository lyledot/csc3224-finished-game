gdjs.OpeningCode = {};
gdjs.OpeningCode.GDExitTextObjects2_1final = [];

gdjs.OpeningCode.GDPlayTextObjects2_1final = [];

gdjs.OpeningCode.GDPlayTextObjects3_1final = [];

gdjs.OpeningCode.GDSoundObjects3_1final = [];

gdjs.OpeningCode.GDSnowBackgroundObjects1= [];
gdjs.OpeningCode.GDSnowBackgroundObjects2= [];
gdjs.OpeningCode.GDSnowBackgroundObjects3= [];
gdjs.OpeningCode.GDSnowBackgroundObjects4= [];
gdjs.OpeningCode.GDGameTitleObjects1= [];
gdjs.OpeningCode.GDGameTitleObjects2= [];
gdjs.OpeningCode.GDGameTitleObjects3= [];
gdjs.OpeningCode.GDGameTitleObjects4= [];
gdjs.OpeningCode.GDPlayTextObjects1= [];
gdjs.OpeningCode.GDPlayTextObjects2= [];
gdjs.OpeningCode.GDPlayTextObjects3= [];
gdjs.OpeningCode.GDPlayTextObjects4= [];
gdjs.OpeningCode.GDExitTextObjects1= [];
gdjs.OpeningCode.GDExitTextObjects2= [];
gdjs.OpeningCode.GDExitTextObjects3= [];
gdjs.OpeningCode.GDExitTextObjects4= [];
gdjs.OpeningCode.GDSignArrowExitObjects1= [];
gdjs.OpeningCode.GDSignArrowExitObjects2= [];
gdjs.OpeningCode.GDSignArrowExitObjects3= [];
gdjs.OpeningCode.GDSignArrowExitObjects4= [];
gdjs.OpeningCode.GDSignArrowPlayObjects1= [];
gdjs.OpeningCode.GDSignArrowPlayObjects2= [];
gdjs.OpeningCode.GDSignArrowPlayObjects3= [];
gdjs.OpeningCode.GDSignArrowPlayObjects4= [];
gdjs.OpeningCode.GDSnowyTreeObjects1= [];
gdjs.OpeningCode.GDSnowyTreeObjects2= [];
gdjs.OpeningCode.GDSnowyTreeObjects3= [];
gdjs.OpeningCode.GDSnowyTreeObjects4= [];
gdjs.OpeningCode.GDSoundObjects1= [];
gdjs.OpeningCode.GDSoundObjects2= [];
gdjs.OpeningCode.GDSoundObjects3= [];
gdjs.OpeningCode.GDSoundObjects4= [];
gdjs.OpeningCode.GDSignArrowSoundObjects1= [];
gdjs.OpeningCode.GDSignArrowSoundObjects2= [];
gdjs.OpeningCode.GDSignArrowSoundObjects3= [];
gdjs.OpeningCode.GDSignArrowSoundObjects4= [];

gdjs.OpeningCode.conditionTrue_0 = {val:false};
gdjs.OpeningCode.condition0IsTrue_0 = {val:false};
gdjs.OpeningCode.condition1IsTrue_0 = {val:false};
gdjs.OpeningCode.condition2IsTrue_0 = {val:false};
gdjs.OpeningCode.condition3IsTrue_0 = {val:false};
gdjs.OpeningCode.conditionTrue_1 = {val:false};
gdjs.OpeningCode.condition0IsTrue_1 = {val:false};
gdjs.OpeningCode.condition1IsTrue_1 = {val:false};
gdjs.OpeningCode.condition2IsTrue_1 = {val:false};
gdjs.OpeningCode.condition3IsTrue_1 = {val:false};
gdjs.OpeningCode.conditionTrue_2 = {val:false};
gdjs.OpeningCode.condition0IsTrue_2 = {val:false};
gdjs.OpeningCode.condition1IsTrue_2 = {val:false};
gdjs.OpeningCode.condition2IsTrue_2 = {val:false};
gdjs.OpeningCode.condition3IsTrue_2 = {val:false};


gdjs.OpeningCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignArrowExit"), gdjs.OpeningCode.GDSignArrowExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("SignArrowPlay"), gdjs.OpeningCode.GDSignArrowPlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("SignArrowSound"), gdjs.OpeningCode.GDSignArrowSoundObjects2);
{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowExitObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowExitObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowSoundObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowSoundObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowPlayObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowPlayObjects2[i].hide();
}
}}

}


{



}


{


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("muted").setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(2);
}}

}


};gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDSoundObjects4Objects = Hashtable.newFrom({"Sound": gdjs.OpeningCode.GDSoundObjects4});gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDPlayTextObjects4Objects = Hashtable.newFrom({"PlayText": gdjs.OpeningCode.GDPlayTextObjects4});gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDExitTextObjects3Objects = Hashtable.newFrom({"ExitText": gdjs.OpeningCode.GDExitTextObjects3});gdjs.OpeningCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{

gdjs.OpeningCode.GDSoundObjects3.length = 0;


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
{gdjs.OpeningCode.conditionTrue_1 = gdjs.OpeningCode.condition0IsTrue_0;
gdjs.OpeningCode.GDSoundObjects3_1final.length = 0;gdjs.OpeningCode.condition0IsTrue_1.val = false;
gdjs.OpeningCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.OpeningCode.GDSoundObjects4);
gdjs.OpeningCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDSoundObjects4Objects, runtimeScene, true, false);
if( gdjs.OpeningCode.condition0IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.OpeningCode.GDSoundObjects4.length;j<jLen;++j) {
        if ( gdjs.OpeningCode.GDSoundObjects3_1final.indexOf(gdjs.OpeningCode.GDSoundObjects4[j]) === -1 )
            gdjs.OpeningCode.GDSoundObjects3_1final.push(gdjs.OpeningCode.GDSoundObjects4[j]);
    }
}
}
{
gdjs.OpeningCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
if( gdjs.OpeningCode.condition1IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.OpeningCode.GDSoundObjects3_1final, gdjs.OpeningCode.GDSoundObjects3);
}
}
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignArrowExit"), gdjs.OpeningCode.GDSignArrowExitObjects3);
gdjs.copyArray(runtimeScene.getObjects("SignArrowPlay"), gdjs.OpeningCode.GDSignArrowPlayObjects3);
gdjs.copyArray(runtimeScene.getObjects("SignArrowSound"), gdjs.OpeningCode.GDSignArrowSoundObjects3);
{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowSoundObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowSoundObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowPlayObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowPlayObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowExitObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowExitObjects3[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu Move.mp3", 3, false, 100, 1);
}}

}


{

gdjs.OpeningCode.GDPlayTextObjects3.length = 0;


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
{gdjs.OpeningCode.conditionTrue_1 = gdjs.OpeningCode.condition0IsTrue_0;
gdjs.OpeningCode.GDPlayTextObjects3_1final.length = 0;gdjs.OpeningCode.condition0IsTrue_1.val = false;
gdjs.OpeningCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.OpeningCode.GDPlayTextObjects4);
gdjs.OpeningCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDPlayTextObjects4Objects, runtimeScene, true, false);
if( gdjs.OpeningCode.condition0IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.OpeningCode.GDPlayTextObjects4.length;j<jLen;++j) {
        if ( gdjs.OpeningCode.GDPlayTextObjects3_1final.indexOf(gdjs.OpeningCode.GDPlayTextObjects4[j]) === -1 )
            gdjs.OpeningCode.GDPlayTextObjects3_1final.push(gdjs.OpeningCode.GDPlayTextObjects4[j]);
    }
}
}
{
gdjs.OpeningCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
if( gdjs.OpeningCode.condition1IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.OpeningCode.GDPlayTextObjects3_1final, gdjs.OpeningCode.GDPlayTextObjects3);
}
}
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignArrowExit"), gdjs.OpeningCode.GDSignArrowExitObjects3);
gdjs.copyArray(runtimeScene.getObjects("SignArrowPlay"), gdjs.OpeningCode.GDSignArrowPlayObjects3);
gdjs.copyArray(runtimeScene.getObjects("SignArrowSound"), gdjs.OpeningCode.GDSignArrowSoundObjects3);
{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowPlayObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowPlayObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowSoundObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowSoundObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowExitObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowExitObjects3[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(2);
}}

}


{

gdjs.OpeningCode.GDExitTextObjects2.length = 0;


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
{gdjs.OpeningCode.conditionTrue_1 = gdjs.OpeningCode.condition0IsTrue_0;
gdjs.OpeningCode.GDExitTextObjects2_1final.length = 0;gdjs.OpeningCode.condition0IsTrue_1.val = false;
gdjs.OpeningCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.OpeningCode.GDExitTextObjects3);
gdjs.OpeningCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDExitTextObjects3Objects, runtimeScene, true, false);
if( gdjs.OpeningCode.condition0IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.OpeningCode.GDExitTextObjects3.length;j<jLen;++j) {
        if ( gdjs.OpeningCode.GDExitTextObjects2_1final.indexOf(gdjs.OpeningCode.GDExitTextObjects3[j]) === -1 )
            gdjs.OpeningCode.GDExitTextObjects2_1final.push(gdjs.OpeningCode.GDExitTextObjects3[j]);
    }
}
}
{
gdjs.OpeningCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
if( gdjs.OpeningCode.condition1IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.OpeningCode.GDExitTextObjects2_1final, gdjs.OpeningCode.GDExitTextObjects2);
}
}
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SignArrowExit"), gdjs.OpeningCode.GDSignArrowExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("SignArrowPlay"), gdjs.OpeningCode.GDSignArrowPlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("SignArrowSound"), gdjs.OpeningCode.GDSignArrowSoundObjects2);
{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowPlayObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowPlayObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowSoundObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowSoundObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OpeningCode.GDSignArrowExitObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDSignArrowExitObjects2[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu Move.mp3", 3, false, 100, 1);
}}

}


};gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDPlayTextObjects3Objects = Hashtable.newFrom({"PlayText": gdjs.OpeningCode.GDPlayTextObjects3});gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDExitTextObjects3Objects = Hashtable.newFrom({"ExitText": gdjs.OpeningCode.GDExitTextObjects3});gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.OpeningCode.GDSoundObjects1});gdjs.OpeningCode.eventsList2 = function(runtimeScene) {

{


gdjs.OpeningCode.condition0IsTrue_0.val = false;
gdjs.OpeningCode.condition1IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.OpeningCode.condition0IsTrue_0.val ) {
{
gdjs.OpeningCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
if (gdjs.OpeningCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.OpeningCode.GDSoundObjects1, gdjs.OpeningCode.GDSoundObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.OpeningCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDSoundObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


gdjs.OpeningCode.condition0IsTrue_0.val = false;
gdjs.OpeningCode.condition1IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.OpeningCode.condition0IsTrue_0.val ) {
{
gdjs.OpeningCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
if (gdjs.OpeningCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OpeningCode.GDSoundObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.OpeningCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDSoundObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.OpeningCode.eventsList3 = function(runtimeScene) {

{


gdjs.OpeningCode.eventsList1(runtimeScene);
}


{



}


{

gdjs.OpeningCode.GDPlayTextObjects2.length = 0;


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
{gdjs.OpeningCode.conditionTrue_1 = gdjs.OpeningCode.condition0IsTrue_0;
gdjs.OpeningCode.GDPlayTextObjects2_1final.length = 0;gdjs.OpeningCode.condition0IsTrue_1.val = false;
gdjs.OpeningCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.OpeningCode.GDPlayTextObjects3);
{gdjs.OpeningCode.conditionTrue_2 = gdjs.OpeningCode.condition0IsTrue_1;
gdjs.OpeningCode.condition0IsTrue_2.val = false;
gdjs.OpeningCode.condition1IsTrue_2.val = false;
{
gdjs.OpeningCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDPlayTextObjects3Objects, runtimeScene, true, false);
}if ( gdjs.OpeningCode.condition0IsTrue_2.val ) {
{
gdjs.OpeningCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.OpeningCode.conditionTrue_2.val = true && gdjs.OpeningCode.condition0IsTrue_2.val && gdjs.OpeningCode.condition1IsTrue_2.val;
}
if( gdjs.OpeningCode.condition0IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.OpeningCode.GDPlayTextObjects3.length;j<jLen;++j) {
        if ( gdjs.OpeningCode.GDPlayTextObjects2_1final.indexOf(gdjs.OpeningCode.GDPlayTextObjects3[j]) === -1 )
            gdjs.OpeningCode.GDPlayTextObjects2_1final.push(gdjs.OpeningCode.GDPlayTextObjects3[j]);
    }
}
}
{
{gdjs.OpeningCode.conditionTrue_2 = gdjs.OpeningCode.condition1IsTrue_1;
gdjs.OpeningCode.condition0IsTrue_2.val = false;
gdjs.OpeningCode.condition1IsTrue_2.val = false;
{
gdjs.OpeningCode.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.OpeningCode.condition0IsTrue_2.val ) {
{
gdjs.OpeningCode.condition1IsTrue_2.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}}
gdjs.OpeningCode.conditionTrue_2.val = true && gdjs.OpeningCode.condition0IsTrue_2.val && gdjs.OpeningCode.condition1IsTrue_2.val;
}
if( gdjs.OpeningCode.condition1IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.OpeningCode.GDPlayTextObjects2_1final, gdjs.OpeningCode.GDPlayTextObjects2);
}
}
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu Confirm.mp3", 2, false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


{



}


{

gdjs.OpeningCode.GDExitTextObjects2.length = 0;


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
{gdjs.OpeningCode.conditionTrue_1 = gdjs.OpeningCode.condition0IsTrue_0;
gdjs.OpeningCode.GDExitTextObjects2_1final.length = 0;gdjs.OpeningCode.condition0IsTrue_1.val = false;
gdjs.OpeningCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.OpeningCode.GDExitTextObjects3);
{gdjs.OpeningCode.conditionTrue_2 = gdjs.OpeningCode.condition0IsTrue_1;
gdjs.OpeningCode.condition0IsTrue_2.val = false;
gdjs.OpeningCode.condition1IsTrue_2.val = false;
{
gdjs.OpeningCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDExitTextObjects3Objects, runtimeScene, true, false);
}if ( gdjs.OpeningCode.condition0IsTrue_2.val ) {
{
gdjs.OpeningCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.OpeningCode.conditionTrue_2.val = true && gdjs.OpeningCode.condition0IsTrue_2.val && gdjs.OpeningCode.condition1IsTrue_2.val;
}
if( gdjs.OpeningCode.condition0IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.OpeningCode.GDExitTextObjects3.length;j<jLen;++j) {
        if ( gdjs.OpeningCode.GDExitTextObjects2_1final.indexOf(gdjs.OpeningCode.GDExitTextObjects3[j]) === -1 )
            gdjs.OpeningCode.GDExitTextObjects2_1final.push(gdjs.OpeningCode.GDExitTextObjects3[j]);
    }
}
}
{
{gdjs.OpeningCode.conditionTrue_2 = gdjs.OpeningCode.condition1IsTrue_1;
gdjs.OpeningCode.condition0IsTrue_2.val = false;
gdjs.OpeningCode.condition1IsTrue_2.val = false;
{
gdjs.OpeningCode.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.OpeningCode.condition0IsTrue_2.val ) {
{
gdjs.OpeningCode.condition1IsTrue_2.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}}
gdjs.OpeningCode.conditionTrue_2.val = true && gdjs.OpeningCode.condition0IsTrue_2.val && gdjs.OpeningCode.condition1IsTrue_2.val;
}
if( gdjs.OpeningCode.condition1IsTrue_1.val ) {
    gdjs.OpeningCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.OpeningCode.GDExitTextObjects2_1final, gdjs.OpeningCode.GDExitTextObjects2);
}
}
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu Confirm.mp3", 2, false, 100, 1);
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.OpeningCode.GDSoundObjects1);

gdjs.OpeningCode.condition0IsTrue_0.val = false;
gdjs.OpeningCode.condition1IsTrue_0.val = false;
gdjs.OpeningCode.condition2IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.OpeningCode.condition0IsTrue_0.val ) {
{
gdjs.OpeningCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OpeningCode.condition1IsTrue_0.val ) {
{
{gdjs.OpeningCode.conditionTrue_1 = gdjs.OpeningCode.condition2IsTrue_0;
gdjs.OpeningCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8018220);
}
}}
}
if (gdjs.OpeningCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu Move.mp3", 3, false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs.OpeningCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.OpeningCode.eventsList4 = function(runtimeScene) {

{


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "8bit Bossa.mp3", 0, true, 50, 1);
}}

}


{


gdjs.OpeningCode.eventsList0(runtimeScene);
}


{


gdjs.OpeningCode.eventsList3(runtimeScene);
}


};

gdjs.OpeningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningCode.GDSnowBackgroundObjects1.length = 0;
gdjs.OpeningCode.GDSnowBackgroundObjects2.length = 0;
gdjs.OpeningCode.GDSnowBackgroundObjects3.length = 0;
gdjs.OpeningCode.GDSnowBackgroundObjects4.length = 0;
gdjs.OpeningCode.GDGameTitleObjects1.length = 0;
gdjs.OpeningCode.GDGameTitleObjects2.length = 0;
gdjs.OpeningCode.GDGameTitleObjects3.length = 0;
gdjs.OpeningCode.GDGameTitleObjects4.length = 0;
gdjs.OpeningCode.GDPlayTextObjects1.length = 0;
gdjs.OpeningCode.GDPlayTextObjects2.length = 0;
gdjs.OpeningCode.GDPlayTextObjects3.length = 0;
gdjs.OpeningCode.GDPlayTextObjects4.length = 0;
gdjs.OpeningCode.GDExitTextObjects1.length = 0;
gdjs.OpeningCode.GDExitTextObjects2.length = 0;
gdjs.OpeningCode.GDExitTextObjects3.length = 0;
gdjs.OpeningCode.GDExitTextObjects4.length = 0;
gdjs.OpeningCode.GDSignArrowExitObjects1.length = 0;
gdjs.OpeningCode.GDSignArrowExitObjects2.length = 0;
gdjs.OpeningCode.GDSignArrowExitObjects3.length = 0;
gdjs.OpeningCode.GDSignArrowExitObjects4.length = 0;
gdjs.OpeningCode.GDSignArrowPlayObjects1.length = 0;
gdjs.OpeningCode.GDSignArrowPlayObjects2.length = 0;
gdjs.OpeningCode.GDSignArrowPlayObjects3.length = 0;
gdjs.OpeningCode.GDSignArrowPlayObjects4.length = 0;
gdjs.OpeningCode.GDSnowyTreeObjects1.length = 0;
gdjs.OpeningCode.GDSnowyTreeObjects2.length = 0;
gdjs.OpeningCode.GDSnowyTreeObjects3.length = 0;
gdjs.OpeningCode.GDSnowyTreeObjects4.length = 0;
gdjs.OpeningCode.GDSoundObjects1.length = 0;
gdjs.OpeningCode.GDSoundObjects2.length = 0;
gdjs.OpeningCode.GDSoundObjects3.length = 0;
gdjs.OpeningCode.GDSoundObjects4.length = 0;
gdjs.OpeningCode.GDSignArrowSoundObjects1.length = 0;
gdjs.OpeningCode.GDSignArrowSoundObjects2.length = 0;
gdjs.OpeningCode.GDSignArrowSoundObjects3.length = 0;
gdjs.OpeningCode.GDSignArrowSoundObjects4.length = 0;

gdjs.OpeningCode.eventsList4(runtimeScene);
return;

}

gdjs['OpeningCode'] = gdjs.OpeningCode;
