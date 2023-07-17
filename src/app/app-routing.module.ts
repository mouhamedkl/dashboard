import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BlankComponent } from './blank/blank.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ProfilComponent } from './profil/profil.component';
import { IconsBoxComponent } from './icons-box/icons-box.component';
import { IconsRemixComponent } from './icons-remix/icons-remix.component';
import { IconsBootstrapComponent } from './icons-bootstrap/icons-bootstrap.component';
import { ChartEchartsComponent } from './chart-echarts/chart-echarts.component';
import { ChartsApexchartsComponent } from './charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './charts-chartjs/charts-chartjs.component';
import { TablesGeneralComponent } from './tables-general/tables-general.component';
import { TablesDataComponent } from './tables-data/tables-data.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { FormsEditorsComponent } from './forms-editors/forms-editors.component';
import { FormsElementsComponent } from './forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './forms-layouts/forms-layouts.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ProgressComponent } from './progress/progress.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TabsComponent } from './tabs/tabs.component';
import { ModalComponent } from './modal/modal.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BadgesComponent } from './badges/badges.component';
import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
   { path:'', redirectTo:"home",pathMatch:"full" },
   {path:'home',component:IndexComponent},
   {path:'blank',component:BlankComponent},
   {path:'error',component:ErrorComponent},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'contact',component:ContactComponent},
   {path:'faq',component:FaqComponent},
   {path:'profil',component:ProfilComponent},
   {path:'box',component:IconsBoxComponent},
   {path:'remix',component:IconsRemixComponent},
   {path:'boot',component:IconsBootstrapComponent},
   {path:'echart',component:ChartEchartsComponent},
   {path:'apex',component:ChartsApexchartsComponent},
   {path:'chart',component:ChartsChartjsComponent},
   {path:'tables-g',component:TablesGeneralComponent},
   {path:'tables-d',component:TablesDataComponent},
   {path:'valide',component:FormsValidationComponent},
   {path:'editor',component:FormsEditorsComponent},
   {path:'element',component:FormsElementsComponent},
   {path:'layout',component:FormsLayoutsComponent},
   {path:'tooltip',component:TooltipsComponent},
   {path:'spinners',component:SpinnersComponent},
   {path:'progress',component:ProgressComponent},
   {path:'pagination',component:PaginationComponent},
   {path:'tab',component:TabsComponent},
   {path:'model',component:ModalComponent},
   {path:'list-group',component:ListGroupComponent},
   {path:'carousel',component:CarouselComponent},
   {path:'cards',component:CardsComponent},
   {path:'buttons',component:ButtonsComponent},
   {path:'bread',component:BreadcrumbsComponent},
   {path:'badges',component:BadgesComponent},
   {path:'accord',component:AccordionComponent},
   {path:'alert',component:AlertsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
