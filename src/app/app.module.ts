import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartsApexchartsComponent } from './charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './charts-chartjs/charts-chartjs.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BlankComponent } from './blank/blank.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorComponent } from './error/error.component';
import { TablesGeneralComponent } from './tables-general/tables-general.component';
import { TablesDataComponent } from './tables-data/tables-data.component';
import { IconsRemixComponent } from './icons-remix/icons-remix.component';
import { IconsBoxComponent } from './icons-box/icons-box.component';
import { IconsBootstrapComponent } from './icons-bootstrap/icons-bootstrap.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { FormsLayoutsComponent } from './forms-layouts/forms-layouts.component';
import { FormsElementsComponent } from './forms-elements/forms-elements.component';
import { FormsEditorsComponent } from './forms-editors/forms-editors.component';
import { ChartEchartsComponent } from './chart-echarts/chart-echarts.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    NavbarComponent,
    ChartsApexchartsComponent,
    ChartsChartjsComponent,
    ProfilComponent,
    RegisterComponent,
    LoginComponent,
    BlankComponent,
    ContactComponent,
    FaqComponent,
    ErrorComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    IconsRemixComponent,
    IconsBoxComponent,
    IconsBootstrapComponent,
    FormsValidationComponent,
    FormsLayoutsComponent,
    FormsElementsComponent,
    FormsEditorsComponent,
    ChartEchartsComponent,
    AccordionComponent,
    AlertsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TabsComponent,
    TooltipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
