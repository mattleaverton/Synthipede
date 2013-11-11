using UnityEngine;
using System.Collections;

public class MaxLaunch : MonoBehaviour
{
	// The route value/name in Max  //
	public string routeVal = "MaxRouteValue";
	public string wButton = "keyW";
	public string aButton = "keyA";
	public string sButton = "keyS";
	public string dButton = "keyD";
	public string piano = "piano";
	public string positionX = "playerx";
	public string positionZ = "playerz";
	public string positionY = "playery";
	public string rotationX = "rotx";
	public string rotationY = "roty";
	public string rotationZ = "rotz";
	
	public static int sendValueToMax = 0;
	public static int wPressed = 0;
	public static int aPressed = 0;
	public static int sPressed = 0;
	public static int dPressed = 0;
	public static int spaceCount = 0;
	public static int pianoKey = 0;

	public static int charX = 0;
	public static int charZ = 0;
	public static int charY = 0;
	public static int rotX = 0;
	public static int rotY = 0;
	public static int rotZ = 0;
	
	private int pastPiano = 0;
			
	// UDPOut script;
	private UdpOut udpOutScript;
	
	
	void Start () {
		// Find the UdpOut and assign it
		udpOutScript = (UdpOut)FindObjectOfType (typeof(UdpOut));
	}

	void Update () {
		if(udpOutScript)
		{
			if(wPressed != 0){
				udpOutScript.SendInt(wButton, wPressed );
			}
			if(aPressed != 0){
				udpOutScript.SendInt(aButton, aPressed );
			}
			if(sPressed != 0){
				udpOutScript.SendInt(sButton, sPressed );
			}
			if(dPressed != 0){
				udpOutScript.SendInt(dButton, dPressed );
			}
			if(pianoKey != pastPiano){
				udpOutScript.SendInt (piano, pianoKey);
				pastPiano = pianoKey;
			}
			udpOutScript.SendInt (positionX, charX);
			udpOutScript.SendInt (positionZ, charZ);
			udpOutScript.SendInt (positionY, charY);
			udpOutScript.SendInt (rotationX, rotX);
			udpOutScript.SendInt (rotationY, rotY);
			udpOutScript.SendInt (rotationZ, rotZ);
		}
	}
}
