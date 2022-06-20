import React, { useState } from 'react';
import '../../components.css';
import '../about.css';

function AboutTopics(props) {
    const [ index, setIndex ] = useState(props.index);
    const [ topic, setTopic ] = useState(props.topic.topic);
    const [ details, setDetails ] = useState(props.topic.details);
    const [ key, setKey ] = useState(props.key);

    return (
        <ul key={key} className="list-group list-group-flush" id="ul-margin">
            <li key={key + key} className="list-group-item main-li">
                {topic}
                <br/>
                <p key={key + key + key} id='p-margin'>
                    {details}
                </p>
            </li>
        </ul>
    );
}
 
export default AboutTopics;