using UnityEngine;
using System.Collections;

public class MaxLaunch : MonoBehaviour
{
	public string positionX = "position playerx";
	public string positionZ = "position playerz";
	public string positionY = "position playery";
	public string rotationX = "position rotx";
	public string rotationY = "position roty";
	public string rotationZ = "position rotz";

	public static int spaceCount = 0;

	public static int charX = 0;
	public static int charZ = 0;
	public static int charY = 0;
	public static int rotX = 0;
	public static int rotY = 0;
	public static int rotZ = 0;
				
	// UDPOut script;
	private UdpOut udpOutScript;
	
	
	void Start () {
		// Find the UdpOut and assign it
		udpOutScript = (UdpOut)FindObjectOfType (typeof(UdpOut));
	}

	void Update () {
		if(udpOutScript)
		{
			udpOutScript.SendInt (positionX, charX);
			udpOutScript.SendInt (positionZ, charZ);
			udpOutScript.SendInt (positionY, charY);
			udpOutScript.SendInt (rotationX, rotX);
			udpOutScript.SendInt (rotationY, rotY);
			udpOutScript.SendInt (rotationZ, rotZ);
		}
	}
}
