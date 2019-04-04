
let isVisible = false

const onToggle = () => {
    isVisible = !isVisible
    render()
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility toggle!</h1>
            <button onClick={onToggle}>
                {isVisible ? 'Hide details' : 'Show details'}
            </button>
            {isVisible && (
                <div>
                    <p>My details!!</p>
                </div>
            )}
        </div>        
    )
    ReactDOM.render(template, appRoot)
}

render();
