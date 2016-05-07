#pragma strict
public var speed :float;
private var last :float;
var visible :boolean = true;
function Start () {
  last = Time.time;
}

function Update () {
  if ((Time.time-last) > 1/speed){
    Blink();
    last = Time.time;
  }
}
function Blink(){
  if (visible){
    transform.localScale = Vector3.zero;
    visible = false;
  }
  else {
    transform.localScale = Vector3(1,1,1);
    visible = true;
  }
}
