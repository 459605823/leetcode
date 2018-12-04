// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素

// 方法一：利用sort排序
var merge1 = function(nums1, m, nums2, n) {
   nums1.splice(m, nums1.length-m) // 去除nums1中的0
   nums2.forEach((item) => nums1.push(item)) // 将nums2添加到nums1中
   nums1.sort(function(a, b){ // 对新数组排序
     return a - b
   })
   console.log(nums1)
}

// 方法二: 因为两个数组都是升序排列，所以可以从两个数组的末尾开始比较，哪个大就添加到Nums1的末尾
var merge2 = function(nums1, m, nums2, n) {
    let i = m - 1 // nums1元素的末尾位置
    let j = n - 1 // nums2元素的末尾位置
    let index = m + n -1 // nums1数组的末尾位置
    while(i>=0 && j>=0) {
        if(nums1[i] > nums2[j]) {
            nums1[index--] = nums1[i--]
        } else {
            nums1[index--] = nums2[j--]
        }
    }
    // Nums1中元素有剩余时，即最小的那些元素就位于开头，不用处理
    // 当nums2中的元素有剩余时，说明这些元素为最小的，需要将其添加到Num1开头
    while(j>=0) {
        nums1[index--] = nums2[j--]
    }
    console.log(nums1)
}

merge2([1,2,3,0,0,0], 3, [2,5,6], 3)
