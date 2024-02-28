import { CORE_CONCEPTS } from "../data"
import { EXAMPLES } from "../data"
import TabButton from './Tabbutton.jsx'
import { useState } from "react"
import Section from "./Section.jsx"
import Tabs from "./Tabs"

 
export default (props) => {
    const [selectedTopic, setSelectedTopic] = useState()
    const handleSelect = (selectedButton) => {
        setSelectedTopic(selectedButton.toLowerCase())
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs 
            ButtonContainer="menu"
            buttons={CORE_CONCEPTS.map(item => (
                <TabButton isSelected={item.title.toLocaleLowerCase()===selectedTopic} onClick={() => handleSelect(item.title)}>{item.title}</TabButton>
                ))}>
                {props.tabContent}
            </Tabs>
            {selectedTopic ? 
                <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                    {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
                </div> : 
                <p>Please Select A topic</p>}

        </Section>
    )
}