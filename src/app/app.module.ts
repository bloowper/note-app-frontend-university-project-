import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatBadgeModule} from "@angular/material/badge";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { SignInComponent } from './components/sign/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign/sign-up/sign-up.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "./services/interceptors/api-prefix-interceptor";
import { SinkComponent } from './components/sink/sink.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskMainScreenComponent } from './components/tasks/task-main-screen/task-main-screen.component';
import {ApiTokenInterceptor} from "./services/interceptors/api-token-interceptor";
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskElementComponent } from './components/tasks/task-element/task-element.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { TaskSearchComponent } from './components/tasks/task-search/task-search.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignInComponent,
        SignUpComponent,
        HomepageComponent,
        SinkComponent,
        TaskMainScreenComponent,
        TaskListComponent,
        TaskElementComponent,
        TaskCreateComponent,
        TaskSearchComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        CommonModule,
        BrowserAnimationsModule,
        //TODO move MAT IMPORTS to other package for
        MatCheckboxModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatBadgeModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,

        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        MatDatepickerModule,
        {provide: "API_URL",useValue: environment.apiUrl},
        //TODO move all interceptors to interceptors class/service
        {provide: HTTP_INTERCEPTORS , useClass: ApiPrefixInterceptor,multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ApiTokenInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
