
var constraints = { video: { facingMode: "environment" }, audio: false };

const cameraView = document.querySelector("#kamera-syn"),
      cameraOutput = document.querySelector("#kamera-output"),
      cameraSensor = document.querySelector("#kamera-sensor"),
      cameraTrigger = document.querySelector("#kamera-knap")




      function cameraStart() {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
        
     
    }

    cameraTrigger.onclick = function() {
        cameraSensor.width = cameraView.videoWidth;
        cameraSensor.height = cameraView.videoHeight;
        cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
        cameraOutput.src = cameraSensor.toDataURL("image/webp");
        
    };

window.addEventListener("load", cameraStart, true);

