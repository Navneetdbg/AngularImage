import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { MyDervicesService } from '../my-dervices.service';
import {Upload} from '../upload';
import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  imageUrl = '/assets/Img';
  fileToUpload: File = null;
  categoryForm: any;
  allCategory: Observable<Upload[]>;
  constructor(private form: FormBuilder , private services: MyDervicesService) { }

  ngOnInit() {
    this.categoryForm = this.form.group ({

      Name: ['', Validators.required],
      Description: ['', Validators.required],
      ImageURL: ['', Validators.required],
      IsFeatured: ['', Validators.required],
      IndexPage: ['', Validators.required]
      });
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  onFormSubmit(category: Upload , Image: any) {
    this.services.postFile(category , this. fileToUpload).subscribe(
data => {

}
    );
  }
}
