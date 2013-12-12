#pragma strict

private var transmit : UdpOut;

function Start () {
	transmit = FindObjectOfType(UdpOut);
}

public var keyNumber : int = 0;
public var piano : String = "piano";

function OnCollisionEnter(){
	transmit.SendInt(piano, keyNumber);
}