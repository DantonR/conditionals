(function(){
    var input = document.getElementById('numbers'); // Creates a variable that takes the input box.


    $('button').click(function(){ // On button click
        console.dir(input.value); // Log what is in the input box

        testFalsy(input.value); // Executes the first function (line 12), taking the value within input as the argument.
        turnStringToNumber(input.value); // Executes the second function (line 19)
    }); // End the click function

    function testFalsy (val) { // Creates a function that takes 'val' as the paremeter. 'val' is similar to a variable.
        val = val.toString(); // Changes the 'val' paremeter to a string
        if (val === '22') { // If val is '22' (a string, as it is strict checking)
            console.log('works');
        }
    } //testFalsy end

    function turnStringToNumber (val) { // Creates another function that again, takes 'val' as the parameter
        val = parseInt(val); // Converts val into a number, and reassigns it.

        if (val === 22) { // if 'val' is the NUMBER 22
            console.log('working now');
        } else {
            console.log('not working');
        }
    }



})(); // iffe ENDS
