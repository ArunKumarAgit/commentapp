                      comment(full stack appplication)
A-how to run the app
--------------------
------------------------------------------------------------------
1-required softwares--
------------------------------------------------------------------
        a)web browser(mozill firefox, chrome,etc)
        b)Mongodb -> database
        c)expess js -> web Frame work
        d)nodejs -> Runtime Environment
        e)VS CODE -> IDE
        f)postman(optional) to test GET AND POST request
        
2-Packages to be installed and commands
-------------------------------------------------------------------
        a)npm init -> to get json package
        b)npm install express
        c)npm install mongodb
        d)npm install mongoose
        e)npm install nodemon --save-dev -> to restart server after some changes
        f)npm install node moules
        
3-how to run app
------------------------------------------------------------------
        a)download zip file, unzip it
        b)open folder in the VISUAL STUDIO CODE (IDE)
        c)update packages using above commands i.e 2.(a,b,c,d,e,f) using terminal
        d)install nodejs on OS
        e)install mongodb for database
        f)To connect to your local MongoDB, you set Hostname to localhost and Port to 3000       
          These values are the default for all local MongoDB connections. Press connect, and 
          you should see the databases in your local MongoDB.
        
        g)Run app on local sever http://localhost:3000/
-----------------------------------------------------------------------------------------------
             g.1)Sign-up--where the user will be allowed to enter his emailID and password along
                 with a secret code. This data will be validated and sent to the backend where  
                 the data will be stored in a Database.
           ------------------------------------------------------------------------------------
                 ->sign up using correct email (i have used regualar epression for validation 
                 email= [a-z0-9]+@[a-z]+\.[a-z]{2,3}
                 ->password = use any
                 ->secrete code - only numbers
 -------------------------------------------------------------------------------------------
             g.2)Sign-in where the user will be allowed to enter his emailID and password. This
                 data will be sent to the backend where it will be cross-checked with the data
                 available in the database and a proper response is returned to the frontend
            -----------------------------------------------------------------------------------
                -> After successfull sign up. the data entered by user will be stored in the 
                base
                -> Token will be generated used match the login details
                -> The stored data fetched during sign in
-----------------------------------------------------------------------------------------------
             g.3)Forget-password where the user will be allowed to enter the email id and
                 secret code. This data will be sent to the backend and If the data matches with
                 any record already in the database then the password should be shown to the
                 user In frontend.
-----------------------------------------------------------------------------------------------
             g.4)After sign-in the user will be presented with a text area where he will be able
             to type any comments. After submitting, the comment will be taken to the
             backend and saved in database
              ----------------------------------------------------------------------------------
                ->After succecesfull signup or sign we will redirected to TEXT AREA 
                  where we can able to comment

