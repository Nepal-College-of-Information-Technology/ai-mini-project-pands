let gttsBtn = document.getElementById('gtts-btn');
let cameraBtn = document.getElementById('camera-btn');
let uploadBtn = document.querySelector('#upload-btn');
let textArea = document.querySelector('#textarea');
let line = document.createElement('p');
line.className = "line"
line.id = "last-line"
line.innerHTML = `Ready to roll !`
textArea.appendChild(line)
line.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
});

//open github repo
document.querySelector('#webcam-banner').addEventListener('click', function () {
    window.open('https://github.com/vivekkushalch/Indian-Sign-Language-Recognition-System/', '_blank');
})



// test function
async function addTestLines(totalLines) {
    for (let i = 1; i < totalLines + 1; i++) {
        let line = document.createElement('p');
        line.className = "line"
        line.innerHTML = `Hello`
        textArea.appendChild(line)
        line.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    }
}