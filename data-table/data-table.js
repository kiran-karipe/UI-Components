( function() {
	'use strict';
  
  function getTableData() { // generate mock table data
  	const response = [];
  	for (let i = 1; i <= 10; i++) {
    	const obj = {
        Name: 'Name' + i,
        Age: 22 + i,
        Id: 12345 * i,
        State: 'State' + i,
        Country: 'Country' + i
    	}
      response.push(obj);
    }
  	
  	return response;
  }
 	
  const tableElement = document.getElementById('dataTable');
  const buttonElement = document.getElementById('showButton');
  
  buttonElement.addEventListener('click', showDataTable);
  
  function showDataTable() {
    const data = getTableData();
    const columns = Object.keys(data[0]);
    const tableHead = createTableHeader(columns);
    tableElement.appendChild(tableHead);
    const tableBody = createTableBody(data);
    tableElement.appendChild(tableBody);
  }
  
  function createTableHeader(columns) {
    const theadElement = document.createElement('thead');
    const trElement = document.createElement('tr');
    columns.forEach(column => {
    	const thElement = document.createElement('th');
      thElement.innerHTML = column;
      trElement.appendChild(thElement);
    });
    theadElement.appendChild(trElement);
    return theadElement;
  }
  
  function createTableBody(tableData) {
    const tbodyElement = document.createElement('tbody');
    
    tableData.forEach(obj => {
	    const trElement = document.createElement('tr');
    	for (const [key, value] of Object.entries(obj)) {
      	const tdElement = document.createElement('td');
	      tdElement.innerHTML = value;
        trElement.appendChild(tdElement);
      }
      tbodyElement.appendChild(trElement);
    });
    
    return tbodyElement;
  }
}
)();
