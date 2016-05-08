
public var initSpeed :float = 3;
public var initX :float = 0.0;
public var initY :float = 0.0;
public var scoreGUI :GameObject;
var speed :float;
function Start () {
	var r2d = GetComponent("Rigidbody2D");
 	r2d.velocity = Vector2.zero;
	speed = initSpeed;
	transform.position = new Vector2(initX, initY);
	yield WaitForSeconds(2);
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
		case "bullet(Clone)":
			r2d.velocity.x *= -1;
			speed *= -1;
			Destroy(trigger.gameObject);
			break;
		default:
		Debug.Log("Unhandled ball collision");
	}
}

function OnBecameInvisible(){
		if (transform.position.x < 0){
			scoreGUI.SendMessage("PointForPlayerTwo");
		}
		else {
			scoreGUI.SendMessage("PointForPlayerOne");
		}
		yield WaitForSeconds(2);
		Start();
}
