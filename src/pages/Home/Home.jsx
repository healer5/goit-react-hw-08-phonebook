import phonebook1 from './phonebook1.jpg';
import { HomePageStyled } from './Home.styled';

export default function Home() {
  return (
    <HomePageStyled>
      <h2>This is your personal</h2>
      <h1>Phone book.</h1>
      <h3>Register or login and save your contacts!</h3>
      <img src={phonebook1} alt="phonebook" />
    </HomePageStyled>
  );
}