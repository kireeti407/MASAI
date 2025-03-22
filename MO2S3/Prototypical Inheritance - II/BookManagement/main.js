import {Books} from  "./Book.js"
let summaries = Books.map((ele)=>(ele.getSummary()))
console.log(summaries)