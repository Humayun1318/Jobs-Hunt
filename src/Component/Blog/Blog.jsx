import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="container">

            <h4 className='text-center my-5'>Blog Section</h4>

            <div className="row ">
                <div className="col-12 col-md-6 my-5">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>When should you use context API?</Accordion.Header>
                            <Accordion.Body>
                                We should use context API when we need to pass data or state down to multiple levels of components in our React application, but don't want to pass it through props at every level. Context provides a way to share data between components without having to pass the data down manually at every level. It can be particularly useful for theming, internationalization, or user authentication data.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is a custom hook?</Accordion.Header>
                            <Accordion.Body>
                                A custom hook is a function that uses React's built-in hooks (like useState, useEffect, and useContext) to create some reusable logic that can be shared across different components in your React application. By using custom hooks, you can extract common logic from components and avoid duplicating code. Custom hooks should always start with the word "use" and can take in arguments to customize their behavior.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is useRef?</Accordion.Header>
                            <Accordion.Body>
                                useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component, and can be used to store any mutable value, similar to an instance property on a class component. It's commonly used to access or modify DOM elements, store a previous value to compare with the current value in a useEffect, or to hold a reference to a setInterval or setTimeout function.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is useMemo?</Accordion.Header>
                            <Accordion.Body>
                                useMemo is a hook that allows you to memoize the result of a function so that it's only recomputed when one of the dependencies changes. It takes two arguments: a function and an array of dependencies. The function is only re-executed if one of the dependencies has changed since the last time it was called. useMemo can be used to optimize expensive calculations or to prevent unnecessary re-renders of components.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-12 col-md-6 my-5 ">
                    <img className='img-fluid border rounded' src="../../../assets/React-Router-A-Beginners-Guide-to-Essential-Navigation-Techniques.png" alt="" />
                </div>
            </div>
        </div>
    );
}


export default Blog;