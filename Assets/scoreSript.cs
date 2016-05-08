using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;
public class scoreSript : MonoBehaviour {
	private int playerOneScore;
	private int playerTwoScore;
	public int scoreLimit;
	public string scene_PlayerOneWon;
	public string scene_PlayerTwoWon;
	void  Start (){
		playerOneScore = 0;
		playerTwoScore = 0;
	}

	void  UpdateText (){
		GUIText guiText= GetComponent<GUIText>();
		guiText.text = playerOneScore + " : " + playerTwoScore;
	}

	void  PointForPlayerOne (){
		playerOneScore += 1;
		UpdateText();
		CheckIfGameEnded();
	}

	void  PointForPlayerTwo (){
		playerTwoScore += 1;
		UpdateText();
		CheckIfGameEnded();
	}

	void  CheckIfGameEnded (){
		if (playerOneScore >= scoreLimit){
			SceneManager.LoadScene(scene_PlayerOneWon);
		}
		else if (playerTwoScore >= scoreLimit) {
			SceneManager.LoadScene(scene_PlayerTwoWon);
		}
	}

}