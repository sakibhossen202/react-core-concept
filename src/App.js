
import './App.css';
import React,{useEffect, useState} from 'react';
function App() {
  var person ={
    name :"Sakib Hossen",
    job :"Web Developer"
  }
  var style={
    backgroundColor:"red",
    fontSize:45,
    color:"whitesmoke"
  }
  var allproduct=[
    {name:'Adobe Photoshop',price:'$99',des:'valo jinish vai kenai dekhen'},{name:'Adobe illustrator', price:'$78',des:'Khub valo jinish vai kenai dekhen'},{name:'Adobe priemere Pro',price:'$35',des:'Sobai valo bola product tak a'}]
    const productName =['Adobe photoshop','Adobe illustrator','Adobe E-book Reader','Adobe tech-master','Adobe supershop','Adobe Reshaper',"Adobe Faltu"]
  // const productName = allproduct.map(product=>product.name)
  // console.log(productName)
  // const singleName=productName.map(singleName=>singleName)
  // const productPrice= allproduct.map(product=>product.price)
  // const productDes = allproduct.map(product=>product.des)
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{backgroundColor:'white',color:'black'}}>Hello, this is {person.name}</h1>
        <h1>I am working as a professional : {person.job}</h1>
        <p style={style}>MY Salary is:{50000+50000}</p>
        <PersonInfo name='Sakib Al Hasan' tshirt ="75" position="All rounder"></PersonInfo>
        <PersonInfo name="Tamim Iqbal" tshirt="69" position='Best-Batsman'></PersonInfo>
        <PersonInfo name="Mashrafi Bin Mortaza" tshirt='58' position="Captain"></PersonInfo>
        <PersonInfo name='Musfiqur Rahim Khan' tshirt='52' position='Keeper'></PersonInfo>
        <PersonInfo name='Mahmudullah Riyad' tshirt='25' position='Good-Batsman'></PersonInfo>
        {
          allproduct.map(product=><ProductInfo product={product}></ProductInfo>)
        }
        <ul>
          {productName.map(product => <li>{product}</li>)}
          {allproduct.map(res =><li>{res.name}</li>)}
        </ul>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}
function PersonInfo(props){
  var personStyle={
    border:"2px solid blue",
    margin:'20px 20px',
    width:'700px'
  }
  
  return (
    <div style = {personStyle}>
      <h1>Name: {props.name}</h1>
  <h4>T-shirt NO: {props.tshirt} </h4>
  <h5>Position: {props.position} </h5>
  <p> I am a react person right now </p>
    </div>
  )
  

}
function ProductInfo(props){
  const productStyle = {
    border:'2px solid white',
    borderRadius:'5px',
    backgroundColor:'blue',
    height:'200px',
    width:'600px',
    margin:'25px 25px',
    padding:'25px'
    
  }
  const buttonstyle={
    padding:"10px",
    backgroundColor:"white",
    borderRadius:'5px',
    marginTop:'5px'
    
  }
 
  var {name,price,des}=props.product;
  console.log(name,price)
  return(
    <div style={productStyle}>
      <h3>{name} </h3>
      <p>{des} </p>
      <small>Price: {price} </small> <br/>
      <button style={buttonstyle}>Buy Now</button>
    </div>
  )
}
function Counter(){
  const style={
    padding:'15px',
    marginTop:'10px',
    backgroundColor:'green',
    color:'white',
    fontSize:'18px',
    marginRight:'20px'
  }
  const [count,setCount] = useState(10)
  const handleIncrease=()=>setCount( count + 1)
  
  
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease} style={style}>Increase</button>
      <button onClick={()=>setCount(count - 1)} style={style}>Decrease</button>
    </div>
  )
}
function Users(){
  const [user,setUsers] = useState([])
  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data))
    },[])
  return (
    <div>
      {console.log(user)}
      <h2>Dynamics Users:{user.length} </h2>
      <ul>
        {user.map(user=><li>{user.name}</li>)}
      </ul>
      <ol>
      {user.map(data=><li>{data.email}</li>)}
      </ol>
    </div>
  )
}

export default App;
