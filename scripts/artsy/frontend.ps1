# Import variables
. "./artsy/vars.ps1";

cd $frontend;
code .;
ng serve --open;