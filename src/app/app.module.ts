import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordGeneratorFormComponent } from './password-generator-form/password-generator-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { UdemyCourseFormComponent } from './udemy-course-form/udemy-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorFormComponent,
    ContactFormComponent,
    UdemyCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
