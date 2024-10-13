function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Agenda Google Apps Script');
}

function getHTML(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}