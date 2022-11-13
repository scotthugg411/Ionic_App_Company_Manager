/* eslint-disable @typescript-eslint/no-unused-vars */
import { IonList,IonItem, IonLabel } from '@ionic/react';





// TODO attach an api hook to this to load a list for EACH item returned from api
export const ListContainer: React.FC = ()=>{
  return(
      <IonList>
        <IonItem>
          <IonLabel>Pokémon Yellow</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mega Man X</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>The Legend of Zelda</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
      </IonList>
    );
}