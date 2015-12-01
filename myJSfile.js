//	Michael Pittard
//	myJSfile.js
//	Binary Converter
//	Version 1.0


		function makeBinary()
		{
			var hexy;
			hexy = document.getElementById("hexNum").value;

			var howBigIsHexy1 = hexy.length;
			hexy = hexy.toLowerCase();
			hexy = hexy.replace(/0/g,"0000");
			hexy = hexy.replace(/1/g,"0001");
			hexy = hexy.replace(/2/g,"0010");
			hexy = hexy.replace(/3/g,"0011");
			hexy = hexy.replace(/4/g,"0100");
			hexy = hexy.replace(/5/g,"0101");
			hexy = hexy.replace(/6/g,"0110");
			hexy = hexy.replace(/7/g,"0111");
			hexy = hexy.replace(/8/g,"1000");
			hexy = hexy.replace(/9/g,"1001");
			hexy = hexy.replace(/a/g,"1010");
			hexy = hexy.replace(/b/g,"1011");
			hexy = hexy.replace(/c/g,"1100");
			hexy = hexy.replace(/d/g,"1101");
			hexy = hexy.replace(/e/g,"1110");
			hexy = hexy.replace(/f/g,"1111");
			var howBigIsHexy2 = hexy.length;
			if(howBigIsHexy2 != howBigIsHexy1 * 4)
			{
				hexy = "Invalid input";
			}
			document.getElementById("returnB").innerHTML = hexy;
		}


		function make10()
		{
			var hexy;
			hexy = document.getElementById("hexNum").value;
			var howBigIsHexy1 = hexy.length;
			hexy = hexy.toLowerCase();
			hexy = hexy.replace(/0/g,"0000");
			hexy = hexy.replace(/1/g,"0001");
			hexy = hexy.replace(/2/g,"0010");
			hexy = hexy.replace(/3/g,"0011");
			hexy = hexy.replace(/4/g,"0100");
			hexy = hexy.replace(/5/g,"0101");
			hexy = hexy.replace(/6/g,"0110");
			hexy = hexy.replace(/7/g,"0111");
			hexy = hexy.replace(/8/g,"1000");
			hexy = hexy.replace(/9/g,"1001");
			hexy = hexy.replace(/a/g,"1010");
			hexy = hexy.replace(/b/g,"1011");
			hexy = hexy.replace(/c/g,"1100");
			hexy = hexy.replace(/d/g,"1101");
			hexy = hexy.replace(/e/g,"1110");
			hexy = hexy.replace(/f/g,"1111");
			var howBigIsHexy2 = hexy.length;
			if(howBigIsHexy2 != howBigIsHexy1 * 4)
			{
				hexy = "Invalid input";
				document.getElementById("returnD").innerHTML = hexy;
				return 0;
			}
			var sizeOfHexy = hexy.length;

			var total = 0;
			var counter = 0;

			--sizeOfHexy;
			
			while(sizeOfHexy >= 0)
			{
				if(hexy.charAt(sizeOfHexy) === "1")
				{
					total += Math.pow(2,counter);
				}
				--sizeOfHexy;
				counter++;
			}
			

			document.getElementById("returnD").innerHTML = total;
		}