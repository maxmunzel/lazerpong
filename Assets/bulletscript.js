public var speed :int;
function Start () {
	bullet = GetComponent("Rigidbody2D");
	bullet.velocity.x = speed;
}

function Update () {

}
function OnBecameInvisible(){
	Destroy(gameObject);
}