(function($) {
	'use strict';
	$.fn.challenges = function() {
		
		/*
		Challenge 2: Generate Sorted HTML
		*/

		// list of names to sort
		var aNames = ['Gabriel Ba', 'John Adams', 'Keith Richards', 'Prince', 'John Adams McKenzie'],
		// get the list element
		names_list = document.getElementById('names_list');

		// function to check the last names for sorting
		function lastName(a, b, x, y) {
			a += "";
			b += "";
			x = a.charAt(a.lastIndexOf(" ")+1);
			y = b.charAt(b.lastIndexOf(" ")+1);
			return x > y ? 1 : x < y ? -1 : 0;
		}

		aNames = aNames.sort(lastName);

		// loop through aNames and create <li> elements for each name
		for(var i = 0; i < aNames.length; i++) {
			var li = document.createElement('li');
			li.innerHTML = aNames[i];
			li.value = aNames[i];
			names_list.appendChild(li);
		}

		/*
		End of Challenge 2
		*/


		/*
		Challenge 3: Item Actions
		Use the toggle method to strike through a name the first time it's clicked,
		then remove the strike when clicked again.
		See the CSS file (line 36) for how to convert the cursor to a pointer when hovering over a list item
		*/

		$('#names_list li').toggle(function() {
			$(this).css({'text-decoration': 'line-through'});
		}, function () {
			$(this).css({'text-decoration': 'none'});
		});

		/*
		End of Challenge 3
		*/

		
		/*
		Challenge 4: Values & Timing
		The problem was in the console.log line, which was stated 'console.log(num - i);'
		This was returning -1 because i is always one more than num due to the count starting at 0.
		The fix was to log num then decrease it by 1, all within the loop.
		*/

		function countdown(num) {
			for (var i = 0; i <= num; i += 1) {
				setTimeout(function() {
					console.log(num);
					num--;
				}, i * 1000);
			}
		}
		countdown(5);

		/*
		End of Challenge 4
		*/
		
		
		/*
		Challenge 5: Array Max
		*/
		
		// Our initial array to work with
        var Ch5Array = [ [141,151,161], 2, 3, [101, 202, [303,404] ]],

		// Regular expression to separate array
        Ch5RegEx = /[0-9]+(,[0-9]+)*/,

        // Our initial result from the regular expression
        result = Ch5RegEx.exec(Ch5Array),

        // reduce function to convert our result into a clean string
        newCh5String = result.reduce(function(c,d) {
           return (c > d) ? c : d;
        }),

        // Converting our new string into a new array, separated by comma's
        newCh5Array = newCh5String.split(','),

        // Use Math.max to find the largest value
        largest = Math.max.apply(Math, newCh5Array);

        // Log the result
        console.log(largest);

        /*
         End of Challenge 5
         */


        /*
         Challenge 6: Strings
         */

        // create a function called 'checkArgs' to check argument lengths
        function checkArgs() {

            // create an empty array called 'args' to hold the arguments in
            var args = [];

            // create a loop to gather each argument and add it to the args array
            for (var i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }

            // create a function called 'compareStringLengths' to compare string lengths of items in an array
            function compareStringLengths (a, b) {
                if (a.length < b.length) { return -1; }
                if (a.length > b.length) { return 1; }
                return 0; // a & b are the same
            }

            // order the items in the array from shortest to longest
            args.sort(compareStringLengths);

            // create a variable called 'lastItem' to store the last item in the array
            var lastItem = args[args.length-1],

            // create a variable called 'length' to store the length of the last item in the array
            length = lastItem.length;

            // return the value of the length variable
            return length;
        }
        console.log(checkArgs("a", "bcd", "efgh", "ij"));

        /*
         End of Challenge 6
         */


        /*
         Challenge 7: Validation
         */

        // create a function called 'checkPhone' to validate the phone number
        function checkPhone() {

            // create an empty array called 'errors'
            var errors = [],

            // convert the arguments object to an array and assign it to the variable 'args'
            args = Array.prototype.slice.call(arguments),

            // convert the args array to a string and assign it to the variable 'input'
            input = args.toString();


            // Perform the first check
            var check1 = input;

            // regular expression to check the first character of the input and verify that it is a number
            check1 = check1.match(/^[^0-9]/);

            if(check1 !== null) {
                errors += 'Invalid phone number';
            }


            // Perform the second check
            var check2 = input;

            // regular expression to check for any character other than a number or hyphen
            check2 = check2.match(/[^-0-9]/);

            if (check2 !== null && check2 !== ' ' && errors === '') {
                errors += 'Invalid phone number';
            }


            // Perform the third check
            var check3 = input;

            // regular expression to check for a hyphen followed by a space
            check3 = check3.match(/[-]\s/);

            if (check3 !== null && errors === '') {
                errors += 'Invalid phone number';
            }


            // Perform the fourth check
            var check4 = input;

            // regular expression to check for a space followed by a hyphen
            check4 = check4.match(/\s[-]/);

            if (check4 !== null && errors === '') {
                errors += 'Invalid phone number';
            }


            // regular expression to remove spaces and hyphens
            input = input.replace(/\D/g, '');


            // Perform the final check
            if (errors === '' && input.length < 7 || errors === '' && input.length > 12) {
                errors += 'Invalid phone number';
            }


            // check for errors and return them if they exist - else return the valid phone number
            if (errors === '') {
                return input;
            } else {
                return errors;
            }

        }
        console.log(checkPhone("012-345 69"));

        /*
         End of Challenge 7
         */
	};
})(jQuery);