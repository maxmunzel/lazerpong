
public var upkey :String;
public var downkey :String;
public var speed :int;
var stop :boolean = false;
function Start () {

}

function Update () {
	var pad = GetComponent("Rigidbody2D");
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
	if (trigger.gameObject.name == "Ball"){
		speed += 1.05;
	}
	else{
		Debug.Log("exot");
		stop = true;
		pad.velocity.y = 0;
	}
}
function OnTriggerExit2D(trigger){
	if (trigger.gameObject.name == "cam"){
	stop = false;
	}
}
