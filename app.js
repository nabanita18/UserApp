var editor; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function () {
    $('#example').DataTable({
        "ajax": "../data.json",
        "fields": [ {
                "label": "First name:",
                "name": "first_name"
            }, {
                "label": "Last name:",
                "name": "last_name"
            }, {
                "label": "Position:",
                "name": "position"
            }, {
                "label": "Office:",
                "name": "office"
            }, {
                "label": "Extension:",
                "name": "extn"
            }, {
                "label": "Start date:",
                "name": "start_date",
                "type": "datetime"
            }, {
                "label": "Salary:",
                "name": "salary"
            }
        ]
    } );
 
    // New record
    $('a.editor-create').on('click', function (e) {
        e.preventDefault();
 
        editor.create( {
            title: 'Create new record',
            buttons: 'Add'
        } );
    } );
 
    // Edit record
    $('#example').on('click', 'td.editor-edit', function (e) {
        e.preventDefault();
 
        editor.edit( $(this).closest('tr'), {
            title: 'Edit record',
            buttons: 'Update'
        } );
    } );
 
    // Delete a record
    $('#example').on('click', 'td.editor-delete', function (e) {
        e.preventDefault();
 
        editor.remove( $(this).closest('tr'), {
            title: 'Delete record',
            message: 'Are you sure you wish to remove this record?',
            buttons: 'Delete'
        } );
    } );
} );