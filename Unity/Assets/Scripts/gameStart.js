#pragma strict

function Awake(){
	MaxLaunch.sendValueToMax = 1; 
	
	}
function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Q))
	{
		MaxLaunch.sendValueToMax = 0;
		Application.Quit();
	}
	

}