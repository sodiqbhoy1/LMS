import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { LibrarianloginComponent } from './librarianlogin/librarianlogin.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { BooksComponent } from './books/books.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { StudentmanagementComponent } from './studentmanagement/studentmanagement.component';
import { LibrariandashboardComponent } from './librariandashboard/librariandashboard.component';
import { LibrarianregisterComponent } from './librarianregister/librarianregister.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { SbooksComponent } from './sbooks/sbooks.component';
import { NotificationComponent } from './notification/notification.component';
import { AnnouncementComponent } from './announcement/announcement.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'announcement', component: AnnouncementComponent},
    
    // login
    {path: 'login/studentlogin', component: StudentloginComponent },
    {path: 'login/librarianlogin', component: LibrarianloginComponent },

    // register
    {path: 'register/studentregister', component: StudentregisterComponent },
    {path: 'register/librarianregister', component: LibrarianregisterComponent },

    // Librarian routes
    {path: 'librarian', component: LibrarianComponent, children:[
        {path:'', component: LibrariandashboardComponent},
        {path:'books', component: BooksComponent},
        {path:'dashboard', component: LibrariandashboardComponent},
        {path:'studentmanagement', component: StudentmanagementComponent},
     ] },

    //  student routes

    {path: 'student', component: StudentComponent, children: [
        {path:'', component: ProfileComponent},
        {path:'profile', component: ProfileComponent},
        {path:'sbooks', component: SbooksComponent},
        {path:'notification', component: NotificationComponent},

    ]},


// 404 page
    {path: '**', component: NotfoundComponent}


];
