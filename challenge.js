
//challeng 1
function reverse(name)
{
    const reversedName = name.split('').reverse().join('');
    console.log("reversed Name "+name +" is : "+reversedName);
};

//chalenge 2

function palindrom(str)
{
    let j = str.length - 1;
    let i = 0;
    while (i < j) {
        if (str[i] != str[j]) {
            return false;
            }
            i++;
            j--;
            }
            return true;
}


// challenge 3

(function findMax()
{
     const numbers = [1, 2, 3, 4, 5,6];
    const max = Math.max(...numbers);
    console.log("max : "+max);
})();
// challenge 4
(function findSum ()
{
const arr=[1,2,3,4,5];
const sum = arr.reduce((a,b)=>a+b) ;
console.log( "sum : "+sum);
}
)();
// challenge 5
function Factorial(num){
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
        }
        console.log("Factorial of "+num+" is : "+factorial);
  

} ;
// challenge 6
function countVowels(name)
{
    let Vowels=['a','e','u','i','o','y'];
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (Vowels.includes(name[i])) {
            count++;
            }
            }
            return count;
};
// challenge 7

function RemoveDuplicates()
{
    let numbers = [1, 2, 2, 3, 4,5]
    let unique = [...new Set(numbers)];
    console.log("Remove Duplicates : "+unique);
    

}

// declaration of the functions
reverse("felate");
console.log( "is palindrom : "+palindrom("madam"));

Factorial(5);
console.log(countVowels('soufyane'));
RemoveDuplicates();

