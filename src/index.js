//Here we're importing items we'll need. You can add other imports here.

var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json); 
  const data = obj.data; 
  console.log(data); 

  // TODO: Load the DataTables libraries by linking to the DataTables CDN. 
  //TODO: Get data from FileMaker
  //TODO: prep it for the JS.

  //TODO: create the columns.

  //TODO: Explore options of Datatables
  //https://datatables.net/reference/option/
  //https://datatables.net/examples/index
  // Create the DataTable, after destroying it if already exists
  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: [
      {title: "Company", data: "fieldData.CompanyName"},
      {title: "Address", data: "fieldData.StreetAddress", orderable: false },
      {title: "City", data: "fieldData.City", orderable: true },
      {title: "State", data: "fieldData.State" },
      {title: "Zip", data: "fieldData.Zip" },
      {title: "ModifiedTimeStamp", data: "fieldData.ModifiedTimeStamp" },
  ],
    data: data,
  });
};
