import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@Angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatOptionModule } from "@angular/material/core";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    exports:[MatToolbarModule,
         MatCardModule,
         MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatRadioModule,
         MatInputModule,
         MatSelectModule,
        ]
})

export class MaterialModule{}