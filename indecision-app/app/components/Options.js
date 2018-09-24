import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.clearAllOptions}>Remove all</button>
            {/* JSON.stringify(props.options, null, 2) */}

            <br />

            {props.options.map(o => (
                <Option
                    option={o}
                    clearOption={props.clearOption}
                />)
            )}
        </div>
    );
}

export default Options;