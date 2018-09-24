import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
    title = 'Indecision Application';
    subtitle = 'Put your life in the hands of computer.'
    state = {
        options: this.props.options
    }

    clearAllOptions = () => {
        this.setState(() => { return { options: [] } })
    }
    
    clearOption = (option) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((o) => o !== option)
            }
        })
    }

    whatToDo = () =>  {
        let opt = Math.floor(Math.random() * this.state.options.length);
        const selectedOpt = this.state.options[opt];
        alert(selectedOpt);
    }

    addOption = (newOption) =>  {
        if (!newOption) {
            return "Enter a valid option.";
        } else if (this.state.options.indexOf(newOption) > -1) {
            return "This option already exists."
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([newOption])
            }
        })
    }
    render() {
        return (
            <div>
                <Header
                    title={this.title}
                    subtitle={this.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    whatToDo={this.whatToDo} />
                <Options
                    options={this.state.options}
                    clearAllOptions={this.clearAllOptions}
                    clearOption={this.clearOption} />
                <AddOption
                    addOption={this.addOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['Option one', 'Option two']
}









