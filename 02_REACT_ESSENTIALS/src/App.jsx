function Header() {
    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}
// You need to ensure that the return data is in an enclosing tag like a div
export function MainGoal() {
    return (
        <div>
            <h1>Main Goal</h1>
            <p>My Main Goal: is to lear React so that I may apply to jobs that require it!</p>
        </div>
    );
}

function App() {
    return (
        <div>
            {/*to use the function above it can be called in two ways  <Header />  or <Header></Header> */}
            <Header />
            <main>
                <h2>Time to get started!</h2>
            </main>
            <MainGoal></MainGoal>
        </div>
    );
}

export default App;
