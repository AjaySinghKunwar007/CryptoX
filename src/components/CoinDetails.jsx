import { Box, Container } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '..';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const params= useParams();
 
  
  useEffect(() => {
    const fetchcoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`
        );
        
        console.log(data)
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchcoin();
  }, [params.id]);
  return (
    <Container maxW={"container.xl"}  >
      {loading?(<Loader/>) :(<>
      <Box w={"full"} borderWidth={"1"}>hello
      </Box>
      </>)}
    </Container>
  )
}

export default CoinDetails