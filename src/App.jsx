import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Students from './Students.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import ProfilePic from './ProfilePic.jsx'
import Counter from './Counter.jsx'
import MyComponent from './MyComponent.jsx/index.js'

function App() {

  const fruits = [{id: 1, name: "apple", cal: 95},
    {id: 2, name: "orange", cal: 62}, 
    {id: 3, name: "banana", cal: 105}, 
    {id: 4, name: "coconaut", cal:159}, 
    {id: 5, name: "pineapple", cal: 82},];

    const vegetables = [{id: 6, name: "potats", cal: 95},
      {id: 7, name: "celery", cal: 62}, 
      {id: 8, name: "carrots", cal: 105}, 
      {id: 9, name: "corn", cal:159}, 
      {id: 10, name: "broccoli", cal: 82},];

  return(
    <>  
      <MyComponent />
      <Counter />
      <ProfilePic />
      <Button />

      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>

      <UserGreeting isLoggedIn={true} />

      <Students name="Spongebob" age={30} isStudent={true}/>
      <Students name="Patrick" age={22} isStudent={false}/>
      <Students />

      <Header/>
      <Card/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
