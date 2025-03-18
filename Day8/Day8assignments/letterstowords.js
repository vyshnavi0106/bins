/*convert array of letters to array of words
		const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'
				];
	   output = ['bake','cake','eat'];*/


const inputArr = [ 
        'b', 'a', 'k', 'e', ' ',
        'c', 'a', 'k', 'e', ' ',
        'e', 'a', 't'
        ];
function ltow(arr){
    console.log(inputArr.join('').split(' '));
    return inputArr.join('').split(' ').filter(word=>word.length>0);
}  //filter(word=>word.length>0) Removes any empty words from the final array.


console.log(ltow(inputArr));