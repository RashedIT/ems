<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">EMS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to ="/AdminHomepage" class="nav-link active " aria-current="page">Homepage</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/EmployeeInfo" class="nav-link active fw-bold" aria-current="page">Employee Info</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/AttendanceInfo" class="nav-link active" aria-current="page">Attendance Info</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/LeaveInfo" class="nav-link active" aria-current="page">Leave Info</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/MngNotice" class="nav-link active" aria-current="page">Manage Notice</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/AdminErp" class="nav-link active" aria-current="page">Admin ERP</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <router-link to ="/" class="nav-link active" aria-current="page">
                        <button type="button" class="btn btn-outline-danger">Log Out</button>
                    </router-link>
                </form>
                </div>
            </div>
            </nav>

        <div id="main_content">

            <div class="container">
                <div class="row">
                    <div class="col mt-5">
                        <form>
                            <div class="form-row">
                                <div class="col-12">
                                    <input type="text" class="form-control mt-2" placeholder="Name">
                                    </div>
                                    <div class="col">
                                    <input type="text" class="form-control mt-2" placeholder="Designation">
                                    </div>
                                    <div class="col">
                                    <input type="text" class="form-control mt-2" placeholder="ID">
                                    <input type="button" class="btn btn-dark mt-2" value="Add Employee">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <hr>
            
            <h2 class="mt-5 mb-5">Employee List</h2>


            <div class="container">
                <div class="row">
                    <div class="col">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ems 1</th>
                                    <td>MD Rashedul Islam</td>
                                    <td>IT Officer</td>
                                    <td>
                                        <input type="button" class="btn btn-danger" value="Remove">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'EmployeeInfo',
        mounted(){
            document.title = 'Employee Information'
        }
    }
</script>