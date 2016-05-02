
public var upkey :String;
public var downkey :String;
public var speed :int;
var stop :boolean = false;
function Start () {

}

function Update () {
	var pad = GetComponent("Rigidbody2D");
	if (!stop && Input.GetKey(upkey)){
		pad.velocity.y = speed;
	}
	else if(!stop && Input.GetKey(downkey)){
		pad.velocity.y = -speed;
	}	else if (!stop) {
		pad.velocity.y = 0;
		}
	}

function OnTriggerEnter2D(trigger){
	var pad = GetComponent("Rigidbody2D");
	if (trigger.gameObject.name == "Ball"){
		speed += 1.05;
	}
	else{
		Debug.Log("exot");
		stop = true;
		pad.velocity.y *= -1;
	}
}
function OnTriggerExit2D(trigger){
	if (trigger.gameObject.name == "catch"){
	stop = false;
	}
}