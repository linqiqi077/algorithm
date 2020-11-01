/**
 * 26. 删除排序数组中的重复项
 *
 *给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。



示例 1:

给定数组 nums = [1,1,2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。
 */

// 解法一： 用Map,有没有序都通用
var removeDuplicates = function (nums) {

    let curIndex = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            nums[curIndex] = nums[i]
            curIndex++;
            map.set(nums[i], true)
        }
    }
    return curIndex;

};

// 此题是有序数组，可以用双指针。

var removeDuplicates = function (nums) {

    //判断边界
    if (!nums.length) return 0;

    let p = 0;
    let q = 1;

    while (q < nums.length) {
        if (nums[p] === nums[q]) {
            q++
        } else {
            nums[p + 1] = nums[q];
            q++;
            p++;
        }
    }
    return p + 1;

};