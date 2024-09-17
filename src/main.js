import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'



import HomePage from './components/HomePage.vue'
import AdminLogin from './components/Admin-Login.vue'
import EmployeeLogin from './components/Employee-Login.vue'
import AdminHomepage from './components/AdminHomepage.vue'
import EmployeeHomepage from './components/EmployeeHomepage.vue'
import EmployeeInfo from './components/EmployeeInfo.vue'
import AttendanceInfo from './components/AttendanceInfo.vue'
import LeaveInfo from './components/LeaveInfo.vue'
import ManageNotice from './components/ManageNotice.vue'
import EmployeeLeaveReq from './components/EmployeeLeaveReq.vue'
import EmployeeITDesk from './components/EmployeeITDesk.vue'
import AdminErp from './components/AdminErp.vue'
import EmployeeErp from './components/EmployeeErp.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/Admin-Login', component: AdminLogin },
        { path: '/Employee-Login', component: EmployeeLogin },
        { path: '/AdminHomepage', component: AdminHomepage },
        { path: '/EmployeeHomepage', component: EmployeeHomepage },
        { path: '/EmployeeInfo', component: EmployeeInfo },
        { path: '/AttendanceInfo', component: AttendanceInfo },
        { path: '/LeaveInfo', component: LeaveInfo },
        { path: '/MngNotice', component: ManageNotice },
        { path: '/EmployeeLeaveReq', component: EmployeeLeaveReq },
        { path: '/EmployeeITDesk', component: EmployeeITDesk },
        { path: '/AdminErp', component: AdminErp },
        { path: '/EmployeeErp', component: EmployeeErp },
    ]
});
const app = createApp(App)
window.axios = require('axios');

app.use(router);


app.mount('#app')


