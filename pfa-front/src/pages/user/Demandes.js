import React, { useState, useEffect } from "react";

import { Button, Col, Form, Layout, Modal, Row, Table, Typography } from "antd";

import MenuBar from "../../components/MenuBar";
import { Subnav } from "../../components/Subnav";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteService,
  getRequestedServices,
  updateService,
} from "../../services/userServices/services";
import { ThreeCircles } from "react-loader-spinner";
import ModalService from "../../components/ModalService";

export function Demandes(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [EditingService, setEditingService] = useState(null);
  const [initial, setInitial] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [service, setService] = useState(null);
  const [details, setDetails] = useState(false);
  const [services, setservices] = useState([]);
  const [form] = Form.useForm();
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
  const resetDetails = () => {
    setDetails(false);
    setService(null);
  };
  const onDetailsService = (service) => {
    setDetails(true);
    setService(service);
    //alert(JSON.stringify(free));
  };
  const onEditService = (record) => {
    setIsEditing(true);
    setInitial({
      id: record.id,
      name: record.name,
      creationDate: record.creationDate,
      finalDate: record.finalDate,
      price: record.price,
      description: record.description,
    });
    setEditingService({ ...record });
  };
  const resetEditing = () => {
    setInitial(null);
    setIsEditing(false);
    setEditingService(null);
  };
  const edit = async () => {
    try {
      setLoading(true);
      await updateService(EditingService.id, EditingService);
      resetEditing();
      setLoading(false);
      setservices((pre) => {
        return pre.map((location) => {
          if (location.id === EditingService.id) {
            return EditingService;
          } else {
            return location;
          }
        });
      });
      //alert("sr ajouté");
    } catch (e) {
      console.log(e);
    }
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
  const handleChangeEditDate = (e) => {
    setEditingService({
      ...EditingService,

      creationDate: e[0].format(),
      finalDate: e[1].format(),
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
              {isEditing && (
                <Modal
                  title='Modifier un service '
                  visible={isEditing}
                  okText='Modifier'
                  onCancel={() => {
                    resetEditing();
                  }}
                  onOk={form.submit}
                >
                  <ModalService
                    Obj={EditingService}
                    changeev={handleChangeEdit}
                    changeev2={handleChangeEditDate}
                    finish={edit}
                    form={form}
                    initial={initial}
                  ></ModalService>
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
