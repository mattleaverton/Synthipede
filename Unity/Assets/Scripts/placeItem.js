#pragma strict

var fieldTag : String;
var objectTag : String;
var physObject : Transform;
var soundObject : Transform[];
var rayDistance : float = 0;
var planeX : float = 0;
var planeZ : float = 0;
var musicTool : int = 0;

function Start () {

}

function Update () {
  
  if (Input.GetMouseButtonDown(0))
  {
  	//var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var ray = Ray(transform.position, transform.forward);
	var hit : RaycastHit;
	
	
	if (Physics.Raycast (ray, hit, rayDistance)) {
	  //Instantiate(soundObject[1], Vector3(hit.point[0], hit.point[1], hit.point[2]), Quaternion.identity);
	  if(hit.transform.tag == "musSph"){
	  	musicTool = 0;
	  } else if(hit.transform.tag == "musCub"){
	  	musicTool = 1;
	  }
	  
	  if(hit.transform.tag == fieldTag){	
		if(hit.transform.childCount == 0){
		  var musPiece = Instantiate(soundObject[musicTool], Vector3(hit.transform.position.x, soundObject[musicTool].transform.localScale.y/2, hit.transform.position.z), Quaternion.identity);
	  	  musPiece.parent = hit.transform;
	  	} else{
	  	  Destroy(hit.transform.GetChild(0).gameObject);
	  	}
	  } 
	  if(hit.transform.tag == objectTag){	
		Destroy(hit.transform.gameObject);
	  }
	  
	}
  	
  }
  
  if (Input.GetMouseButtonDown(1)) {
  	var newPhys = Instantiate(physObject, transform.position + transform.forward, Quaternion.identity);
  	newPhys.rigidbody.AddForce((transform.forward)*800);
  
  }

}