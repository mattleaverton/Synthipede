using UnityEngine;
using System.Collections;

public class MaxLaunch : MonoBehaviour
{
	// The route value/name in Max  //
	public string routeVal = "MaxRouteValue";
	public static int sendValueToMax = 0;
	
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
				udpOutScript.SendInt(routeVal, sendValueToMax );
			}
		
		
	}
}
