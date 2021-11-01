status = "";
objects = [];
results = '';09
video = "";

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
    if(status !="")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            videoLiveView.stop();
            objectDetector.detect(gotResult);
        }   
    }
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    results = results;
    objects = results;
}               