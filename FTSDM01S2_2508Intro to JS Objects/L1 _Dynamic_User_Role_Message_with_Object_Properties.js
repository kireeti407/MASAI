function message(obj){
    let res=(obj.role=='admin')?(obj.active)?"Admin Access Granted!":"Admin Access Revoked":(obj.active)?"User Access Granted!":"User Access Revoked"
    console.log(res)
}
message({ name: "Alice", role: "admin", active: false })
message({ name: "Bob", role: "user", active: true })