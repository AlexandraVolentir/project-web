
let map;
var masajPretLista = []
var masajClientiLista = []
var fitnessPretLista = []
var fitnessClientiLista = []
var prArr = []
let counter = 0
const elementNames = ["#tag-one", "#tag-two", "#tag-three"];

function getNumber(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}

function drawPieChart(chart) {
    chart.chart.draw(
        google.visualization.arrayToDataTable(chart.data),
        chart.options
    );
}

function drawBarChart(barChart) {
    barChart.chart.draw(
        google.visualization.arrayToDataTable(barChart.data),
        barChart.options
    );
}

function drawLineChart(lineChart) {
    lineChart.chart.draw(
        google.visualization.arrayToDataTable(lineChart.data),
        lineChart.options
    );
}

function drawGeographicalPichart(data) {
    let chart = {
        chart: null,
        element: elementNames[counter],
        data: [
            ['Serviciu', 'he'],
            ['Uber', data.uber],
            ['Fitness', data.fitness],
            ['Masaj', data.masaj]
        ],
        options: {
            title: data.oras,
            width: 500,
            height: 500,
            colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
            legend: 'left',
            'is3D': true,
            backgroundColor: '#000000',
            hAxis: {
                textStyle: {
                    color: '#FFF',
                    bold: 'true',
                    italic: true,
                    fontSize: 20
                }
            },
            legend: {
                textStyle: {
                    color: '#ffffff',
                    italic: true,
                    fontSize: '13',
                },
                position: 'bottom'
            },
            titleTextStyle: {
                color: '#ffffff',
                fontSize: '20',
                bold: 'true',
                italic: 'true'
            },
            'chartArea': {
                'width': '70%',
                'height': '80%'
            },
        }
    };

    chart.chart = new google.visualization.PieChart(
        document.querySelector(chart.element)
    );
    drawPieChart(chart)
    counter = counter + 1;
}

function drawCathegoryChart(data) {

    map.set('Iasi', data.iasi)
    map.set('Cluj', data.cluj)
    map.set('Buc', data.bucuresti)
    let chart = {
        chart: null,
        element: elementNames[counter],
        data: [
            ['Serviciu', 'Servicii'],
            ['Iasi', data.iasi],
            ['Cluj', data.cluj],
            ['Buc', data.bucuresti]
        ],
        options: {
            title: data.serviciu,
            width: 500,
            height: 500,
            colors: ['#797EF6', '#4ADEDE', '#1AA7EC', '#1E3F97', '#f6c7b6'],
            legend: 'left',
            'is3D': true,
            backgroundColor: '#000000',
            hAxis: {
                textStyle: {
                    color: '#FFF',
                    bold: 'true',
                    italic: true,
                    fontSize: 20
                }
            },
            vAxis: {
                textStyle: {
                    color: '#FFF',
                    bold: 'true',
                    italic: true,
                    fontSize: 20,
                    text: "sideways-right"
                }
            },
            legend: {
                textStyle: {
                    color: '#ffffff',
                    italic: true,
                    fontSize: '13',
                },
                position: 'bottom'
            },
            titleTextStyle: {
                color: '#ffffff',
                fontSize: '20',
                bold: 'true',
                italic: 'true'
            },
            'chartArea': {
                'width': '70%',
                'height': '80%'
            },
        }
    };

    chart.chart = new google.visualization.BarChart(
        document.querySelector(chart.element)
    );
    drawBarChart(chart)
    counter = counter + 1;
}

function drawMassagePriceStatistics(data) {
    let chart = {
        chart: null,
        element: elementNames[counter],
        data: [
            ['Serviciu', 'he'],
            ['Uber', data.uber],
            ['Fitness', data.fitness],
            ['Masaj', data.masaj]
        ],
        options: {
            title: data.oras,
            width: 500,
            height: 500,
            colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
            legend: 'left',
            'is3D': true,
            backgroundColor: '#000000',
            hAxis: {
                textStyle: {
                    color: '#FFF',
                    bold: 'true',
                    italic: true,
                    fontSize: 20
                }
            },
            legend: {
                textStyle: {
                    color: '#ffffff',
                    italic: true,
                    fontSize: '13',
                },
                position: 'bottom'
            },
            titleTextStyle: {
                color: '#ffffff',
                fontSize: '20',
                bold: 'true',
                italic: 'true'
            },
            'chartArea': {
                'width': '70%',
                'height': '80%'
            },
        }
    };

    chart.chart = new google.visualization.PieChart(
        document.querySelector(chart.element)
    );
    drawPieChart(chart)
    counter = counter + 1;
}

function drawGeneralPriceChart(name, uber, fitness, masaj) {
    let chart = {
        chart: null,
        element: elementNames[counter],
        data: [
            ['Serviciu', 'he'],
            ['Uber', uber],
            ['Fitness', fitness],
            ['Masaj', masaj]
        ],
        options: {
            title: name,
            width: 500,
            height: 500,
            colors: ['#ff6361', '#bc5090', '#ffa600', '#58508d', '#ff6361'],
            legend: 'left',
            'is3D': true,
            backgroundColor: '#000000',
            hAxis: {
                textStyle: {
                    color: '#FFF',
                    bold: 'true',
                    italic: true,
                    fontSize: 20
                }
            },
            legend: {
                textStyle: {
                    color: '#ffffff',
                    italic: true,
                    fontSize: '13',
                },
                position: 'bottom'
            },
            titleTextStyle: {
                color: '#ffffff',
                fontSize: '20',
                bold: 'true',
                italic: 'true'
            },
            'chartArea': {
                'width': '70%',
                'height': '80%'
            },
        }
    };
    chart.chart = new google.visualization.PieChart(
        document.querySelector(chart.element)
    );
    drawPieChart(chart)
    counter = counter + 1;
}

function fetchGeoStatistics() {
    fetch('http://localhost:1234/api/v1/statistici/cityClient')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function(post) {
                map.set("Uber " + post.oras, post.uber)
                map.set("Masaj " + post.oras, post.masaj)
                map.set("Ftiness " + post.oras, post.fitness)
                drawGeographicalPichart(post)
            });
        })
}

function fetchCathegoryStatistics() {
    fetch('http://localhost:1234/api/v1/statistici/serviceCityClient')
        .then((res) => res.json())
        .then((data) => {
            data.forEach(function(post) {
                map.set("Iasi  " + post.serviciu, post.iasi)
                map.set("Cluj " + post.serviciu, post.cluj)
                map.set("Bucuresti " + post.serviciu, post.bucuresti)
                drawCathegoryChart(post)
            });
        })
}

function fetchPriceStatistics(toDraw = true) {
    let massagesSum = 0,
        massageCounter = 0,
        massageClients = 0;
    let uberSum = 0,
        uberCounter = 0,
        uberClients = 0;
    let fitnessSum = 0,
        fitnessCounter = 0,
        fitnessClients = 0;
    fetch('http://localhost:1234/api/v1/masaj/massages')
        .then((res) => res.json())
        .then((data) => {
            data.forEach(function(post) {
                masajClientiLista.push(post.clienti)
                masajPretLista.push(post.pret)
                massagesSum += post.pret;
                massageCounter++
                massageClients += post.clienti;
            });
        })

    fetch("http://localhost:1234/api/v1/fitness/membership")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(function(post) {
                fitnessPretLista.push(post.pret)
                fitnessClientiLista.push(post.clienti)
                fitnessSum += post.pret
                fitnessClients += post.clienti
                fitnessCounter++
            });
        })

    fetch('http://localhost:1234/api/v1/uber/schedule')
        .then((res) => res.json())
        .then((data) => {
            data.forEach(function(post) {
                uberSum = uberSum + post.pret;
                uberClients += post.clienti
                uberCounter++
            });
        })

    setTimeout(function() {
        for (let i = 0; i < 10; i++) {
            prArr.push(getNumber(0, 5))
        }

        const strProfitulTotal = "Profitul sumar total pe fiecare categorie"
        const strAvg = "Profitul mediu in lei"
        const strClientAVg = "Profitul mediu pe client in lei"

        map.set(strProfitulTotal + " Uber", uberSum);
        map.set(strProfitulTotal + " Fitness", fitnessSum);
        map.set(strProfitulTotal + " Massage", massagesSum);

        map.set(strAvg + " Uber", uberSum / uberCounter);
        map.set(strAvg + " Fitness", fitnessSum / fitnessCounter);
        map.set(strAvg + " Massage", massagesSum / massageCounter);

        map.set(strClientAVg + " Uber", uberSum / uberCounter);
        map.set(strClientAVg + " Fitness", fitnessSum / fitnessClients);
        map.set(strClientAVg + " Massage", massagesSum / massageClients);

        if(toDraw == true){
            drawGeneralPriceChart(strProfitulTotal, uberSum, fitnessSum, massagesSum);
            drawGeneralPriceChart(strAvg,
                uberSum / uberCounter, fitnessSum / fitnessCounter, massagesSum / massageCounter)

            drawGeneralPriceChart(strClientAVg,
                fitnessSum / fitnessClients, massagesSum / massageClients, uberSum / uberCounter)
        }
    }, 1000);
}

function drawInsightsChart() {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {
        map.set('Indian Scalp', masajClientiLista[0] / masajPretLista[0] * 100)
        map.set('Back n Shoulders', masajClientiLista[1] / masajPretLista[1] * 100)
        map.set('Aromatic Body Relax', masajClientiLista[2] / masajPretLista[2] * 100)
        map.set('Fitness-Full', fitnessClientiLista[0] / fitnessPretLista[0] * 100)
        map.set('Fitness Day Time', fitnessClientiLista[1] / fitnessPretLista[1] * 100)
        map.set('Fitness 8 sedinte', fitnessClientiLista[2] / fitnessPretLista[2] * 100)
        map.set('Fitness 12 sedinte', fitnessClientiLista[3] / fitnessPretLista[3] * 100,)
        map.set('Calatorie Metropolitana', 30)
        map.set('Calatorie Urbana', 50)
        map.set('Calatorie Urbana', 50)
        map.set('Hot Stone', masajClientiLista[3])

        var data = google.visualization.arrayToDataTable([
            ['ID', 'Rata de profit', 'Profit actual', 'Categorie', 'Clienti'],
            ['Indian Scalp', map.get('Indian Scalp'), prArr[0], 'Masaj', masajPretLista[0]],
            ['Back n Shoulders', map.get('Back n Shoulders'), prArr[1], 'Masaj', masajClientiLista[1]],
            ['Aromatic Body Relax', map.get('Aromatic Body Relax'), prArr[2], 'Masaj', masajClientiLista[2]],
            ['Fitness-Full', map.get('Fitness-Full'), prArr[3], 'Fitness', fitnessClientiLista[0]],
            ['Fitness Day Time', map.get('Fitness Day Time'), prArr[4], 'Fitness', fitnessClientiLista[1]],
            ['Fitness 8 sedinte', map.get('Fitness 8 sedinte'), prArr[5], 'Fitness', fitnessClientiLista[2]],
            ['Fitness 12 sedinte', map.get('Fitness 12 sedinte'), prArr[6], 'Fitness', fitnessClientiLista[3]],
            ['Calatorie Metropolitana', 30, prArr[7], 'Uber', 300],
            ['Calatorie Urbana', 50, prArr[8], 'Uber', 500],
            ['Hot Stone', map.get('Hot Stone'), prArr[9] ,'Masaj', masajClientiLista[3]]
        ]);

        var options = {
            title: 'Statistics for the progress of 2022',
            hAxis: {
                title: 'Rata de progres'
            },
            vAxis: {
                title: 'Progres actual'
            },
            bubble: {
                textStyle: {
                    fontSize: 11
                },
                'chartArea': {
                    'width': '120%',
                    'height': '200%'
                }
            }
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('complex_chart'));
        chart.draw(data, options);
    }
}

function displayNone() {
    document.getElementById("tag-one").style.display = "none";
    document.getElementById("tag-two").style.display = "none";
    document.getElementById("tag-three").style.display = "none";

}

function displayAll() {
    document.getElementById("complex_chart").style.display = "none";
    document.getElementById("tag-one").style.display = "block";
    document.getElementById("tag-two").style.display = "block";
    document.getElementById("tag-three").style.display = "block";
}

function fetchWeeklyStatistics() {
    drawInsightsChart()
    document.getElementById("complex_chart").style.display = "block";
}

function fetchYearStatistics() {
    fetch('http://localhost:1234/api/v1/statistici/cityClient')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function(post) {
                drawGeographicalPichart(post)
            });
        })
}

function convertToHtml() {
    var str = ""
    var increment = 1
    var listOfObjects = [];
    let htmlString = "<!DOCTYPE html>\n<html>\n<body>\n<ul>\n";
    map.forEach((value, key) => {
        str = "<li>" + increment + ". " + key + " -> " + value + "</li>" + "\n"
        htmlString += str
        console.log(htmlString)
        increment++;
    });
    htmlString += "</ul>\n</body>\n</html>";
    listOfObjects.push(htmlString)
    const a = document.getElementById("html-conv");
    const blob = new Blob((listOfObjects))
    a.href = URL.createObjectURL(blob);
}

function convertToPdf() {

    var str = ""
    var insertString = ""
    var increment = 1
    var listOfObjects = [];
    map.forEach((value, key) => {
        str = increment + ". " + key + " -> " + value + "\n";
        insertString += str
        increment++;
    });
    var doc = new jsPDF()
    doc.text('Statistics extract:\n' + insertString, 10, 10)
    doc.save('file.pdf')
}

function convertToXml() {
    var str = ""
    var listOfObjects = [];
    let xmlString = "";
    map.forEach((value, key) => {
        str = "<element>\n"+ "<key> " + key + "</key>" + "\n<value> " + value + "</value>\n</element>\n";
        xmlString += str
    });
    listOfObjects.push(xmlString)
    const a = document.getElementById("xml-conv");
    const blob = new Blob((listOfObjects))
    a.href = URL.createObjectURL(blob);
}


function convertToCsv() {
    var listOfObjects = [];
    if (map.size === 0) {
        listOfObjects.push("CHOOSE CATHEGORY")
    } else {
        listOfObjects.push("ID,CATHEOGRY,VALUE\n")
        var increment = 1;
        map.forEach((value, key) => {
            listOfObjects.push(increment + "," + key + "," + value + "\n")
            increment++;
        });
    }
    const a = document.getElementById("csv-conv");
    const blob = new Blob((listOfObjects))
    a.href = URL.createObjectURL(blob);
}

const init = () => {
    console.log("screen width:" + screen.width)

    map = new Map()

    document.getElementById('zona').addEventListener('click', showGeoStatistics);
    document.getElementById('serviciu').addEventListener('click', showCathegoryStatistics);
    document.getElementById('pret').addEventListener('click', showPriceStatistics);
    document.getElementById('sapt').addEventListener('click', showWeeklyStatistics);

    document.getElementById('html-conv').addEventListener('click', convertToHtml);
    document.getElementById('xml-conv').addEventListener('click', convertToXml);
    document.getElementById('pdf-conv').addEventListener('click', convertToPdf);
    document.getElementById('csv-conv').addEventListener('click', convertToCsv);

    function showGeoStatistics() {
        displayAll()
        map.clear()
        counter = 0;
        window.onresize = fetchGeoStatistics;
        fetchGeoStatistics();
    }

    function showCathegoryStatistics() {
        displayAll()
        map.clear()
        counter = 0;
        window.onresize = fetchCathegoryStatistics;
        fetchCathegoryStatistics();
    }

    function showPriceStatistics() {
        displayAll()
        map.clear()
        counter = 0;
        window.onresize = fetchPriceStatistics;
        fetchPriceStatistics()
    }

    function showWeeklyStatistics() {
        fetchPriceStatistics(false)
        displayNone()
        map.clear()
        counter = 0;
        window.onresize = fetchWeeklyStatistics;
        fetchWeeklyStatistics();
    }
};

google.charts.load('current', {
    packages: ['corechart'],
    callback: init
});