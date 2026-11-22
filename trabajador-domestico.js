
/* =========================================================
   CORPORACIÓN BÁRAKA
   CURSO: TRABAJADOR DOMÉSTICO
   EVALUACIONES COMPLEMENTARIAS
   ========================================================= */

const URL_CURSO_EXTERNO = "https://capacitateparaelempleo.org/cursos/view/57";
const CLAVE_GUARDADO = "baraka_trabajador_domestico_v2";
const NOTA_MINIMA = 80;

const niveles = [
    {
        id: 1,
        titulo: "Nivel 1",
        descripcion: "Planificación del trabajo, herramientas, productos y cuidado de superficies.",
        preguntas: [
            {
                pregunta: "¿Qué se debe hacer antes de comenzar las actividades de limpieza?",
                opciones: [
                    "Iniciar por cualquier espacio sin planificación.",
                    "Identificar las tareas, organizar los materiales y planificar el trabajo.",
                    "Mezclar todos los productos disponibles.",
                    "Limpiar únicamente las zonas visibles."
                ],
                correcta: 1
            },
            {
                pregunta: "¿Por qué es importante leer las instrucciones de los productos de limpieza?",
                opciones: [
                    "Para conocer su uso, dosificación y precauciones.",
                    "Para saber cuál tiene el olor más fuerte.",
                    "Para poder mezclarlos entre sí.",
                    "Para utilizarlos en cualquier superficie."
                ],
                correcta: 0
            },
            {
                pregunta: "¿Qué se debe tener en cuenta al seleccionar un producto de limpieza?",
                opciones: [
                    "Que todos los productos sirven para cualquier superficie.",
                    "Que sea el producto más económico, sin importar su uso.",
                    "El tipo de superficie, la suciedad y las indicaciones del fabricante.",
                    "Que produzca mucha espuma."
                ],
                correcta: 2
            },
            {
                pregunta: "¿Cuál es una buena práctica al organizar los utensilios de limpieza?",
                opciones: [
                    "Dejarlos dispersos por toda la vivienda.",
                    "Guardarlos húmedos y sin revisar.",
                    "Compartir todos los utensilios sin limpiarlos.",
                    "Mantenerlos limpios, organizados y en un lugar adecuado."
                ],
                correcta: 3
            },
            {
                pregunta: "¿Qué significa prestar atención al detalle durante la limpieza?",
                opciones: [
                    "Terminar rápidamente sin revisar.",
                    "Comprobar que las tareas se realizaron correctamente y que no quedaron zonas pendientes.",
                    "Limpiar solamente los espacios grandes.",
                    "Evitar revisar el resultado."
                ],
                correcta: 1
            }
        ]
    },
    {
        id: 2,
        titulo: "Nivel 2",
        descripcion: "Limpieza y organización de espacios generales y habitaciones.",
        preguntas: [
            {
                pregunta: "¿Cuál es una práctica adecuada para retirar el polvo de una habitación?",
                opciones: [
                    "Comenzar por las superficies altas y continuar hacia las bajas.",
                    "Sacudir el polvo sobre los muebles ya limpios.",
                    "Limpiar únicamente el suelo.",
                    "Utilizar cualquier producto sobre todas las superficies."
                ],
                correcta: 0
            },
            {
                pregunta: "¿Qué se recomienda hacer antes de tender una cama?",
                opciones: [
                    "Colocar las sábanas sin retirar las anteriores.",
                    "Sacudir los elementos de la cama dentro de la habitación.",
                    "Retirar la ropa de cama usada y revisar el estado del colchón.",
                    "Aplicar productos directamente sobre las sábanas."
                ],
                correcta: 2
            },
            {
                pregunta: "¿Cómo se debe proceder para evitar volver a ensuciar un espacio limpio?",
                opciones: [
                    "Limpiar primero el suelo y después retirar el polvo de los muebles.",
                    "Organizar la limpieza de arriba hacia abajo y dejar el suelo para el final.",
                    "Utilizar el mismo paño para todas las superficies.",
                    "Mover los residuos de un lugar a otro."
                ],
                correcta: 1
            },
            {
                pregunta: "¿Qué se debe hacer al encontrar un objeto personal durante la limpieza?",
                opciones: [
                    "Desecharlo si parece innecesario.",
                    "Guardarlo sin informar a nadie.",
                    "Cambiarlo de lugar sin cuidado.",
                    "Respetarlo y colocarlo en un lugar seguro, siguiendo las indicaciones del hogar."
                ],
                correcta: 3
            },
            {
                pregunta: "¿Qué acción ayuda a comprobar que una habitación quedó correctamente organizada?",
                opciones: [
                    "Realizar una revisión final de las superficies, los elementos y el orden del espacio.",
                    "Cerrar la puerta sin revisar.",
                    "Dejar los implementos de limpieza en el suelo.",
                    "Apagar las luces sin comprobar el resultado."
                ],
                correcta: 0
            }
        ]
    },
    {
        id: 3,
        titulo: "Nivel 3",
        descripcion: "Higiene, seguridad y buenas prácticas durante las actividades domésticas.",
        preguntas: [
            {
                pregunta: "¿Cuál es una medida básica de higiene antes y después de realizar actividades de limpieza?",
                opciones: [
                    "Utilizar el mismo paño para todas las tareas.",
                    "Lavarse adecuadamente las manos.",
                    "Evitar el uso de agua.",
                    "Guardar los residuos junto a los alimentos."
                ],
                correcta: 1
            },
            {
                pregunta: "¿Por qué no se deben mezclar productos de limpieza sin indicación del fabricante?",
                opciones: [
                    "Porque todos pierden su color.",
                    "Porque se vuelven menos costosos.",
                    "Porque pueden producir reacciones peligrosas y gases tóxicos.",
                    "Porque siempre generan espuma."
                ],
                correcta: 2
            },
            {
                pregunta: "¿Qué se debe hacer si se derrama un líquido en el suelo?",
                opciones: [
                    "Ignorarlo hasta terminar todas las tareas.",
                    "Cubrirlo con una tela y continuar.",
                    "Dejarlo para que se evapore.",
                    "Señalizar o evitar el paso y limpiarlo de forma segura."
                ],
                correcta: 3
            },
            {
                pregunta: "¿Cuál es una práctica adecuada al utilizar productos químicos de limpieza?",
                opciones: [
                    "Seguir las instrucciones y utilizar los elementos de protección indicados.",
                    "Aplicarlos sin leer las etiquetas.",
                    "Trasvasarlos a envases de bebidas.",
                    "Mantenerlos al alcance de los niños."
                ],
                correcta: 0
            },
            {
                pregunta: "¿Cómo deben almacenarse los productos de limpieza?",
                opciones: [
                    "Junto a los alimentos.",
                    "En sus envases identificados, cerrados y fuera del alcance de niños y mascotas.",
                    "En botellas sin etiqueta.",
                    "En cualquier recipiente disponible."
                ],
                correcta: 1
            }
        ]
    },
    {
        id: 4,
        titulo: "Nivel 4",
        descripcion: "Organización y administración de las actividades del hogar.",
        preguntas: [
            {
                pregunta: "¿Qué permite una programación de las actividades domésticas?",
                opciones: [
                    "Realizar todas las tareas sin orden.",
                    "Evitar cualquier tipo de revisión.",
                    "Distribuir el tiempo y organizar las tareas de manera eficiente.",
                    "Dejar todas las actividades para el mismo día."
                ],
                correcta: 2
            },
            {
                pregunta: "¿Qué se debe hacer cuando se identifica que un insumo de limpieza está por agotarse?",
                opciones: [
                    "Informar oportunamente para gestionar su reposición.",
                    "Ocultar la situación.",
                    "Sustituirlo por cualquier sustancia.",
                    "Esperar hasta que no quede nada."
                ],
                correcta: 0
            },
            {
                pregunta: "¿Cuál es una buena práctica para administrar el tiempo de trabajo?",
                opciones: [
                    "Realizar las tareas sin prioridades.",
                    "Dedicar todo el tiempo a una sola actividad.",
                    "Ignorar las instrucciones del hogar.",
                    "Establecer prioridades y distribuir las tareas según su importancia."
                ],
                correcta: 3
            },
            {
                pregunta: "¿Qué se debe hacer si una tarea solicitada no puede realizarse en el tiempo previsto?",
                opciones: [
                    "No informar a nadie.",
                    "Comunicar la situación y acordar cómo continuar.",
                    "Realizarla de cualquier manera.",
                    "Abandonar todas las actividades."
                ],
                correcta: 1
            },
            {
                pregunta: "¿Por qué es importante respetar las instrucciones y acuerdos establecidos en el hogar?",
                opciones: [
                    "Porque permite trabajar sin comunicación.",
                    "Porque evita tener responsabilidades.",
                    "Porque contribuye a una prestación organizada, responsable y confiable del servicio.",
                    "Porque permite cambiar las tareas sin consultar."
                ],
                correcta: 2
            }
        ]
    }
];

/*
   NOTA SOBRE LOS CONTENIDOS:
   Las preguntas son evaluaciones complementarias elaboradas para Báraka.
   Deben contrastarse con el temario oficial de cada nivel antes de publicar
   el curso como evaluación alineada oficialmente.
*/

let estado = cargarEstado();
let nivelPendiente = null;
let nivelEvaluacionActual = null;
let preguntaActual = 0;
let respuestasActuales = [];
let ultimaCalificacion = null;

const contenedorNiveles = document.getElementById("contenedorNiveles");
const contenedorEvaluaciones = document.getElementById("contenedorEvaluaciones");

const modalEvaluacion = document.getElementById("modalEvaluacion");
const modalConfirmacion = document.getElementById("modalConfirmacion");

const formularioEvaluacion = document.getElementById("formularioEvaluacion");
const contenidoEvaluacion = document.getElementById("contenidoEvaluacion");
const resultadoEvaluacion = document.getElementById("resultadoEvaluacion");

document.getElementById("anioActual").textContent = new Date().getFullYear();

/* =========================================================
   ESTADO Y ALMACENAMIENTO
   ========================================================= */

function estadoInicial() {
    return {
        niveles: {
            1: { confirmado: false, aprobado: false, intentos: 0, mejorNota: null, ultimaNota: null },
            2: { confirmado: false, aprobado: false, intentos: 0, mejorNota: null, ultimaNota: null },
            3: { confirmado: false, aprobado: false, intentos: 0, mejorNota: null, ultimaNota: null },
            4: { confirmado: false, aprobado: false, intentos: 0, mejorNota: null, ultimaNota: null }
        }
    };
}

function cargarEstado() {
    try {
        const guardado = JSON.parse(localStorage.getItem(CLAVE_GUARDADO));

        if (!guardado || !guardado.niveles) {
            return estadoInicial();
        }

        const inicial = estadoInicial();

        for (let i = 1; i <= 4; i++) {
            inicial.niveles[i] = {
                ...inicial.niveles[i],
                ...(guardado.niveles[i] || {})
            };
        }

        return inicial;
    } catch (error) {
        console.error("No se pudo leer el progreso guardado:", error);
        return estadoInicial();
    }
}

function guardarEstado() {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(estado));
}

function obtenerNivel(id) {
    return estado.niveles[id];
}

function nivelAnteriorAprobado(id) {
    if (id === 1) return true;
    return obtenerNivel(id - 1).aprobado;
}

/* =========================================================
   RENDERIZADO DE NIVELES
   ========================================================= */

function renderizarNiveles() {
    contenedorNiveles.innerHTML = "";

    niveles.forEach(nivel => {
        const progreso = obtenerNivel(nivel.id);
        const desbloqueado = nivelAnteriorAprobado(nivel.id);

        let estadoTexto = "Bloqueado";
        let claseEstado = "estado-bloqueado";
        let textoBoton = "Nivel bloqueado";
        let deshabilitado = true;

        if (progreso.aprobado) {
            estadoTexto = "Aprobado";
            claseEstado = "estado-aprobado";
            textoBoton = "Nivel aprobado";
        } else if (progreso.confirmado) {
            estadoTexto = "Pendiente de evaluación";
            claseEstado = "estado-disponible";
            textoBoton = "Ir a mi evaluación";
            deshabilitado = false;
        } else if (desbloqueado) {
            estadoTexto = "Disponible";
            claseEstado = "estado-disponible";
            textoBoton = "Confirmar finalización";
            deshabilitado = false;
        }

        const tarjeta = document.createElement("article");
        tarjeta.className = "nivel-card";

        tarjeta.innerHTML = `
            <div class="nivel-cabecera">
                <span class="nivel-numero">${String(nivel.id).padStart(2, "0")}</span>
                <span class="estado ${claseEstado}">${estadoTexto}</span>
            </div>

            <h3>${nivel.titulo}</h3>
            <p>${nivel.descripcion}</p>

            <button
                type="button"
                class="boton ${progreso.aprobado ? "boton-secundario" : "boton-principal"}"
                data-accion-nivel="${nivel.id}"
                ${deshabilitado ? "disabled" : ""}
            >
                ${textoBoton}
            </button>
        `;

        contenedorNiveles.appendChild(tarjeta);
    });

    actualizarProgreso();
}

function actualizarProgreso() {
    const aprobados = niveles.filter(nivel => obtenerNivel(nivel.id).aprobado).length;
    const porcentaje = (aprobados / niveles.length) * 100;

    document.getElementById("textoProgreso").textContent =
        `${aprobados} de 4 niveles aprobados`;

    document.getElementById("barraProgreso").style.width = `${porcentaje}%`;
}

/* =========================================================
   RENDERIZADO DE EVALUACIONES
   ========================================================= */

function renderizarEvaluaciones() {
    contenedorEvaluaciones.innerHTML = "";

    niveles.forEach(nivel => {
        const progreso = obtenerNivel(nivel.id);
        const desbloqueado = nivelAnteriorAprobado(nivel.id);

        let estadoTexto = "Bloqueada";
        let claseEstado = "estado-bloqueado";
        let textoBoton = "Evaluación bloqueada";
        let deshabilitado = true;

        if (progreso.aprobado) {
            estadoTexto = "Aprobada";
            claseEstado = "estado-aprobado";
            textoBoton = "Ver resultado";
            deshabilitado = false;
        } else if (progreso.confirmado && desbloqueado) {
            estadoTexto = "Disponible";
            claseEstado = "estado-disponible";
            textoBoton = "Presentar evaluación";
            deshabilitado = false;
        } else if (desbloqueado) {
            estadoTexto = "Pendiente de confirmación";
            claseEstado = "estado-bloqueado";
            textoBoton = "Primero confirma tu nivel";
        }

        let detalle = "Completa y aprueba el nivel externo para habilitar esta evaluación.";

        if (progreso.aprobado) {
            detalle = `Mejor calificación: ${progreso.mejorNota} %. Intentos realizados: ${progreso.intentos}.`;
        } else if (progreso.confirmado) {
            detalle = `Intentos realizados: ${progreso.intentos}. Calificación mínima para aprobar: ${NOTA_MINIMA} %.`;
        } else if (desbloqueado) {
            detalle = "Confirma primero que terminaste y aprobaste este nivel en Capacítate para el Empleo.";
        }

        const tarjeta = document.createElement("article");
        tarjeta.className = `evaluacion-card ${progreso.aprobado ? "aprobada" : ""} ${!desbloqueado ? "bloqueada" : ""}`;

        tarjeta.innerHTML = `
            <div class="evaluacion-cabecera">
                <span class="nivel-numero">${String(nivel.id).padStart(2, "0")}</span>
                <span class="estado ${claseEstado}">${estadoTexto}</span>
            </div>

            <h3>Evaluación del nivel ${nivel.id}</h3>
            <p>${nivel.descripcion}</p>

            <p class="evaluacion-detalle">
                5 preguntas · Aprobación mínima: ${NOTA_MINIMA} %
            </p>

            <div class="evaluacion-estado">
                <p>${detalle}</p>
                <button
                    type="button"
                    class="boton ${progreso.aprobado ? "boton-secundario" : "boton-principal"}"
                    data-accion-evaluacion="${nivel.id}"
                    ${deshabilitado ? "disabled" : ""}
                >
                    ${textoBoton}
                </button>
            </div>
        `;

        contenedorEvaluaciones.appendChild(tarjeta);
    });
}

/* =========================================================
   CONFIRMACIÓN DE FINALIZACIÓN EXTERNA
   ========================================================= */

function abrirConfirmacion(id) {
    nivelPendiente = id;
    modalConfirmacion.classList.add("activo");
    modalConfirmacion.setAttribute("aria-hidden", "false");
}

function cerrarConfirmacion() {
    modalConfirmacion.classList.remove("activo");
    modalConfirmacion.setAttribute("aria-hidden", "true");
    nivelPendiente = null;
}

document.getElementById("aceptarConfirmacion").addEventListener("click", () => {
    if (!nivelPendiente) return;

    const progreso = obtenerNivel(nivelPendiente);

    progreso.confirmado = true;
    guardarEstado();

    const idConfirmado = nivelPendiente;

    cerrarConfirmacion();
    renderizarNiveles();
    renderizarEvaluaciones();

    abrirEvaluacion(idConfirmado);
});

document.getElementById("cancelarConfirmacion").addEventListener("click", cerrarConfirmacion);
document.getElementById("cerrarConfirmacion").addEventListener("click", cerrarConfirmacion);

/* =========================================================
   ABRIR Y CERRAR EVALUACIONES
   ========================================================= */

function abrirEvaluacion(id) {
    const progreso = obtenerNivel(id);

    if (!progreso.confirmado || !nivelAnteriorAprobado(id)) {
        return;
    }

    if (progreso.aprobado) {
        mostrarResultadoAnterior(id);
        return;
    }

    nivelEvaluacionActual = id;
    preguntaActual = 0;
    respuestasActuales = new Array(niveles[id - 1].preguntas.length).fill(null);

    contenidoEvaluacion.classList.remove("oculto");
    resultadoEvaluacion.classList.add("oculto");

    document.getElementById("tituloEvaluacion").textContent =
        `Evaluación del nivel ${id}`;

    document.getElementById("descripcionEvaluacion").textContent =
        "Responde las cinco preguntas. Selecciona una sola respuesta por pregunta.";

    mostrarPregunta();

    modalEvaluacion.classList.add("activo");
    modalEvaluacion.setAttribute("aria-hidden", "false");
}

function cerrarEvaluacion() {
    modalEvaluacion.classList.remove("activo");
    modalEvaluacion.setAttribute("aria-hidden", "true");
}

document.getElementById("cerrarModal").addEventListener("click", cerrarEvaluacion);

/* =========================================================
   MOSTRAR PREGUNTAS
   ========================================================= */

function mostrarPregunta() {
    const nivel = niveles[nivelEvaluacionActual - 1];
    const pregunta = nivel.preguntas[preguntaActual];

    const contenedor = document.getElementById("preguntasEvaluacion");
    const porcentaje = ((preguntaActual + 1) / nivel.preguntas.length) * 100;

    document.getElementById("contadorPregunta").textContent =
        `Pregunta ${preguntaActual + 1} de ${nivel.preguntas.length}`;

    document.getElementById("progresoPreguntas").style.width = `${porcentaje}%`;

    contenedor.innerHTML = `
        <div class="pregunta">
            <h3>${preguntaActual + 1}. ${pregunta.pregunta}</h3>

            ${pregunta.opciones.map((opcion, indice) => `
                <label class="opcion ${respuestasActuales[preguntaActual] === indice ? "seleccionada" : ""}">
                    <input
                        type="radio"
                        name="respuesta"
                        value="${indice}"
                        ${respuestasActuales[preguntaActual] === indice ? "checked" : ""}
                    >
                    <span>${opcion}</span>
                </label>
            `).join("")}
        </div>
    `;

    const anterior = document.getElementById("preguntaAnterior");
    const siguiente = document.getElementById("preguntaSiguiente");
    const finalizar = document.getElementById("enviarEvaluacion");

    anterior.disabled = preguntaActual === 0;

    siguiente.classList.toggle(
        "oculto",
        preguntaActual === nivel.preguntas.length - 1
    );

    finalizar.classList.toggle(
        "oculto",
        preguntaActual !== nivel.preguntas.length - 1
    );
}

document.getElementById("preguntasEvaluacion").addEventListener("change", event => {
    if (event.target.name !== "respuesta") return;

    respuestasActuales[preguntaActual] = Number(event.target.value);

    document.querySelectorAll(".opcion").forEach(opcion => {
        opcion.classList.remove("seleccionada");
    });

    event.target.closest(".opcion").classList.add("seleccionada");
});

document.getElementById("preguntaAnterior").addEventListener("click", () => {
    if (preguntaActual > 0) {
        preguntaActual--;
        mostrarPregunta();
    }
});

document.getElementById("preguntaSiguiente").addEventListener("click", () => {
    if (respuestasActuales[preguntaActual] === null) {
        alert("Selecciona una respuesta antes de continuar.");
        return;
    }

    const total = niveles[nivelEvaluacionActual - 1].preguntas.length;

    if (preguntaActual < total - 1) {
        preguntaActual++;
        mostrarPregunta();
    }
});

/* =========================================================
   CALIFICAR EVALUACIÓN
   ========================================================= */

formularioEvaluacion.addEventListener("submit", event => {
    event.preventDefault();

    if (respuestasActuales.some(respuesta => respuesta === null)) {
        alert("Debes responder todas las preguntas antes de finalizar.");
        return;
    }

    const nivel = niveles[nivelEvaluacionActual - 1];

    let respuestasCorrectas = 0;

    nivel.preguntas.forEach((pregunta, indice) => {
        if (respuestasActuales[indice] === pregunta.correcta) {
            respuestasCorrectas++;
        }
    });

    const calificacion = Math.round(
        (respuestasCorrectas / nivel.preguntas.length) * 100
    );

    const aprobado = calificacion >= NOTA_MINIMA;
    const progreso = obtenerNivel(nivelEvaluacionActual);

    progreso.intentos++;
    progreso.ultimaNota = calificacion;

    if (progreso.mejorNota === null || calificacion > progreso.mejorNota) {
        progreso.mejorNota = calificacion;
    }

    if (aprobado) {
        progreso.aprobado = true;
    }

    guardarEstado();

    ultimaCalificacion = {
        nivel: nivelEvaluacionActual,
        calificacion,
        aprobado,
        respuestasCorrectas,
        total: nivel.preguntas.length
    };

    mostrarResultado(ultimaCalificacion);
    renderizarNiveles();
    renderizarEvaluaciones();
});

function mostrarResultado(resultado) {
    contenidoEvaluacion.classList.add("oculto");
    resultadoEvaluacion.classList.remove("oculto");

    const progreso = obtenerNivel(resultado.nivel);

    if (resultado.aprobado) {
        resultadoEvaluacion.innerHTML = `
            <div class="resultado-icono">🏅</div>
            <span class="etiqueta etiqueta-verde">EVALUACIÓN APROBADA</span>
            <h2>¡Excelente trabajo!</h2>
            <div class="resultado-calificacion">${resultado.calificacion} %</div>
            <p>
                Respondiste correctamente ${resultado.respuestasCorrectas}
                de ${resultado.total} preguntas.
            </p>
            <p>
                Has aprobado la evaluación del nivel ${resultado.nivel}.
                ${resultado.nivel < 4
                    ? "Ya puedes continuar con el siguiente nivel."
                    : "Has completado las cuatro evaluaciones complementarias de Báraka."}
            </p>
            <button type="button" class="boton boton-principal" id="botonCerrarResultado">
                Continuar
            </button>
        `;
    } else {
        resultadoEvaluacion.innerHTML = `
            <div class="resultado-icono">📚</div>
            <span class="etiqueta etiqueta-rosa">EVALUACIÓN NO APROBADA</span>
            <h2>Sigue aprendiendo</h2>
            <div class="resultado-calificacion">${resultado.calificacion} %</div>
            <p>
                Respondiste correctamente ${resultado.respuestasCorrectas}
                de ${resultado.total} preguntas.
            </p>
            <p>
                Necesitas obtener al menos ${NOTA_MINIMA} % para aprobar.
                Puedes revisar los contenidos y volver a intentarlo.
            </p>
            <p>Intentos realizados: ${progreso.intentos}</p>
            <button type="button" class="boton boton-principal" id="botonReintentar">
                Volver a presentar
            </button>
            <button type="button" class="boton boton-secundario" id="botonCerrarResultado">
                Cerrar
            </button>
        `;
    }

    document.getElementById("botonCerrarResultado").addEventListener("click", cerrarEvaluacion);

    const botonReintentar = document.getElementById("botonReintentar");

    if (botonReintentar) {
        botonReintentar.addEventListener("click", () => {
            abrirEvaluacion(resultado.nivel);
        });
    }
}

/* =========================================================
   CONSULTAR RESULTADO DE UNA EVALUACIÓN APROBADA
   ========================================================= */

function mostrarResultadoAnterior(id) {
    const progreso = obtenerNivel(id);

    contenidoEvaluacion.classList.add("oculto");
    resultadoEvaluacion.classList.remove("oculto");

    resultadoEvaluacion.innerHTML = `
        <div class="resultado-icono">🏅</div>
        <span class="etiqueta etiqueta-verde">NIVEL APROBADO</span>
        <h2>Evaluación del nivel ${id}</h2>
        <div class="resultado-calificacion">${progreso.mejorNota} %</div>
        <p>Tu mejor calificación registrada en esta evaluación.</p>
        <p>Intentos realizados: ${progreso.intentos}</p>
        <button type="button" class="boton boton-principal" id="botonCerrarResultado">
            Cerrar
        </button>
    `;

    document.getElementById("botonCerrarResultado").addEventListener("click", cerrarEvaluacion);

    modalEvaluacion.classList.add("activo");
    modalEvaluacion.setAttribute("aria-hidden", "false");
}

/* =========================================================
   EVENTOS DE LAS TARJETAS
   ========================================================= */

contenedorNiveles.addEventListener("click", event => {
    const boton = event.target.closest("[data-accion-nivel]");

    if (!boton || boton.disabled) return;

    const id = Number(boton.dataset.accionNivel);
    const progreso = obtenerNivel(id);

    if (progreso.aprobado) return;

    if (progreso.confirmado) {
        abrirEvaluacion(id);
    } else {
        abrirConfirmacion(id);
    }
});

contenedorEvaluaciones.addEventListener("click", event => {
    const boton = event.target.closest("[data-accion-evaluacion]");

    if (!boton || boton.disabled) return;

    const id = Number(boton.dataset.accionEvaluacion);
    abrirEvaluacion(id);
});

/* =========================================================
   CERRAR MODALES AL HACER CLIC EN EL FONDO
   ========================================================= */

modalEvaluacion.addEventListener("click", event => {
    if (event.target === modalEvaluacion) {
        cerrarEvaluacion();
    }
});

modalConfirmacion.addEventListener("click", event => {
    if (event.target === modalConfirmacion) {
        cerrarConfirmacion();
    }
});

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function iniciarCurso() {
    renderizarNiveles();
    renderizarEvaluaciones();
}

iniciarCurso();
