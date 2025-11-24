import reactImage from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max +1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(reactDescriptions.length -1)];
    return (
        <header>
            <img src={reactImage} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
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
// Using Javascript destructing to get the values our of the props object. This allows for shorter code as well.
function CoreConcept({image, title, description}) {
    return (
        <li>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
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
            </main>
            <MainGoal></MainGoal>
        </div>
    );
}

export default App;
