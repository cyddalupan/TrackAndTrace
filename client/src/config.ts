import {HttpHeaders} from '@angular/common/http';

const RESPONSE_TYPE_TEXT: 'text' = 'text';

/** HTTP options for the GET request. */
export const GET_HTTP_OPTIONS = {
  responseType: RESPONSE_TYPE_TEXT,
};

/**
 * HTTP options for the POST request.
 * Request payload is expected to be a JSON data.
 */
export const POST_HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  responseType: RESPONSE_TYPE_TEXT,
};

/**
 * HTTP options for the PUT request.
 * Request payload is expected to be a JSON data.
 */
export const PUT_HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  responseType: RESPONSE_TYPE_TEXT,
};

/**
 * HTTP options for the PATCH request.
 * Request payload is expected to be a JSON data.
 */
export const PATCH_HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  responseType: RESPONSE_TYPE_TEXT,
};

/**
 * HTTP options for the DELETE request.
 * Request payload is expected to be a JSON data.
 */
export const DELETE_HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  responseType: RESPONSE_TYPE_TEXT,
};

export class GQL {
  query: string;
}

export const httpOptions = {
  headers: new HttpHeaders()
};

export const mainUrl = 'https://devinehealthmedical.com/msg/track-and-trace/public_html/';
//export const mainUrl = 'http://localhost:8888/track-and-trace/public_html/';
//export const mainUrl = 'http://track.cyd.ninja/';
