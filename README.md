# 🚗 Aplicación Alquiler de Coches

Esta es una **aplicación web** para la gestión completa de un servicio de alquiler de vehículos. Pensada para uso por un **administrador** en tabletas y dispositivos de escritorio, permite almacenar y controlar toda la información de clientes, vehículos, pagos y alquileres.

<p align="center">
  <img src="thumbnail.png" alt="Banner Alquiler de Coches" style="width:60%; height:auto;"/>
</p>

## 📄 Descripción

El proyecto consiste en una herramienta CRUD que facilita al administrador:
1. **Gestión de Clientes**: Alta, baja, edición y listado de clientes (datos personales, contacto…).  
2. **Formas de Pago**: Definición y selección de métodos (tarjeta, efectivo, transferencia…).  
3. **Gestión de Vehículos**: Registro del parque móvil con matrícula, marca, modelo, color, extras (aire, silla bebé…), tipo de motor (gasolina, diésel, híbrido, eléctrico…).  
4. **Historial de Alquileres**: Consulta y seguimiento de cada alquiler por cliente y por vehículo, con estados (activo / entregado).  
5. **Dashboard Principal**: Vista general con métricas clave (total clientes, total vehículos, total alquileres, ingresos mensuales) y últimos 5 alquileres.  

> **Optimizado para tablet**: Diseño responsive adaptado a pantallas de 7″ a 12″.

## 🚀 Características

- **CRUD completo** de clientes, vehículos, formas de pago y alquileres.  
- **Búsqueda y filtrado** en tablas (por nombre, matrícula o estado).  
- **Dashboard interactivo** con gráficos de ingresos y accesos directos a cada módulo.  
- **Almacenamiento local** durante desarrollo (próxima versión en servidor).  
- **Interfaz intuitiva**: Formularios sencillos, validaciones en tiempo real y feedback claro.

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible.  
- **CSS3** (Flexbox, Grid): Maquetación responsive y tematización.  
- **JavaScript** (ES6+): Lógica de interacción, manipulación del DOM y gestión de datos.  
- **Chart.js**: Gráficos de barras para ingresos mensuales.  
- **LocalStorage** (para prototipado): Persistencia de datos en el navegador.

## 📖 Manual de Usuario

Consulta el manual de usuario completo para aprender a navegar y explotar todas las funcionalidades de la aplicación: [Manual de Usuario](./User_Guide.pdf) 


## 🎯 Futuras Mejoras

- **Implementar backend** con API REST y base de datos (Node.js, Express, MongoDB/MySQL).  
- **Autenticación y roles** (administrador vs. cliente).  
- **App móvil nativa** (React Native / Flutter) para que los usuarios finales puedan reservar directamente.  
- **Exportar informes** en PDF o Excel.  
- **Notificaciones por email/SMS** para recordatorios de devolución.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!  
1. Haz un fork de este repositorio.  
2. Crea una rama con tu feature o mejora: `git checkout -b feature/nueva-funcionalidad`  
3. Realiza tus cambios y haz commit: `git commit -m "Añade X"`  
4. Envía un pull request describiendo tu propuesta.  

También puedes abrir un [issue](#) para sugerir cambios o reportar errores.

## 🌟 Cómo Empezar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/rental-car-app.git
   cd rental-car-app
