# Projeto-projetoDeSoftware

instala o php e coloca no PATH
instala o C++ https://learn.microsoft.com/pt-br/cpp/windows/latest-supported-vc-redist?view=msvc-170

vai no php.ini-development (na pasta do php) e mude as seguintes configurações:
    descomente (tire o ;) das linhas
        "extension=curl"
        "extension=fileinfo"
        "extension=gd"
        "extension=mbstring"
        "extension=openssl"
        "extension=pdo_mysql"
        "extension=zip"
    descomente a linha
        extension_dir = "ext"
        troque "ext" pelo caminho absoluto da pasta "ext" dentro da pasta do php
    ache e troque memory_limit de 128M para 256M

instalar o Composer (gerenciador de dependências do PHP)
    https://getcomposer.org/download/
    rode o instalador
    verifique que o caminho do php está correto
    next next next
    reinicie o PC
    depois escreve composer no cmd pra ver se ta tudo serto

iniciar projeto Laravel
    composer create-project laravel/laravel app
    com o git BASH digite: chmod +777 app/bootstrap/cache (fica dando erro de não conseguir acessar)
    rode o servidor: php artisan serve (dentro da pasta do app)