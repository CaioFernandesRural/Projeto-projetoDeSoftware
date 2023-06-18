<x-layout>
    <body>
        <h1>opa</h1>
    <a href="/teste2">socorro</a>
    
    <p>{{ 4 + 7 }} é um número</p>
    <p>hoje é {{ date('d') }}</p>
    
    <p>meu nome é: {{ $nome }}</p>
    <p>meu cachorro é: {{ $nomecachorro }}</p>
    
    <ul>
        @foreach ($animais as $animal)
        <li>{{ $animal }}</li>
        @endforeach
    </ul>
</body>
</x-layout>