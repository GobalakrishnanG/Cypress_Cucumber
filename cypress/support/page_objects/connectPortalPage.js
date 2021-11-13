import { CalendarPage } from "./calendarPage";
import { LoginPage } from "./loginPage";


export class ConnectPortal {

    constructor() {
        this.loginPage = new LoginPage();
        this.calendarPage = new CalendarPage();
    }

    getLoginPage() {
        return this.loginPage;
    }

    getCalendarPage() {
        return this.calendarPage;
    }
}

export const connectPortal = new ConnectPortal()