# Base vars
$reposRoot = "$env:USERPROFILE\Repos";

# Api vars
$apiRoot =  "$reposRoot\other-root";
$apiToolsFolder = "$apiRoot\tools";

# Run apis
cd $apiToolsFolder;
write-host "Starting database api";
start-process "$apiToolsFolder\run-databases-api.bat";
write-host "Starting tasks";
start-process "$apiToolsFolder\run-tasks-service.bat";
write-host "Starting portal api";
start-process "$apiToolsFolder\run-portal-api.bat";