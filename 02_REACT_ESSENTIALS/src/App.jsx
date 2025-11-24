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

function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
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
                        <CoreConcept
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        />
                    </ul>
                </section>
            </main>
            <MainGoal></MainGoal>
        </div>
    );
}

export default App;
