console.log('App File');
var appDiv = document.getElementById('app');
// JSX Javascript xml
let app = {
    title: 'Indecision App!',
    subtitle: 'Put your life in the hands on Computer',
    options: ['One', 'Two']
}

function onFormSubmit(e) {
    e.preventDefault();
    var val = e.target.elements.option.value;
    if (val) {
        app.options.push(val);
        e.target.elements.option.value = '';
    }
    render();

}

function removeAll() {
    app.options = [];
    render();
}

function makeDecision() {
    let opt = Math.floor(Math.random() * app.options.length);
    const selectedOpt = app.options[opt];
    alert(selectedOpt);
} 

function render() {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are yours options" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>

            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map(o => <p>{o}</p>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appDiv)
}
render();
