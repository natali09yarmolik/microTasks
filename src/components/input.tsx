import React from "react";

type inputType={
    title:string
    setTitle:(title:string)=>void
}

export const Input =(props:inputType)=>{
    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (<div>
        <input value={props.title} onChange={onChangeInputHandler} />
    </div>)
}