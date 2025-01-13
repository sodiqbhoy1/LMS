import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentmanagement',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './studentmanagement.component.html',
  styleUrl: './studentmanagement.component.css'
})
export class StudentmanagementComponent {
   // Array to hold user data
 users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' }
];

// Define which tab is active
selectedTab = 'list';

// Form data for adding and editing a user
userForm = { id: 0, name: '', email: '', status: 'Active' };

constructor() {}

ngOnInit(): void {}

// Switch between tabs
selectTab(tab: string) {
  this.selectedTab = tab;
}

// Add a new user
addUser() {
  const newUser = { ...this.userForm, id: this.users.length + 1 };
  this.users.push(newUser);
  this.resetForm();
  this.selectTab('list');
}

// Edit a user's details
editUser() {
  const userIndex = this.users.findIndex(user => user.id === this.userForm.id);
  if (userIndex !== -1) {
    this.users[userIndex] = { ...this.userForm };
    this.resetForm();
    this.selectTab('list');
  }
}

// Delete a user
deleteUser(userId: number) {
  this.users = this.users.filter(user => user.id !== userId);
}

// Reset the user form
resetForm() {
  this.userForm = { id: 0, name: '', email: '', status: 'Active' };
}

// Set up the form for editing a user
setEditForm(user: any) {
  this.userForm = { ...user };
  this.selectTab('edit');
}

}
