#pragma strict

function Awake(){
	MaxLaunch.sendValueToMax = 1; 
	
	}
function Start () {

}

function Update () {

	if(Input.GetKey(KeyCode.W)){
		MaxLaunch.wPressed = 1;
	} else{
		MaxLaunch.wPressed = 0;
	}
	if(Input.GetKey(KeyCode.A)){
		MaxLaunch.aPressed = 1;
	} else{
		MaxLaunch.aPressed = 0;
	}
	if(Input.GetKey(KeyCode.S)){
		MaxLaunch.sPressed = 1;
	} else{
		MaxLaunch.sPressed = 0;
	}
	if(Input.GetKey(KeyCode.D)){
		MaxLaunch.dPressed = 1;
	} else{
		MaxLaunch.dPressed = 0;
	}
	if(Input.GetKeyDown(KeyCode.Q))
	{
		MaxLaunch.sendValueToMax = 0;
		Application.Quit();
	}
	

}