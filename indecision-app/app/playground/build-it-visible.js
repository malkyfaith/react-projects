class BuildItVisible extends React.Component {
    constructor(props) {
        super(props);
        this.hideUnhide = this.hideUnhide.bind(this);
        this.state = {
            flag : false
        }
    }
    hideUnhide() {
        console.log('hideunhide');
        this.setState((prevState) =>{
            return {
                flag: !prevState.flag
            }
        })
    }
    render() {
        return (
            <div>
                <h2>Toggle visibility</h2>
                <button onClick={this.hideUnhide}>{!this.state.flag ? 'Show details' : 'Hide Detail'}</button>
                {this.state.flag && <p>This is the content</p>}
            </div>
        );
    }
}
ReactDOM.render(<BuildItVisible />, document.getElementById('app'));

// without state - and manually re-rendering
// const render = () => {
//     const jsx = (
//         <div>
//         <h2>Toggle visibility</h2>
//         <button onClick={hideUnhide}>{!flag ? 'Show details':'Hide Detail'}</button>
//         {flag && <p>This is the content</p>}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// }
// let flag = false;
// function hideUnhide() {
//      flag = !flag;
//      console.log(flag);
//      render();
// }
// render();