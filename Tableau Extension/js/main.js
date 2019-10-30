/* globals tableau*/


let worksheetName = 'Bites';
let fieldName = 'Words';
let sheet_property = 'color';



tableau.extensions.initializeAsync().then(() => {
  const dashboard = tableau.extensions.dashboardContent.dashboard;
  const selectedWorksheet = dashboard.worksheets.find(w => w.name === 'Bites');
  const fieldName = 'Words';
  
  
  // Call to get the selected marks for the worksheet
selectedWorksheet.getSelectedMarksAsync().then(function (marks) {
  // Get the first DataTable for our selected marks (usually there is just one)
  const worksheetData = marks.data[0];
console.log(mark);
  // Map the data into a format for display, etc.

});

  
  
  //const markSelection = tableau.TableauEventType.MarkSelectionChanged;
/*
var unregisterEventHandlerFunction = selectedWorksheet.addEventListener(markSelection, function (selectionEvent) {
// Do sth when bubbles are selected in the worksheet
loadSelectedMarks(selectedWorksheet);
 // get("color")
console.log(selectionEvent);
  console.log(selectedWorksheet.get("color"));
});
*/




}
