import React from 'react';

//Passing props

//1st way 
function UserCard(props){
    return(
        <div>
            <h1>Hi {props.name}</h1>
            <h2>Your balance is {props.balance}</h2>
        </div>
    )
};

//2nd way : receiving props by destructuring them
export function UserCardWithPropsDestructed({name,balance}){
    return(
        <div>
            <h1>Hi {name}</h1>
            <h2>Your balance is {balance}</h2> 
        </div>
    )
}

//DEFAULT PROPS
export function DefaultProps({name="Guest", balance=0}){
    return(
        <>
            <h1>Hello {name}</h1>
            <h2>Your balance is {balance}</h2>
        </>
    )
}

//CONDITIONAL RENDERING WITH PROPS
export function ConditionalRenderingWithProps({name="Guest", balance=0, loginStatus="false"}){
    return(
        <div>
            {loginStatus?(
                <div>
                    <h1>Welcome {name}</h1>
                    <h2>Your balance is {balance}</h2>
                </div>
            ):(
                <h1>Please login to see your bank balance</h1>
            )

            }
        </div>
    )
}

//ADVANCE PROPS : SENIOR LEVEL
//1. PROP DESTRUCTURING  : I only need few parameters not all
export function PropDestructuring({name,phone,dept}){
    return(
        <div>
            <h1>Hi {name}</h1>
            <h2>Your phone number : {phone}</h2>
            <h2>You belong to {dept} department</h2>
        </div>
    )
}

//2. Children as Props
//In the below code snippet we are rendering all the content of IdentityCard.
export function IdentityCard({children}){
    return(
        <div>
            {children}  
        </div>
    )
};

export function IdRenderer(){
    return(
        <>
            <IdentityCard>
                <h1>Name : Rahman</h1>
                <h1>School : SCHS</h1>
            </IdentityCard>
        
        </>
    )
}

//What if we want to render only specific content? 
export function Title(){
    return(
        <>
           <h1>Associate Software Developer</h1>
        </>
    );
};
// As you can see there are many components like title, p, h1 in the titles component. But we dont want all the children
// We want only Title as children from the Titles component.

export function TitleForker({children}){
    //We are trying to write a condition here, where we will only display Title components.
    //Any other components will be ignored other than Title.
    const onlyTitles = React.Children.toArray(children).filter(
        child=>child.type===Title
    );
    return(
        <div>
            {onlyTitles}
        </div>
    )
}

//3. Passing functions as props

//example 1 :
export function FunctionAsProps({onclick}){
    return(
        <div>
            <button onClick={onclick}>Click me !</button>
        </div>
    );
};

//example 2 :
export function GreetUser({greetuser}){
    return(
        <div>
            <button onClick={greetuser}>greet</button>
        </div>
    )
}

//4. Passing Components as Props

//5. Props Validation with PropTypes

//6. Type-Safe Props


export default UserCard;