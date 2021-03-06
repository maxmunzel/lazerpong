﻿
public var upkey :String;
public var downkey :String;
public var firekey :String;
public var speed :float;
public var bullet :GameObject;
public var firerate = 60;
var lastShotFired :float;
var stop :boolean = false;
function Start () {
	lastShotFired = Time.time;
}

function Update () {
	var pad = GetComponent("Rigidbody2D");
	if (Input.GetKeyDown(firekey)){
		Shoot(0);
	}
	if ((!stop || transform.position.y < 0) && Input.GetKey(upkey)){ //voo
		pad.velocity.y = speed;
	}
	else if((!stop || transform.position.y > 0) && Input.GetKey(downkey)){ //doo
		pad.velocity.y = -speed;
	}	else if (!stop) {
		pad.velocity.y = 0;
		}
	}

function OnTriggerEnter2D(trigger){
	var pad = GetComponent("Rigidbody2D");
	switch (trigger.gameObject.name) {
		case "Ball":
			speed = Mathf.Abs(trigger.attachedRigidbody.velocity.x)*1.5*transform.localScale.x;
			var audio: AudioSource = GetComponent.<AudioSource>();
			audio.Play();
			break;
		case "cam":
			stop = true;
			pad.velocity.y = 0;
			break;
		case "bullet(Clone)":
			break;
		default:
			Debug.Log("Unhandled Paddle Collision: "+trigger.gameObject.name);
	}

}

function Shoot(mode :int){
	switch (mode) {
		case 0:
			if ((Time.time - lastShotFired) > (60/firerate)){
				lastShotFired = Time.time;
				Instantiate(bullet, transform.position, Quaternion.identity);
			}
			break;
		//default:
	}
}
function OnTriggerExit2D(trigger){
	if (trigger.gameObject.name == "cam"){
	stop = false;
	}
}
