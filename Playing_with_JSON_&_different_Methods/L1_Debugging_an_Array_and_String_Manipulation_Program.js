
function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
    return {
        // Add "David" at index 1
        Add:function(name){
            students.splice(1, 0, name);
        },
        Check:function(name){
        // Check if "name" is in the list
            return (students.includes(name))? true :false
        },
        seelist:function(){
            // Convert the array to a string with names separated by commas
            console.log(students.join(","));
        }
    }
}

let manage=manageStudents();
manage.Add("Kiyotaka") // Add "name" at index 1
manage.Add("Nobita") 
console.log(manage.Check("Kiyotaka"))// Check if "name" is in the list
console.log(manage.Check("Lite"))
manage.seelist()//// Expected: "Nobita,Kiyotaka,Alice,David,Bob,Charlie"

