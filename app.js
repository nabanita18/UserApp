var table; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function () {
    table = $('#example').DataTable({
        "ajax": "../data.json",
        columnDefs: [
            {
                targets: -1,
                data: null,
                defaultContent: '<button>Click!</button>',
            },
            
        ],
    });


    $('#example tbody').on('click', 'button', function () {
        var data = table.row($(this).parents('tr')).data();
        alert(data[0] + "'s salary is: " + data[5]);
    });
} );