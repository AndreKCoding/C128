som1 = "";
som2 = "";

pulsoEX = 0;
pulsoEY = 0;

pulsoDX = 0;
pulsoDY = 0;

function preload()
{
    som1 = loadSound("music.mp3");
    som2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}

function modelLoaded()
{
    console.log("Modelo foi Carregado");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotResults(results)
{
    if(results.length > 0)
    {
        pulsoEX = results[0].pose.leftWrist.x;
        pulsoEY = results[0].pose.leftWrist.y;
        console.log("Pulso esquerdo X " + pulsoEX + ", Pulso esquerdo Y " + pulsoEY);

        pulsoDX = results[0].pose.rightWrist.x;
        pulsoDY = results[0].pose.rightWrist.y;
        console.log("Pulso direito X " + pulsoDX + ", Pulso direito Y " + pulsoDY);
    }
}