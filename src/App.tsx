import styled from 'styled-components';
import './App.css';

import { Cards } from './components/cards/card/Card';




function App() {
  return (
    <div className="App">
      <Section>
        <Cards />
        
      </Section>
    </div>
  );
}

const Section = styled.section`
max-width: 1920px;
display: flex;
justify-content: center;
flex-wrap:wrap;
gap: 20px;
`

export default App;
