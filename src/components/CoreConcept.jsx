
const CoreConcept = (props) => (
  <li key={props.title}>
    <img src={props.image} alt={props.title}></img>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </li>
)

export {CoreConcept}