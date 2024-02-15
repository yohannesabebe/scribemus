let sentence ="Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship.";
let arrObj =[];
for (let i = 0; i < sentence.length; i++) {
arrObj[i] = {id:i, val:sentence[i], correct:false, attempt:false}
}
export default arrObj;

//  let arrObjSentence = [
//     {
//         id:0, 
//         val:'a', 
//         correct: false, 
//         attempt:false
//     },
//     {
//         id:1, 
//         val:' ', 
//         correct: false, 
//         attempt:false
//     },
//     {
//         id:2, 
//         val:'t', 
//         correct: false, 
//         attempt:false
//     },
//     {
//         id:3, 
//         val:'K', 
//         correct: false, 
//         attempt:false
//     },
//     {
//         id:4, 
//         val:' ', 
//         correct: false, 
//         attempt:false
//     },
//     {
//         id:5, 
//         val:'r', 
//         correct: false, 
//         attempt:false
//     }
    
    
    
    
//     // 'a the qucik brown fox'
// ]
