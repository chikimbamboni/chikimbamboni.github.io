google.charts.load('current', { packages: [ 'timeline' ] });


function init() {
  document.getElementById('sd223').addEventListener('click', draw);
  draw();
  };

function draw() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Имя');
  data.addColumn('date', 'Начало');
  data.addColumn('date', 'Конец');

  var lines = document.getElementById('e13').value.split('\n')
lines.forEach(function(el) {
  var gg = el.split(',');
  data.addRow(gg);
});

if (window.chart === undefined)
  window.chart = new google.visualization.Timeline(document.getElementById('chart'));
var c = window.chart;
c.clearChart();
c.draw(data, {});

};














































google.charts.setOnLoadCallback(init);