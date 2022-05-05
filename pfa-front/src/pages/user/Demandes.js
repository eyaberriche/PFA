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

import MenuBar from "../../components/MenuBar";
import { Subnav } from "../../components/Subnav";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteService,
  getRequestedServices,
} from "../../services/userServices/services";
import { ThreeCircles } from "react-loader-spinner";

export function Demandes(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [EditingService, setEditingService] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [services, setservices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // setError(false)
      try {
        const res = await getRequestedServices();
        setservices(
          res.map((row) => ({
            name: row.name,
            creationDate: row.creationDate,
            id: row._id,
            confirmed: row.confirmed,
            emailcustomer: row.emailcustomer,
            emailfreelancer: row.emailfreelancer,

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
    { title: "Email du freelancer", dataIndex: "emailfreelancer" },
    {
      title: "Prix",
      dataIndex: "price",
      render: (price) => {
        return <p>{price + "  $"}</p>;
      },
    },
    {
      title: "Etat",
      dataIndex: "confirmed",
      render: (confirmed) => {
        return <p>{confirmed ? "confirmé" : "n'est pas confirmé"}</p>;
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
              disabled={record.confirmed}
              onClick={() => {
                onEditService(record);
              }}
              style={{ marginLeft: 12 }}
            >
              Modifier
            </Button>
            <Button
              disabled={record.confirmed}
              onClick={() => {
                onDeleteService(record);
              }}
              style={{ marginLeft: 12 }}
            >
              Supprimer
            </Button>
            <Button style={{ marginLeft: 12 }}>Details</Button>
          </>
        );
      },
    },
  ];
  const onEditService = (record) => {
    setIsEditing(true);
    setEditingService({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingService(null);
  };

  const onDeleteService = (record) => {
    Modal.confirm({
      title: `Confirmer la suppression du service ${record.name}?`,
      okText: "oui",
      okType: "primary",
      onOk: async () => {
        try {
          setLoading(true);
          await deleteService(record.id);
          setservices((pre) => {
            return pre.filter((serivc) => serivc.id !== record.id);
          });
          setLoading(false);
        } catch (e) {
          console.log("error");
        }
      },
    });
  };
  const handleChangeEdit = (e) => {
    setEditingService({
      ...EditingService,
      [e.target.name]: e.target.value,
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
              {" "}
              <Typography.Title style={{ margin: 20 }}>
                Mes demandes
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
          {isEditing && (
            <Modal
              title='Modifier serivce'
              visible={isEditing}
              okText='Enregistrer'
              onCancel={() => {
                resetEditing();
              }}
              onOk={() => {
                setservices((pre) => {
                  return pre.map((location) => {
                    if (location.id === EditingService.id) {
                      return EditingService;
                    } else {
                      return location;
                    }
                  });
                });
                resetEditing();
              }}
            ></Modal>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
}
