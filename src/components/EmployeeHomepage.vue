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
                        <router-link to ="/EmployeeHomepage" class="nav-link active fw-bold" aria-current="page">Homepage</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/EmployeeLeaveReq" class="nav-link active" aria-current="page">Leave Request</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/EmployeeITDesk" class="nav-link active" aria-current="page">IT Helpdesk</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to ="/EmployeeErp" class="nav-link active" aria-current="page">Employee Erp</router-link>
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



            <section class="main_content">
                <div class="container">
                    <div class="row">
                        <div class="col">
                          <h2 class="mt-5 mb-4">Recent Notice:</h2>
                            
                            <div class="card text-white bg-secondary mb-3" >
                                <div class="card-header">Notice Subject</div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                            <div class="card text-white bg-secondary mb-3" >
                                <div class="card-header">Notice Subject</div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'EmployeeHomepage',
    mounted() {
            document.title = 'EMS: Employee Homepage'
        }
  }
  </script>
  
  <style>

  </style>
  