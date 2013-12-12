#pragma strict
	
private var transmit : UdpOut;

function Start () {
	transmit = FindObjectOfType(UdpOut);
}

public var wButton : String = "control keyW";
public var aButton : String = "control keyA";
public var sButton : String = "control keyS";
public var dButton : String = "control keyD";
public var spaceBar : String = "control space";

function Update () {

	/*if(Input.GetKeyDown(KeyCode.W)){
		MaxLaunch.wPressed = 1;
	} else if (Input.GetKeyUp(KeyCode.W)){
		MaxLaunch.wPressed = 2;
	} else{
		MaxLaunch.wPressed = 0;
	}*/
	if(Input.GetKeyDown(KeyCode.W)){
		transmit.SendInt(wButton, 1);
	} else if (Input.GetKeyUp(KeyCode.W)){
		transmit.SendInt(wButton, 0);
	}
	if(Input.GetKeyDown(KeyCode.A)){
		transmit.SendInt(aButton, 1);
	} else if (Input.GetKeyUp(KeyCode.A)){
		transmit.SendInt(aButton, 0);
	} 
	if(Input.GetKeyDown(KeyCode.S)){
		transmit.SendInt(sButton, 1);
	} else if (Input.GetKeyUp(KeyCode.S)){
		transmit.SendInt(sButton, 0);
	}
	if(Input.GetKeyDown(KeyCode.D)){
		transmit.SendInt(dButton, 1);
	} else if (Input.GetKeyUp(KeyCode.D)){
		transmit.SendInt(dButton, 0);
	} 
	if(Input.GetKeyDown(KeyCode.Space)){
		transmit.SendInt(spaceBar, 1);
	} else if (Input.GetKeyUp(KeyCode.Space)){
		transmit.SendInt(spaceBar, 0);
	} 
	

}