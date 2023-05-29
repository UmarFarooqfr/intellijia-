import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'headers';
  isDashboardPage: boolean = false;
  intervalField = new FormControl('');
  isAdminSide = new FormControl('');
  alarmField = new FormControl('');
  refreshIntervals = [{ name: 'a', value: '1' }, { name: 'b', value: '2' }];
  countriesLanguages = [{ name: 'a', code: '1' }, { name: 'b', code: '2' }];
  notifications = [{ name: 'a', code: '1', content: '', eventTime: '123' }, { name: 'b', code: '2', content: '', eventTime: '123' }];
  selectedTime: string = '';


  constructor() {
    this.isDashboardPage = true;
  }

  onRefreshChange() { }

  onMenuItemTime(selectedTime: string) {
    this.selectedTime = selectedTime
  }

  onIntervalChange(e: any) {
    console.log('e: ', e);
  }

  openNotification() { }

  logOut() { }

}
