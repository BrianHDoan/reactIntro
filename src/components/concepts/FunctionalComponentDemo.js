import React from 'react';
import {
    Card, CardText, CardBody, CardTitle, Row, Col 
} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <div>
                    <dl>
                        <h1>Functional Component</h1>
                        <dd>Functional components allow you to render information to the web page without having to use or change state.</dd>   
                        <dt>Presentational</dt>
                        <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                        <dt>Can use state </dt>
                        <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd>
                        <dt>Can use effects</dt>
                        <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                        <dt>No state</dt>
                        <dd>There are 'dumb' components for UI.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element.</dd>
                    </dl>
                </div>
                <hr />
                <div>
                    <h1>Functional Syntax versus Arrow Function</h1>
                    <Row>
                        <Col md='6'><HelloWorld /></Col>
                        <Col md='6'><HelloWorldFatArrow /></Col>
                    </Row>
                </div>
            </div>
        </div>

    )
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
            <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
                <CardBody className="cardbody">
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardText><pre>const HelloWorld = function() </pre></CardText>
                </CardBody>
            </Card>
        </div>
    )
};

//Fat Arrow Functional Component - 3 fewer lines. Common in React....
const HelloWorldFatArrow = () =>
    <div>
        <Card>
            <img width="100%" height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap" />
            <CardBody className="cardbody">
                <CardTitle className="cardtitle">Fat Arrow</CardTitle>
                <CardText><pre>const HelloWorld = () => </pre></CardText>
            </CardBody>
        </Card>
    </div>
                    
                    