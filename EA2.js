//assigning buttons
const btnChord = document.getElementById("btnChord");
const btnArpeg = document.getElementById("btnArpeg");
const btnSynth = document.getElementById("btnSynth");
const btnC = document.getElementById("btnC");
const btnCs = document.getElementById("btnCs");
const btnD = document.getElementById("btnD");
const btnDs = document.getElementById("btnDs");
const btnE = document.getElementById("btnE");
const btnF = document.getElementById("btnF");
const btnFs = document.getElementById("btnFs");
const btnG = document.getElementById("btnG");
const btnGs = document.getElementById("btnGs");
const btnA = document.getElementById("btnA");
const btnAs = document.getElementById("btnAs");
const btnB = document.getElementById("btnB");

//creating instruments
const synthA = new Tone.Synth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
const synthC = new Tone.FMSynth().toDestination();
const synths = [synthA, synthB, synthC];
const polySynth = new Tone.PolySynth().toDestination();
let activeSynth = synthC;
const synthDisplay = document.getElementById("synthDisplay");

//defining chords
const aChord = ["A4", "C#4", "E4"];
const bChord = ["B4", "D#4", "F#4"];
const cChord = ["C4", "E4", "G4"];
const dChord = ["D4", "F#4", "A4"];
const eChord = ["E4", "G#4", "B4"];
const fChord = ["F4", "A4", "C4"];
const gChord = ["G4", "B4", "D4"];
const chords = [aChord, bChord, cChord, dChord, eChord, fChord, gChord];
let activeChord = aChord;

btnRandom.addEventListener("click", () =>{
    const chordIndex = Math.floor(Math.random() * chords.length);
    activeChord = chords[chordIndex];
    randomDisplay.textContent = `Chord Notes: ${activeChord.join(", ")}`;
});

btnChord.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    polySynth.triggerAttackRelease(activeChord, "4n");
});


btnArpeg.addEventListener("click", () => {
    if (Tone.context.state !== "running") {
        Tone.start();
    }
    const now = Tone.now();
    activeChord.forEach((note, i) => {
        const time = now + (i * 0.2);
        synthA.triggerAttackRelease(note, "8n", time);
    });
});

btnSynth.addEventListener("click", () =>{
    const randomSynthIndex = Math.floor(Math.random() * synths.length);
    activeSynth = synths[randomSynthIndex];
});

btnC.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("C4", "8n");
});

btnCs.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("C#4", "8n");
});

btnD.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("D4", "8n");
});

btnDs.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("D#4", "8n");
});

btnE.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("E4", "8n");
});

btnF.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("F4", "8n");
});

btnFs.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("F#4", "8n");
});

btnG.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("G4", "8n");
});

btnGs.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("G#4", "8n");
});

btnA.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("A4", "8n");
});

btnAs.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("A#4", "8n");
});

btnB.addEventListener("click", () =>{
    if(Tone.context.state != "running"){
        Tone.start();
    }
    activeSynth.triggerAttackRelease("B4", "8n");
});