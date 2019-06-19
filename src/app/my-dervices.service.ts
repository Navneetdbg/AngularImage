import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Upload } from './upload';
@Injectable({
  providedIn: 'root'
})
export class MyDervicesService {

  constructor(private http: HttpClient) { }
  postFile(caption: Upload ,  Image: File) {

const url = 'http://localhost:65374/api/Upload';
const formData: FormData = new FormData();
formData.append('Name', caption.Name);
formData.append('Description', caption.Description);
formData.append('IsFeatured', String(caption.IsFeatured));
formData.append('IndexPage', String(caption.IndexPage));
formData.append('Image', Image , Image.name);
return this.http.post(url, formData);
  }
}
