import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('book', fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
