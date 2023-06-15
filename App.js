import React,{useState} from 'react';
import './App.css';

function App() {
  const[data,setData]=useState({
    amount1:'',
    gst1:'',
    amount2:'',
    gst2:'',
    amount3:'',
    gst3:'',
    amount4:'',
    gst4:'',
    total:''
  });
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <center>
        <form>
          <h1 style={{color:"black ",backgroundColor:"green",fontFamily:"cursive"}}>Shopping Bill GST Calculation</h1>
          <hr></hr>
          <table >
            <tr>
              <td>Chocolates:</td>
              <td><input type="text" name="amount1" onChange={changeHandler} placeholder='/-'></input></td>
              <td>gst1:</td>
              <td><input type="text" name="gst1" onChange={changeHandler} placeholder='/-'></input></td>
            </tr>
            <tr>
              <td>Dresses:</td>
              <td><input type="text" name="amount2" onChange={changeHandler} placeholder='/-'></input></td>
              <td>gst2:</td>
              <td><input type="text" name="gst2" onChange={changeHandler} placeholder='/-'></input></td>
            </tr>
            <tr>
              <td>Fruits:</td>
              <td><input type="text" name="amount3" onChange={changeHandler} placeholder='/-'></input></td>
              <td>gst3:</td>
              <td><input type="text" name="gst3" onChange={changeHandler} placeholder='/-'></input></td>
            </tr>
            <tr>
              <td>Provisions:</td>
              <td><input type="text" name="amount4" onChange={changeHandler} placeholder='/-'></input></td>
              <td>gst4:</td>
              <td><input type="text" name="gst4" onChange={changeHandler} placeholder='/-'></input></td>
            </tr>
          </table>
          <br></br>
          Total:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={(parseInt(data.amount1)+(data.amount1*data.gst1)/100)+(parseInt(data.amount2)+(data.amount2*data.gst2)/100)+(parseInt(data.amount3)+(data.amount3*data.gst3)/100)+(parseInt(data.amount4)+(data.amount4*data.gst4)/100)}/>
        </form>
      </center>
    </div>
  );
}

export default App;
