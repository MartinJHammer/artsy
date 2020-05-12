# Powershell nice-to-knows

## Dot sourcing
Dot sourcing e.g. including other scripts functions and variables.

https://ss64.com/ps/source.html
https://stackoverflow.com/questions/1864128/load-variables-from-another-powershell-script

## Execution scope
Scripts run via (see below) needs remember their "path scope" is the same as the script that executed it.

## 
powershell -noexit -file "some-path.ps1"

equals

& "some-path.ps1"
