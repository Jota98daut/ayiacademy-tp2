insert into usuarios (id_usuario, nombre_usuario, password_usuario) value (1, 'user', 'user');

insert into empleados (legajo, nombre_empleado, apellido_empleado, cargo, sucursal, antiguedad_anios)
values (1, 'Juan', 'Perez', 'Gerente', 'Casa Central', 5),
       (2, 'Maria', 'Gomez', 'Asistente', 'Sucursal A', 2),
       (3, 'Carlos', 'Rodriguez', 'Analista', 'Sucursal B', 3),
       (4, 'Laura', 'Martinez', 'Supervisor', 'Sucursal C', 1),
       (5, 'Diego', 'Lopez', 'Técnico', 'Sucursal A', 4),
       (6, 'Ana', 'Hernandez', 'Contador', 'Sucursal B', 2),
       (7, 'Miguel', 'Diaz', 'Asistente', 'Sucursal C', 3),
       (8, 'Sofia', 'Torres', 'Analista', 'Sucursal A', 1),
       (9, 'Pedro', 'Sanchez', 'Supervisor', 'Sucursal B', 5),
       (10, 'Lucia', 'Ramirez', 'Técnico', 'Sucursal C', 2);

insert into productos (id_producto, codigo_ean, nombre_producto, descripcion_producto, tipo, marca, precio, stock)
values (1, '1234567890123', 'Producto A', 'Descripción A', 'Electrónico', 'Marca X', 49.99, 100),
       (2, '2345678901234', 'Producto B', 'Descripción B', 'Ropa', 'Marca Y', 29.99, 50),
       (3, '3456789012345', 'Producto C', 'Descripción C', 'Hogar', 'Marca Z', 79.99, 75),
       (4, '4567890123456', 'Producto D', 'Descripción D', 'Electrodom.', 'Marca W', 149.99, 25),
       (5, '5678901234567', 'Producto E', 'Descripción E', 'Joyería', 'Marca V', 199.99, 10),
       (6, '6789012345678', 'Producto F', 'Descripción F', 'Herramientas', 'Marca U', 89.99, 50);

insert into clientes (id_cliente, nombre, apellido, fecha_ingreso, domicilio, telefono)
values (1, 'Juan', 'Perez', '2022-01-01', 'Calle A 123', '123-456-7890'),
       (2, 'Maria', 'Gomez', '2022-02-15', 'Calle B 456', '234-567-8901'),
       (3, 'Carlos', 'Rodriguez', '2022-03-20', 'Calle C 789', '345-678-9012'),
       (4, 'Laura', 'Martinez', '2022-04-10', 'Calle D 012', '456-789-0123'),
       (5, 'Diego', 'Lopez', '2022-05-22', 'Calle E 345', '567-890-1234'),
       (6, 'Ana', 'Hernandez', '2022-06-30', 'Calle F 678', '678-901-2345');

  

