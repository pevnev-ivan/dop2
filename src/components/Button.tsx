import React from 'react';

type ButtonType = {
    nickName: string
    callBack: () => void
}


const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.nickName}</button>
        </div>
    );
};

export default Button;