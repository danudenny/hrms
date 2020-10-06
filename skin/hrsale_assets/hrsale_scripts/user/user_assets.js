$(document).ready(function() {
   var xin_table = $('#xin_table').dataTable({
        "bDestroy": true,
		"ajax": {
            url : base_url+"/assets_list/",
            type : 'GET'
        },
		"fnDrawCallback": function(settings){
		$('[data-toggle="tooltip"]').tooltip();          
		}
    });
	
	$('[data-plugin="select_hrm"]').select2($(this).attr('data-options'));
	$('[data-plugin="select_hrm"]').select2({ width:'100%' }); 	
		
	$('.view-modal-data').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var asset_id = button.data('asset_id');
		var modal = $(this);
	$.ajax({
		url :  site_url+"assets/asset_read/",
		type: "GET",
		data: 'jd=1&is_ajax=1&mode=modal&data=view_asset&type=view_asset&asset_id='+asset_id,
		success: function (response) {
			if(response) {
				$("#ajax_modal_view").html(response);
			}
		}
		});
	});
	
});