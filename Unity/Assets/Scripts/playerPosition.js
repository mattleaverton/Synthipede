#pragma strict

function Start () {

}

function Update () {
	MaxLaunch.charX = (transform.position.x);
	MaxLaunch.charZ = (transform.position.z);
	MaxLaunch.charY = (transform.position.y);
	MaxLaunch.rotX = (transform.rotation.x) * 100;
	MaxLaunch.rotY = (transform.localEulerAngles.y);
	MaxLaunch.rotZ = (transform.localEulerAngles.z);
//	Debug.Log(transform.localEulerAngles.y);

}