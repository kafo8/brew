import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function Home() {
  useEffect(() => {
    axios.get('/api/home')
      .then(res => setState(res.data))
  }, [])

  const [state, setState] = useState('')

  return (
    <Container>
      <h2>Home</h2>
      {state}
    </Container>
  )
}
