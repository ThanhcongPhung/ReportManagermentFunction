import * as $ from 'jquery';
import 'datatables';

export default (function () {
  $('#dataTable').DataTable({
    "language": {
        "lengthMenu": "Hiển thị _MENU_ báo cáo",
        "zeroRecords": "Nothing found - sorry",
        "info": "Showing page _PAGE_ of _PAGES_",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search":"Tìm kiếm",
        "paginate": {
          "first":      "Đầu",
          "last":       "Cuối",
          "next":       "Tiếp",
          "previous":   "Trước"
        }
    }
} );
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = String( $('#min').val());
        console.log(min);
        var max = String( $('#max').val());
        console.log(max);
        var day = String( data[2] ); // use data for the age column
        console.log(day);
 
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && day <= max ) ||
             ( min <= day   && isNaN( max ) ) ||
             ( min <= day   && day <= max ) )
        {
            return true;
        }
        return false;
    }
);
 
$(document).ready(function() {
    var table = $('#dataTable').DataTable();
     
    // Event listener to the two range filtering inputs to redraw on input
    $('#submit').click( function() {
        table.draw();
    } );
} );

}());
