
var concat_S = function (arr1, arr2) {
    if(arguments.length<=1){
        return false;
    }
    var concat_ = function(arr1,arr2){   
        var arr = arr1.concat();
        for (var i = 0; i < arr2.length; i++){
            arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;
        }
        return arr;
    }
    var result = concat_(arr1, arr2);
    for(var i = 2; i < arguments.length; i++) {
        result = concat_(result,arguments[i])
    }
    return result;
}
var arr1 = [1,6,4,0];  
var arr2 = [8,20,7,4.5];  
var arr3 = [6, 0, 7, 90, 2];

var arr = concat_S(arr1, arr2, arr3);
console.log(arr);
