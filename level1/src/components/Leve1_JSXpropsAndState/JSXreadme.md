Why JSX ?

1. Declarative UI - Easier to visualize UI in code :
    example : 
        Without JSX : 
            const element = document.createElement('h1');
            element.textContent = 'Hello World';
            document.body.appendChild(element);
        With JSX :
            const element = <h1>Hello World</h1>;

2. We can use power of Javascript + HTML directly
    JSX helps us to write javascript and HTML together, so that we can use logic directly in ui
    example : 
        const name = "Rahman";
        const isLoggedIn = true;
        const element = <h1>Welcome, {isLoggedIn ? name : "Guest"}</h1>;
    extra : 
        - We can loop over arrays using JSX
        - We can render components conditionally
        - We can format dates, strings etc
        
3. Better readabiity [Clean, Visual, Intuitive]
        JSX looks very much like HTML, which frontend developers already understand. So reading a component is almost like reading a web page structure.
        example : 
        With JSX :
        <div>
            <h1>Hello</h1>
            <p>This is a paragraph</p>
        </div>
        Without JSX :
        React.createElement(
            "div",
            null,
        React.createElement("h1", null, "Hello"),
        React.createElement("p", null, "This is a paragraph")
        );

        
