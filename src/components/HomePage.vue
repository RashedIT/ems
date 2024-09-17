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
                    
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="mt-5 mb-4">Hello, Welcome To EMS: Employee Management System </h1><br>

                    <b>If you are an Admin click Below To Log In </b> <br><br>
                    <router-link to="/Admin-Login" class="btn btn-outline-secondary">Admin Log In</router-link><br>
                    <br>
                    <br>
                    <b>or Employee click Below to Log In</b><br><br>

                    <router-link to="/Employee-Login" class="btn btn-outline-info">Employee Log In</router-link><br>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style>

  </style>
  