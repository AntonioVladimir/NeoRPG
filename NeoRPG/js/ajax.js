var ajax = {
	fileUpload: function(url){
		var petition = new XMLHttpRequest();

		petition.onreadystatechange = function(){
			/*
			0 / UNSENT 
			1 / OPENED 
			2 / HEADERS_RECIEVED
			3 / LOADING
			4 / DONE 
			*/
			if (petition.readyState == XMLHttpRequest.DONE){
				if (petition.status == 200) {//AIG
					console.log(JSON.parse(petition.responseText));
				}else if (petition.status == 400){//AIW
					console.log("ERROR");
				}else{
					console.log("unexpected result");
				}
			}
		};

		petition.open("GET", url, true);
		petition.send();
	}
}