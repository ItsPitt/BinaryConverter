		function makeBinary()
		{
			var hexy;
			hexy = document.getElementById("hexNum").value;
			var hexy2 = hexy.toLowerCase();
			hexy2 = hexy2.replace(/0/g,"0000");
			hexy2 = hexy2.replace(/1/g,"0001");
			hexy2 = hexy2.replace(/2/g,"0010");
			hexy2 = hexy2.replace(/3/g,"0011");
			hexy2 = hexy2.replace(/4/g,"0100");
			hexy2 = hexy2.replace(/5/g,"0101");
			hexy2 = hexy2.replace(/6/g,"0110");
			hexy2 = hexy2.replace(/7/g,"0111");
			hexy2 = hexy2.replace(/8/g,"1000");
			hexy2 = hexy2.replace(/9/g,"1001");
			hexy2 = hexy2.replace(/a/g,"1010");
			hexy2 = hexy2.replace(/b/g,"1011");
			hexy2 = hexy2.replace(/c/g,"1100");
			hexy2 = hexy2.replace(/d/g,"1101");
			hexy2 = hexy2.replace(/e/g,"1110");
			hexy2 = hexy2.replace(/f/g,"1111");
			document.getElementById("return").innerHTML = hexy2;
		}