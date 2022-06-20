import React, { useState } from 'react';
import constants from '../../state/constants.json';

export default function WorkExperience(props) {
    const [ title, setTitle ] = useState(props.children);
    const _key = props.children + '_';
    return (
        <React.Fragment>
            <div className="section">
                <h4>{title}</h4>
                <ul key={_key} className="list-group list-group-flush" id="ul-margin">
                    <li key={1 + _key + _key} className="list-group-item main-li">
                        Amdocs Inc. (2018 - 2019)
                        <br/>
                        <p key={1 + _key + _key + _key} id='p-margin'>
                        Front End Software Engineer | Atlanta, Ga
                        </p>
                        <p key={1 + _key + _key + _key + _key} id='p-margin'>
                            Tech | Angular 6+, Node JS, HTML, SCSS, Material, Flex, REST, Agile, Microsoft Tech Suite, PC
                        </p>
                        <p key={1 + _key + _key + _key + _key + _key} id='p-margin'>
                            Job Description | Work closely with product and team to effectively gather requirements, groom, wire frame, build, and 
                            deploy a proprietary front end web app for internal use. A user could search by several different metrics to 
                            gather details relating to their query from a cql database. The application was designed to give a user the 
                            crud processes over the IMEI central database information for users on the GSM network within the west.
                        </p>
                    </li>
                    <li key={2 + _key + _key} className="list-group-item main-li">
                        Tillster Inc. (2019 - Current)
                        <br/>
                        <p key={2 + _key + _key + _key} id='p-margin'>
                        Front End Software Engineer | Alpharetta, Ga
                        </p>
                        <p key={2 + _key + _key + _key + _key} id='p-margin'>
                            Tech | Angular JS, HTML, CSS, SCSS, Material, Flex, REST, Agile, Microsoft Tech Suite, iOS
                        </p>
                        <p key={2 + _key + _key + _key + _key + _key} id='p-margin'>
                            Job Description | To maintain, improve, and implement new features of an angular JS legacy code base. The 
                            application is a typical call center; the agent will take several calls from different customers placing
                            orders for pickup, delivery, or any other disposition of food from any number of different tenants. I work 
                            closely with a lead engineer to keep the call center in a production ready state. we strive to make ordering
                            through our product a breeze by taking the heavy lifting out of the hands of the user. 
                        </p>
                    </li>
                    <li key={3 + _key + _key} className="list-group-item main-li">
                        Company (Current - Future)
                        <br/>
                        <p key={3 + _key + _key + _key} id='p-margin'>
                        Front End Software Engineer | Remote
                        </p>
                        <p key={3 + _key + _key + _key + _key} id='p-margin'>
                            Tech | Modern Angular, React, Vue, Python, AWS Lambda
                        </p>
                        <p key={3 + _key + _key + _key + _key + _key} id='p-margin'>
                            Job Description | I know I want to stick to front end work, but as far as frameworks, I am an open book. The bottom
                            line for me is that I love to program, solve problems, and get paid to do so. I strive to find a good solid team that
                            wants to produce high quality software without forgetting the simple fact that we all should continue to grow. If I
                            know one thing for certain, it is the fact that I do not know everything. I'll definitely be looking forward to the
                            next challenge that will present itself.
                        </p>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}