public var speed :int;
function Start () {
	var r2d = GetComponent("Rigidbody2D");
	r2d.velocity.x = speed;
	r2d.velocity.y = speed;
}

function Update () {

}
function OnTriggerEnter2D(trigger){
	var r2d = GetComponent("Rigidbody2D");
	r2d.velocity.x *= 1.1;
	r2d.velocity.y *= 1.1;


	if (trigger.gameObject.name =="paddle"){
		Debug.Log("paddle");
		r2d.velocity.x = -r2d.velocity.x;
		r2d.velocity.x *= 1.05;
		r2d.velocity.y *= 1.05;
	} else {
		Debug.Log("TRIGGERED");
		r2d.velocity.y = -r2d.velocity.y;
	}
}