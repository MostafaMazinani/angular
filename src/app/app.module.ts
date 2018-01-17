import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { SickComponent } from './sick/sick.component';
import { HeaderComponent } from './header/header.component';
import { CommentComponent } from './comment/comment.component';
import { UserCommentComponent } from './user-comment/user-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    AboutComponent,
    HomeComponent,
    StarComponent,
    SickComponent,
    HeaderComponent,
    CommentComponent,
    UserCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
