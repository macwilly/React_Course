// Using Javascript destructing to get the values our of the props object. This allows for shorter code as well.
export default function CoreConcept({image, title, description}) {
    return (
        <li>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}