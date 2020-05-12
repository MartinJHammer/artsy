# Import variables
. "./artsy/vars.ps1";

# Run db in own ps instance
invoke-expression "cmd /c start powershell -noexit -file $artsyScriptsRoot\database.ps1"

# Run backend in own ps instance
invoke-expression "cmd /c start powershell -noexit -file $artsyScriptsRoot\backend.ps1"

# Run frontend in own ps instance
invoke-expression "cmd /c start powershell -noexit -file $artsyScriptsRoot\frontend.ps1"
