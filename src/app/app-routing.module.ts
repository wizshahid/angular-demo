import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todo/list', component: TodoListComponent },
  { path: 'books/list', component: BooksComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'books/edit/:id', component: EditBookComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
