import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Import PrimeNG modules
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PageComponent } from './page/page.component';
import { DividerModule } from 'primeng/divider';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsComponent } from './forms/forms.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ProductService } from './services/productservice';
import { BadgeModule } from 'primeng/badge';
import { CourseComponent } from './course/course.component';
import { ReviewComponent } from './review/review.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LoginComponent,
    RegisterComponent,
    FormsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    CourseComponent,
    ReviewComponent,
    CoursedetailComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    DividerModule,
    CardModule,
    FormsModule,
    MenuModule,
    TieredMenuModule,
    MegaMenuModule,
    AvatarModule,
    TableModule,
    BadgeModule
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent,LoginComponent,RegisterComponent,PageComponent]
})
export class AppModule { }
