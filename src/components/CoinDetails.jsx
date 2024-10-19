import {
  Badge,
  Box,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const params = useParams();
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchcoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchcoin();
  }, [params.id]);

  if (error) return <ErrorComponent message={"error while fetching coin"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack
              spacing={"4"}
              display={"flex"}
              alignItems={"center"}
              w={"100%"}
              justifyContent={"center"}
            >
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
          <VStack p={"16"} alignItems={"flex-start"} spacing={"4"}>
            <Text alignSelf={"center"} fontSize={"small"} opacity={"0.7"}>
              Last updated on : {Date(coin.last_updated).split("G")[0]}
            </Text>
            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />
            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge
              bgColor={"blackAlpha.900"}
              color={"whiteAlpha.900"}
              fontSize={"2xl"}
            >
              #{coin.market_data.market_cap_rank}
            </Badge>
            <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}/>
          </VStack>

          <Box w={"full"} borderWidth={"1"}>
            hello
          </Box>
        </>
      )}
    </Container>
  );
};



const CustomBar=({high,low})=>(
  <VStack w={"full"}>
    <Progress value={"50"} w={"full"} colorScheme={"teal"}/>
    <HStack justifyContent={"space-between"} w={"full"}>
  <Badge children={low} colorScheme={"red"} />
  <Text fontSize={"small"}>24H Range</Text>
  <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>

);


export default CoinDetails;
