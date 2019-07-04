var createLetterGrid = function(letter, size){
	var letterGrid = [];

	if(letter.toUpperCase() === 'X'){
		for(row = 0; row < size; row++){
			let str = ''
			for(column = 0; column < size; column++){
				 if ((column == row) || (column + row == size - 1) ){
				 	str = str + "*"
				 } else {
				 	str = str + " "
				 }
			}
			letterGrid.push(str)
		}
	} else if (letter.toUpperCase() === 'Y'){
		console.log("Y")
		for(row = 0; row < size; row++){
			let str = ''
			if (row < (size / 2)) {
				for(column = 0; column < size; column++){
					if ((row > (size/2)) || ((column + row) == (size - 1)) ||  (column == row)){
						str = str + "*"
					} else {
						str = str + " "
					}
				}
			} else {
				for(column = 0; column < size; column++){
					if (column == Math.floor(size / 2)){
						str = str + "*"
					} else {
						str = str + " "
					}
				}
			}
			letterGrid.push(str)
		}
	} else if (letter.toUpperCase() === 'Z'){
		console.log("Z")
		for(row = 0; row < size; row++){
			let str = ''
			if (row == 0 || row == size-1) {
				for(column = 0; column < size; column++){
					str = str + "*"
				}
			} else {
				for(column = 0; column < size; column++){
					if ((column + row == size - 1)){
						str = str + "*"
					} else {
						str = str + " "
					}
				}
			}
			letterGrid.push(str)
		}
	} else {
		console.log("invalid")
	}

	//console.log(letterGrid);

	return letterGrid;
};


module.exports = createLetterGrid;