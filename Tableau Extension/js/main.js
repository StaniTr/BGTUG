/* globals tableau*/

tableau.extensions.initializeAsync().then(() => {
  const dashboard = tableau.extensions.dashboardContent.dashboard;
  const selectedWorksheet = dashboard.worksheets.find(w => w.name === 'Bites');
});
