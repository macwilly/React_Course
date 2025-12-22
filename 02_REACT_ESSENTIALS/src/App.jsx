import {useState} from 'react';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept';
import MainGoal from './components/MainGoal.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from "./components/TabButton.jsx";


// When you define the function for onClick or other on* inside of Component function it
// will have access to the props and state


function App() {
    // first element is the data that we are managing
    // second element is a function provided by react that and be used to update the first. Also running the
    //    second element function tells the component to rerun
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');

    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }
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
                        <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleClick('jSX')}>JSX</TabButton>
                        <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
            <MainGoal></MainGoal>
        </div>
    );
}

export default App;