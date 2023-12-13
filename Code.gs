var url = "https://docs.google.com/spreadsheets/d/1tLSChUFnFPyMRV0TsenlECLq2DydCAN0jSObbPUHIuk/edit#gid=0"

function doGet(e) {

  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Destinations");
  var list = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1).getValues();
  var htmlListArray = list.map(function(r){ return '<option>' + r[0] + '</option>'; }).join("");

  if(e.parameter.page == "page"){
    var tmp = HtmlService.createTemplateFromFile("page");
  }else if(e.parameter.page == "map"){
    var tmp = HtmlService.createTemplateFromFile("map");
  }else if(e.parameter.page == "index"){
    var tmp = HtmlService.createTemplateFromFile("index");
  }else if(e.parameter.page == "300400map"){
    var tmp = HtmlService.createTemplateFromFile("300400map");
  }else if(e.parameter.page == "500600map"){
    var tmp = HtmlService.createTemplateFromFile("500600map");
  }else if(e.parameter.page == "Cafeteria"){
    var tmp = HtmlService.createTemplateFromFile("Cafeteria");
  }else if(e.parameter.page == "fieldmap"){
    var tmp = HtmlService.createTemplateFromFile("fieldmap");
  }else if(e.parameter.page == "gym"){
    var tmp = HtmlService.createTemplateFromFile("gym");
  }else if(e.parameter.page == "office"){
    var tmp = HtmlService.createTemplateFromFile("office");
  }else if(e.parameter.page == "libraryPerforming"){
    var tmp = HtmlService.createTemplateFromFile("libraryPerforming");
  }else{
    var tmp = HtmlService.createTemplateFromFile("index");
  }
  tmp.list = htmlListArray;
  return tmp.evaluate();
}
