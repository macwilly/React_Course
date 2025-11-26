import componentsImg from './assets/components.png';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept';
import MainGoal from './components/MainGoal.jsx';
import { CORE_CONCEPTS } from './data.js';

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
            </main>
            <MainGoal></MainGoal>
        </div>
    );
}

export default App;