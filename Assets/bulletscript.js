public var speed :int = 4;
public var red :Sprite;
public var blue :Sprite;
var armed :boolean = false;
function Start () {
	if (transform.position.x < 0){
		GetComponent("SpriteRenderer").sprite = red;
		speed *= -1;
	} else {
		GetComponent("SpriteRenderer").sprite = blue;
	}
	bullet = GetComponent("Rigidbody2D");
	bullet.velocity.x = speed;
}

function Update () {

}
function OnBecameInvisible(){
	Destroy(gameObject);
}
function OnTriggerExit2D(trigger){
	armed = true;
}
function OnTriggerEnter2D(trigger) {
	if (armed) {
		switch (trigger.gameObject.name) {
			case "paddle":
				trigger.gameObject.transform.localScale *= 0.95;
				break;

		}
	}
}
