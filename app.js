let payload = {
  "data": [
    {
      "DT_RowId": "row_56",
      "first_name": "Michael",
      "last_name": "Bruce",
      "position": "Javascript Developer",
      "email": "m.bruce@datatables.net",
      "office": "Singapore",
      "extn": "5384",
      "age": "29",
      "salary": "183000",
      "start_date": "2011-06-27"
    },
    {
      "DT_RowId": "row_57",
      "first_name": "Donna",
      "last_name": "Snider",
      "position": "Customer Support",
      "email": "d.snider@datatables.net",
      "office": "New York",
      "extn": "4226",
      "age": "27",
      "salary": "112000",
      "start_date": "2011-01-25"
    }
  ],
  "options": [],
  "files": [],
  "debug": [
    {
      "query": "SELECT  `id` as 'id', `first_name` as 'first_name', `last_name` as 'last_name', `position` as 'position', `email` as 'email', `office` as 'office', `extn` as 'extn', `age` as 'age', `salary` as 'salary', `start_date` as 'start_date' FROM  `datatables_demo` ",
      "bindings": []
    }
  ]
};
var table; // use a global for the submit and return data rendering in the examples

$(document).ready(function () {
  table = $('#example').DataTable({
    "data": payload.data,
    columns: [
      {
        data: null, render: function (data, type, row) {
          // Combine the first and last names into a single table field
          return data.first_name + ' ' + data.last_name;
        }
      },
      { data: "position" },
      { data: "office" },
      { data: "extn" },
      { data: "start_date" },
      { data: "salary", render: $.fn.dataTable.render.number(',', '.', 0, '$') },
      {
        data: null,
        className: "dt-center editor-edit",
        defaultContent: '<button class="edit" ><i class="fa fa-pencil"/></button>',
        orderable: false
      },
      {
        data: null,
        className: "dt-center editor-delete",
        defaultContent: '<a class="delete"><i class="fa fa-trash"/></a>',
        orderable: false
      }
    ]
  });


  $('#example tbody').on('click', 'button', function () {
    debugger;
    clearForm();
    var data = table.row($(this).parents('tr')).data();
    $('#form').modal('show');
    $('#userid').val(data.DT_RowId);
    $('#firstName').val(data.first_name);
    $('#lastName').val(data.last_name);
    $('#position').val(data.position);
    $('#office').val(data.office);
    $('#salary').val(data.salary);
  });

  $('#example tbody').on('click', 'a', function () {
    clearForm();
    var data = table.row($(this).parents('tr')).data();
    let remaining = payload.data.filter((x) => (x.DT_RowId !== data.DT_RowId));
    payload.data = remaining;
    table.clear();
    table.rows.add(payload.data);
    table.draw();
    alert('User is deleted succesfully.');
  });


});

function addUpdateUser() {
  debugger;
  let userID = $('#userid').val();
  let data = {};
  data.first_name = $('#firstName').val();
  data.last_name = $('#lastName').val();
  data.position = $('#position').val();
  data.office = $('#office').val();
  data.salary = $('#salary').val();
  data.extn = '1234';
  data.start_date = "12/12/2024";
  if (!userID) {
    data.DT_RowId = Math.random();
    payload.data.push(data);
  } else {
    let data = payload.data.find(x => x.DT_RowId === userID);
    data.first_name = $('#firstName').val();
    data.last_name = $('#lastName').val();
    data.position = $('#position').val();
    data.office = $('#office').val();
    data.salary = $('#salary').val();
  }

  table.clear();
  table.rows.add([...payload.data]);
  table.draw();
  $('#form').modal('hide');
}

function clearForm(){
  $('#userid').val('');
  $('#firstName').val('');
  $('#lastName').val('');
  $('#position').val('');
  $('#office').val('');
  $('#salary').val('');
}