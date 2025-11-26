export default function TabButton(props) {

    return (
        <li>
            <button onClick={props.onSelect}>{props.children}</button>
        </li>
    );
}

/*
Using object destructuring

function TabButton({children}}) {
    return (<li><button>{children}</button></li>);
}


------- Using object destructuring for second phase
function TabButton({children, onSelect}) {

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}


 */