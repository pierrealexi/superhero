<!DOCTYPE html>
<html>
<head>
    <title>Liste des Superhéros</title>
</head>
<body>
    <h1>Liste des Superhéros</h1>
    <ul>
        @foreach ($superheroes as $superhero)
            <li>{{ $superhero->name }} - {{ $superhero->description }}</li>
        @endforeach
    </ul>
</body>
</html>