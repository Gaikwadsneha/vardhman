
var http=require('http');   
var controller=function(request,response)
		{    response.write("KYA SOMYA BHAI KYA BOLRI PUBLIC ");  
			response.write("PIMPLE KO BHEJNE KA KYA ILOVE U LIKH KE PUBLIC");
			response.end();
			};
var server=http.createServer(controller);server.listen(7000);console.log("listening on port 7000");