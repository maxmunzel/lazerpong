using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class MoveToNextScene : MonoBehaviour {
	public int delay;
	public string scene;
	// Use this for initialization
	void Start () {
		StartCoroutine (Csharpsucks ());
	}
	IEnumerator Csharpsucks(){
		yield return new WaitForSeconds (delay);
		SceneManager.LoadScene (scene);
	}
}
