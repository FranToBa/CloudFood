> Microservicios

- 1- Justificación y usa del framework elegido. Consultar esta [documentación](./express.md). 
- 2-3- [Documentación](./microapi.md) sobre la [API](../src/index.js) creada y uso de middleware.
- 4- [Documentación](./microapi_test.md) sobre los [tests](../tests/index.test.js).

- Avance de código:
	- Se ha modificado la clase [menu.js](../src/menu.js) creando un constructor al que no haya que indicarle los platos, añadiendo setters para los platos ([Issue #51](https://github.com/FranToBa/CloudFood/issues/51)).
	- Se ha añadido un nuevo método que devuelve el tipo de un plato específico.
	- Se ha añadido un nuevo método relacionado con la [HU06](https://github.com/FranToBa/CloudFood/issues/22) que devuelve el precio de un plato específico, usando el método anterior sobre el tipo de plato y devolviendo su precio ([Issue #46](https://github.com/FranToBa/CloudFood/issues/46)).
