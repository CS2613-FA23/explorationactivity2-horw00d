## 1. Which package/library does the sample program demonstrate?

The sample program demonstrate the functionality of the Tone.js library.

## 2. What is the package/library?

The Tone.js is a library based in JavaScript used for creating dynamic audio experiences. Its a "Web Audio framework" which means its designed to be run in a browser as a web-based solution to audio processing [1]. The library's main purpose is to offer developers a wide variety of creative and interactive tools for processing audio, usually in the form of music [2]. This audio can be created by the user using a variety of synthesizers and then arranged into a complex piece of music using the scheduling, sequencing, and tranport control tools to adjust timing and layering audio. Users can also process their own pre-recorded audio files and add effects to them such as reverb, delay and distortion. All of this is very useful for developers looking to create audio-based software from music exploration interfaces to games. Tone.js offers a nice high-level interface to manipulate audio in web applications as opposed to the Web Audio API that browsers use [3]. The library is open-source and has extensive documentation with very useful code examples to help you get started [4]. 

There are a few important steps to follow when getting started with Tone.js:
  1. Use the node package manager to install the Tone.js package in a directory of your choice:
       - npm install tone
  2. Write a JavaScript program that utilizes the Tone.js documentation
  3. Display the program on the web with markup like HTML and a browser of your choice (Chrome or Firefox)
  4. Test the functionality of your program and ensure that audio is enabled in your browser

## 3. What are the functionalities of the package/library?

__Creating a synthesizer instance and playing it when a button is pressed:__  

    //creating the synthesizer
    const synthA = new Tone.Synth().toDestination();
    //listening for the button press
    btnChord.addEventListener("click", () =>{
      if(Tone.context.state != "running"){
          Tone.start();
      }
      //triggering the synth to play
      polySynth.triggerAttackRelease(activeChord, "4n");
    });
*Refer to Chord.mp3 for audio output*

__Creating a chord array and playing it note-by-note:__ 

    //creating the chord
    const aChord = ["A4", "C#4", "E4"];
    //storing the current time
    const now = Tone.now();
    aChord.forEach((note, i) => {
        const time = now + (i * 0.2);
        //playing each note in the chord with an interval between them
        synthA.triggerAttackRelease(note, "8n", time);
    });
*Refer to Arpeggio.mp3 for audio output*

__Playing an individual note on a button press:__

    //listening for button press associated with B note
    btnB.addEventListener("click", () =>{
      if(Tone.context.state != "running"){
        Tone.start();
      }
      //playing B note
      activeSynth.triggerAttackRelease("B4", "8n");
    });
*Refer to Notes.mp3 for audio output*

## 4. When was it created? 

Tone.js was initially developed in 2014 by Yotam Mann as a project to help automate some of the repetitive tasks of working with the Web Audio API [5].

## 5. Why did you select this package/library?

I selected this library because I've always been a fan of digital music production and wanted to use the Exploration Activity to learn how this type of software worked from a developer's perpsective. The library uses Javascript primarily which was a language that I wanted to explore further and even gave me an oppotunity to learn some HTML and CSS as programs that use Tone.js need to be ran in a web environment. The documentation for the library was informative and provided lots of useful code snippets to build off of which made the intial design for my project straightforward. After watching a quick tutorial combining JavaScript and HTML to represent a button in a browser I was curious to learn more about the library [6].

## 6. How did learning the package/library influence your learning of the language?

Learning how to utilize tools from Tone.js definitely improved my knowledge of JavaScript. It allowed me to learn new concepts like event handling and asynchonyous programming when buttons were pressed, while also reinforcing conepts we had already learned in Javascript such as array manipulation and object oriented programming. Most of my experience with JavaScript had involved the input and output of programs in the terminal, but for this Exploration Activity I learned your code can be executed in other ways that may be more convenient to the user. Applying all of the technical knowledge required in a creative way gave me a better appreciation for the language's capabilities. The web-based component of the project also gave me an opportunity to explore the functionality of the HTML language and CSS to make my JavaScript code functional in a browser environment. 

## 7. How was your overall experience with the package/library? 

I would recommend this library to other developers for many reasons. Anyone with an interest in music production and audio processing or even just someone looking to improve their JavaScript knowledge in general could learn lots from a project based on Tone.js. There are many real-world software projects that could be built using the wide array of tools that Tone.js provides. I would like to keep using this library as I found it enjoyable to work with and was impressed with its functionality. Being able to visualize how simple audio is produced in a browser environemnt was rewarding and I can imagine the audio possibilities are endless with this library. I could see myself building off of this exploration activity in the future to build a more compelx program , whether that be for school or for my own personal learning. 

References:
[1] https://tonejs.github.io/
[2] https://www.devbridge.com/articles/tonejs-coding-music-production-guide/
[3] https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[4] https://tonejs.github.io/docs/14.7.77/index.html
[5] https://yotammann.info/tone
[6] https://www.youtube.com/watch?v=7ZhbKclhDf4
[7] https://chat.openai.com/ *Used for learning HTML/CSS basics and representing the JavaScript program in a browser*
