// Given two arrays of strings list1 and list2, find the common strings with the least index sum.
// A common string is a string that appeared in both list1 and list2.
// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
// Return all the common strings with the least index sum. Return the answer in any order.

 // Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

// Example 3:
// Input: list1 = ["happy","sad","good"], 
// list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".




function find(list1, list2) {

    let ind = {};
    let min = Infinity;

    let result = []

    for (let i = 0; i < list1.length; i++) {

        for (let j = 0; j < list2.length; j++) {


            if (list1[i] == list2[j]) {

                let res = i + j;

                ind[res + " " + list1[i]] = list1[i]
            }
        }
       }


    for (let key in ind) {

        let id = key.split(" ")

        if (+id[0] == min) {

            min = +id[0];

            result.push(ind[key])

        } else if (+id[0] < min) {

            min = +id[0];

            result[0] = ind[key]
        }

    }

    return result
};


console.log(find(["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))  // ["Shogun"]
