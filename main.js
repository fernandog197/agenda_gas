const HOJA = SpreadsheetApp.openById('1NHfNfvtcgf55_2w7pQ6uYQ57yt_yV2CbBKD2TYIo8kw').getActiveSheet();

function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos) {
    insertarContacto(datos.parameter.nombre, datos.parameter.email);
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Agenda Google Apps Script');
}

function getHTML(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function obtenerContactos() {
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellido, email, wpp) {
    HOJA.appendRow([nombre, apellido, email, wpp]);
}

function BorrarContacto(numfila) {
    HOJA.deleteRow(numfila);
}

function ModificarContacto(numfila, datos) {
    let celdas = HOJA.getRange(`A${numfila}:D${numfila}`);
    celdas.setValues([[datos.nombre, datos.apellido, datos.email, datos.wpp]]);
}