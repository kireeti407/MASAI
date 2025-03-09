function digital_library_manage(arr){
    return {
      addBook: function(n){
      arr.push(n)
      console.log(arr)
      },
      removeELement : function (nameofBook){
        let n = arr.length 
        let newarr=[]
        for(let ele of arr){
          if(ele!=nameofBook){
          newarr.push(ele)} 
        }
        if(newarr.length==n){
          console.log("Element is not found to remove")
        }
        else{
          arr=newarr
          console.log(arr)
        }
      },
      searchBook : function (searchingbook){
        let ans = arr.includes(searchingbook) 
        console.log(ans==true?"Element is present in the array":"Element is not found in the array")
      },
      findfirstandlast : function (element){
      if(arr.includes(element)==false){
        console.log("Book is not found ",-1)}
      else{
        console.log("First Index: "+arr.indexOf(element))
        console.log("Last Index : "+arr.lastIndexOf(element))}
      },
      extractASublist : function (start,end=arr.length){
        console.log(arr.slice(start,end+1))
      },
      sorting : function (){
        arr.sort((a,b)=>(a.localeCompare(b)))
        console.log(arr)
      },
      replaceABook : function (st,cond,ele){
        arr.splice(st,cond,ele)
        console.log(arr)
      },
      joinTheBooks : ()=>{
        let ans = arr.join(",")
        console.log(ans)
      }
    }
}
let arr=["Chemistry","Maths","Physics","Social","Hindi"]
let answer=digital_library_manage(arr)
answer.addBook('English')
answer.removeELement('English')
answer.removeELement('English')
answer.searchBook("Maths")
answer.findfirstandlast("Maths")
answer.extractASublist(1,3)
answer.extractASublist(1)
answer.sorting()
answer.replaceABook(2,0,"English")
answer.joinTheBooks()