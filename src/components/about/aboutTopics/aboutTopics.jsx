import React, { useState } from 'react';
import '../../components.css';
import '../about.css';

function AboutTopics(props) {
    const [ topic ] = useState(props.topic.topic);
    const [ details ] = useState(props.topic.details);
    const [ key ] = useState(props.topic + '_' + props.index);

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