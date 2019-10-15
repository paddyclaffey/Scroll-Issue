import 'hammerjs';
import { NgModule } from '@angular/core';
import { MAT_LABEL_GLOBAL_OPTIONS, RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';

const globalRippleConfig: RippleGlobalOptions = {
    disabled: false,
    animation: {
      enterDuration: 300,
      exitDuration: 0
    }
};

@NgModule({
    declarations: [],
    imports: [
        MatTreeModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTabsModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatRippleModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatBadgeModule,
        DragDropModule,
        MatChipsModule
    ],
    exports:[
        MatTreeModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTabsModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatRippleModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatBadgeModule,
        DragDropModule,
        ScrollingModule,
        MatChipsModule
        
    ],
    providers:[
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig},
    ]
})
export class AngularMaterialModule { }
