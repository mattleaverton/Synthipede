#pragma strict

var keyNumber : int = 0;

function OnCollisionEnter(){
//	if(theCollision.gameObject.name == "FPC"){
		MaxLaunch.pianoKey = keyNumber;
		//Debug.Log("Hey!");
//	}

}