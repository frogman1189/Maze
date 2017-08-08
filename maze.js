var dict = {};
dict["\u00a0"] = 0;
dict["8"] = 1;
dict[undefined] = 0;
function init(){
	// Initializing variables
	x = 0;
	y = 0;
	sizeX = 60;
	sizeY = 30;
	entropy = 3;
	
	//init display
	workspace = document.getElementById("workSpace");
	while(y < sizeY){
		workspace.innerHTML = workspace.innerHTML + "<div id='" + y + "' style='font-family:monospace;'></div>"
		y++;
	}
	y = 0;

	matrix = [];
	
	while(y < sizeY){
		row = [];
		while(x < sizeX){
			row[x] = "\u00a0";
			x++;
		}
		x = 0;
		matrix[y] = row;
		y++;
	}
	x = 0;
	y = 0;
	while(y < sizeY){
		//alert("[" + matrix[y] + "]");
		y++;
	}
}

function generator(){
	x = 0;
	y = 0;
	a = 0;
	while(y < sizeY){
		while(x < sizeX){
			if(matrix[y][x] == "\u00a0"){
				up = checkChar(y-1,x);
				down = checkChar(y+1,x);
				left = checkChar(y,x-1);
				right = checkChar(y,x+1);
				//matrix[y][x] = "8";
				if(up + down + left + right < 2){
					if (randint(0,entropy) == 0){
						matrix[y][x] = "8";
					}
				}
			}
		x++;
		}
	x = 0;
	y++;
	}
	display()
	return matrix;
}
function display(){
	y = 0;
	x = 0;
	while(y < sizeY)
	{
		//document.getElementById(y).innerHTML = matrix[y];
		//y++;
		string = "";
		var row = document.getElementById(y);
		row.innerHTML = "";
		while(x < sizeX)
		{
			string = string + matrix[y][x];
			x++;
		}
		row.innerHTML = string;
		x = 0;		
		y++;
	}
}
function checkChar(y,x){
	try{
		a = dict[matrix[y][x]];
		//alert(a);
	}
	catch(err){
		a = 0;
		//alert("error");
	}
	finally{
		return a;
	}
}
function randint(minimum, maximum){
	return Math.floor(Math.random() * ((maximum + 1) - minimum) + minimum);
}
