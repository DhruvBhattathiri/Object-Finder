status = "";

function setup()
{
    canvas = createCancvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerhtml = "Status = Object Detecting"
    search_input = document.getElementById("input").innerText;
}

function modelLoaded()
{
    status = true;
    console.log("Model Loaded");
}

function draw()
{
    image(video, 0, 0, 480, 380);
}