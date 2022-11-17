import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/fullInput";
import {Input} from "./components/input";
import {Button} from "./components/button";
//import {ButtonValue} from "./components/component";

/*export type banknotsType = 'Dollars' | 'RUBLS' | 'All';
export type arrayMoney={
  banknots: string
  value: number
  number: string
}*/

function App() {
   /*let [money, setMoney] = useState ([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])
  const [filter, setFilter]= useState<banknotsType>('All')
  let arrayFilter:Array<arrayMoney>=[]

  const filterArray=(banknot:banknotsType)=>
  {
    setFilter(banknot)
    console.log(banknot)
  }
  if(filter==='All')
  {
    arrayFilter=[
      { banknots: 'Dollars', value: 100, number: ' a1234567890' },
      { banknots: 'Dollars', value: 50, number: ' z1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
      { banknots: 'Dollars', value: 100, number: ' e1234567890' },
      { banknots: 'Dollars', value: 50, number: ' c1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
      { banknots: 'Dollars', value: 50, number: ' x1234567890' },
      { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]

  }
    if(filter==='Dollars')
    {
      arrayFilter=money.filter(money=>money.banknots==='Dollars')
    }
    else if(filter==='RUBLS') {
      arrayFilter= money.filter(money => money.banknots === 'RUBLS')
    }*/

  //INPUT
  let [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'}])
    let[title, setTitle]=useState('')
    console.log(title)

    const addMessage=(title:string)=>{
      let NewMessage={message: title}
      setMessage([NewMessage,...message])
        setTitle('')
    }


  return (
      <div>
       {/* <ButtonValue
            arrayMoney={arrayFilter}
            filterMoney={filterArray}/>*/}
       {/* <FullInput addMessage={addMessage}/>*/}
          <Input setTitle={setTitle} title={title}/>
          <Button name={'Add'} callBack={()=>addMessage(title)} />
        {message.map((el, index)=>{
          return (
              <div key={index}>{el.message}</div>
          )
        })}

      </div>
  );
}

export default App;
