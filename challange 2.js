let goal = 5000
let month = 1
let saving = 100
let total = 0

while (total < goal) {
    total += saving
    console.log("Month " +month+ " saved " +saving+ " total " +total)

    if (saving >= 500){
        console.log("Big Month")
    }
    month++
    saving += 50
}
console.log ("Money saved "+total)