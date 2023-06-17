let gameplay = new Audio('gameplay.mp3');
let bonustune = new Audio('bonustune.mp3');
let timesup = new Audio('timesup.mp3');


const play = () => {
    document.getElementById('Default').innerHTML=''
    let box = Array.from(document.getElementsByClassName('box'));

    let pushtimer = 1500;
    let poptimer = 1600;
    if (document.getElementById('easy').checked) {
        pushtimer = 1500;
        poptimer = 1600;
    }
    if (document.getElementById('medium').checked) {
        pushtimer = 1100;
        poptimer = 1200;
    }
    if (document.getElementById('hard').checked) {
        pushtimer = 800;
        poptimer = 900;
    }

    let score = 0;
    document.getElementById('buttons').innerHTML = `<div id="reset" onclick="reset()"><b>Reset</b> <i class="fa-solid fa-rotate-right"></i></div>`;
    document.getElementById('form').style.display = 'none';
    let bonus=()=>{
        gameplay.pause();
        bonustune.play()
        document.getElementById('bonus').innerHTML = "<img id='bonus-mole' src='bonus.png'><br><p><b>!!!Bonus!!!</b></p";
        document.getElementById('bonus').addEventListener("click", () => {
            score += 10;
            document.getElementById('bonus').innerHTML = '';
            document.getElementById('level').innerHTML = `<b>Your Score: ${score} </b>`
            bonustune.pause();
            gameplay.play();
            bonustune.currentTime = 0;
            console.log(score)
        })

        setTimeout(() => {
            document.getElementById('bonus').innerHTML = '';
            bonustune.pause();
            gameplay.play();
            bonustune.currentTime = 0;
        }, 3000);
    }
        setInterval(() => {
           bonus();
        }, 13000);


    gameplay.play();



    setInterval(() => {
        let num = Math.floor(Math.random() * box.length + 1);
        box[num].innerHTML = "<img id='mole' src='mole.png'>";
        document.getElementById('mole').addEventListener("click", () => {
            score += 1;
            document.getElementById('level').innerHTML = `<b>Your Score: ${score} </b>`
            console.log(score)
            box[num].innerHTML = '';
        })

        setTimeout(() => {
            box[num].innerHTML = '';
        }, pushtimer);
    }, poptimer);

    document.getElementById('level').innerHTML = `<b>Your Score:${score} </b>`



    setTimeout(() => {
        bonus=()=>console.log('bonus');
        document.getElementById('buttons').innerHTML = 'Times Up !!!!'
        box.forEach((elem) => {
            elem.innerHTML = '';
        })
        box = '';
        document.getElementById('bonus').style.display = "none";
        gameplay.pause();
        setTimeout(() => {
            document.getElementById('buttons').innerHTML = `
        <div id="reset" onclick="reset()"><b>Play Again?</b> <i class="fa-solid fa-rotate-right"></i></div>
        `;
        }, 2000);

        bonus = '';
        timesup.play();
        document.getElementById('level').style.fontSize = '50px'
    }, 50000);
}

const reset = () => {
    location.reload();
}
