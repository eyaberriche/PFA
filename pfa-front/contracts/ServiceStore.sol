//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract ServiceStore {
    struct Service {
        uint256 id;
        string name;
        string emailcustomer;
        string emailfreelancer;
        string date;
        uint256 price;
        string description;
        address serviceAddress;
    }
    using Counters for Counters.Counter;
    Counters.Counter private servicesIds;

    mapping(address => Service) private services;
    mapping(uint256 => address) private accounts;
    event serviceCreated(address indexed serviceAddress, string name);

    function registerService(
        string calldata _name,
        string calldata _emailcustomer,
        string calldata _emailfreelancer,
        uint256 _price,
        string calldata _description,
        string calldata _date
    ) external {
        //check if candidate already registered
        require(msg.sender != address(0));

        servicesIds.increment();
        uint256 serviceId = servicesIds.current();
        address _address = address(msg.sender);
        Service memory newService = Service(
            serviceId,
            _name,
            _emailcustomer,
            _emailfreelancer,
            _date,
            _price,
            _description,
            _address
        );
        services[_address] = newService;
        accounts[serviceId] = msg.sender;
        emit serviceCreated(_address, _name);
    }

    /* fetches all services */
    function fetchServices() external view returns (Service[] memory) {
        uint256 itemCount = servicesIds.current();

        Service[] memory servicesArray = new Service[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;
            Service memory currentService = services[accounts[currentId]];
            servicesArray[i] = currentService;
        }
        return servicesArray;
    }
}
