import { NgModule } from '@angular/core';
import { DarknOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    declarations: [ DarknOnHoverDirective ],
    exports: [ DarknOnHoverDirective ]
})
export class DarkenOnHoverModule {}