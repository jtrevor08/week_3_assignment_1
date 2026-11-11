let marks = [78, 45, -5, 92, 60, 101, 55, 38]
let valid = 0
let pass = 0
let fail = 0
let sum = 0
let high = 0

for (let i = 0; i< marks.length; i++){
    let mark = marks[i]
    if (mark <0 || mark > 100){
        console.log('student ' +i+ ' invalid mark');
        continue;
    }
    valid++
    sum+=mark

    if (mark >=80){
        console.log('student '+i+' grade A')
    } else if (mark>=70){
        console.log('student '+i+' grade B')
    }else if (mark>=60){
        console.log('student '+i+' grade C')
    }else if (mark>=50){
        console.log('student '+i+' grade D')
    }else {
        console.log('student '+i+' grade E')
    }

    if (mark>=50){
        pass++
    }else{
        fail++
    }

    if (mark > high){
        high=mark
    }

}
 let average = total / valid
 console.log('valid '+valid)
 console.log('passed '+pass)
 console.log('failed '+fail)
 console.log('average '+ average.toFixed(1))
 console.log('highest mark '+high)