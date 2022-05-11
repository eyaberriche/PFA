import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Layout,
  Pagination,
  Row,
  Form,
  Modal,
  Typography,
} from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import {
  allFreelancersBycateg,
  categoryByid,
} from "../../services/visitorServices/categorie";
import { ThreeCircles } from "react-loader-spinner";
import { getCurrentUser } from "../../services/visitorServices/auth";
import { createService } from "../../services/userServices/services";
import ModalService from "../../components/ModalService";

function FreelancersPage(props) {
  const { categorieId } = useParams();

  const [freelancers, setFreelancers] = useState([]);
  const [freelancer, setFreelancer] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  const [initial, setInitial] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [details, setDetails] = useState(false);

  const [form] = Form.useForm();

  const [addedService, setaddedService] = useState({
    name: "",
    creationDate: "",
    finalDate: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    getCurrentUser().then((response) => {
      setCurrentUser(response);
      if (response.role === "user") {
        setIsUser(true);
      }
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await categoryByid(categorieId);

        setCategory(result);

        const res = await allFreelancersBycateg(categorieId);

        setFreelancers(res);
        //alert(JSON.stringify(freelancers));

        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorieId]);

  const [minValue, setminValue] = useState(0);

  const [maxValue, setmaxValue] = useState(3);
  const onAddService = (freelancer) => {
    setFreelancer(freelancer._id);
    setIsAdding(true);
    setInitial({
      name: "",
      creationDate: "",
      finalDate: "",
      price: "",
      description: "",
    });
    setFreelancer(freelancer);
  };
  const handleChangeAdd = (e) => {
    setaddedService({
      ...addedService,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeAddDate = (e) => {
    setaddedService({
      ...addedService,

      creationDate: e[0].format(),
      finalDate: e[1].format(),
    });
  };

  const resetAdding = () => {
    setInitial(null);
    setIsAdding(false);
    setFreelancer(null);
  };

  const resetDetails = () => {
    setDetails(false);
    setUser(null);
  };
  const handleChange = (value) => {
    if (value <= 1) {
      setminValue(0);
      setmaxValue(3);
    } else {
      setminValue(maxValue);
      setmaxValue(value * 3);
    }
  };
  const onDetailsFreelancer = (free) => {
    setDetails(true);
    setUser(free);
    //alert(JSON.stringify(free));
  };
  const add = async () => {
    try {
      setLoading(true);
      await createService(freelancer._id, addedService);
      resetAdding();
      setLoading(false);
      //alert("sr ajouté");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Layout className='layout'>
        <MenuBar />
        <Layout style={{ minHeight: "2000px" }}>
          <Categories />
          <Layout style={{ padding: "0 24px 24px" }}>
            {!loading ? (
              <>
                {" "}
                <Typography.Title style={{ margin: 20 }}>
                  Catégorie {category.name}
                </Typography.Title>
                <div>
                  <Row gutter={16}>
                    {freelancers &&
                      freelancers.slice(minValue, maxValue).map((val) => (
                        <Col span={8}>
                          <p></p>
                          <div>
                            <Card
                              title='Freelancer '
                              extra={
                                <a href='#'>
                                  <Button
                                    type='primary'
                                    style={{ backgroundColor: "violet" }}
                                    onClick={() => onDetailsFreelancer(val)}
                                  >
                                    Détails
                                  </Button>
                                </a>
                              }
                              style={{ width: 320, minHeight: "200px" }}
                            >
                              <p>
                                Nom et prénom : {val.firstname} {val.lastname}
                              </p>

                              <p>Compétences : </p>
                              <ul>
                                {val.skills.map((skill) => (
                                  <li>{skill}</li>
                                ))}
                              </ul>
                              {isUser && (
                                <Button
                                  type='primary'
                                  block
                                  style={{
                                    backgroundColor: "violet",
                                    color: "white",
                                    border: "none",
                                    padding: "10px 30px",
                                    fontSize: "1em",
                                    fontWeight: "50px",
                                    minHeight: "45px",
                                    minWidth: "45px",
                                  }}
                                  onClick={() => onAddService(val)}
                                >
                                  Ajouter un Service à {val.firstname}
                                </Button>
                              )}
                            </Card>
                            {isAdding && (
                              <Modal
                                title='Ajouter un service '
                                visible={isAdding}
                                okText='Ajouter'
                                onCancel={() => {
                                  resetAdding();
                                }}
                                onOk={form.submit}
                              >
                                <ModalService
                                  Obj={addedService}
                                  changeev={handleChangeAdd}
                                  changeev2={handleChangeAddDate}
                                  finish={add}
                                  form={form}
                                  initial={initial}
                                ></ModalService>
                              </Modal>
                            )}
                            {details && (
                              <Modal
                                title='Details du freelancer'
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
                                  Nom et prénom : {user.firstname}{" "}
                                  {user.lastname}
                                </p>
                                <p> Email : {user.email}</p>
                                <p>Téléphone {user.tel}</p>
                                <p>Compétences : </p>
                                <ul>
                                  {user.skills.map((skill) => (
                                    <li>{skill}</li>
                                  ))}
                                </ul>
                              </Modal>
                            )}
                          </div>
                        </Col>
                      ))}
                    <p>
                      <Pagination
                        defaultCurrent={1}
                        defaultPageSize={3}
                        onChange={handleChange}
                        total={freelancers.length}
                      />
                    </p>
                  </Row>
                </div>
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
    </div>
  );
}

export default FreelancersPage;
