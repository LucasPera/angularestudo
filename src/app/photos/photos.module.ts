import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ PhotoComponent ], //declara PhotoComponent
    exports: [ PhotoComponent ], //torna acessivel 
    imports: [ HttpClientModule ]
})
export class PhotosModule {}