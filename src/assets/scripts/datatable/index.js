import * as $ from 'jquery';
import 'datatables';

export default (function () {
  $('#dataTable').DataTable({
    "columnDefs": [
        { "type": "date", "targets": 2 }
      ],
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

}());
$(document).ready(function () {
    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var min = $('#min').datepicker('getDate');
            console.log(min);
            var max = $('#max').datepicker('getDate');
            console.log(max);
            var startDate = data[2]||0;
            var from= startDate.split("/");
            console.log(from);
            startDate = new Date(from[2], from[1] - 1, from[0]);
            console.log(startDate);
            if (min == null && max == null) return true;
            if (min == null && startDate <= max) return true;
            if (max == null && startDate >= min) return true;
            if (startDate <= max && startDate >= min) return true;
            return false;
        }
    );
    $('#min').datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });
    $('#max').datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });
    var table = $('#dataTable').DataTable();
    // Event listener to the two range filtering inputs to redraw on input
    $('#min, #max').change(function () {
        table.draw();
    });
});
