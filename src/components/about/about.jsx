import React, { useState } from 'react';
// import AboutService from './aboutService.jsx'
import AboutTopics from './aboutTopics/aboutTopics';
import constants from '../../state/constants.json';
import '../components.css';
import './about.css';

function About(props) {
    const [ topics, setTopics ] = useState(constants.about["About_Topics"]);
    return (
        <React.Fragment>
            <div className='section'>
                <h4>{props.children}</h4>
                <React.Fragment>
                {
                    topics.map((t, index) => {
                        return <AboutTopics topic={t ? constants.about[t] : constants.about["Default_Object"]}
                                            index={index} key={((t || {}).topic || '') + '_' + index.toString()}/>;
                    })
                }
                </React.Fragment>
            </div>
        </React.Fragment>
    );
}
 
export default About;