import React from "react";
import './External.css';



class Classcomponentbox extends React.Component{
    render(){
        return(
            <div>
                <div className = "box_2" >
                    <p className="p_1">This is created using Class <br/> Component</p>
                    <p className="p_2">This is done using externnal CSS</p>
                    <p className="p_3">This is done using inline CSS</p>
                </div>
             </div>
            
        )
        }
    }
export default Classcomponentbox

// class Classcomponentbox extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             class : "none",
//             count : false
//         }
//     }
//     sum = ()=>{
//         this.state.count === false 
//             ?      
//             this.setState({class : "box_2",count : true})
//             :
//             this.setState({class : "none",count : false})
//     }
//     render(){
//     return(
//         <div>
//             <button className="btn_1" onClick={this.sum}>To see in styling class component</button>
//             <div className={this.state.class}>
//                 <p className="p_1">This is created using Class <br/> Component</p>
//                 <p className="p_2">This is done using externnal CSS</p>
//                 <p className="p_3">This is done using inline CSS</p>
//             </div>
//          </div>
        
//     )
//     }
// }
// export default Classcomponentbox