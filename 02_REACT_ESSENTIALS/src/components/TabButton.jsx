export default function TabButton(props) {
    return (<li><button>{props.children}</button></li>);
}

/*
Using object destructuring

function TabButton({children}}) {
    return (<li><button>{children}</button></li>);
}

 */