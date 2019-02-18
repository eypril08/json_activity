var csnList = [];
var psnList = [];
var checkList = false;
var editList = false;


//deleting extra characters

	inputOneLength = 20;
	inputTwoLength = 18;

	$('#one').on('keyup keydown change', function () {
		if($(this).val().length > inputOneLength){

			val=$(this).val().substr(0,$(this).val().length-1);
			$(this).val(val);
		};
	});
	
	$('#two').on('keyup keydown change', function () {
		if($(this).val().length > inputTwoLength){

			val=$(this).val().substr(0,$(this).val().length-1);
			$(this).val(val);
		};
	});
	
	$('#mdOne').on('keyup keydown change', function () {
		if($(this).val().length > inputOneLength){

			val=$(this).val().substr(0,$(this).val().length-1);
			$(this).val(val);
		};
	});
	
	$('#mdTwo').on('keyup keydown change', function () {
		if($(this).val().length > inputTwoLength){

			val=$(this).val().substr(0,$(this).val().length-1);
			$(this).val(val);
		};
	});

//table1 sort

	const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

	const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
		v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
		)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

		document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
		const table = th.closest('table');
		Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
			.sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
			.forEach(tr => table.appendChild(tr) );
	})));

//check button	

	function myJson()
	{
		var table = document.getElementById("myTable"), rIndex;
		var inputOne = $('#one').val();
		var inputTwo = $('#two').val();
		var edtButton = 'EDIT' + '<i class="fa fa-edit" aria-hidden="true"></i>';
        var deleteBtn = 'Delete' + '<i class="fa fa-trash-o" aria-hidden="true"></i>';
		var today = new Date();
		var i;
		
		
		if ((inputOne == "") || (inputTwo == "") ) 
		{
			alert("Please complete all required field!");
		}
		else
		{  
			if(csnList.length == 0 || psnList.length == 0)
			{
				for (i = 0; i < myData.table5Data.length; i++) 
				{
					
					if((inputOne == myData.table5Data[i].cartridge_sn) && (inputTwo == myData.table5Data[i].printer_sn))
					{
						var csnVal = myData.table5Data[i].cartridge_sn;
								 csnList.push(csnVal);
						var psnVal = myData.table5Data[i].printer_sn;
								 psnList.push(psnVal);
						
						var table = document.getElementById("myTable");						
						var row = table.insertRow(1);
						var cell1 = row.insertCell(0);
						var cell2 = row.insertCell(1);
						var cell3 = row.insertCell(2);
						var cell4 = row.insertCell(2);
						
							cell1.innerHTML = myData.table5Data[i].cartridge_sn;
							cell2.innerHTML = myData.table5Data[i].printer_sn;							
							cell3.setAttribute("id","editBtn");
							cell3.innerHTML = edtButton;
							cell4.setAttribute("id","delBtn");
							cell4.innerHTML = deleteBtn;
							alert("Success");
							break;
					}
				}
			}
			else
			{	
				for (j = 0; j < psnList.length; j++)
				{
					if(inputTwo == psnList[j])
					{
						alert("Serial Number Already Exist!");
						checkList = true;
						break;
					}
					else
					{
						checkList = false;
					}
					
				}

				if(!checkList)
				{
					for (i = 0; i < myData.table5Data.length; i++) 
					{
						if((inputOne == myData.table5Data[i].cartridge_sn) && (inputTwo == myData.table5Data[i].printer_sn))
						{
							var csnVal = myData.table5Data[i].cartridge_sn;
									 csnList.push(csnVal);
							var psnVal = myData.table5Data[i].printer_sn;
									 psnList.push(psnVal);
							var table = document.getElementById("myTable");	
							var row = table.insertRow(1);
							var cell1 = row.insertCell(0);
							var cell2 = row.insertCell(1);
							var cell3 = row.insertCell(2);
							var cell4 = row.insertCell(2);
							
								cell1.innerHTML = myData.table5Data[i].cartridge_sn;
								cell2.innerHTML = myData.table5Data[i].printer_sn;
								cell3.setAttribute("id","editBtn");
								cell3.innerHTML = edtButton;
								cell4.setAttribute("id","delBtn");
								cell4.innerHTML = deleteBtn;
								alert("Success");
								break;
						}
					}
				}
			}
		}
		
	//table-data_time_check	

		for (i = 0; i < myData.table5Data.length; i++) 
		{
			if((inputOne == myData.table5Data[i].cartridge_sn) && (inputTwo == myData.table5Data[i].printer_sn))
			{
				var table = document.getElementById("myTable2");
				var row = table.insertRow(1);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);

					cell1.innerHTML = myData.table5Data[i].cartridge_sn;
					cell2.innerHTML = myData.table5Data[i].printer_sn;
					cell3.innerHTML = today;
					break;
			}
		}

	}
	
//edit button
	
	var index = "";
	$("body").on("click","#editBtn",function()
	{
		var p1 = $(this).prev().prev().prev().text();
		var p2 = $(this).prev().prev().text();
		index = $(this).parent().index();
		
		$("#mdOne").val(p1);
		$("#mdTwo").val(p2);
		$('#myModal1').modal('show');
		
	});
	
//delete button

	var index = "";
	$("body").on("click","#delBtn",function()
	{	
		for (x = 0; x < psnList.length; x++) 
		{	
			psnList.splice( index, 1 );
		}
		index = $(this).parent().index();
		document.getElementById("myTable").deleteRow(index);
	});	

//Update Button
		
	$("#Update").click(function()
	{
		var inputMod1 = $('#mdOne').val();
		var inputMod2 = $('#mdTwo').val();
		var table = document.getElementById("myTable"), rIndex;
		var edtButton = '<a id="editBtn">EDIT</a>'
		var i;
		
			
			for (x = 0; x < psnList.length; x++)
			{
				var inputMod1 = $('#mdOne').val();
				var inputMod2 = $('#mdTwo').val();
				
				if(inputMod2 == psnList[x])
					{
						alert("Printer Serial Number Already Exist!");
						editList = true;
						break;
					}
					else
					{
						editList = false;
					}
			}
		
			if(!editList)
			{
				for (i = 0; i < myData.table5Data.length; i++) 
				{
					if((inputMod1 == myData.table5Data[i].cartridge_sn) && (inputMod2 == myData.table5Data[i].printer_sn))
					{
						var table = document.getElementById("myTable");
						var csnVal = myData.table5Data[i].cartridge_sn;
								 csnList.push(csnVal);
								 psnList.shift();
						var psnVal = myData.table5Data[i].printer_sn;
								 psnList.push(psnVal);
								 
						var rows = document.getElementById("myTable").rows;
							for (var j = 1; j < rows.length; j++)
							{
									rows[j].id = "myRows" + (j+1);
										
									var x = document.getElementById("myTable").rows[index].cells;
									  x[0].innerHTML = myData.table5Data[i].cartridge_sn;
									  x[1].innerHTML = myData.table5Data[i].printer_sn;	
									  break;
							}
						
						   
						alert("Success");
						$('#myModal1').modal('hide');
					}
				}

			}
	});