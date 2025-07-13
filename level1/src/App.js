import Jsx from './components/Leve1_JSXpropsAndState/Jsx';
import UserCard, { ConditionalRenderingWithProps, DefaultProps, FunctionAsProps, GreetUser, IdentityCard, IdRenderer, PropDestructuring, Title, TitleForker, UserCardWithPropsDestructed } from './components/Leve1_JSXpropsAndState/Props';

export function handleClick(){
  alert('Button has been clicked')
};

export function greetUser(){
  alert('Hello user !')
}

function App() {

  

  return (


    <div>
     

       <FunctionAsProps onclick={handleClick}/>
       <GreetUser greetuser={greetUser}/>
       
    </div>
  );
}

export default App;
