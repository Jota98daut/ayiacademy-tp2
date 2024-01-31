create table usuarios (
    id_usuario int primary key auto_increment,
    nombre_usuario varchar(20),
    password_usuario varchar(20)
);

create table empleados (
    legajo int primary key,
    nombre_empleado varchar(25),
    apellido_empleado varchar(25),
    cargo varchar(15),
    sucursal varchar(20),
    antiguedad_anios int
);