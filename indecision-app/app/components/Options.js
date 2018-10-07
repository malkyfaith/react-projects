import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button--link" onClick={props.clearAllOptions}>Remove all</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to start</p>}
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