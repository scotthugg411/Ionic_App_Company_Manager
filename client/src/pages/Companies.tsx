/* eslint-disable @typescript-eslint/no-unused-vars */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { ListContainer } from '../components/ListContainer';
import './styles/Companies.css';

/**
 * This is only an example on how to use hooks for api data fetching
 * TODO make an abstract service to call api and use
 * 
 */
const Companies: React.FC = () => {
  const [companies,setCompanies]=useState([]);

  useEffect(() => {
    const apiURL = 'http://localhost:4000/api/companies';

    const fetchData = async () => {
        try {
            const response = await fetch(apiURL);
            const json = await response.json();
            console.log(json);
            setCompanies(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);

const companiesList = companies.map(
  (element:any) => {
      return (
          <ul >
              <li>
                Company ID:{element.companyId}
              </li>
              <li>
                Name:{element.name}
              </li>
          </ul>
      )
  }
)


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Companies</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Companies</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Companies page" message="Whatever" />

        <ListContainer/>
      </IonContent>
      <IonContent>{companiesList}</IonContent>
    </IonPage>
  );
  };

export default Companies;
