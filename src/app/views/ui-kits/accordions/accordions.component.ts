import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
  animations: [SharedAnimations]
})
export class AccordionsComponent implements OnInit {
//   code = `
// <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
//   <ngb-panel title="Simple">
//     <ng-template ngbPanelContent>
//       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
//       aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//       sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
//       craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
//       occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
//       labore sustainable VHS.
//     </ng-template>
//   </ngb-panel>
//   <ngb-panel>
//     <ng-template ngbPanelTitle>
//       <span>&#9733; <b>Fancy</b> title &#9733;</span>
//     </ng-template>
//     <ng-template ngbPanelContent>
//       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
//       aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//       sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
//       craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
//       occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
//       labore sustainable VHS.
//     </ng-template>
//   </ngb-panel>
//   <ngb-panel title="Disabled" [disabled]="true">
//     <ng-template ngbPanelContent>
//       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
//       aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//       sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
//       craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
//       occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
//       labore sustainable VHS.
//     </ng-template>
//   </ngb-panel>
// </ngb-accordion>`;

//   htmlContent = ""
//   config: AngularEditorConfig = {
//     editable: true,
//     spellcheck: true,
//     height: '15rem',
//     minHeight: '5rem',
//     placeholder: 'أدخل النص هنا...',
//     translate: 'yes',
//     defaultParagraphSeparator: 'p',
//     defaultFontName: 'Arial',
//     toolbarHiddenButtons: [
//       ['bold']
//     ],
//     customClasses: [
//       {
//         name: "quote",
//         class: "quote",
//       },
//       {
//         name: 'redText',
//         class: 'redText'
//       },
//       {
//         name: "titleText",
//         class: "titleText",
//         tag: "h1",
//       },
//     ]
//   };


  aboutUs
  constructor(
    public viewService: ViewService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit() {
    this.getAboutUSData();
  }

  getAboutUSData() {
    this.spinner.show();
    this.viewService.GetAboutUsData().then(res => {
     this.aboutUs = res['data'][0]
     this.spinner.hide();
    }).catch(err => {
      this.spinner.hide();
    })
  }


  editAboutUs(data){
    this.spinner.show()
    this.viewService.EditAboutUsData(data).then(res=>{
     this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(res['message']);
    }).catch(err=>{
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.success(err['message']);
    })
  }

}
