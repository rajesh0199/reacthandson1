import React from "react";
import './External.css';


function Functionalbox (){
   return(
       <div>
            <div className="box_1">
               <p className="p_1">This is created using functional Component</p>
               <p className="p_2">This is done using externnal CSS</p>
               <p className="p_3">This is done using inline CSS</p>
           </div>
       </div>
       
   )
}
export default Functionalbox

// class Functionalbox extends React.Component{
//      constructor(){
//     super()
//     this.state = {
//       name : "none",
//       count : false
//     }
//   }
//   sum_1 = ()=>{
//     this.state.count === false ?
//       this.setState({name : "box_1", count : true}) :
//       this.setState({name : "none", count : false})
//   }
//   render(){
//     return(
//         <div>
//             <button className="btn_2" onClick={this.sum_1}>To see in styling functional component</button>
//             <div className={this.state.name}>
//                 <p className="p_1">This is created using functional Component</p>
//                 <p className="p_2">This is done using externnal CSS</p>
//                 <p className="p_3">This is done using inline CSS</p>
//             </div>
//         </div>
        
//     )
//   }
// }
// export default Functionalbox