using UnityEngine;
using System.Collections;

public class GameTime : MonoBehaviour {
	public enum TimeOfDay {
		Idle,
		SunRise,
		SunSet
	}
	
	public Transform[] sun;
	public float dayCycleMinutes = 1;

	public float sunRise;
	public float sunSet;
	public float blendModifier;
	
	private Celestial[] sunScript;
	private float degreeRotation;
	private float timeOfDay;
	
	private float dayCycleSeconds;
	
	private const float SECOND = 1;
	private const float MINUTE = 60 * SECOND;
	private const float HOUR = 60 * MINUTE;
	private const float DAY = 24 * HOUR;
	private const float DEGREESPERSECOND = 360/DAY;
	
	private TimeOfDay tod;
	
	// Use this for initialization
	void Start () {
		tod = TimeOfDay.Idle;
		dayCycleSeconds = dayCycleMinutes * MINUTE;
		sunScript = new Celestial[sun.Length];
		
		RenderSettings.skybox.SetFloat("_Blend", 0);
		
		for(int cnt = 0; cnt < sun.Length; cnt++){
			Celestial temp = sun[cnt].GetComponent<Celestial>();
			
			if(temp == null){
				Debug.LogWarning("Celestial Script not found.");
				sun[cnt].gameObject.AddComponent<Celestial>();
				temp = sun[cnt].GetComponent<Celestial>();
			
			sunScript[cnt] = temp;
			}
		}
		
		timeOfDay = 0;
		degreeRotation = DEGREESPERSECOND * DAY / dayCycleSeconds;
	
		sunRise = sunRise * dayCycleSeconds;
		sunSet = sunSet * dayCycleSeconds;
	}
	
	// Update is called once per frame
	void Update () {
		sun[0].Rotate(new Vector3(degreeRotation,0,0) * Time.deltaTime);
		
		timeOfDay = timeOfDay + Time.deltaTime;
		if(timeOfDay > dayCycleSeconds){
			timeOfDay = timeOfDay - dayCycleSeconds;	
		}
		
		if((timeOfDay > sunRise) && (timeOfDay < sunSet) && (RenderSettings.skybox.GetFloat("_Blend") < 1)){
			BlendSkybox();
			tod = TimeOfDay.SunRise;	
		}
		else if((timeOfDay > sunSet) && (RenderSettings.skybox.GetFloat("_Blend") > 0)) {
			tod = GameTime.TimeOfDay.SunSet;
			BlendSkybox();
		}
		else{
			tod = GameTime.TimeOfDay.Idle;	
		}
	}
	
	private void BlendSkybox() {
		float dayBlend = 0;
		
		switch(tod){
		case TimeOfDay.SunRise:
			dayBlend = (timeOfDay - sunRise) / dayCycleSeconds * blendModifier;
			break;
		case TimeOfDay.SunSet:
			dayBlend = (timeOfDay - sunSet) / dayCycleSeconds * blendModifier;
			dayBlend = 1 - dayBlend;
			break;
			
			
		}

		RenderSettings.skybox.SetFloat("_Blend", dayBlend);
	}
}
