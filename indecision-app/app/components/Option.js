import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => {
                props.clearOption(props.option);
            }}>Remove</button>
        </div>
    );
}

export default Option;