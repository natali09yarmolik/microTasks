import React from "react";

type buttonPropsType={
    name:string
    callBack:()=>void
}
export const Button=(props:buttonPropsType)=>{
    const onClickButtonHandler = (event: React.MouseEvent<HTMLButtonElement>)=>{
        {props.callBack()}
    }
    return(<div>
           <button onClick={onClickButtonHandler}>{props.name}</button>
    </div>)
}