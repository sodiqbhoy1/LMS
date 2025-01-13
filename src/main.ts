import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent,{
...appConfig,
providers:[
  ...appConfig.providers,
  HttpClientModule,
  provideToastr(),
  BrowserAnimationsModule,
  provideHttpClient(),
]
} )
  .catch((err) => console.error(err));