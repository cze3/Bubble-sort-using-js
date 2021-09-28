// To make the code readable as far as we can so we will make functions to implement the sorting in ASC and DESC
// We will enter the unordered list 'numbers' as a parameter to our functions

// First we will create ascending bubble sort function
function ascBubbleSort (numbers){

    for(let i = 0 ; i < numbers.length ; i++)
    {
        // The second loop sorts the numbers so it will starts from first element to the penultimate element

        for(let j = 0 ; j < numbers.length - 1 ; j++)
        {   
            // Since the sorting implementation runing in the second loop
            // So we need to know if the j greater than j+1 so it will swap each other
            
            if(numbers[j] > numbers[j+1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            }
        }
    }
    console.log("Numbers list after sorting in ASCENDING way is : ",numbers)
}
// Now we need to create descending bubble sort function

function descBubbleSort (numbers) {

    for(let i = 0 ; i < numbers.length ; i++)
    {
        // The second loop sorts the numbers so it will starts from first element to the penultimate element

        for(let j = 0 ; j < numbers.length - 1 ; j++)
        {
            // Since the sorting implementation runing in the second loop
            // So we need to know if the j less than j+1 so it will swap each other

            if(numbers[j] < numbers[j + 1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            }
        }
    }

    console.log("numbers list after sorting in DESCENDING way is : ",numbers)
}
let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
console.log("Original numbers list: ",numbers);

ascBubbleSort(numbers);

descBubbleSort(numbers);
