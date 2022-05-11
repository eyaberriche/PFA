import { ethers } from "ethers";
import ServiceContract from "../../../artifacts/contracts/ServiceStore.sol/ServiceStore.json";

export default async function getContract(contractAddress) {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    ServiceContract.abi,
    signer
  );
  return contract;
}
