'use strict';
var dataSet = {
    head: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
    body: [
            ['Tiger Nixon', 'System Architect', 'Edinburgh', '61', '2011/04/25', '$320,800'],
            ['Garrett Winters', 'Accountant', 'Tokyo', '63', '2011/07/25', '$170,750'],
            ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '66', '2009/01/12', '$86,000'],
            ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '22', '2012/03/29', '$433,060'],
            ['Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700'],
            ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'],
            ['Herrod Chandler', 'Sales Assistant', 'San Francisco', '59', '2012/08/06', '$137,500'],
            ['Rhona Davidson', 'Integration Specialist', 'Tokyo', '55', '2010/10/14', '$327,900'],
            ['Colleen Hurst', 'Javascript Developer', 'San Francisco', '39', '2009/09/15', '$205,500'],
            ['Sonya Frost', 'Software Engineer', 'Edinburgh', '23', '2008/12/13', '$103,600'],
            ['Jena Gaines', 'Office Manager', 'London', '30', '2008/12/19', '$90,560'],
            ['Quinn Flynn', 'Support Lead', 'Edinburgh', '22', '2013/03/03', '$342,000'],
            ['Charde Marshall', 'Regional Director', 'San Francisco', '36', '2008/10/16', '$470,600'],
            ['Haley Kennedy', 'Senior Marketing Designer', 'London', '43', '2012/12/18', '$313,500'],
            ['Tatyana Fitzpatrick', 'Regional Director', 'London', '19', '2010/03/17', '$385,750'],
            ['Michael Silva', 'Marketing Designer', 'London', '66', '2012/11/27', '$198,500'],
            ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '64', '2010/06/09', '$725,000'],
            ['Gloria Little', 'Systems Administrator', 'New York', '59', '2009/04/10', '$237,500'],
            ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'],
            ['Dai Rios', 'Personnel Lead', 'Edinburgh', '35', '2012/09/26', '$217,500'],
            ['Jenette Caldwell', 'Development Lead', 'New York', '30', '2011/09/03', '$345,000'],
            ['Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '40', '2009/06/25', '$675,000'],
            ['Caesar Vance', 'Pre-Sales Support', 'New York', '21', '2011/12/12', '$106,450'],
            ['Doris Wilder', 'Sales Assistant', 'Sidney', '23', '2010/09/20', '$85,600'],
            ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '45', '2009/10/09', '$1,200,000'],
            ['Gavin Joyce', 'Developer', 'Edinburgh', '65', '2010/12/22', '$92,575'],
            ['Jennifer Chang', 'Regional Director', 'Singapore', '34', '2010/11/14', '$357,650'],
            ['Brenden Wagner', 'Software Engineer', 'San Francisco', '24', '2011/06/07', '$206,850'],
            ['Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '44', '2010/03/11', '$850,000'],
            ['Shou Itou', 'Regional Marketing', 'Tokyo', '22', '2011/08/14', '$163,000'],
            ['Michelle House', 'Integration Specialist', 'Sidney', '26', '2011/06/02', '$95,400'],
            ['Suki Burks', 'Developer', 'London', '35', '2009/10/22', '$114,500'],
            ['Prescott Bartlett', 'Technical Author', 'London', '34', '2011/05/07', '$145,000'],
            ['Gavin Cortez', 'Team Leader', 'San Francisco', '29', '2008/10/26', '$235,500'],
            ['Martena Mccray', 'Post-Sales support', 'Edinburgh', '54', '2011/03/09', '$324,050'],
            ['Unity Butler', 'Marketing Designer', 'San Francisco', '27', '2009/12/09', '$85,675'],
            ['Howard Hatfield', 'Office Manager', 'San Francisco', '36', '2008/12/16', '$164,500'],
            ['Hope Fuentes', 'Secretary', 'San Francisco', '41', '2010/02/12', '$109,850'],
            ['Vivian Harrell', 'Financial Controller', 'San Francisco', '62', '2009/02/14', '$452,500'],
            ['Timothy Mooney', 'Office Manager', 'London', '37', '2008/12/11', '$136,200'],
            ['Jackson Bradshaw', 'Director', 'New York', '65', '2008/09/26', '$645,750'],
            ['Olivia Liang', 'Support Engineer', 'Singapore', '64', '2011/02/03', '$234,500'],
            ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500'],
            ['Sakura Yamamoto', 'Support Engineer', 'Tokyo', '37', '2009/08/19', '$139,575'],
            ['Thor Walton', 'Developer', 'New York', '61', '2013/08/11', '$98,540'],
            ['Finn Camacho', 'Support Engineer', 'San Francisco', '47', '2009/07/07', '$87,500'],
            ['Serge Baldwin', 'Data Coordinator', 'Singapore', '64', '2012/04/09', '$138,575'],
            ['Zenaida Frank', 'Software Engineer', 'New York', '63', '2010/01/04', '$125,250'],
            ['Zorita Serrano', 'Software Engineer', 'San Francisco', '56', '2012/06/01', '$115,000'],
            ['Jennifer Acosta', 'Junior Javascript Developer', 'Edinburgh', '43', '2013/02/01', '$75,650'],
            ['Cara Stevens', 'Sales Assistant', 'New York', '46', '2011/12/06', '$145,600'],
            ['Hermione Butler', 'Regional Director', 'London', '47', '2011/03/21', '$356,250'],
            ['Lael Greer', 'Systems Administrator', 'London', '21', '2009/02/27', '$103,500'],
            ['Jonas Alexander', 'Developer', 'San Francisco', '30', '2010/07/14', '$86,500'],
            ['Shad Decker', 'Regional Director', 'Edinburgh', '51', '2008/11/13', '$183,000'],
            ['Michael Bruce', 'Javascript Developer', 'Singapore', '29', '2011/06/27', '$183,000'],
            ['Donna Snider', 'Customer Support', 'New York', '27', '2011/01/25', '$112,000']
          ]
};

var currentPage = 1,
    rowPerPage = 10,
    target = document.getElementById('dataTable'),
    sortBy = [0, 'asc'],
    tempData = { head: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'] };

function renderTable(el, d, init) {
  var page = (typeof el!='undefined' && el!=null)?el.dataset.pageid:currentPage,
      data = (typeof d!='undefined')?d:dataSet,
      numPages = Math.ceil(data.body.length / rowPerPage);

  /* Toggle Column */
  if (!target.querySelector('.dataTable-toggle')) {
    var strColumns = 'Columns: <ul>';
    data.head.forEach(function(item, index){
      strColumns += '<li><label><input type="checkbox" name="dtColumns" data-columnid="' + index + '" checked>' + item + '</label></li>';
    });
    strColumns += '</ul>'
    var toggleWrapper = document.createElement('div');
    toggleWrapper.className = 'dataTable-toggle';
    toggleWrapper.innerHTML = strColumns;
    target.appendChild(toggleWrapper);

    var chkColumns = document.querySelectorAll('input[name="dtColumns"]');
    chkColumns.forEach(function(item, index){
      item.addEventListener('click', function(){
        document.querySelector('.dataTable-table').classList.toggle('hide-'+this.dataset.columnid);
      });
    });
  }

  if (!target.querySelector('.dataTable-search')) {
    var searchWrapper = document.createElement('div');
    searchWrapper.className = 'dataTable-search';
    searchWrapper.innerHTML = '<label>Search: <input type="text" id="txtSearch" /></label>';
    target.appendChild(searchWrapper);

    var txtSearch = document.querySelector('#txtSearch');
    txtSearch.addEventListener('keypress', function(e){
      var k = e.which;
      if (!((k >= 65 && k <= 90) || (k >= 97 && k <= 122) || (k >= 48 && k <= 57) || k==32)){
        e.preventDefault();
      }
    })
    txtSearch.addEventListener('keyup', function(e){
      var str = this.value.trim().toLowerCase();
      if (/[a-zA-Z0-9-_ ]/.test(str)) {
        tempData.body = [];
        data.body.forEach(function(arr, index){
          if (arr.toString().toLowerCase().indexOf(str)!=-1){
            tempData.body.push(arr);
          }
        });
        renderTable(null, tempData);
      }
    });
  }

  if (document.querySelector('#txtSearch').value!=''){
    data = tempData;
    numPages = Math.ceil(data.body.length / rowPerPage);
  }
  data.body = sortByCol(data.body, sortBy[0], sortBy[1]);

  var table = document.createElement('table');
  table.className = 'dataTable-table';
  table.cellSpacing = 0;

  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  for (let i=0; i<data.head.length; i++) {
    let th = document.createElement('th');
    th.className = (i==sortBy[0])?('sorted sort-order-' + sortBy[1]):'';
    th.setAttribute('data-columnid', i);
    th.innerHTML = data.head[i];
    th.addEventListener('click', function(e){
      sortBy[1] = (sortBy[0]==this.dataset.columnid && sortBy[1].indexOf('asc')!=-1)?'desc':'asc';
      sortBy[0] = this.dataset.columnid;
      this.parentNode.querySelectorAll('th').forEach(function(e){
        e.className = '';
      });
      this.className = 'sorted sort-order-' + sortBy[1];
      renderTable();
    });
    tr.appendChild(th);
  }
  thead.appendChild(tr);

  var tbody = document.createElement('tbody');
  for (let i=(page-1)*rowPerPage; i<(page*rowPerPage) && i<data.body.length; i++) {
    let tr = document.createElement('tr');
    for (let j=0; j<data.body[i].length; j++) {
        let td = document.createElement('td');
        td.innerHTML = data.body[i][j];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);

  var pagination = document.createElement('div');
  pagination.className = 'dataTable-paginate';
  pagination.innerHTML = generatPagination(page, numPages);
  if (target.querySelector('.dataTable-table')) {
    target.replaceChild(table, target.querySelector('.dataTable-table'));
    target.replaceChild(pagination, target.querySelector('.dataTable-paginate'));
  } else {
    target.appendChild(table);
    target.appendChild(pagination);
  }
}

function generatPagination(currentPage, numPages) {
  var buttons = '<input type="button" value="Previous" data-pageid="' + (parseInt(currentPage)-1) + '" onclick="renderTable(this)" class="dataTable-paginate__button" ' + ((currentPage==1)?' disabled':'') + '>';
  for (let i=1; i<=numPages; i++) {
    buttons += '<input type="button" value="'+i+'" data-pageid="'+i+'" onclick="renderTable(this)" class="dataTable-paginate__button' + ((i==currentPage)?' active':'') + '">';
  }
  buttons += '<input type="button" value="Next" data-pageid="' + (parseInt(currentPage)+1) + '"  onclick="renderTable(this)" class="dataTable-paginate__button" ' + ((currentPage==numPages)?' disabled':'') + '>';
  return buttons;
}

function sortByCol(arr, colIndex, order){
  function sortFunction(a, b) {
    a = a[colIndex]
    b = b[colIndex]
    return (a === b) ? 0 : (a < b) ? -1 : 1;
  }
  if (order=='asc') {
    return arr.sort(sortFunction);
  } else {
    return arr.sort(sortFunction).reverse();
  }
}

renderTable();
