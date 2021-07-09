let anonymous = function (tax, ...price){
    
    let total_cost = 0;
    for (i = 0; i < price.length; i++) {
        total_cost += price[i] + price[i] * tax /100
    }
    return total_cost
}
console.log(anonymous(18,50,40,77));