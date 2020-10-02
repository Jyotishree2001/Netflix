function clock(){

    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
}

var interval = setInterval(clock, 1000);

