import React, { useState, useEffect } from "react";
// Styles
import {
  Wrapper,
  Content,
  ErrorMessage,
  ResponseMessage,
  Filler,
} from "./Donation.styles";
// Ethers
import { ethers } from "ethers";
// Forms
import { useForm } from "react-hook-form";
// Icons
import { FaEthereum } from "react-icons/fa";
// APIs
import CoinGecko from "coingecko-api";

const CoinGeckoClient = new CoinGecko();
const getEthPrice = async ({ setEthPrice }) => {
  let data = await CoinGeckoClient.simple.price({
    ids: "ethereum",
    vs_currencies: "usd",
  });
  setEthPrice(data.data.ethereum.usd);
};

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    console.log("Checking if Metamask is installed");
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install Metamask.");
    console.log("metamask found");
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
    console.log(err.message);
  }
};

const Donation = ({ darkMode }) => {
  const [error, setError] = useState(null);
  const [txs, setTxs] = useState([]);
  const { register, watch, handleSubmit } = useForm();
  const [result, setResult] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);
  const [AmountUsd, setAmountUsd] = useState(0);

  const watchAmountEth = watch("amount");

  useEffect(() => {
    getEthPrice({ setEthPrice });
    setAmountUsd(watchAmountEth * ethPrice);
  }, [watch, watchAmountEth, ethPrice]);

  const onSubmit = async (data) => {
    const myAddr = process.env.REACT_APP_ETH_ADDRESS;
    setResult(data);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.amount,
      addr: myAddr,
    });
    console.log("Payment done");
  };

  return (
    <Filler>
      <Wrapper darkMode={darkMode}>
        <Content>
          {!txs.length ? (
            <>
              <div className="icon">
                {darkMode ? (
                  <FaEthereum style={{ color: "var(--white)" }} size="100" />
                ) : (
                  <FaEthereum style={{ color: "var(--black)" }} size="100" />
                )}
              </div>
              <h1>Want to donate some ETH? {"<3"}</h1>
              <p>Amount in USD: {AmountUsd.toFixed(2)}</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("amount")} placeholder="Amount in ETH" />
                <input type="submit" />
              </form>
              {error ? (
                <ErrorMessage>
                  <div>
                    <p>{error}</p>
                  </div>
                </ErrorMessage>
              ) : null}
            </>
          ) : (
            <ResponseMessage>
              <h1>Thank you for your donation!</h1>
            </ResponseMessage>
          )}
        </Content>
      </Wrapper>
    </Filler>
  );
};

export default Donation;
