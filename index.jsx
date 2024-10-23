import React from "react";
import actualizando1 from "./actualizando-1.png";
import fondoDePantalla1 from "./fondo-de-pantalla-1.png";
import notificacion1 from "./notificacion-1.png";
import relojDePared1 from "./reloj-de-pared-1.png";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <div className="text-wrapper">Configuración de Turrens</div>

            <div className="rectangle" />

            <div className="div">Busca una configuración</div>
          </div>

          <div className="group">
            <img
              className="actualizando"
              alt="Actualizando"
              src={actualizando1}
            />

            <div className="actualizar-ordenador">
              Actualizar
              <br />
              Ordenador
            </div>
          </div>

          <div className="group-2">
            <div className="cambiar-fecha-hora">
              Cambiar <br />
              Fecha / Hora
            </div>

            <img
              className="reloj-de-pared"
              alt="Reloj de pared"
              src={relojDePared1}
            />
          </div>

          <div className="group-3">
            <div className="text-wrapper-2">Cambiar Fondo</div>

            <img
              className="fondo-de-pantalla"
              alt="Fondo de pantalla"
              src={fondoDePantalla1}
            />
          </div>

          <div className="group-4">
            <div className="text-wrapper-3">Notificaciones</div>

            <img
              className="notificacion"
              alt="Notificacion"
              src={notificacion1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
