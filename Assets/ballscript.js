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
	switch(trigger.gameObject.name){
		case "paddle":
			speed *= -1.05;
			r2d.velocity.x = speed;
			r2d.velocity.y = Mathf.Abs(speed)*(transform.position.y-trigger.transform.position.y);

			break;
		case "cam":
			r2d.velocity.y = -r2d.velocity.y;
			break;
		default:
		Debug.Log("Unhandled ball collision");
	}
}

function OnBecameInvisible(){
//	Inistiate
}
