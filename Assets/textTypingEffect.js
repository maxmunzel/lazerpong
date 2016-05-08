private var text;
public var speed :float = 2;
function Start () {
  var gui = GetComponent("GUIText");
  text = gui.text;
  gui.text = "";
  for (var letter in text){
    if (letter == '§'[0]){
      yield WaitForSeconds(2);
    }else {
      gui.text += letter;
      yield WaitForSeconds(1.0/speed);
    }
  }
}

function Update () {

}
