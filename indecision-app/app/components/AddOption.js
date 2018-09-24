import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        var val = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';

        const error = this.props.addOption(val);
        //console.log(error);

        this.setState(() => {
            return {
                error
            }
        })

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}