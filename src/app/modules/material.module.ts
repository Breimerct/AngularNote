import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports:[
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,        
        MatExpansionModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatSnackBarModule,
        MatDividerModule,
        MatTooltipModule
    ],
    exports:[ 
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatSnackBarModule,
        MatDividerModule,
        MatTooltipModule  
    ]
})

export class MaterialModule {}