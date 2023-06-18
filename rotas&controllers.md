## uso de rotas no Laravel
### vou usar a pasta teste

o arquivo com as rotas é o `web.php`

uma rota é composta por :
- método (route::get, post, etc...)
- a url nesse caso "/teste"
- uma função ou um [controller](https://laravel.com/docs/10.x/controllers) especificando um método seu (vou fazer com os 2)
- e opcionalmente um [middleware](https://laravel.com/docs/10.x/middleware) (basicamento um método de checagem de autorização)

#### o arquivo deve ser o mais simples o possível, contendo apenas as rotas e os middlewares que as acompanham

## controllers

- são criados pelo console: `php artisan make:controller (nome do controller)`, nesse caso Teste2Controller
- podem ser encontrados em /app/Http/Controllers
- com o controller criado posso usar ele na minha rota, e usar o método socorro que eu criei