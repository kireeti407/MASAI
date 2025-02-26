let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  }
  
for (i in studentScores){
    let res=(studentScores[i]>=90)?"A":(studentScores[i]>=80)?"B":(studentScores[i]>=70)?"C":(studentScores[i]>=60)?"D":"F"
    console.log(i+" - "+res)
}