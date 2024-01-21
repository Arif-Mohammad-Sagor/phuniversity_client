# PhUniversity_Management_Client Project Description .

# module 5.1=>

packages : react router dom,react-hook-form,antd
folders : src>components>(ui,form,layout),pages,utils,hooks,config,routes,redux,styles,lib
src>assets>images,icons
files:.enn files

# module 5.2=>

layout>MainLayout>import a layout from andDesign

# module 5.5=>

f= folder
p= page or component

pages >fAdmin,fFaculty,fStudent ,p(Contact,About,Register,Login)

# module 5.6 =>

pages>admin>p(createFaculty,createAdmin) and set up them in router under admin routes

# module 5.10 =>

setup redux store

# module 6.1 =>

make a utility function for admin,faculty and student dashboard routes

# module 6.2=>

make a utility function for admin,faculty and student sidebar items and segregate the Sider into a different component and use a switch statement for changing dashboard according to role.

# module 6.3=>

analize authentication credientails

# module 6.4=>

create authSlice & baseApi & injectEndpoints from a different folder.

# module 6.5 =>

design a login form

# module 6.6 =>

set up : 1. credentials:'include' in redux baseQuery after baseUrl like this :> baseQuery: fetchBaseQuery({
baseUrl: "http://localhost/5000",
credentials:'include',
}), 2. app.use(cors({origin:'http://localhost:5017',credentials:true})) in backend code

# module 6.7 => 
after successfully logged in we have to set user and accessToken in redux store for that we have to make the submit function asyncronus and then we will need an utiliy function for decode the token. And we will do this using jwt decode npm package.