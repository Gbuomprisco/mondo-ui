import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdMenuModule } from '@angular2-material/menu';
import { MdIcon } from '@angular2-material/icon';

const ANGULAR_MATERIAL_COMPONENTS = [
    MdButton,
    MdIcon
];

@NgModule({
    declarations: [
        ...ANGULAR_MATERIAL_COMPONENTS
    ],
    imports: [ MdMenuModule, MdToolbarModule ],
    exports: [ ...ANGULAR_MATERIAL_COMPONENTS ]
})
export class AngularMaterialModule {}
