# 🚀 Modern JavaScript Project

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Modern Features](https://img.shields.io/badge/Modern_Features-Enabled-4CAF50?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Una colección completa de ejercicios prácticos sobre las características más modernas de JavaScript**

[🌟 Características](#-características) • [📚 Ejercicios](#-ejercicios) • [🎯 Uso](#-uso) • [📖 Licencia](#-licencia)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características Implementadas](#-características)
- [Ejercicios Detallados](#-ejercicios)
- [Requisitos](#-requisitos)
- [Instalación y Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Licencia](#-licencia)

---

## 🎯 Sobre el Proyecto

Este repositorio contiene una colección de ejercicios que demuestran el uso de las características más modernas y recientes de JavaScript (ECMAScript 2020-2024). Cada archivo se enfoca en una característica específica con ejemplos prácticos y casos de uso del mundo real.

### 🎓 Propósito

El objetivo es explorar, aprender y practicar las últimas funcionalidades de JavaScript, incluyendo:
- Nuevos métodos de arrays y objetos
- Mejoras en Promises
- Operadores modernos
- Estructuras de datos avanzadas
- Manejo de errores mejorado

---

## ✨ Características

Este proyecto cubre las siguientes características modernas de JavaScript:

| Característica | Versión ES | Archivo |
|----------------|-----------|---------|
| 🔄 Array Iterators | ES2024 | `arrayIterators.js` |
| 🎯 At Method | ES2022 | `at.js` |
| ⚠️ Error Cause | ES2022 | `errorManage.js` |
| ❓ Nullish Coalescing | ES2020 | `nullishCoalescingOperator.js` |
| 🔢 Numeric Separator | ES2021 | `numericSeparator.js` |
| 📦 Object.groupBy | ES2024 | `objectGroupBy.js` |
| 🔧 Logical Assignment | ES2021 | `operators.js` |
| 🔮 Promise.allSettled | ES2021 | `promiseAllSettled.js` |
| 🎲 Promise.try | ES2024 | `promiseTry.js` |
| 🗂️ Set Methods | ES2024 | `set.js` |
| 🔑 Symbol | ES2015+ | `symbol.js` |
| 📝 Array.with | ES2023 | `with.js` |

---

## 📚 Ejercicios

### 1️⃣ **Array Iterators** (`arrayIterators.js`)

**🎯 Concepto:** Nuevos iteradores para arrays que proporcionan evaluación perezosa (lazy evaluation).

**📝 Descripción:**
Este ejercicio demuestra el uso de iteradores modernos en arrays, incluyendo `.values()`, `.entries()` y `.keys()`. La evaluación perezosa permite procesar elementos bajo demanda en lugar de todos a la vez.

**💡 Características destacadas:**
- Uso de `.values()` con `.map()` para transformación perezosa
- Evaluación bajo demanda con iteradores
- Métodos `.entries()` y `.keys()` para acceder a índices y valores
- Control de flujo con `break` en iteración

**🔍 Caso de uso:** Sistema de estudiantes con calificaciones donde se transforman las puntuaciones de manera eficiente.

---

### 2️⃣ **At Method** (`at.js`)

**🎯 Concepto:** Acceso a elementos de arrays con indexación negativa.

**📝 Descripción:**
El método `.at()` permite acceder a elementos de un array usando índices positivos y negativos, siendo especialmente útil para acceder a elementos desde el final.

**💡 Características destacadas:**
- Acceso con índices positivos: `.at(0)`
- Acceso con índices negativos: `.at(-1)` (último elemento)
- Retorna `undefined` para índices fuera de rango

**🔍 Caso de uso:** Acceso rápido al último elemento sin usar `array[array.length - 1]`

---

### 3️⃣ **Error Management** (`errorManage.js`)

**🎯 Concepto:** Manejo mejorado de errores con la propiedad `cause`.

**📝 Descripción:**
JavaScript moderno permite agregar información contextual a los errores mediante la propiedad `cause`, facilitando el debugging y seguimiento de errores.

**💡 Características destacadas:**
- Lanzamiento de errores con contexto adicional
- Uso de la propiedad `cause` para información detallada
- Try-catch para captura y análisis de errores

**🔍 Caso de uso:** Función de validación de IDs de productos con mensajes de error descriptivos.

---

### 4️⃣ **Nullish Coalescing Operator** (`nullishCoalescingOperator.js`)

**🎯 Concepto:** Operador `??` para valores por defecto basado en nullish (`null` o `undefined`).

**📝 Descripción:**
A diferencia del operador OR (`||`), el nullish coalescing (`??`) solo considera `null` y `undefined` como valores "vacíos", preservando valores falsy como `0`, `false` o `""`.

**💡 Características destacadas:**
- Diferencia entre `??` y `||`
- Preservación de valores falsy válidos (0, false, "")
- Solo reemplaza `null` y `undefined`

**🔍 Caso de uso:** Asignación de puntuaciones donde `0` es un valor válido.

---

### 5️⃣ **Numeric Separator** (`numericSeparator.js`)

**🎯 Concepto:** Separadores visuales en números grandes para mejor legibilidad.

**📝 Descripción:**
El underscore (`_`) puede usarse como separador en números para mejorar la legibilidad sin afectar el valor numérico.

**💡 Características destacadas:**
- Separadores con `_` en números grandes
- No afecta el valor real del número
- Mejora significativa en legibilidad

**🔍 Caso de uso:** Constantes astronómicas y financieras (distancia al sol, precios, deuda nacional).

---

### 6️⃣ **Object.groupBy** (`objectGroupBy.js`)

**🎯 Concepto:** Agrupación de arrays en objetos basada en una función de clasificación.

**📝 Descripción:**
El método estático `Object.groupBy()` permite agrupar elementos de un array en un objeto basándose en el resultado de una función callback.

**💡 Características destacadas:**
- Agrupación de números (pares/impares)
- Agrupación por primera letra de strings
- Agrupación de objetos por rangos de valores

**🔍 Casos de uso:**
- Números agrupados por paridad
- Nombres de magos agrupados por inicial
- Avengers agrupados por nivel de poder (alpha, beta, omega)

---

### 7️⃣ **Logical Assignment Operators** (`operators.js`)

**🎯 Concepto:** Operadores de asignación lógica compactos.

**📝 Descripción:**
Los operadores `||=`, `&&=` y `??=` combinan operadores lógicos con asignación, proporcionando una sintaxis más concisa.

**💡 Características destacadas:**
- `||=`: Asigna si el valor es falsy
- `&&=`: Asigna si el valor es truthy
- `??=`: Asigna si el valor es nullish

**🔍 Caso de uso:** Asignación condicional de valores por defecto de manera eficiente.

---

### 8️⃣ **Promise.allSettled & Promise.any** (`promiseAllSettled.js`)

**🎯 Concepto:** Métodos avanzados para manejo de múltiples Promises.

**📝 Descripción:**
- `Promise.allSettled()`: Espera a que todas las promises se resuelvan o rechacen
- `Promise.any()`: Retorna la primera promise que se resuelva exitosamente

**💡 Características destacadas:**
- `allSettled` retorna estado de todas las promises (fulfilled/rejected)
- `any` útil para race conditions con fallback
- Ejemplo práctico con fetch para optimización de UX

**🔍 Caso de uso:**
- Validación de múltiples operaciones donde algunas pueden fallar
- Optimización de performance usando la primera respuesta disponible

---

### 9️⃣ **Promise.try** (`promiseTry.js`)

**🎯 Concepto:** Envolver funciones síncronas/asíncronas en Promises de manera uniforme.

**📝 Descripción:**
`Promise.try()` permite ejecutar funciones que pueden ser síncronas o asíncronas dentro de un contexto de Promise, manejando errores de manera consistente.

**💡 Características destacadas:**
- Manejo uniforme de código síncrono y asíncrono
- Captura de errores consistente con `.catch()`
- Simplifica el manejo de funciones mixtas

**🔍 Caso de uso:** Funciones que pueden lanzar errores síncronos, retornar promises, o valores directos.

---

### 🔟 **Set Methods** (`set.js`)

**🎯 Concepto:** Métodos matemáticos para operaciones con conjuntos.

**📝 Descripción:**
Los Sets ahora incluyen métodos nativos para operaciones matemáticas de conjuntos, eliminando la necesidad de implementaciones personalizadas.

**💡 Características destacadas:**
- `.union()`: Unión de conjuntos
- `.intersection()`: Elementos comunes
- `.difference()`: Elementos en uno pero no en otro
- `.symmetricDifference()`: Elementos exclusivos de cada conjunto
- `.isSubsetOf()`, `.isSupersetOf()`, `.isDisjointFrom()`: Relaciones entre conjuntos

**🔍 Caso de uso:** Gestión de tecnologías web, backend y lenguajes compilados con operaciones de conjuntos.

---

### 1️⃣1️⃣ **Symbol** (`symbol.js`)

**🎯 Concepto:** Valores únicos e inmutables para identificadores de propiedades.

**📝 Descripción:**
Los Symbols son valores primitivos únicos que nunca colisionan, ideales para constantes de acciones y propiedades privadas.

**💡 Características destacadas:**
- Cada Symbol es único, incluso con misma descripción
- `.description` para obtener la descripción del Symbol
- Útil para constantes de tipo enum

**🔍 Caso de uso:** Sistema de acciones (INCREMENT/DECREMENT) con valores garantizados únicos.

---

### 1️⃣2️⃣ **Array.with** (`with.js`)

**🎯 Concepto:** Copia de arrays con modificaciones inmutables.

**📝 Descripción:**
El método `.with()` crea una copia del array con un elemento modificado, sin alterar el array original, siguiendo principios de inmutabilidad.

**💡 Características destacadas:**
- Retorna nueva copia del array
- No modifica el array original
- Sintaxis simple: `array.with(index, newValue)`

**🔍 Caso de uso:** Actualización de elementos en arrays manteniendo inmutabilidad para programación funcional.

---

## 🛠️ Requisitos

- **Node.js**: v18.0.0 o superior (para características ES2024)
- **npm**: v8.0.0 o superior

---

## 🎯 Uso

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/modern-javascript-project.git

# Navegar al directorio
cd modern-javascript-project
```

### Ejecutar Ejercicios

Cada archivo puede ejecutarse de forma independiente:

```bash
# Ejecutar un ejercicio específico
node arrayIterators.js
node promiseAllSettled.js
node objectGroupBy.js
# ... etc

# O ejecutar todos los archivos
node at.js && node arrayIterators.js && node errorManage.js
```

### Explorar el Código

Te recomiendo abrir cada archivo y:
1. 📖 Leer los comentarios explicativos
2. ▶️ Ejecutar el código
3. 🔧 Modificar y experimentar
4. 📝 Observar los resultados en consola

---

## 📁 Estructura del Proyecto

```
modern-javascript-project/
│
├── 📄 arrayIterators.js          # Iteradores de arrays con lazy evaluation
├── 📄 at.js                      # Método .at() para índices negativos
├── 📄 errorManage.js             # Error handling con cause
├── 📄 nullishCoalescingOperator.js # Operador ??
├── 📄 numericSeparator.js        # Separadores numéricos
├── 📄 objectGroupBy.js           # Agrupación de objetos
├── 📄 operators.js               # Operadores de asignación lógica
├── 📄 promiseAllSettled.js       # Métodos avanzados de Promise
├── 📄 promiseTry.js              # Promise.try
├── 📄 set.js                     # Métodos matemáticos de Set
├── 📄 symbol.js                  # Símbolos únicos
├── 📄 with.js                    # Array.with inmutable
├── 📄 LICENSE                    # Licencia MIT
└── 📄 README.md                  # Este archivo
```

---

## 📖 Recursos Adicionales

### 📚 Documentación Oficial
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [ECMAScript Specifications](https://tc39.es/ecma262/)
- [TC39 Proposals](https://github.com/tc39/proposals)

### 🎓 Aprendizaje
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o quieres añadir más ejercicios:

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama para tu característica (`git checkout -b feature/NuevaCaracteristica`)
3. 💾 Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. 📤 Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. 🔄 Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Juan José Martín Melero**

---

<div align="center">

### ⭐ Si este proyecto te ha sido útil, considera darle una estrella

**Hecho con ❤️ y ☕ para la comunidad de JavaScript**

![JavaScript](https://img.shields.io/badge/Made_with-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>