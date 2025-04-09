import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TalkToLawyerComponent } from './components/talk-to-lawyer/talk-to-lawyer.component';
import { TalkToCaComponent } from './components/talk-to-ca/talk-to-ca.component';
import { TalkToCmpnySecrataryComponent } from './components/talk-to-cmpny-secratary/talk-to-cmpny-secratary.component';
import { TalkToTrademarkComponent } from './components/talk-to-trademark/talk-to-trademark.component';
import { PvtLtdComponent } from './pvt-ltd/pvt-ltd.component';
import { LlpComponent } from './llp/llp.component';
import { OpcComponent } from './opc/opc.component';
import { StartUpComponent } from './start-up/start-up.component';
import { GstRegistrationComponent } from './gst-registration/gst-registration.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'talk-to-lawyer',
        component: TalkToLawyerComponent
    },
    {
        path: 'talk-to-charted-accountant',
        component: TalkToCaComponent
    },
    {
        path: 'talk-to-secretary-cmpny',
        component: TalkToCmpnySecrataryComponent
    },
    {
        path: 'talk-to-trademark',
        component: TalkToTrademarkComponent
    },
    {
        path: 'pvt-ltd',
        component: PvtLtdComponent
    },
    {
        path: 'llp',
        component: LlpComponent
    },
    {
        path: 'opc',
        component: OpcComponent
    },
    {
        path: 'start-up',
        component: StartUpComponent
    },
    {
        path: 'gst-registration',
        component: GstRegistrationComponent
    }
];

