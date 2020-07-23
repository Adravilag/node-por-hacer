const argv = require('./config/yarsg').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("Crear por hacer");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("------ Por hacer ------".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("-----------------------".green);
        }
        console.log("Mostrar todas las tareas por hacer");
        break;
    case 'actualizar':
        console.log("Actualiza una tarea.");
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        console.log("Borrar una tarea.");
        porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log("Comando no reconocido");
}