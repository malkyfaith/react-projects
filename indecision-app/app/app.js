class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        console.log('Inside IndecisionApp:', this.props);
        this.title = 'Indecision Application';
        this.subtitle = 'Put your life in the hands of computer.'
        this.state = {
            options: ['One', 'Second']
        }
        this.clearAllOptions = this.clearAllOptions.bind(this);
        this.whatToDo = this.whatToDo.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    clearAllOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    whatToDo() {
        let opt = Math.floor(Math.random() * this.state.options.length);
        const selectedOpt = this.state.options[opt];
        alert(selectedOpt);
    }

    addOption(newOption) {
        console.log(newOption);
        
        this.setState((prevState) => {
            return {
                options : prevState.options.concat([newOption])
            }
        })
    }
    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />
                <Action hasOptions={this.state.options.length > 0} whatToDo={this.whatToDo} />
                <Options options={this.state.options} clearAllOptions={this.clearAllOptions} />
                <AddOption addOption={this.addOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
        console.log('Inside Action:', this.props);
    }

    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.whatToDo}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        console.log('Inside Options:', this.props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.clearAllOptions}>Clear all</button>
                <ul>
                    {this.props.options.map(o => <Option option={o} />)}
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}</li>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        console.log('Inside AddOption:', this.props);
    }

    onFormSubmit(e) {
        e.preventDefault();
        var val = e.target.elements.option.value.trim();
        console.log(val);
        this.props.addOption(val);
        e.target.elements.option.value = '';

    }
    render() {
        return (
            <div>
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
        <IndecisionApp />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));