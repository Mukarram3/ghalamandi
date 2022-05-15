<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <base href="{{ url('') }}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}"/>
    <title>Ghala Mandi</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/>
<style>
    @media (min-width: 992px) {
        .header-fixed[data-header-scroll=on].sidebar-enabled .header {
            right: 0 !important;
        }
    }
</style>
</head>
<body data-app>
<div id="app">
</div>
<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
