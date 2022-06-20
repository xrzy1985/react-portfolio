import React, { useState } from 'react';
import constants from '../../state/constants.json';
import About from "../about/about";
import WorkExperience from "../work/workExperience";

export default function Main(props) {
    const [ tab, setTab ] = useState(props.selection.tab);
    const [ sections, setSections ] = useState(constants["tab-section-headers"]);

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