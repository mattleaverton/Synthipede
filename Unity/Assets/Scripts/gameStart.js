#pragma strict

function Awake(){
	MaxLaunch.sendValueToMax = 1; 
	
	}
function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.W)){
		MaxLaunch.wPressed = 1;
	} else if (Input.GetKeyUp(KeyCode.W)){
		MaxLaunch.wPressed = 2;
	} else{
		MaxLaunch.wPressed = 0;
	}
	if(Input.GetKeyDown(KeyCode.A)){
		MaxLaunch.aPressed = 1;
	} else if (Input.GetKeyUp(KeyCode.A)){
		MaxLaunch.aPressed = 2;
	} else{
		MaxLaunch.aPressed = 0;
	}
	if(Input.GetKeyDown(KeyCode.S)){
		MaxLaunch.sPressed = 1;
	} else if (Input.GetKeyUp(KeyCode.S)){
		MaxLaunch.sPressed = 2;
	} else{
		MaxLaunch.sPressed = 0;
	}
	if(Input.GetKeyDown(KeyCode.D)){
		MaxLaunch.dPressed = 1;
	} else if (Input.GetKeyUp(KeyCode.D)){
		MaxLaunch.dPressed = 2;
	} else{
		MaxLaunch.dPressed = 0;
	}
	if(Input.GetKeyDown(KeyCode.Q))
	{
		MaxLaunch.sendValueToMax = 0;
		Application.Quit();
	}
	

}