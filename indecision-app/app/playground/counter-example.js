class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onSub = this.onSub.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }
    onAdd() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    onSub() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    reset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.onAdd}>+1</button>
                <button onClick={this.onSub}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));

// without state - and manually re-rendering
// let count = 0;

// function onAdd() {
//     count++;
//     renderCounter();
// }

// function onSub() {
//     count--;
//     renderCounter();
// }

// function reset() {
//     count = 0;
//     renderCounter();
// }

// function renderCounter() {
//     var templateTwo = (
//         <div>
//         <p>Count: {count}</p>
//         <button onClick={onAdd}>+1</button>
//         <button onClick={onSub}>-1</button>
//         <button onClick={reset}>reset</button>

//         </div>
//     )

//     ReactDOM.render(templateTwo, document.getElementById('app'))
// }
// renderCounter();