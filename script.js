// 1. Grabbing html elements
const plots = document.querySelectorAll('.plot');
const scoreDisplay = document.getElementById('score');
const resetBtn= document.getElementById('reset-btn');

let score=0;
let activePlot=null;
let gameTimer=null;

//2. Function to pick a random plot
function showGhost(){
    //if a ghost is already on screen, remove it before showing a new one
    if(activePlot){
        activePlot.classList.remove('ghost');
    }

    //Pick a random index between 0 and 8
    const randomIndex= Math.floor(Math.random()*plots.length);
    const randomPlot=plots[randomIndex];

    //show the ghost
    randomPlot.classList.add('ghost');
    activePlot=randomPlot;

}

//3.add click events to all plots
plots.forEach(function(plot){
    plot.addEventListener('click',function(){
        //check if the clicked plot contains ghost
        if(plot.classList.contains('ghost')){
            score++;
            scoreDisplay.textContent = score;

            //Immediately remove the ghost so they can't double-click it
            plot.classList.remove('ghost');
            activePlot=null;
        }
    })
})

//4. start the game loop(Ghost Moves every 800ms)
 gameTimer = setInterval(showGhost,800);

 //5.Reset Button Logic
 resetBtn.addEventListener('click',function(){
    score=0;
    scoreDisplay.textContent= score;

    if(activePlot){
        activePlot.classList.remove('ghost');
        activePlot=null;
    }
 })