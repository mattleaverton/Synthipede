// http://answers.unity3d.com/questions/434908/how-to-keep-raycast-lined-up-with-main-camers-cros.html

#pragma strict
var chTexture : Texture2D;
var positionch : Rect;
static var ch = true;
 
function Start () {
	Screen.lockCursor = true;
}
 
function Update() // If we don't do this, we can't update the size.
{
    positionch = Rect((Screen.width - chTexture.width/32) / 2, (Screen.height - 
        chTexture.height/32) /2, chTexture.width/32, chTexture.height/32);
}
//We need to draw the texture on the gui 
function OnGUI()
{
    if(ch == true)
    {
        GUI.DrawTexture(positionch, chTexture);
    }
}


