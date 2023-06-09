<?php 

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header('Content-Type: application/json');
    include_once "./loader/index.php";

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);  // get uri
    $uri = explode( '/', $uri ); 
    

    $server = new Server();

    $server->Connect();
    
    $pathName = $uri[4];


    if ($pathName == "keysearch") {
        include_once "./routers/keysearch.router.php";
    }
    elseif ($pathName == "product") {
        include_once "./routers/product.router.php";
    }
    elseif($pathName == "clients") {
        include_once "./routers/clients.router.php";
    }
    elseif($pathName == "news") {
        include_once "./routers/news.router.php";
    }
    elseif($pathName == "comment") {
        include_once "./routers/comment.router.php";
    }   
    elseif($pathName == "order") {
        include_once "./routers/order.router.php";
    }
    elseif($pathName == "auth") {
        include_once "./routers/auth.router.php";
    }
    elseif($pathName == "admin") {
        include_once "./routers/admin.router.php";
    }
    elseif($pathName == "cart"){
        include_once "./routers/cart.router.php";
    }
    elseif($pathName == "possess"){
        include_once "./routers/possess.router.php";
    }
    elseif($pathName == "statistic"){
        include_once "./routers/statistic.router.php";
    }
    
        elseif($pathName == "voucher") {
        include_once "./routers/voucher.router.php";
    }
    elseif($pathName == "contact") {
        include_once "./routers/contact.router.php";
    }
    elseif($pathName == "usev"){
        include_once "./routers/usev.router.php";
    }
   
    $server->disConnect()
?>