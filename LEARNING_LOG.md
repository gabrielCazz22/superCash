# LEARNING LOG: CalcuProp

## 1. Contexto del Proyecto
* **Objetivo:** Construir una calculadora interactiva de consumo y propinas (CalcuProp) para dominar React 19, TypeScript y Tailwind CSS v4.
* **Stack:** Vite + React (TypeScript) + Tailwind CSS v4.

---

## 2. Conceptos Aprendidos y Aplicados
* **Tailwind CSS:**
  * Maquetación con Flexbox (`flex`, `flex-col`, `gap-*`, `justify-*`, `items-*`).
  * Clases de dimensionamiento y espaciado (`w-full`, `flex-1`, `w-20`, `p-*`, `py-*`).
  * Diferencia entre alineación de contenedor (`justify-center`) y alineación de texto (`text-center`).
  * Estilos de estados (`hover:`, `transition-colors`, `cursor-pointer`).
* **React:**
  * Concepto y uso del Hook `useState` para inputs controlados (`value` y `onChange`).
  * Inmutabilidad del estado al agregar elementos a un arreglo con el operador spread (`[...lista, nuevo]`).
  * Renderizado de listas mediante `.map()` y asignación de `key`.
  * Renderizado condicional con el Operador Ternario (`condicion ? <A /> : <B />`) y Fragmentos `<> ... </>`.
  * Concepto de **Estado Derivado** (calcular variables como `subtotal`, `montoPropina` y `totalFinal` sin estados redundantes).
  * Eliminación inmutable de elementos en React mediante `.filter()`.
* **TypeScript & JS:**
  * Declaración de funciones (`function` vs `const = () =>`).
  * Tipado de estados (`useState<string>`, `useState<number | string>`).
  * Uso de `.reduce()` con acumulador, valor inicial `, 0` y operaciones aritméticas.
  * Uso de `.filter()` para exclusión inmutable.

---

## 3. Decisiones Arquitectónicas
* **Diseño en dos columnas / tarjetas:**
  * Tarjeta 1 (Izquierda): Entrada de platillos/consumo y lista visual.
  * Tarjeta 2 (Derecha): Selección de porcentaje de propina y desglose financiero (Subtotal, Propina, Total).
* **Refactorización planificada:**
  * Separación de lógica mediante un **Custom Hook** (`useOrder.ts`).
  * División de UI en componentes reutilizables (`OrderForm`, `OrderSummary`).

---

## 4. Estado Actual y Logros
- [x] Header y maquetación de contenedor principal.
- [x] Formulario de ingreso de platillo (cantidad, nombre, precio) con botón funcional.
- [x] Visualización de la lista de platillos agregados en tiempo real.
- [x] Lógica de cálculo (Valores derivados: Subtotal, Monto Propina, Total a pagar).
- [x] Controles de propina (Botones rápidos 5%, 10%, 15% e input libre de %).
- [x] Desglose visual de totales ($ Subtotal, $ Propina, $ Total).
- [x] Estado vacío ("No hay comida para mostrar" + 🐶).
- [x] Función para eliminar platillos individuales de la lista (`.filter()`).
- [x] **Arquitectura y Custom Hook:** Lógica encapsulada en `src/hooks/orderHook.tsx` (`useOrder`), dejando `App.tsx` limpio y enfocado únicamente en la vista.
- [x] Paleta de colores neutral y armoniosa con Tailwind CSS v4.

---

## 5. Conclusión
El proyecto **CalcuProp** cumple con todos los requerimientos funcionales y técnicos con una arquitectura limpia, aplicando principios de inmutabilidad, renderizado condicional, estado derivado y desacoplamiento mediante Custom Hooks.
