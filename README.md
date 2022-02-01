# Cat Back-End

El proyecto implementa métodos para el consumo de la api **TheCatApi**.

Cabe señalar que los datos se almacenan en mongoAtlas por motivos de practicidad, con el fin de evitar conflictos al momento de almacenar datos en un entorno local.

Para iniciar el servidor utilice el siguiente comando.
```
npm run dev
```

## Tech Stack
- Node JS
- Express
- TypeScript
- Axios
- PassPort OAuth (Google, GitHub)


## Nota
- No modificar el puerto del servidor, ya que podría ocasionar conflicto con los servicios de Oauth.
- Por motivos prácticos se agrego el archivo .env al repositorio ya que no se implemento el deployment del proyecto. En un entorno profesional este archivo debe ser ignorado por git.
