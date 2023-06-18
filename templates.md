## views ficam em /resources/views
## blade é o motor de renderização do Laravel

instale a extensão do VSCode "Laravel Blade Snippets"

- exemplo: homepage
- arquivos **precisam** terminar em .blade.php
- pode usar html normal à vontade, o php vai ficar embutido
- no Controller simplesmente retorne a *view* com o nome do seu template (sem a extensão)
- para usar código php simplesmente coloque dentro de: {{  }}

#### passar dados do controller para a view

- ao retornar a função *view* passe de segundo argumento um array(associativo) com os valores desejados
- no template dentro das {{}} coloque a sua `$variavel`
- agora vamos usar uma *diretiva*(directive) para usar um for dentro do blade
- a diretiva é iniciada com um @, nesse caso: `@foreach(vários as um)`

#### reduzir a repetição

- usamos a diretiva @include('nome do arq')
- ou para código global:
- criamos uma nova pasta dentro da views: components
- dentro do arquvio lauout podemos incluir tanto o header quanto o footer e no meio {{$slot}}
- usamos a "tag" : `x-(nome-do-componente)` e colocamos o html dentro dela