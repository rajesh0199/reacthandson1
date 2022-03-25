import React from "react";
import Classcomponentbox from "./Components/Classcomponentbox";
import "./Components/External.css";
import Functionalbox from "./Components/Functionalbox";


class App extends React.Component  {
  constructor(){
    super()
    this.state = {
      msg_1 : false,
      msg_2 : false

    }
  }
  fun_1 = ()=>{
    this.setState({
      msg_1 : !this.state.msg_1
    })
  }
  fun_2 = ()=>{
    this.setState({
      msg_2 : !this.state.msg_2
    })
  }
  render(){
    return (
      <div className="App">
          <h1>Style using functional and class componemts </h1>
          <div className="btn_div">
            <button className="btn_1" onClick={this.fun_1}>To see in styling functional component</button>
            <button className="btn_2" onClick={this.fun_2}>To see in styling functional component</button>
          </div>
          <div className="box_div">
            {
              this.state.msg_1 ? <Functionalbox/> : null
            }
            {
              this.state.msg_2 ? <Classcomponentbox/> : null
            }
          </div>
      </div>
    )
  }
}
export default App;



// class App extends React.Component  {
//   render(){
//     return (
//       <div className="App">
//           <h1>Style using functional and class componemts </h1>
//           <div className="main_box">
//             <Functionalbox/>
//             <Classcomponentbox/>
//           </div> 
//       </div>
//     )
//   }
// }
// export default App;
