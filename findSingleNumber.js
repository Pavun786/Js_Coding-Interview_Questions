


function singleNumberFind(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (!obj[arr[i]]) {

            obj[arr[i]] = 1

        } else {

            obj[arr[i]]++;
        }


    }

    for (let key in obj) {


        if (obj[key] == 1) {

            return +key;
        }

    }


}

console.log(singleNumberFind([2, 2, 1]))  //1