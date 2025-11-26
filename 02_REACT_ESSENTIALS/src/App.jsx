import componentsImg from './assets/components.png';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept';
import MainGoal from './components/MainGoal.jsx';
import Tabs from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from "./components/TabButton.jsx";


// When you define the function for onClick or other on* inside of Component function it
// will have access to the props and state
function handleClick() {
    console.log("Hello World!");
}

function App() {
    return (
        <div>
            {/*to use the function above it can be called in two ways  <Header />  or <Header></Header> */}
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/*This is an example of Component Composition Should be noted that this can take props and composition
                           the composition can be HTML as well.
                        */}
                        <TabButton onSelect={handleClick}>Components</TabButton>
                        <TabButton onSelect={handleClick}>JSX</TabButton>
                        <TabButton onSelect={handleClick}>Props</TabButton>
                        <TabButton onSelect={handleClick}>State</TabButton>
                    </menu>
                </section>
            </main>
            <MainGoal></MainGoal>
        </div>
    );
}

export default App;