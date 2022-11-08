var table; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function () {
    table = $('#example').DataTable({
        "ajax": "../data.json",
        columns: [
            { data: null, render: function ( data, type, row ) {
                // Combine the first and last names into a single table field
                return data.first_name+' '+data.last_name;
            } },
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            {
                data: null, 
                className: "dt-center editor-edit",
                defaultContent: '<button><i class="fa fa-pencil"/></button>',
                orderable: false
            },
            {
                data: null, 
                className: "dt-center editor-delete",
                defaultContent: '<button><i class="fa fa-trash"/></button>',
                orderable: false
            }
        ]
    });


    $('#example tbody').on('click', 'button', function () {
        debugger;
        var data = table.row($(this).parents('tr')).data();
        alert(data.first_name + "'s salary is: " + data.salary);
    });
} );