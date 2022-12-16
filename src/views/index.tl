<!doctype html>
<html>
<head>
    <title>index template</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
</head>
<body>
    ${d.eat.map((food) => '<div>' + food + '</div>').join('')}

    

    <div class="row align-items-center">
        <div class="col">
            <div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>
        </div>
    </div>
</body>
</html>