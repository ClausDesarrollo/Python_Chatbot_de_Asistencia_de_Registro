# Chatbot_de_Asistencia_de_Registro

## Descripción

Este proyecto es un chatbot de asistencia de registro desarrollado con Django para el backend y React para el frontend. 
El proyecto está estructurado en microservicios para gestionar usuarios, eventos y notificaciones.

## Requisitos

- Python 3.8+
- Node.js 14+
- PostgreSQL
- Docker (opcional, para despliegue con contenedores)

## Instalación

### Backend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/chatbot_de_asistencia_de_registro.git
   cd chatbot_de_asistencia_de_registro/backend
   ```

2. Crea y activa un entorno virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
   ```

3. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Configura las variables de entorno en un archivo `.env`:
   ```env
   DB_CONNECTION=postgresql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=nombre_de_la_base_de_datos
   DB_USERNAME=tu_usuario
   DB_PASSWORD=tu_contraseña
   ```

5. Realiza las migraciones de la base de datos:
   ```bash
   python manage.py migrate
   ```

6. Inicia el servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```

### Frontend

1. Navega al directorio del frontend:
   ```bash
   cd ../frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación de React:
   ```bash
   npm start
   ```

## Despliegue en Producción

### Configuración del Servidor

1. Instala Nginx y Gunicorn:
   ```bash
   sudo apt update
   sudo apt install nginx
   pip install gunicorn
   ```

2. Configura Nginx para servir la aplicación Django. Crea un archivo de configuración en `/etc/nginx/sites-available/chatbot`:
   ```nginx
   server {
       listen 80;
       server_name tu_dominio.com;

       location / {
           proxy_pass http://127.0.0.1:8000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }

       location /static/ {
           alias /ruta/a/tu/proyecto/static/;
       }

       location /media/ {
           alias /ruta/a/tu/proyecto/media/;
       }
   }
   ```

3. Habilita la configuración y reinicia Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/chatbot /etc/nginx/sites-enabled
   sudo systemctl restart nginx
   ```

4. Inicia Gunicorn para servir la aplicación Django:
   ```bash
   gunicorn --workers 3 --bind 127.0.0.1:8000 chatbot_de_asistencia_de_registro.wsgi:application
   ```

### Despliegue con Docker (Opcional)

1. Crea un archivo `Dockerfile` en el directorio raíz del proyecto:
   ```dockerfile
   # Backend
   FROM python:3.8-slim

   WORKDIR /app

   COPY backend/requirements.txt .
   RUN pip install -r requirements.txt

   COPY backend/ .

   CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8000", "chatbot_de_asistencia_de_registro.wsgi:application"]

   # Frontend
   FROM node:14 as build

   WORKDIR /app

   COPY frontend/package.json frontend/package-lock.json ./
   RUN npm install

   COPY frontend/ .
   RUN npm run build

   # Nginx
   FROM nginx:alpine

   COPY --from=build /app/build /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/nginx.conf
   ```

2. Crea un archivo `docker-compose.yml` en el directorio raíz del proyecto:
   ```yaml
   version: '3.8'

   services:
     web:
       build: .
       ports:
         - "8000:8000"
       environment:
         - DB_CONNECTION=postgresql
         - DB_HOST=db
         - DB_PORT=5432
         - DB_DATABASE=nombre_de_la_base_de_datos
         - DB_USERNAME=tu_usuario
         - DB_PASSWORD=tu_contraseña
       depends_on:
         - db

     db:
       image: postgres
       environment:
         POSTGRES_DB: nombre_de_la_base_de_datos
         POSTGRES_USER: tu_usuario
         POSTGRES_PASSWORD: tu_contraseña
       volumes:
         - postgres_data:/var/lib/postgresql/data/

   volumes:
     postgres_data:
   ```

3. Construye y levanta los contenedores:
   ```bash
   docker-compose up --build
   ```

## Uso

1. Accede a la aplicación en tu navegador:
   ```
   http://localhost:8000
   ```

2. Utiliza las funcionalidades del chatbot para gestionar usuarios, eventos y notificaciones.
