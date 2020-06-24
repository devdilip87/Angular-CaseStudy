import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
    boxAlert = new EventEmitter<any>();
}