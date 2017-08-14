'use strict';

var dataSet,
    currentPage = 1,
    rowPerPage = 10,
    target = document.getElementById('dataTable'),
    sortBy = [0, 'asc'],
    tempData = { head: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'] };

loadJSON('/data.json', function(response) {
  var dataSet = JSON.parse(response);
  renderTable(null, dataSet, true);
});

function renderTable(el, d, initial) {
  if (typeof initial!='undefined' && initial) dataSet = d;

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
        td.setAttribute('contenteditable', 'true');
        td.setAttribute('data-i', i);
        td.setAttribute('data-j', j);
        td.innerHTML = data.body[i][j];
        td.addEventListener('keydown', function(e){
          let esc = e.which == 27,
              nl = e.which == 13,
              el = e.target,
              input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA',
              d = {};
          if (input) {
            if (esc) {
              document.execCommand('undo');
              el.blur();
            } else if (nl) {
              data.body[this.dataset.i][this.dataset.j] = el.innerHTML;
              el.blur();
              e.preventDefault();
            }
          }
        }, true);
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

function loadJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
