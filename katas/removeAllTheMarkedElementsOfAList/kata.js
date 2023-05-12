Array.prototype.remove_ = function (integer_list, values_list) {
    return integer_list.filter(i => !values_list.includes(i));
}

l = new Array()
integer_list = [1, 1, 2, 3, 1, 2, 3, 4]
values_list = [1, 3]
console.log(l.remove_(integer_list, values_list)); // [2, 2, 4]