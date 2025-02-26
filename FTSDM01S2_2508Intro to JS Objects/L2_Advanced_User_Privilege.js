function PriManSys(obj){
    let res=(obj.role=='admin')?
            (obj.active)?
            (obj.experience>5)?(obj.department=='IT')?"Full IT Admin Access":"Full General Admin Access":"Limited Admin Access"
            :"Admin Access Revoked"
            :(obj.role=="manager")?
            (obj.active)?(obj.experience>3)?(obj.department=="Sales")?"Full Sales Manager Access":"Full Manager Access":"Limited Manager Access"
            :"Manager Access Revoked"
            :(obj.role=="user")?(obj.active)?(obj.department=="Support")?"Priority Support Access":"User Access":"User Access Revoked"
            :"Invalid Role"
    console.log(res)
}
PriManSys({ role: "admin", experience: 7, active: true, department: "IT" })
PriManSys({ role: "manager", experience: 4, active: true, department: "Marketing" })
PriManSys({ role: "user", experience: 2, active: true, department: "Support" })
PriManSys({ role: "admin", experience: 3, active: false, department: "Finance" })