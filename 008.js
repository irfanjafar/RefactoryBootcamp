var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Masukkan inputan angka: ');
rl.prompt();
angka = 0;

rl.on('line', function(line) {
  	number = line.trim().split('');
  	for (var i = 0; i <= number.length; i++){
      if(number[i] == "="){
   			console.log(angka);
        	process.exit(0);
    	}
  		else{
  			angka = angka + parseInt(number[i]);
  		}
  	}
  	rl.prompt();
})


