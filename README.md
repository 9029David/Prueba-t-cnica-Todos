### PRUEBA TÉCNICA 

## 🧠 Funcionalidades
- Agregar tareas
- Marcar tareas como completadas
- Eliminar tareas
- Persistencia de datos en localStorage


## 🚀 Decisiones técnicas tomadas 

- Next.js
- TypeScript
- React Context
- LocalStorage
- Tailwind.CSS
- CSS global con 'globals.css'


## 📁 Explicación breve de la estructura del proyecto 

```bash
/app
    └── components
        ├── Message.component.tsx
        ├── TaskForm.component.tsx
        ├── TaskItem.component.tsx
        ├── TaskList.component.tsx
        ├── TaskSection.component.tsx
    └── context
        ├── useTask.context.tsx
    └── hook
        ├── useTask.hook.ts
    └── globals.css
    └── layout.tsx
    └── page.tsx
```


## 📦 Instrucciones para instalar y ejecutar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/9029David/Prueba-t-cnica-Todos.git

# Entrar en la carpeta
cd front

# Instalar dependencias
npm install

# Iniciar el servidor
npm run dev

```


Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

## 🎯 Cómo usarlo

Paso 1: Escribí una tarea en el formulario.

![alt text](image.png)

Paso 2: Hacé clic en el botón de agregar.

![alt text](image-1.png)

Paso 3: Usá los botones para completar o eliminar tareas.

![alt text](image-2.png)

¡Tus tareas se guardan automáticamente!  


## Mejoras que implementarías con más tiempo

1. Poder editar las tareas -> En proceso
2. Implementar persistencia de datos en localStorage -> Hecho
3. Añadir algun que otro test 
4. El modo oscuro nunca esta de mas


## 👨‍💻 Autor
David Álvarez
Estudiante de Informática y Sistemas
[LinkedIn](https://www.linkedin.com/in/9029david/) | [GitHub](https://github.com/9029David)


