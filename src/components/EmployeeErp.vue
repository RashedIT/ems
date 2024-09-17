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
                        <router-link to ="/EmployeeHomepage" class="nav-link active" aria-current="page">Homepage</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/EmployeeLeaveReq" class="nav-link active" aria-current="page">Leave Request</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/EmployeeITDesk" class="nav-link active" aria-current="page">IT Helpdesk</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/EmployeeErp" class="nav-link active fw-bold" aria-current="page">Employee Erp</router-link>
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
                                    <input type="text" class="form-control mt-2" placeholder="Your ID">
                                    </div>
                                    <div class="col">
                                    <input type="text" class="form-control mt-2" placeholder="Item Name">
                                    </div>
                                    <div class="col">
                                    <input type="text" class="form-control mt-2" placeholder="Quantity">
                                    </div>
                                    <div class="col">
                                    <input type="button" class="btn btn-dark mt-5" value="Submit Request">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


<hr>

            <div class="container">
                <div class="row">
                    <div class="col">
                        
                        <h2 class="mt-5 mb-4">Status Of Your Requested ITEM(s)</h2>

                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Status</th>
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
        name: 'EmployeeErp',
        mounted(){
            document.title = 'Employee Erp'
        }
    }
</script>