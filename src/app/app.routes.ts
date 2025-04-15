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
import { IndrectTaxComponent } from './indrect-tax/indrect-tax.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GstFillingComponent } from './gst-filling/gst-filling.component';
import { RodtepComponent } from './rodtep/rodtep.component';
import { ProprietorshipComponent } from './proprietorship/proprietorship.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PvtLtd1CmpnyComponent } from './pvt-ltd1-cmpny/pvt-ltd1-cmpny.component';
import { Llp1Component } from './llp1/llp1.component';
import { Opc1Component } from './opc1/opc1.component';
import { PriceComponent } from './price/price.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CardComponent } from './card/card.component';

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
    },
    {
        path: 'indirect-tax',
        component: IndrectTaxComponent
    },
    {
        path: 'gst-filling',
        component: GstFillingComponent
    },
    {
        path: 'RoDTEP',
        component: RodtepComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'proprietorship',
        component: ProprietorshipComponent
    },
    {
        path: 'partnership',
        component: PartnershipComponent
    },
    {
        path: 'pvt-ltd1-company',
        component: PvtLtd1CmpnyComponent
    },
    {
        path: 'llp1',
        component: Llp1Component
    },
    {
        path: 'opc1',
        component: Opc1Component
    },
    {
        path: 'pricing',
        component: PriceComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'cards',
        component: CardComponent
    }
];

