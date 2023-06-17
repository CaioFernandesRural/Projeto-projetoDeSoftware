# iniciação do projeto laravel

1.instala o php e coloca no PATH
2.instala o C++ [C++ redistributable](https://learn.microsoft.com/pt-br/cpp/windows/latest-supported-vc-redist?view=msvc-170)

3.vai no php.ini-development (na pasta do php) e mude as seguintes configurações:
    1.descomente (tire o ;) das linhas
        -"extension=curl"
        -"extension=fileinfo"
        -"extension=gd"
        -"extension=mbstring"
        -"extension=openssl"
        -"extension=pdo_mysql"
        -"extension=zip"
    2.descomente a linha
        -extension_dir = "ext"
        -troque "ext" pelo caminho absoluto da pasta "ext" dentro da pasta do php
    3.ache e troque memory_limit de 128M para 256M

4.instalar o Composer (gerenciador de dependências do PHP)
    1.[download](https://getcomposer.org/download/)
    2.rode o instalador
    3.verifique que o caminho do php está correto
    4.next next next
    5.reinicie o PC
    6.depois escreve composer no cmd pra ver se ta tudo serto

5.iniciar projeto Laravel (não precisa criar denovo, só a parte de rodar)
    1.composer create-project laravel/laravel app
    2.com o git BASH digite: chmod +777 app/bootstrap/cache (fica dando erro de não conseguir acessar)
    3.rode o servidor: php artisan serve (dentro da pasta do app)