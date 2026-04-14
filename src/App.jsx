
import {useEffect,useRef,useState} from "react";

export default function App(){
const [section,setSection]=useState("about");
const canvasRef=useRef();

// typewriter
const [text,setText]=useState("");
useEffect(()=>{
const lines=[
'Building scalable Spring Boot APIs...',
'Optimizing databases & SQL queries...',
'Integrating AI — Gemini, ChatGPT...',
'Shipping React UIs that delight users...',
];
let li=0,ci=0,del=false;
function tick(){
const cur=lines[li];
if(!del){
ci++; setText(cur.slice(0,ci));
if(ci===cur.length){del=true;setTimeout(tick,1500);return;}
}else{
ci--; setText(cur.slice(0,ci));
if(ci===0){del=false;li=(li+1)%lines.length;}
}
setTimeout(tick,del?40:65);
}
setTimeout(tick,500);
},[]);

// particles
useEffect(()=>{
const canvas=canvasRef.current;
const ctx=canvas.getContext("2d");
let w,h;
function resize(){
w=canvas.width=window.innerWidth;
h=canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);
const p=Array.from({length:80},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.5,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}));
function draw(){
ctx.clearRect(0,0,w,h);
p.forEach(o=>{
o.x+=o.vx;o.y+=o.vy;
ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
ctx.fillStyle="rgba(96,165,250,.5)";ctx.fill();
});
requestAnimationFrame(draw);
}
draw();
},[]);

return (
<div id="resume-root">
<canvas id="particle-canvas" ref={canvasRef}></canvas>
<div id="main-stage">

<div className="hero">
<div className="hero-ring">AG</div>
<div className="hero-name">Ankur Ghosh</div>
<div className="hero-title">Java Full Stack Developer</div>
<div className="hero-loc">Kolkata, West Bengal, India</div>
<div style={{marginTop:10}}>{text}</div>
</div>

<div className="nav-pills">
{["about","experience","skills","education","timeline","contact"].map(s=>
<div key={s} className={"pill "+(section===s?"active":"")} onClick={()=>setSection(s)}>
{s}
</div>
)}
</div>

{section==="about" && (
<div className="section">
<div className="s-title">About</div>
<div className="summary-box">
Java Full Stack Developer with strong hands-on experience designing scalable Spring Boot & React apps.
</div>
</div>
)}

{section==="experience" && (
<div className="section">
<div className="s-title">Experience</div>
<div className="summary-box">Experience content same as original</div>
</div>
)}

{section==="skills" && (
<div className="section">
<div className="s-title">Skills</div>
<div className="summary-box">Skills content same as original</div>
</div>
)}

{section==="education" && (
<div className="section">
<div className="s-title">Education</div>
<div className="summary-box">Education content</div>
</div>
)}

{section==="timeline" && (
<div className="section">
<div className="s-title">Timeline</div>
<div className="summary-box">Timeline content</div>
</div>
)}

{section==="contact" && (
<div className="section">
<div className="s-title">Contact</div>
<div className="summary-box">Contact content</div>
</div>
)}

</div>
</div>
)
}
