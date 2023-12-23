-- TABLE
DROP TABLE IF EXISTS Empleados;
CREATE TABLE Empleados (
 Id INT IDENTITY(1,1) NOT NULL,
 GUID NVARCHAR(50) DEFAULT '',
 FechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP,
 FechaModificacion DATETIME DEFAULT CURRENT_TIMESTAMP,
 FechaEliminacion DATETIME DEFAULT NULL,
 IdUsuario INT DEFAULT 0,
 Eliminado BIT DEFAULT 0,

 Nombre NVARCHAR(255) DEFAULT '',
 Apellidos NVARCHAR(255) DEFAULT '',
 Edad INT DEFAULT 0,
 Departamento NVARCHAR(255) DEFAULT '',
 TelefonoParticular NVARCHAR(255) DEFAULT '',
 TelefonoOficina NVARCHAR(255) DEFAULT '',
 Sexo NVARCHAR(255) DEFAULT '',
 EntidadFederativa NVARCHAR(255) DEFAULT '',
 NumEmpleado NVARCHAR(255) DEFAULT '',
 Rfc NVARCHAR(255) DEFAULT '',
 PRIMARY KEY(Id)
)

-- CONSULTAS
SELECT
    NumEmpleado,
    Nombre,
    Apellidos,
    Edad,
    Rfc
FROM Empleados
WHERE EntidadFederativa = 'Monterrey'

SELECT
    NumEmpleado,
    CONCAT(Nombre, ' ', Apellidos) AS NombreCompleto,
    TelefonoParticular,
    Sexo
FROM Empleados
WHERE NumEmpleado BETWEEN 831 AND 87999

SELECT
    COUNT(*) AS Total
FROM Empleados
WHERE Sexo = 'Masculino'

INSERT INTO Empleados
(GUID, FechaCreacion, FechaModificacion, FechaEliminacion, IdUsuario, Eliminado, Nombre, Apellidos, Edad, Departamento, TelefonoParticular, TelefonoOficina, Sexo, EntidadFederativa, NumEmpleado, Rfc) VALUES
('', NULL, NULL, NULL, 0, 0, '', '', 0, '', '', '', '', '', '', '')

UPDATE Empleados SET
    Departamento = 'Compras'
WHERE NumEmpleado = 56631