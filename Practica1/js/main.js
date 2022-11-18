function m(data) {
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'helvetica'
            }
        }
    });

    Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Who has more money',
            style: {
                fontFamily: 'fantasy'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: data

    });
}

document.addEventListener('DOMContentLoaded', function () {
    extractData();
    extractData2();
    extractData3();
    extractData4();
})

function extractData() {
    jQuery.ajax({
        type: "POST",
        url: './php/connect.php',
        data: {
            dat: "data1macia"
        },
        success: function (obj) {
            m(JSON.parse(obj));
        }
    });
}

function extractData2() {
    jQuery.ajax({
        type: "POST",
        url: './php/connect.php',
        data: {
            dat: "data2macia"
        },
        success: function (obj) {
            a(JSON.parse(obj));
        }
    });
}

function extractData3() {
    jQuery.ajax({
        type: "POST",
        url: './php/connect.php',
        data: {
            dat: "data3macia"
        },
        success: function (obj) {

            console.log(JSON.parse(obj));
            f(JSON.parse(obj));
        }
    });
}

function extractData4() {
    jQuery.ajax({
        type: "POST",
        url: './php/connect.php',
        data: {
            dat: "data4antonio"
        },
        success: function (obj) {

            console.log(JSON.parse(obj));
            bySex(JSON.parse(obj));
        }
    });
}

function a(data) {
    Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Who has more money',
            style: {
                fontFamily: 'fantasy'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>',
            style: {
                fontFamily: 'serif'
            }
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: data,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}

function f(data) {
    Highcharts.chart('container3', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Historic World Population by Region',
            style: {
                fontFamily: 'fantasy'
            }
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
                'target="_blank">Wikipedia.org</a>',
            style: {
                fontFamily: 'serif'
            }
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'middle'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: data
    });
}

function bySex(data) {
    Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Population wealth by gender',
            style: {
                fontFamily: 'fantasy'
            }
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="./"' +
                'target="_blank">dunno</a>',
            style: {
                fontFamily: 'serif'
            }
        },
        xAxis: {
            categories: ['Agender', 'Bigender', 'Female', 'Genderfluid', 'Genderqueer', 'Male', 'Non-binary', 'Polygender'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Money (millions)',
                align: 'middle'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: data
    });
}