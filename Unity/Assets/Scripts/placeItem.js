#pragma strict

var fieldTag : String;
var objectTag : String;
var soundObject : Transform;
var rayDistance : float = 0;
var planeX : float = 0;
var planeZ : float = 0;

function Start () {

}

function Update () {
  
  if (Input.GetMouseButtonDown(0))
  {
  	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var hit : RaycastHit;
	
	if (Physics.Raycast (ray, hit, rayDistance)) {
	  if(hit.transform.tag == fieldTag){	
		Instantiate(soundObject, Vector3(hit.point[0], hit.point[1], hit.point[2]), transform.rotation);
	  } else if(hit.transform.tag == objectTag){
	  	Destroy(hit.transform.gameObject);
	  }
	}
  	
  	//Instantiate(soundObject, transform.position, transform.rotation);
  }
//  if (Input.GetMouseButtonDown(1))
//  {
//  	var ray2 = Camera.main.ScreenPointToRay (Input.mousePosition);
//	var hit2 : RaycastHit;
//	
//	if (Physics.Raycast (ray2, hit2, rayDistance)) {
//	  if(hit2.transform.tag == objectTag){	
//		Destroy(hit2.transform.gameObject);
//	  }
//	}
//  
//  }

}