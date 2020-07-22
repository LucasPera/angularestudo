import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [ PhotoComponent ], //declara PhotoComponent
    exports: [ PhotoComponent ] //torna acessivel 
})
export class PhotosModule {}