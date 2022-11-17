import React, {useState} from "react";

type fullInputPropsType={
    addMessage:(title:string)=>void
}
export const FullInput=(props:fullInputPropsType)=>{
    let[title, setTitle]=useState('')
   //console.log(title)
    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickButtonHandler=()=>{props.addMessage(title)
                                    setTitle('') }

    return(<div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
     )
}
