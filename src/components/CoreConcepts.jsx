import { CORE_CONCEPTS } from "../data"
import { CoreConcept } from "./CoreConcept"
export default () => (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map(item => (
          <CoreConcept
          title={item.title}
          image={item.image}
          description={item.description}
        />
        ))}
      </ul>
    </section>
)