export default function TabButton(props) {
    // When you define the function for onClick or other on* inside of Component function it
    // will have access to the props and state
    function handleClick() {
        console.log(props);
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}

/*
Using object destructuring

function TabButton({children}}) {
    return (<li><button>{children}</button></li>);
}

 */