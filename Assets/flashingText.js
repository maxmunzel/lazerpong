#pragma strict
public var speed :float;
private var last :float;
private var visible :boolean = true;
private var posX :float;
function Start () {
  last = Time.time;
  posX = transform.position.x;
}

function Update () {
  if ((Time.time-last) > 1/speed){
    Blink();
    last = Time.time;
  }
}
function Blink(){
  if (visible){
    transform.position.x = 10;
    visible = false;
  }
  else {
    transform.position.x = posX;
    visible = true;
  }
}
