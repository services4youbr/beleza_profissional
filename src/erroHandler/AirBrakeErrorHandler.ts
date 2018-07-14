import { ErrorHandler } from '@angular/core';
import AirbrakeClient from 'airbrake-js';

export class AirbrakeErrorHandler implements ErrorHandler {
  airbrake: AirbrakeClient;

  constructor() {
    this.airbrake = new AirbrakeClient({
      projectId: 189988,
      projectKey: '716915d2447527fe08be6c25f513843a'
    });
  }

  handleError(error: any): void {
    this.airbrake.notify(error);
  }
}