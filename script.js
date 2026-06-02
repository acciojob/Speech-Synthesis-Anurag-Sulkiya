msg.text = document.querySelector('[name="voice"]');

function populateVoiceDropdown(){
    voices = window.speechSynthesis.getVoices();
	const voiceOptions = voices.map(function(voice) {
	return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
	})
	voicesDropdown.innerHTML = voiceOptions.join('');
	
}

function speak() {
	window.speechSynthesis.cancel();
	const chosenVoiceName = voicesDropdown.value;
	msg.voice = voices.find(function (voice) {
		return voice.name = chosenVoiceName;
	})
	 window.speechSynthesis.speak(msg);
}

function stopSpeaking(){
   window.speechSynthesis.cancel();
}

function applyOptionChange(event) {
	msg[event.target.name] = event.target.value;
}

window.speechSynthesis.addEventListener('voiceschanged', populateVoiceDropdown);

voicesDropdown.addEventListener('change', speak);

options.forEach(function(option) {
    option.addEventListener('change', applyOptionChange);
  });

speakButton.addEventListener('click', speak);
 stopButton.addEventListener('click', stopSpeaking);

