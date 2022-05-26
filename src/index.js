import { admissionsColumns, customersColumns } from "./columns";

//Here we're importing items we'll need. You can add other imports here.
import {customersColumns, admissionsColumns} from "./columns";
var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json); 
  const data = obj.data; 
  const type = obj.type


const columns = type ==="Customers" ? customersColumns : admissionsColumns;

  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: columns,
    data: data,
  });
};
