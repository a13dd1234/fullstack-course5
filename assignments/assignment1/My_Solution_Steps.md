

1) Fork fullstack-course5 Repos form the jhu-ep-coursera
Source Repos:
https://github.com/jhu-ep-coursera/fullstack-course5
My Forked Repos:
https://github.com/a13dd1234/fullstack-course5

2) Clone it to my Online Che.OpenShift.io IDE Environment:

    a) ** I used a NodeJs Express Repos as a Base:
https://github.com/che-samples/web-nodejs-sample.git

    b) Clone it to Directory by name public and configer Express the serve the folder as static one.
git clone https://github.com/a13dd1234/fullstack-course5.git public


3) ** Create / Copy The Starter Code:
cp -R My_Path_To_Assignments_Directory/assignments1/assignments1-starter-code/* My_Path_To_Assignments_Directory/assignments1/.

4) AngularJS Installation
   ** Setup AngularJS 1.7.8 to work with my Assignments1

    a) Download the AngularJs 1.7.8 to Local folder "AngularJS_1.7.8"
       ** AngularJS 1.7.8 Source: https://code.angularjs.org/1.7.8/

mkdir My_Path_To_Assignments_Directory/assignments1/AngularJS_1.7.8

cd My_Path_To_Assignments_Directory/assignments1/AngularJS_1.7.8

curl https://code.angularjs.org/1.7.8/angular.js -O
curl https://code.angularjs.org/1.7.8/angular.min.js -O
curl https://code.angularjs.org/1.7.8/angular.min.js.map -O

    b) Add the "angular.min.js" file to my index.html page

    c) Add a test code to check if binding is working!

5) My Solution:

    a) Bind the input box "lunch-menu" to the $scope


