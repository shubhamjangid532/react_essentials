import reactImg from '../assets/react-core-concepts.png';
const reactDescription = ["Fundamentals", "Crucial", "Core"]
const genRandomValue = (max) => Math.floor(Math.random() * (max+1))


const Header = () => (
  <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {reactDescription[genRandomValue(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
    </header>
)

export default Header