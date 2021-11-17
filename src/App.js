import React from 'react'
import Image from './img/people.svg'

import { Button , Container, List } from './styles'


function App() {
  const [coment, setComents] = React.useState()
  const [allComents, setAllComents] = React.useState([])

  function handleClickButton() {
    const allOldComents = [...allComents, coment]

    setAllComents(allOldComents)
  }

  function handleTextArea(event) {
    setComents(event.target.value)
  }

  return (
    <Container>
      <img src={Image} alt="imagem-pessoas" />
      <textarea onChange={handleTextArea}></textarea>
      <Button isOn={coment}  onClick={handleClickButton}>Comentar</Button>

      <List>
        {
          allComents.map((cmt, index) => (
            <li key={index}>{cmt}</li>
          ))
        }
      </List>
    </Container>
  );
}

export default App;
