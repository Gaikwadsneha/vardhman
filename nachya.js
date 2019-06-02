
var http=require('http');   
var controller=function(request,response)
		{    response.write("KYA NACHYA BHAI KYA BOLRI PUBLIC ");  
			response.write(" CDAC KARRE BACCHE APNE VISHAL AUR RAHUL ");
			response.end();
			};
var server=http.createServer(controller);server.listen(7000);console.log("listening on port 7000");