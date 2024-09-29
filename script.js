let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
     text_speak.rate=1
     text_speak.pitch=1
     text_speak.volume=1
     text_speak.lang="ur.GB"
     window.speechSynthesis.speak(text_speak)
}

// function wishMe(){
//     let day=new Date()
//     let hours=day.getHours()
//     if(hours>=0 && hours<12){
//         speak("Good Morning Sir")
//     }
//     else if(hours>=12 && hours <16){
//         speak("Good afternoon Sir")
//     } else {
//         speak("Good Evening sir")
//     }
// }
function wishMe() {
    // Getting the local time in Pakistan
    let day = new Date();
    let options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit' };
    let timeInPakistan = day.toLocaleString('en-US', options);
    
    // Extracting hours
    let hours = parseInt(timeInPakistan.split(':')[0]);
    
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}
window.addEventListener('load', ()=>{
    wishMe()
})

let speechRecogniion= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecogniion()
recognition.onresult=(event)=>{
let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click" ,()=>{
    recognition.start()
    btn.style.display=""
    // voice.style.display="none"
})
// function takeCommand(message){
//     if(message.includes("hi")||message.includes("hey")){
//         speak("hi sir, how can i help you?")
//     }
// else if(message.includes("who are you")){
//     speak("i am virtual assistant ,created by Wasif")
// }else if(message.includes("open youtube")){
//     speak("opening youtube...")
//     window.open("https://www.youtube.com/")
// }
// }
function takeCommand(message) {
    if (message.includes("hi") || message.includes("hello")) {
        speak("hi sir, how can i help you?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Wasif.");
    } else if (message.includes("open youtube")) {
        speak("opening YouTube...");
        window.open("https://www.youtube.com/");
    } else if (message.includes("open facebook")) {
        speak("opening Facebook...");
        window.open("https://www.facebook.com/");
    } else if (message.includes("open instagram")) {
        speak("opening Instagram...");
        window.open("https://www.instagram.com/");
    } else if (message.includes("open twitter")) {
        speak("opening Twitter...");
        window.open("https://www.twitter.com/");
    } else if (message.includes("open linkedin")) {
        speak("opening LinkedIn...");
        window.open("https://www.linkedin.com/");
    } else if (message.includes("open whatsapp")) {
        speak("opening WhatsApp Web...");
        window.open("https://web.whatsapp.com/");
    } else if (message.includes("open google")) {
        speak("opening Google...");
        window.open("https://www.google.com/");
    } else if (message.includes("open github")) {
        speak("opening GitHub...");
        window.open("https://www.github.com/");
    } else if (message.includes("open tiktok")) {
        speak("opening TikTok...");
        window.open("https://www.tiktok.com/");
    } else if (message.includes("open pinterest")) {
        speak("opening Pinterest...");
        window.open("https://www.pinterest.com/");
    } else if (message.includes("open reddit")) {
        speak("opening Reddit...");
        window.open("https://www.reddit.com/");
    } else if (message.includes("open snapchat")) {
        speak("opening Snapchat...");
        window.open("https://www.snapchat.com/");
    } else if (message.includes("open spotify")) {
        speak("opening Spotify...");
        window.open("https://www.spotify.com/");
    }
    else{
    let finalText="this is what i found on internet regarding" + message.replace("jack","")|| message.replace
    ("jack","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("jack","")}`,"_blank") 
    } 
}
