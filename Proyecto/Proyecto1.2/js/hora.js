var fecha_actual = new Date();

var dia=fecha_actual.getDate();
var mes=fecha_actual.getMonth();
var anio=fecha_actual.getFullYear();
var min=fecha_actual.getMinutes();
var hora=fecha_actual.getHours();

document.write(dia+ ' / '+mes+' / '+anio+' '+hora+':'+min);
