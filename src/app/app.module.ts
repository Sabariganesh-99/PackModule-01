import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { PackComponent } from './pack/pack.component';
import { PacklistComponent } from './packlist/packlist.component';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { PacklistCostComponent } from './packlist-cost/packlist-cost.component';
import { PacklistDaysvalidityComponent } from './packlist-daysvalidity/packlist-daysvalidity.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UpdatePackComponent } from './update-pack/update-pack.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    LoginComponent,
    AdminComponent,
    PackComponent,
    PacklistComponent,
    PacklistCostComponent,
    PacklistDaysvalidityComponent,
    UpdatePackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    FlexLayoutModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
