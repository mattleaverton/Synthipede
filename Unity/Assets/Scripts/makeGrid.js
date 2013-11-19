#pragma strict

var gridObject : Transform;
var gridLocation : Vector3;
var rows : int = 0;
var columns : int = 0;
var squareSize : int = 1;

function Start () {
	
	for(var rowX = 0; rowX < rows; rowX++){
		for(var rowZ = 0; rowZ < columns; rowZ++){
			var gridPiece : Transform = Instantiate(gridObject, Vector3((rowX * squareSize) + gridLocation.x, gridLocation.y, (rowZ * squareSize) + gridLocation.z) * 1.05, Quaternion.identity);
			gridPiece.transform.localScale = Vector3(squareSize, 0.1, squareSize);
			gridPiece.name = rowX+", "+rowZ;
		}
	}
	
}
