let user = {
    name: 'vasya',
    age: 31
}

let userCopy = {...user}
console.log(userCopy);
userCopy.age = 0;

let nums = [11, 22, 33];
let nums2 = [...nums];
console.log(nums);
nums2 = [11, 22, 33, 44];
console.log(nums2);
