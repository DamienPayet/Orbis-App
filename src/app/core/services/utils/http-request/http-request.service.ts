import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {UniversalDeviceDetectorService} from '../device-detector/universal-device-detector.service';
import {Observable} from 'rxjs';
import {RichDataRequest} from '../../../Interfaces/shared/rich-data-riquest.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private readonly _endpoint: string;
  private _httpClient: HttpClient;
  private _deviceDetector: UniversalDeviceDetectorService;

  constructor(httpClient: HttpClient, deviceDetector: UniversalDeviceDetectorService) {
    this._httpClient = httpClient;
    this._deviceDetector = deviceDetector;
    this._endpoint = `${environment.sslEnabled ? "https://" : "http://"}${environment.host}:${environment.port}${environment.basePath}${environment.apiVersion}`;
  }


  /**
   * Sends a GET HTTP request to the specified endpoint with optional query parameters.
   *
   * @param {string} path - The relative path to the endpoint.
   * @param {HttpParams} [params] - The query parameters to include in the request. Defaults to an empty `HttpParams` object.
   * @return {Observable<T>} An observable of the HTTP response body as the specified generic type.
   */
  public get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this._httpClient.get<T>(this._endpoint + path, {params});
  }

  public getWithCredentials<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this._httpClient.get<T>(this._endpoint + path, { withCredentials: true});
  }

  /**
   * Sends an HTTP POST request to the specified path with the given parameters.
   *
   * @param {string} path The endpoint path to which the POST request will be sent.
   * @param {T} params The parameters to include in the body of the POST request.
   * @return {Observable<R>} An Observable that emits the response of the POST request.
   */
  public post<T,R>(path: string, params: T): Observable<R> {
    return this._httpClient.post<R>(this._endpoint + path, this._addDeviceInfo(params));
  }

  /**
   * Sends a POST request to the specified path with credentials and additional device information.
   *
   * @param path The endpoint path to send the POST request to.
   * @param params The payload to be sent in the request body.
   * @return An Observable of the response of type R.
   */
  public postWithCredentials<T,R>(path: string, params: T): Observable<R> {
    return this._httpClient.post<R>(this._endpoint + path, this._addDeviceInfo(params),{withCredentials: true});
  }


  /**
   * Sends a DELETE request to the specified endpoint with optional query parameters.
   *
   * @param {string} path - The relative URL path for the resource to be deleted.
   * @param {HttpParams} params - An optional set of query parameters to include in the request. Defaults to an empty `HttpParams` object.
   * @return {Observable<T>} An observable emitting the response of the DELETE request, with data of type `T`.
   */
  public delete<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this._httpClient.delete<T>(this._endpoint + path, {params});
  }

  /**
   * Sends a DELETE HTTP request to the specified endpoint with provided query parameters
   * and includes credentials such as cookies or authentication headers.
   *
   * @param {string} path - The relative path of the API endpoint to send the DELETE request to.
   * @param {HttpParams} [params] - Optional query parameters to be appended to the request. Defaults to an empty HttpParams object if not provided.
   * @return {Observable<T>} An observable containing the response of the DELETE request.
   */
  public deleteWithCredentials<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this._httpClient.delete<T>(this._endpoint + path, {params, withCredentials: true});
  }


  /**
   * Updates a resource on the specified path by making an HTTP PUT request.
   *
   * @param {string} path - The endpoint path to which the update request will be sent.
   * @param {FormData} params - The parameters to include in the request body.
   * @return {Observable<T>} An observable containing the HTTP response.
   */
  public update<T>(path: string, params: FormData): Observable<T> {
    return this._httpClient.put<T>(this._endpoint + path, params);
  }

  /**
   * Sends an HTTP PUT request to update a resource at the specified path,
   * including credentials in the request.
   *
   * @param {string} path - The relative path of the resource to be updated.
   * @param {FormData} params - The form data containing the parameters for the update.
   * @return {Observable<T>} An Observable representing the HTTP response, resolving to the type T.
   */
  public updateWithCredentials<T>(path: string, params: FormData): Observable<T> {
    return this._httpClient.put<T>(this._endpoint + path, params, {withCredentials: true});
  }



  /**
   * Enhances the provided data object by adding device information such as operating system,
   * operating system version, and browser details.
   *
   * @param {T} data - The base data object to which the device information will be added.
   * @return {T & RichDataRequest} The enriched data object containing the original data and device information.
   */
  private _addDeviceInfo<T>(data: T): T & RichDataRequest{
    return {
      ...data,
      Os: this._deviceDetector.os || 'Unknown',
      OsVersion: this._deviceDetector.os_version || 'Unknown',
      Browser: this._deviceDetector.browser || 'Unknown'
    };
  }
}
