class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        console.log('Inside IndecisionApp:', this.props);
        this.title = 'Indecision Application';
        this.subtitle = 'Put your life in the hands of computer.'
        this.state = {
            options: props.options
        }
        this.clearAllOptions = this.clearAllOptions.bind(this);
        this.clearOption = this.clearOption.bind(this);
        this.whatToDo = this.whatToDo.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    clearAllOptions() {
        this.setState(() => { return { options: [] } })
    }
    
    clearOption(option) {
        console.log(option);

        this.setState((prevState) => {
            return {
                options: prevState.options.filter((o) => o !== option)
            }
        })
    }

    whatToDo() {
        let opt = Math.floor(Math.random() * this.state.options.length);
        const selectedOpt = this.state.options[opt];
        alert(selectedOpt);
    }

    addOption(newOption) {
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.whatToDo}>What should I do?</button>
        </div>
    );
}

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

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // console.log('Inside AddOption:', this.props);
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e) {
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

const jsx = (
    <div>
        <IndecisionApp options={['One', 'Two']} />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));