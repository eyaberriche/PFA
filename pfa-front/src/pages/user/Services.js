import React, { useState, useEffect } from "react";

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

export function Services(props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [EditingService, setEditingService] = useState(null);
  const [services, setservices] = useState([]);
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
                onConfirmService(record);
              }}
              style={{ marginLeft: 12 }}
            >
              Confirmer{" "}
            </Button>
            <Button onClick={() => {}} style={{ marginLeft: 12 }}>
              Details
            </Button>
          </>
        );
      },
    },
  ];
  const onConfirmService = (record) => {
    Modal.confirm({
      title: `Confirmer la demande du service ${record.name}?`,
      okText: "oui",
      okType: "primary",
      onOk: async () => {
        try {
          setLoading(true);

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
        } catch (e) {
          console.log("error");
        }
      },
    });
  };

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
