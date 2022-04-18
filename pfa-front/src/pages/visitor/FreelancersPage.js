import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import { allFreelancersBycateg } from "../../services/visitorServices/categorie";

function FreelancersPage(props) {
  const { categorieId } = useParams();
  const [freelancers, setFreelancers] = useState([]);
  useEffect(() => {
    getFreelancers(categorieId);
  }, [categorieId]);
  const getFreelancers = async (idd) => {
    const result = await allFreelancersBycateg(idd);

    setFreelancers(result);
    // alert(result);
  };
  // alert(JSON.stringify(freelancers));
  return (
    <div>
      <Layout className='layout'>
        <MenuBar name1='Se Connecter' page1='/login' />

        <Layout>
          <Categories />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Typography.Title style={{ margin: 20 }}>
              Liste des freelance de la categorie {categorieId}
            </Typography.Title>
            <div>hiofhefhhfhhefhùfeùhefùhfeùùfeùhfhfeùhefù</div>
            <div>
              {" "}
              {freelancers.map((user) => (
                <>
                  {" "}
                  <p> hi {user.firstname} </p>
                  <p> hi {user.lastname} </p>
                  <p> hi {user.ispublic} </p>
                  <p> hi {user.email}</p>
                </>
              ))}
            </div>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default FreelancersPage;
