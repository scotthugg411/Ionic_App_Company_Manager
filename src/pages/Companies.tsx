import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { ListContainer } from '../components/ListContainer';
import './styles/Companies.css';

const Companies: React.FC = () => {
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
    </IonPage>
  );
};

export default Companies;
