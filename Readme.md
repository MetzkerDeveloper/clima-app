# WM - CLIMA APP

Aplicação desenvolvida para fins de estudo sobre React Native.

Neste aplicativo, utilizamos a API da [OpenWeatherMap](https://api.openweathermap.org). Para utilizar a API, é necessário fazer um cadastro e gerar uma chave de acesso.

Abaixo, apresento um exemplo de como realizamos a chamada da API no meu app:

```
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
```

Foi utilizado crases invertidas (``) para criar uma template string, facilitando a inserção de variáveis na URL.