create table usuarios (
    id_usuario int primary key auto_increment,
    nombre_usuario varchar(20),
    password_usuario varchar(20)
);

create table productos (
  id_producto int primary key,
  codigo_ean varchar(25),
  nombre_producto varchar(25),
  descripcion_producto varchar(100),
  tipo varchar(15),
  marca varchar(20),
  precio decimal(5, 2),
  stock int
);

create table clientes (
  id_cliente int primary key,
  nombre varchar(25),
  apellido varchar(25),
  fecha_ingreso varchar(25),
  domicilio varchar(25),
  telefono varchar(15)
);
