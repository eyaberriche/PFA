import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import {
  Button,
  Col,
  Form,
  Input,
  Layout,
  Modal,
  Row,
  Table,
  Typography,
} from "antd";
import { ThreeCircles } from "react-loader-spinner";
import MenuBar from "../../components/MenuBar";
import { Subnav } from "../../components/Subnav";
import {
  confirmService,
  deleteService,
  getTodoServices,
} from "../../services/userServices/services";
import ServiceStore from "../../artifacts/contracts/ServiceStore.sol/ServiceStore.json";
export function Services(props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(null);
  const [error, setError] = useState(false);
  const [EditingService, setEditingService] = useState(null);
  const [cservices, setCServices] = useState([]);
  const [confirmedService, setconfirmedService] = useState({
    name: "",
    description: "",
    date: "",
    emailcustomer: "",
    emailfreelancer: "",
    price: "",
  });
  const [contract, setContract] = useState();
  const [details, setDetails] = useState(false);
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [services, setservices] = useState([]);
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  const registerService = async (record) => {
    const datee =
      new Date(record.creationDate).toISOString().substring(0, 10) +
      "  " +
      new Date(record.finalDate).toISOString().substring(0, 10);

    // If MetaMask exists
    try {
      setLoading(true);
      if (typeof window.ethereum !== "undefined") {
        await requestAccount();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          ServiceStore.abi,
          signer
        );

        const transaction = await contract.registerService(
          record.name,
          record.emailcustomer,
          record.emailfreelancer,
          record.price,
          record.description,
          datee
        );

        await transaction.wait();
        await confirmService(record.id);
        //record.confirmed = true;

        setservices((pre) => {
          return pre.map((location) => {
            if (location.id === record.id) {
              return { ...record, confirmed: true };
            } else {
              return location;
            }
          });
        });
        setLoading(false);
      }
    } catch (e) {
      console.log("error");
    }
  };
  const resetDetails = () => {
    setDetails(false);
    setService(null);
  };
  const onDetailsService = (service) => {
    setDetails(true);
    setService(service);
    //alert(JSON.stringify(free));
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // setError(false)
      try {
        const res = await getTodoServices();
        setservices(
          res.map((row) => ({
            name: row.name,
            creationDate: row.creationDate,
            id: row._id,
            emailcustomer: row.emailcustomer,
            emailfreelancer: row.emailfreelancer,
            confirmed: row.confirmed,
            finalDate: row.finalDate,
            description: row.description,
            price: row.price,
          }))
        );
        //alert(JSON.stringify(services));
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { title: "Service", dataIndex: "name" },
    { title: "Email du client", dataIndex: "emailcustomer" },
    {
      title: "Prix",
      dataIndex: "price",
      render: (price) => {
        return <p>{price + "  $"}</p>;
      },
    },
    {
      title: "Date début",
      dataIndex: "creationDate",
      render: (creationDate) => {
        return <p>{new Date(creationDate).toISOString().substring(0, 10)}</p>;
      },
    },
    {
      title: "Date fin",
      dataIndex: "finalDate",
      render: (finalDate) => {
        return <p>{new Date(finalDate).toISOString().substring(0, 10)}</p>;
      },
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button
              type='primary'
              disabled={record.confirmed}
              onClick={() => {
                registerService(record);
              }}
              style={{ marginLeft: 12 }}
            >
              Confirmer{" "}
            </Button>
            <Button
              onClick={() => onDetailsService(record)}
              style={{ marginLeft: 12 }}
            >
              Details
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Layout>
      <MenuBar />

      <Layout>
        <Subnav />

        <Layout style={{ padding: "0 24px 24px", minHeight: 590 }}>
          {!loading ? (
            <>
              <Typography.Title style={{ margin: 20 }}>
                Mes prestations à faire
              </Typography.Title>
              <Table
                columns={columns}
                dataSource={services}
                rowKey={Math.random()}
                pagination={{
                  current: page,
                  pageSize: pageSize,
                  onChange: (page, pageSize) => {
                    setPage(page);
                    setPageSize(pageSize);
                  },
                }}
                bordered
              ></Table>
              {details && (
                <Modal
                  title='Details du service'
                  visible={details}
                  okText='ok'
                  onCancel={() => {
                    resetDetails();
                  }}
                  onOk={() => {
                    resetDetails();
                  }}
                >
                  <p>
                    <h4>Titre du service :</h4> {service.name}
                  </p>
                  <p>
                    <h4>Date début : </h4>
                    {new Date(service.creationDate)
                      .toISOString()
                      .substring(0, 10)}
                  </p>
                  <p>
                    <h4>Date fin :</h4>{" "}
                    {new Date(service.finalDate).toISOString().substring(0, 10)}
                  </p>
                  <p>
                    {" "}
                    <h4>Email du client :</h4> {service.emailcustomer}
                  </p>
                  <p>
                    <h4>Email du freelancer :</h4> {service.emailfreelancer}
                  </p>
                  <p>
                    {" "}
                    <h4>Prix :</h4> {service.price}
                  </p>
                  <p>
                    {" "}
                    <h4>Description :</h4> {service.description}
                  </p>
                </Modal>
              )}
            </>
          ) : (
            <Row style={{ marginTop: "200px" }} type='flex' justify='center'>
              <Col offset={6} span={12}>
                <ThreeCircles
                  color='violet'
                  height={150}
                  width={150}
                  ariaLabel='three-circles-rotating'
                />
              </Col>
            </Row>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
}
