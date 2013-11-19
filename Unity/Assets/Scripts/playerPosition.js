#pragma strict

var respawnPosition : Vector3;

function Update () {
	MaxLaunch.charX = (transform.position.x);
	MaxLaunch.charZ = (transform.position.z);
	MaxLaunch.charY = (transform.position.y);
	MaxLaunch.rotX = (transform.rotation.x) * 100;
	MaxLaunch.rotY = (transform.localEulerAngles.y);
	MaxLaunch.rotZ = (transform.localEulerAngles.z);
//	Debug.Log(transform.localEulerAngles.y);


	if(transform.position.y < -1){
		transform.position.x = respawnPosition.x;
		transform.position.y = respawnPosition.y;
		transform.position.z = respawnPosition.z;
	}
}