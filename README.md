# Facturación Electrónica Móvil

Este proyecto es una aplicación móvil para la facturación electrónica desarrollada utilizando Ionic para el frontend y Spring Boot con Java para el backend. La base de datos utilizada es MySQL. La aplicación permite a los usuarios iniciar sesión, gestionar productos y generar facturas de los productos vendidos.

## Características

- **Inicio de Sesión**: Sistema de autenticación para acceder a la aplicación.
- **Gestión de Productos**: Permite a los usuarios administrar el catálogo de productos, incluyendo la creación, edición y eliminación de productos.
- **Generación de Facturas**: Permite a los usuarios seleccionar productos y generar facturas para los productos vendidos.
- **Sincronización de Datos**: Los datos de productos y facturas se sincronizan entre el dispositivo móvil y el servidor para mantener la coherencia de los datos.

## Tecnologías Utilizadas

- **Frontend Móvil**: Ionic
- **Backend**: Spring Boot, Java
- **Base de Datos**: MySQL

## Instalación y Configuración

### Prerrequisitos

- Node.js
- Ionic CLI
- Java Development Kit (JDK)
- Spring Boot
- MySQL Server

### Pasos de Instalación

1. Clona el repositorio:
    ```sh
    https://github.com/jeanpgr/app_easyinvoice.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd app_easyinvoice
    ```
3. Configura la base de datos:
    - Crea una base de datos en MySQL.
    - Configura las credenciales de la base de datos en el archivo `application.properties` del backend.
4. Inicia el backend:
    - Importa el proyecto Spring Boot en tu IDE y ejecútalo.
5. Configura el frontend:
    - Navega al directorio `frontend` y ejecuta:
    ```sh
    npm install
    ```
6. Inicia el servidor del frontend:
    ```sh
    ionic serve
    ```
7. La aplicación estará disponible en tu navegador web en `http://localhost:[puerto]`.

## Uso

1. **Inicio de Sesión**: Ingresa con tu nombre de usuario y contraseña.
2. **Gestión de Productos**:
   - Agrega, edita o elimina productos según sea necesario.
3. **Generación de Facturas**:
   - Selecciona los productos vendidos y genera una factura con los detalles de la venta.

## Contribuciones

Las contribuciones son bienvenidas. Puedes hacerlo de la siguiente manera:

1. Haz un fork del proyecto.
2. Crea una nueva rama:
    ```sh
    git checkout -b nueva-rama
    ```
3. Realiza tus cambios y haz commits:
    ```sh
    git commit -m "Descripción de los cambios"
    ```
4. Envía tus cambios al repositorio original:
    ```sh
    git push origin nueva-rama
    ```
5. Crea una Pull Request explicando tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Mira el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos a [jean_0720@hotmail.com](jean:jean_0720@hotmail.com).

---

¡Gracias por utilizar nuestra aplicación móvil de facturación electrónica!
