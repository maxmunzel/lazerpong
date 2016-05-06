
public var initSpeed :float = 3;
public var initX :float = 0.0;
public var initY :float = 0.0;
var speed :float;
function Start () {
	speed = initSpeed;
	var r2d = GetComponent("Rigidbody2D");
	transform.position = new Vector2(initX, initY);
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
	UpdateScore();
	if (IsGameOver()){

	} else {
		yield WaitForSeconds(2);
		Start();
	}
}
function IsGameOver() :boolean{
	return false; //TODO implement logic
}
function UpdateScore(){
	return; //TODO implement score
}
