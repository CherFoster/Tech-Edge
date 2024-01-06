import React from "react";

function Home(){
    // const colors = ['#D4D4D4', '#569CD6', '#4EC9B0', '#C586C0', '#9CDCFE', '#CE9178', '#F44747'];
    // const maxLines = 30; // Maximum number of lines on screen
    // const lineDuration = 5000; // Duration of each line's animation in milliseconds
    // const newLineInterval = 200; // Interval for creating new lines in milliseconds
    // let linesOnScreen = 0;

    // function generateRandomCode() {
    //     const characters = '01';
    //     let result = '';
    //     const charactersLength = characters.length;
    //     for (let i = 0; i < 30; i++) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }
    //     return result;
    //     }

    //     function createCodeLine() {
    //         if (linesOnScreen >= maxLines) {
    //             return; 
    //     }

    //     const codeLine = document.createElement('div');
    //     codeLine.textContent = generateRandomCode();
    //     codeLine.style.position = 'absolute';
    //     codeLine.style.left = `${Math.random() * 100}%`;
    //     codeLine.style.top = '0';
    //     codeLine.style.color = colors[Math.floor(Math.random() * colors.length)];
    //     codeLine.style.transform = `translateX(-50%)`;
    //     codeLine.style.animation = `moveCode ${lineDuration / 1000}s linear`;

    //     document.getElementById('code-container').appendChild(codeLine);
    //     linesOnScreen++; 

    //     setTimeout(() => {
    //         codeLine.remove();
    //         linesOnScreen--; 
    //     }, lineDuration);
    //     }

    //     setInterval(createCodeLine, newLineInterval);

    //     const style = document.createElement('style');
    //     style.innerHTML = `
    //     @keyframes moveCode {
    //         from { top: -20px; }
    //         to { top: 100%; }
    //     }
    //     `;
    //     document.head.appendChild(style);

    return(
        <div className="home-page">
            <img alt ='logo' className="logo" src='https://i.postimg.cc/qMp0wdd4/Tech-Edge-removebg-preview-removebg-preview.png' />
            <h1 className="home-h1">Where Code Creates Impact</h1>
            <p className="home-p">At Tech Edge, innovation meets reliability in the realm of developing. I am a passionate software engineer, dedicated to transforming your digital dreams into reality.</p>

            <div id="code-container"></div>
        </div>
    )
}

export default Home;