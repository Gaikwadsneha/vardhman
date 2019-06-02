
var http=require('http');   
var controller=function(request,response)
		{    response.write("I love u baby will u marry me....");                    			
			response.end();
			};
var server=http.createServer(controller);server.listen(7000);console.log("listening on port 7000");