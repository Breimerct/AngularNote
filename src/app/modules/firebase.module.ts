import { environment } from './../../environments/environment.prod';
import { NgModule } from '@angular/core'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireFunctionsModule } from "angularfire2/functions";

@NgModule({
    imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireFunctionsModule
    ],
    exports: [
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireFunctionsModule
    ]
})

export class FirebaseModule {}