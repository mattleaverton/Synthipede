﻿using UnityEngine;
using System.Collections;

public class MaxLaunch : MonoBehaviour
{
	// The route value/name in Max  //
	public string routeVal = "MaxRouteValue";
	public string wButton = "keyW";
	public string aButton = "keyA";
	public string sButton = "keyS";
	public string dButton = "keyD";
	
	public static int sendValueToMax = 0;
	public static int wPressed = 0;
	public static int aPressed = 0;
	public static int sPressed = 0;
	public static int dPressed = 0;
	public static int spaceCount = 0;
			
			
	// UDPOut script;
	private UdpOut udpOutScript;
	
	
	void Start ()
	{
		// Find the UdpOut and assign it
		udpOutScript = (UdpOut)FindObjectOfType (typeof(UdpOut));
	}
	
	

void Update ()
	{
		
			if(udpOutScript)
			{
				if(wPressed == 1){
					udpOutScript.SendInt(wButton, 1 );
				}
				if(aPressed == 1){
					udpOutScript.SendInt(aButton, 1 );
				}
				if(sPressed == 1){
					udpOutScript.SendInt(sButton, 1 );
				}
				if(dPressed == 1){
					udpOutScript.SendInt(dButton, 1 );
				}
			}
		
		
	}
}
