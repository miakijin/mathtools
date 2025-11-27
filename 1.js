function getnumber() {
    let inputnumbers = document.getElementById("inputnah");
    if (!inputnumbers) {
        return [];
    };
    var numbers = inputnumbers.value.split(',');
    return numbers;
};

function updatenum() {
    var numbers = getnumber().map(Number);
    var average = getaverage(numbers);
    var variance = getvariance(numbers,average);
    var mathSD = Math.sqrt(variance)
    let numbox = document.getElementById("inputednum");
    numbox.innerHTML = '';
    for (let i = 0;i<numbers.length;i++) {
        let numli = document.createElement("li");
        numli.textContent = numbers[i];
        numbox.appendChild(numli);
    };
    document.getElementById("numaverage").textContent = average;
    document.getElementById("numvariance").textContent = variance;
    document.getElementById("standarddeviation").textContent = mathSD;
};

function getaverage(numbers,average) {
    var averageA = 0;
    for (let i=0;i < numbers.length;i++) {
        averageA += numbers[i];
    };
    return average = averageA / numbers.length;
};

function getvariance(numbers,average,variance) {
    var averageC = 0;
    for (let i=0;i < numbers.length;i++) {
        averageC += numbers[i] ** 2;
    };
    let averageB = averageC / numbers.length;
    return variance = averageB - average ** 2
};
