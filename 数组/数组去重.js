//方法一:将数组逐个搬到另一个数组中，当遇到重复元素时，不移动，若元素不重复则移动到新数组中
function unique1(arr){
        var len = arr.length;
        var result = [];
        for(var i=0;i<len;i++){
            var flag = true;
            for(var j = i;j<arr.length-1;j++){
                if(arr[i]==arr[j+1]){
                    flag = false;
                    break;
                }
            }
            if(flag){
                result.push(arr[i]);
            }
        }
        return result;
    }
//方法二：遍历数组arr，把元素分别放入另一个数组result中，判断arr中的元素在result中是否存在，不存在即加入result中
function unique2(arr){
        var result = [];
        for(var i=0;i<arr.length;i++){
            if(result.indexOf(arr[i])==-1){
                result.push(arr[i]);
            }
        }
        return result;
    }
//方法三：将数组的值作为对象的属性，通过对象的属性值来判断数组是否重复，若该项不重复则给对象对应属性值赋为true,便于之后的判断，并将数据项加入结果集中
function unique3(arr) {
        var result = [];
        var obj = {};
        for(var i=0;i<arr.length;i++){
            if(!obj[arr[i]]){
                result.push(arr[i]);
                obj[arr[i]] = true;
            }
        }
        return result;
    }
//也可以通过判断对象中是否包含该属性来去重，此时对象属性的值可以任意但必须有值，否则会认为该属性不存在
function unique4(arr) {
        var result = [];
        var obj = {};
        for(var i=0;i<arr.length;i++){
            if(!obj.hasOwnProperty(arr[i])){// if(!(arr[i] in obj))
                result.push(arr[i]);
                obj[arr[i]] = 0;
            }
        }
        return result;
    }
//将数组的值赋给另一个数组的键，此时重复的元素都被删除，然后取新数组的键作为去重后的结果
function unique5(arr){
        var result = [];
        var temp = [];
        for(var i in arr){
            temp[arr[i]] = 1;
        }
        for(var i in temp){
            result.push(i);
        }
        return result;
    }
// 将数组元素设为对象的键值，然后利用object.keys方法返回新的数组
var removeDuplicates = function(nums) {
  var obj = {};
  for(let i=0;i<nums.length;i++) {
      obj[nums[i]] = i;
}
  nums = Object.keys(obj);
  return nums;
};
var nums = [1,1,2];
console.log(unique5(nums));
