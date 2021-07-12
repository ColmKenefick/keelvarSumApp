# A Technical Text v1.0


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

## How, What, When

We reduce the array to gather an accumulation of the sums, excluding the sum of the current value being iterated on. 
Inside in the reducer we loop over the array for each value we're reducing on (so 4 times for each element in a 4 element array) and in here we check that we're not adding the sum of the same index values (i.e 4 + 4 , for the array [4, 3, 2, 1]). 

we can then perform the sum and add the value to the reducer and move on. Once we have an array of the sums (16 values for a 4 element array, 9 for a 3 element array etc...) we can then use the some value to compare the two arrays and return a boolean based on it's result.


