import React, { useState } from 'react';
import "./privacidad.css"

function Privacidad() {

  return (
    <>
    <div>
      <h2>Privacidad y seguridad</h2>
    </div>
    <div>
        <h3>Filtro de imágenes explícitas</h3>
    </div>
    <div>
        <div>
            <label>
                <input type="radio" name="opciones" value="opcion1"/>
                Filtrar todos los mensajes directos
            </label>
        </div>
        <div>
            <label>
                <input type="radio" name="opciones" value="opcion2"/>
                Filtrar los mensajes directos de personas que no estén en tu lista de amigos
            </label>
        </div>
        <div>
            <label>
                <input type="radio" name="opciones" value="opcion3"/>
                No filtrar mensajes directos
            </label>
        </div>
    </div>
    <div>
        <h3>Filtro de span en los MD</h3>
    </div>
    <div>
        <div>
            <label>
                <input type="radio" name="opciones" value="opcion1"/>
                Filtrar todos los mensajes directos
            </label>
        </div>
        <div>
            <label>
                <input type="radio" name="opciones" value="opcion2"/>
                Filtrar los mensajes directos de personas que no estén en tu lista de amigos
            </label>
        </div>
        <div>
            <label>
                <input type="radio" name="opciones" value="opcion3"/>
                No filtrar mensajes directos
            </label>
        </div>
    </div>
    </>
  );
}

export default Privacidad;
