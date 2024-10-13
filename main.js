function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Agenda Google Apps Script');
}

function getHTML(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('1NHfNfvtcgf55_2w7pQ6uYQ57yt_yV2CbBKD2TYIo8kw').getActiveSheet();

    let datos = hoja.getDataRange().getValues();

    return datos;
}