var csnList = [];
var psnList = [];
var checkList = false;
var editList = false;


	function myJson()
	{
		var table = document.getElementById("myTable"), rIndex;
		var inputOne = $('#one').val();
		var inputTwo = $('#two').val();
		var edtButton = 'EDIT';
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
								 console.log(psnList);

						var table = document.getElementById("myTable");
						var row = table.insertRow(1);
						var cell1 = row.insertCell(0);
						var cell2 = row.insertCell(1);
						var cell3 = row.insertCell(2);

							cell1.innerHTML = myData.table5Data[i].cartridge_sn;
							cell2.innerHTML = myData.table5Data[i].printer_sn;
							cell3.setAttribute("id","editBtn");
							cell3.innerHTML = edtButton;
							alert("Success");
							break;
					}
				}
			}
			else
			{
				for (j = 0; j < psnList.length; j++)
				{
					console.log(inputTwo);
					console.log(psnList[j]);

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

				console.log(checkList);
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
									 console.log(psnList);
							var table = document.getElementById("myTable");
							var row = table.insertRow(1);
							var cell1 = row.insertCell(0);
							var cell2 = row.insertCell(1);
							var cell3 = row.insertCell(2);

								cell1.innerHTML = myData.table5Data[i].cartridge_sn;
								cell2.innerHTML = myData.table5Data[i].printer_sn;
								cell3.setAttribute("id","editBtn");
								cell3.innerHTML = edtButton;
								alert("Success");
								break;
						}
					}
				}
			}
		}
	}
	var index = "";
	$("body").on("click","#editBtn",function()
	{
		var p1 = $(this).prev().prev().text();
		var p2 = $(this).prev().text();
		index = $(this).parent().index();

		$("#mdOne").val(p1);
		$("#mdTwo").val(p2);
		console.log(index + " = index ");
		$('#myModal1').modal('show');

	});

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
								  console.log(psnList);

						var rows = document.getElementById("myTable").rows;
							for (var j = 1; j < rows.length; j++)
							{
                                rows[j].id = "myRows" + (j+1);

                                var x = document.getElementById("myTable").rows[index+1].cells;
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
