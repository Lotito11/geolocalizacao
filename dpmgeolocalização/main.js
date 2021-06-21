var altura1;
var altura2;
var altura3;

function a1() {
    navigator.geolocation.getCurrentPosition(function(position) {
        altura1 = (position.coords.altitude)
        console.log(altura1);
        document.getElementById('input1').value = altura1
    });
}

function a2() {
    navigator.geolocation.getCurrentPosition(function(position) {
        altura2 = (position.coords.altitude)
        console.log(altura2);
        document.getElementById('input2').value = altura2
    });
    altura3 = altura1 - altura2;
    console.log(altura3)
    document.getElementById('input3').value = altura3;
}