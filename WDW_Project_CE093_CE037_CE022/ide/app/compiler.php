<?php 

    $language = strtolower($_POST['language']);
    $code = $_POST['code'];

    $random = substr(md5(mt_rand()), 0, 7);
    $filePath = "temp/" . $random . "." . $language;
    // $filePath = "temp/test.".$language;
    $programFile = fopen($filePath, "w");
    fwrite($programFile, $code);
    fclose($programFile);


    if($language == "php"){
    	$output = shell_exec("php $filePath 2>&1");
    	echo $output;
    }
    if($language == "javascript") {
        rename($filePath, $filePath.".js");
        $output = shell_exec("node $filePath.js 2>&1");
        echo $output;
    }
    if($language == "python") {
    	rename($filePath, $filePath.".py");
        $output = shell_exec("C:\Users\VASU\AppData\Local\Programs\Python\Python310\python.exe $filePath.py 2>&1");
        echo $output;
    }
    if($language == "c") {
        $outputExe = $random . ".exe";
        shell_exec("gcc $filePath -o $outputExe");
        $output = shell_exec(__DIR__ . "//$outputExe");
        echo $output;
    }
    if($language == "cpp") {
        $outputExe = $random . ".exe";
        shell_exec("g++ $filePath -o $outputExe");
        $output = shell_exec(__DIR__ . "//$outputExe");
        echo $output;
    }