function BMICalculator(Weight,height){
    var BMI=Weight/(height*height)
    if (BMI>0){
        console.log(`Your BMI is:${BMI.toFixed(2)}`)
        return
    }
     console.log("Invalid input, height and weight must be positive numbers.")
}
BMICalculator(48,1.87)
BMICalculator(55,1.60)
BMICalculator(90,1.80)
