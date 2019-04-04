console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'Indecision app!',
    subtitle: 'This is some info!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp();
    }
}

const removeAll = () => {
    app.options = []
    renderApp();
}

const onMakeDesecion = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum]
}

const appRoot = document.getElementById('app');


const renderApp = () => {
    const template = (
        <div>  
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are you options' : 'No options yet'}</p>             
            <button disabled={app.options.length === 0} onClick={onMakeDesecion}>What should I do</button>          
            <button onClick={removeAll}>Remove all</button>            
            <ol>
                {app.options.length > 0 && app.options.map((option, i)=> {
                    return <li key={i}>{option}</li>
                })}            
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );    
    
    ReactDOM.render(template, appRoot)
}

renderApp()