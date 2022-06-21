import React, { useState } from 'react';
import configurations from '../../state/constants.js';
import About from "../about/about.jsx";
import WorkExperience from "../work/workExperience.jsx";

export default function Main(props) {
    const constants = configurations();
    // const [ tab, setTab ] = useState(props.selection.tab);
    const [ sections ] = useState(constants["tab-section-headers"]);

    function handleActiveTab() {
        return props.selection.tab < 1 ?
            <About>{sections[0]}</About> : <WorkExperience>{sections[1]}</WorkExperience>;
    }

    return (
        <React.Fragment>
            {
                handleActiveTab()
            }
        </React.Fragment>
    );
}