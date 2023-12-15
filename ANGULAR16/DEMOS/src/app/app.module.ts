import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropbindingComponent } from './propbinding/propbinding.component';
import { TrvComponent } from './trv/trv.component';
import { TwdatadindingComponent } from './twdatadinding/twdatadinding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { VwchildComponent } from './vwchild/vwchild.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ProductsComponent } from './products/products.component';
import { DemoComponent } from './demo/demo.component';
import { SetBackgroundDirective } from './CustomDirectives/settingBacground.directive';
import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PropbindingComponent,
    TrvComponent,
    TwdatadindingComponent,
    StructuralDirectivesComponent,
    ParentComponent,
    ChildComponent,
    VwchildComponent,
    Comp1Component,
    Comp2Component,
    ProductsComponent,
    DemoComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
