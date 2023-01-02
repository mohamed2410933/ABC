import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  // public apiUrl = 'https://abctdawltest.pro-erp.site/public/api/';
  public apiUrl = 'https://abctdawltest.nodev.store/public/api/';
  // https://abctdawltest.pro-erp.site/public/api
  

  userInfo

  constructor(public http: HttpClient) { 


  
  }
  //=============================================================================================
  
  //=============================================================================================
  public GetAllService(page? , search?) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/services?page=${page}&search=${search}` , { headers }).toPromise();
  }
  //=============================================================================================
  public addEditService(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('name', form.name);
    formdata.append('description', form.description);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/services", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/services/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public addEditAdvangages(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('name', form.name);
    formdata.append('status', form.status);
    formdata.append('description', form.description);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/why-services", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/why-services/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public getServiceById(serId) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/services/${serId}`, { headers }).toPromise();
  }
  //=============================================================================================
  public Delete(type, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
      return this.http.delete(this.apiUrl + `admin/${type}/${id}`, { headers });
  }
  //=============================================================================================
  public GetAboutUsData() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/about-as`, { headers }).toPromise();
  }
  //=============================================================================================
  public EditAboutUsData(text) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    const formdata = new FormData();
    formdata.append('data', text);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/about-as`, formdata, { headers }).toPromise();
  }
  //=============================================================================================
  public GetTermsData() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/terms`, { headers }).toPromise();
  }
  //=============================================================================================
  public EditTermsData(text) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    const formdata = new FormData();
    formdata.append('data', text);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/terms`, formdata, { headers }).toPromise();
  }
  //=============================================================================================
  public GetPolicyData() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/policy`, { headers }).toPromise();
  }
  //=============================================================================================
  public EditPolicy(text) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    const formdata = new FormData();
    formdata.append('data', text);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/policy`, formdata, { headers }).toPromise();
  }
  //=============================================================================================
  public GetResponsibilityData() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/responsibility`, { headers }).toPromise();
  }
  //=============================================================================================
  public EditResponsibility(text) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    const formdata = new FormData();
    formdata.append('data', text);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/responsibility`, formdata, { headers }).toPromise();
  }
  //=============================================================================================
  public GetOfferData() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/offers`, { headers }).toPromise();
  }
  //=============================================================================================
  public EditOffer(form) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    const formdata = new FormData();
    formdata.append('image', form.photo);
    formdata.append('start_date', form.dateFrom);
    formdata.append('end_date', form.dateTo);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/offers`, formdata, { headers }).toPromise();
  }
  //=============================================================================================
  public GetPointerData() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/pointer`, { headers }).toPromise();
  }
  //=============================================================================================
  public EditPointer(form) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    const formdata = new FormData();
    formdata.append('image', form.photo);
    formdata.append('description', form.discription);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/pointer`, formdata, { headers }).toPromise();
  }
  //=============================================================================================
  public GetAllSectors(page? , search?) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/sectors?page=${page}&search=${search}` , { headers }).toPromise();
  }
  //=============================================================================================
  public getSectorById(serId) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/sectors/${serId}`, { headers }).toPromise();
  }
  //=============================================================================================
  public addEditStock(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('name', form.stockName);
    formdata.append('code', form.stockCode);
    formdata.append('sector_id', form.sector);
    formdata.append('type', form.stocktype);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/stocks", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/stocks/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public addEditSector(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('name', form.sectorName);
    formdata.append('description', form.sectorData);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/sectors", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/sectors/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public GetAllStocks(page? , search?) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/stocks?page=${page}&search=${search}` , { headers }).toPromise();
  }
  //=============================================================================================
  public getStocksById(stockId) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/stocks/${stockId}`, { headers }).toPromise();
  }
  //=============================================================================================
  public addEditStocks(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('name', form.sectorName);
    formdata.append('description', form.sectorData);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/stocks", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/stocks/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public GetAllRecommendations(page? , search?) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/recommendations?page=${page}&search=${search}`, { headers }).toPromise();
  }
  //=============================================================================================
  public addEditRecomondation(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('stock_id', form.stockId);
    formdata.append('recommendationType_id', form.recomondationTypeId);
    formdata.append('purchasing_price', form.purchasingPrice);
    formdata.append('selling_price', form.sellingPrice);
    formdata.append('stop_loss_price', form.stopLossPrice);
    formdata.append('condition', form.condition);
    formdata.append('verification_date', form.InvestigationDate);
    formdata.append('date_of_purchase', form.dateOfPurchaseOfTheWill);
    formdata.append('date_of_sale', form.dateOfSaleOfTheWill);
    formdata.append('description', form.recomondationDiscreption);
    formdata.append('market_id', form.market_id);
    formdata.append('is_golden', form.is_golden);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/recommendations", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/recommendations/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public GetAllRecommendationsTypes(page? , search?) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/recommendation-type?page=${page}&search=${search}` , { headers }).toPromise();
  }
  //=============================================================================================
  public getRecomondationTypeById(id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/recommendation-type/${id}`, { headers }).toPromise();
  }
  //=============================================================================================
  public addEditRecomondationType(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('name', form.type);
    formdata.append('description', form.discription);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/recommendation-type", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/recommendation-type/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public GetAllReports(page? , search?) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/reports?page=${page}&search=${search}`, { headers }).toPromise();
  }
  //=============================================================================================
  public getReportById(id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/reports/${id}`, { headers }).toPromise();
  }
  //=============================================================================================
  public addEditReports(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    if (form.AddImage) {
      formdata.append('image', form.AddImage);
    }
    if (form.addFile) {
      formdata.append('file', form.addFile);
    }
    formdata.append('description', form.discription);
    formdata.append('market_id', form.market_id);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/reports", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/reports/${id}`, formdata, { headers }).toPromise();
    }
  }
  //=============================================================================================
  public GetAllCustomers(page? , search?) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/clients?page=${page}&search=${search}`, { headers }).toPromise();
  }
  //============================================================================================
 public addEditNews(form, id) {
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const formdata = new FormData();
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  if (form.photo) {
    formdata.append('image', form.photo);
  }
  formdata.append('title', form.title);
  formdata.append('description', form.discription);
  formdata.append('market_id', form.market_id);
  formdata.append('type', form.type);
  if (id == 0) {
    return this.http.post(this.apiUrl + "admin/news", formdata, { headers }).toPromise();
  } else {
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/news/${id}`, formdata, { headers }).toPromise();
  }
}
  //=============================================================================================
  public addEditMember(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);

    formdata.append('name', form.memberName);
    formdata.append('email', form.email);
    formdata.append('role', form.validity);
    formdata.append('password', form.password);
    formdata.append('password_confirmation', form.confirmPassword);

    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/users", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/users/${id}`, formdata, { headers }).toPromise();
    }
  }
 //=============================================================================================
 UpdateProfile(form){
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const formdata = new FormData();
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  formdata.append('name', form.name);
  formdata.append('email', form.email);
  formdata.append('password', form.password);
  formdata.append('password_confirmation', form.confirm_password);
  formdata.append('_method', 'PUT');
  return this.http.post(this.apiUrl + `admin/user/profile/update`, formdata, { headers }).toPromise();
 }
 //================================================================================
 public EditContacts(form) {
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  const formdata = new FormData();
  formdata.append('phone', form.phone);
  formdata.append('email', form.email);
  formdata.append('facebook', form.addresFacebook);
  formdata.append('youtube', form.addresYoutube);
  formdata.append('instagram', form.addresInstagram);
  formdata.append('address', form.address);
  formdata.append('mobile', form.mobile);
  formdata.append('work_time', form.workTime);
  formdata.append('twitter', form.addresTwiter);
  formdata.append('_method', 'PUT');
  return this.http.post(this.apiUrl + `admin/contacts`, formdata, { headers }).toPromise();
}
 //=============================================================================================
 public addEditBill(form, id) {
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const formdata = new FormData();
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  if (id == 0) { 
    formdata.append('client_id', form.client);
    formdata.append('bouquet_id', form.package);
    formdata.append('price', form.price);
    formdata.append('type', form.type);
    return this.http.post(this.apiUrl + "admin/invoices", formdata, { headers }).toPromise();
  } else {
    formdata.append('bouquet_id', form.package);
    formdata.append('price', form.price);
    formdata.append('type', form.type);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/invoices/${id}`, formdata, { headers }).toPromise();
  }
}
 //=============================================================================================
 public addEditPackage(form, id) {
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const formdata = new FormData();
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  formdata.append('name', form.packageName);
  formdata.append('description', form.discription);
  formdata.append('price', form.price);
  formdata.append('days', form.avaliabeDays);
  formdata.append('market_id', form.market_id);
  if(form.photo){
    formdata.append('image', form.photo);
  }
  formdata.append('is_show',form.isShow );
  if (id == 0) {
    return this.http.post(this.apiUrl + "admin/bouquets", formdata, { headers }).toPromise();
  } else {
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/bouquets/${id}`, formdata, { headers }).toPromise();
  }
}
 //=============================================================================================
 public addEditCustomer(form, id) {
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const formdata = new FormData();
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  formdata.append('phone', form.phone);
  formdata.append('name', form.memberName);
  formdata.append('email', form.email);
  formdata.append('password', form.password);
  formdata.append('password_confirmation', form.confirmPassword);
  formdata.append('bouquet_id', form.package);
  formdata.append('market_id', form.market_id);
  formdata.append('start_date', form.start_date);
  formdata.append('end_date', form.end_date);
  formdata.append('status', form.status);
  if (id == 0) {
    return this.http.post(this.apiUrl + "admin/clients", formdata, { headers }).toPromise();
  } else {
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/clients/${id}`, formdata, { headers }).toPromise();
  }
}
 //=============================================================================================
 public UpdateStatusForAssign(id , form){
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const formdata = new FormData();
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  formdata.append('note', form.note);
  formdata.append('response', form.response);
  return this.http.post(this.apiUrl + `admin/assign-agent-customer/update/${id}`, formdata, { headers }).toPromise();
 }
 //=============================================================================================
   public addEditMarket(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    if (form.photo) {
      formdata.append('image', form.photo);
    }
    formdata.append('name', form.name);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/markets", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/markets/${id}`, formdata, { headers }).toPromise();
    }
  }
 //=============================================================================================
   public addEditReview(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    if (form.photo) {
      formdata.append('image', form.photo);
    }
    formdata.append('name', form.name);
    formdata.append('description', form.discription);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/visitors", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/visitors/${id}`, formdata, { headers }).toPromise();
    }
  }
    //=======================================================
 public addEditComption(form, id) {
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const formdata = new FormData();
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  if (form.photo) {
    formdata.append('image', form.photo);
  }
  formdata.append('title', form.title);
  formdata.append('question', form.question);
  formdata.append('market_id', form.market_id);
  formdata.append('status', form.status);
  if (id == 0) {
    return this.http.post(this.apiUrl + "admin/competitions", formdata, { headers }).toPromise();
  } else {
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/competitions/${id}`, formdata, { headers }).toPromise();
  }
}
 //=============================================================================================
//  {{url}}/admin/assign-agent-customer/sales-client
UnAssignCustomersToSales(clients){
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // let headers: HttpHeaders = new HttpHeaders();
  // headers = headers.append('Accept', 'application/json');
  // headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  // headers = headers.append('token', this.userInfo['token']);
  const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.userInfo['token'],
      'token':this.userInfo['token']
    }),
    body: { "ids": clients}
  };
  return this.http.delete(this.apiUrl + `admin/assign-agent-customer/delete-assign` , httpOptions).toPromise();
}

GetCustomersByAgentAdminId(id){
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  return this.http.get(this.apiUrl + `admin/assign-agent-customer/sales-client/${id}`, { headers }).toPromise();
}


AssignCustomersToSales(clients , userId){
  this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
  headers = headers.append('token', this.userInfo['token']);
  let obj ={
    "user_id":userId,
    "client_ids": clients
  }
  return this.http.post(this.apiUrl + `admin/assign-agent-customer/assign`, obj, { headers }).toPromise();

}
  //============================================================================================
  ChangeClientStatus(id){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    formdata.append('_method', 'PUT');
    return this.http.post(this.apiUrl + `admin/client/change-package-status/${id}`, formdata, { headers }).toPromise();

  }
  //============================================================================================
  public addEditSlider(form, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const formdata = new FormData();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    if (form.photo) {
      formdata.append('image', form.photo);
    }
    formdata.append('title', form.title);
    formdata.append('description', form.description);
    formdata.append('status', form.status);
    if (id == 0) {
      return this.http.post(this.apiUrl + "admin/sliders", formdata, { headers }).toPromise();
    } else {
      formdata.append('_method', 'PUT');
      return this.http.post(this.apiUrl + `admin/sliders/${id}`, formdata, { headers }).toPromise();
    }
  }
  //============================================================================================
  public GetAll(type , page? , search? ) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/${type}?page=${page}&search=${search}`, { headers }).toPromise();
  }
  //===========================================================================================
  public ShowById(type, id) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userInfo['token']);
    headers = headers.append('token', this.userInfo['token']);
    return this.http.get(this.apiUrl + `admin/${type}/${id}`, { headers }).toPromise();
  }
  //============================================================================================
  public deleteStatusSubject = new Subject<any>();
  deleteStatus = this.deleteStatusSubject.asObservable();
  //============================================================================================
  public checkIsAnswerComption = new Subject<any>();
  isAnswerStats = this.checkIsAnswerComption.asObservable();
  //============================================================================================ 
  setAnswers(answers: any) {
    this.checkIsAnswerComption.next(answers)
  }
  //============================================================================================
  PopupDeletition(type, id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'هل انت متاكد من حذف هذا العنصر',
      text: "لن تتمكن من التراجع عن هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم اريد الحذف',
      cancelButtonText: 'لا , إالغاء',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Delete(type, id).subscribe(res => {
          swalWithBootstrapButtons.fire(
            'تم الحذف !',
            ' تم حذف العنصر بنجاح.',
            'success'
          )
          this.deleteStatusSubject.next(res);
        }), error =>
            swalWithBootstrapButtons.fire(
              'تم الالغاء',
              'تم إلغاء حذف العنصر',
              'error'
            )
      }
    })
  }


}
