import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import {
  Container,
  HStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchcoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"error while fetching coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack
            wrap={"wrap"}
            display={"flex"}
            alignItems={"center"}
            justify={"center"}
          >
            {coins.map((i) => (
              <CoinCard
              id ={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                url={i.url}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;

