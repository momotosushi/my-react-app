import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Students from './Students.jsx'
import PropTypes from 'prop-types'

function App() {
  return(
    <>
      <Students name="Spongebob" age={30} isStudent={true}/>
      <Students name="Patrick" age={22} isStudent={false}/>
      <Header/>
      <Card/>
      <Food/>
      <Footer/>
    </>
  );
}
Students.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

export default App
