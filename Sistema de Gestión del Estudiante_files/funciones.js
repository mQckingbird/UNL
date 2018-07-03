// Valida un rango de fechas
function doDateCheck(dDesde,mDesde,aDesde,dHasta,mHasta,aHasta,foco,mensaje) {
  	if (new Date(aDesde,(mDesde-1),dDesde) <= new Date(aHasta,(mHasta-1),dHasta)) {
    	return true; 
  	} else {
       	alert(mensaje);
       	foco.focus();
	    foco.select();        	
       	return false;
  	}
} // Fin funci�n

//function checkdate(objDay,objMonth,objYear) {
//  var datefield = objDay;
//  var dataDate = objDay+"-"+objMonth+"-"+objYear;
//  if (dataDate == "--") {
//    return true;
//  } else {
//    if (chkdate(dataDate) == false) {
//      return false;
//    }else {
//      return true;
//    }
//  }
//}


// Elimina espacios en blanco del principio y fin del string
/* tambien elimina los saltos de l�nea \n */
function trim2(cadena) {
	return cadena.replace(/^\s+|\s+$/g, "");
}

function trim(strval){
  	var i = 0;
  	var valret = strval;
  	var find1 = false;
  	var find2 = false;

	// Elimino blancos de adelante
  	for (i = 0; i < valret.length; i++) {
		if (valret.substring(i,i+1) != " " && valret.charCodeAt(i) != 13 && valret.charCodeAt(i) != 32) { 
			valret = valret.substring(i,valret.length);
			i = valret.length;
			find1 = true;
		}
  	}
  	
	// Elimino blancos de atras
	for (i = valret.length; i > 0 ; i--) {
		if (valret.substring(i - 1,i) != " " && valret.charCodeAt(i) != 13) {
	   		valret = valret.substring(0,i);
	   		i = 0;
	   		find2 = true;
		}
  	}
  	if (find1 || find2) return valret;
  	else return ""; 
}


// Elimina caracteres (') o (") del string - lo utilizo para el pasaje de par�metros a una ventana madre
function parser(strval){
  	var i = 0;
  	var valret = strval;

	// Elimino la comilla simple y la reemplazo
  	for (i = 0; i < valret.length; i++) {
			if (valret.substring(i,i+1) != "'") { 
	   			valret = valret.substring(0,i) + "&#39" + valret.substring(i+1,valret.length);
	   			i = valret.length;
			}
  	}
	return valret;
}



// FUNCIONES SOBRE OBJETOS SELECT - COMBOS ---------------------------------------------------------
// Selecciona todos los elementos de una lista
function selectList(sourceList) {
  for(var i = 0; i < sourceList.options.length; i++) {
    if (sourceList.options[i] != null)
      sourceList.options[i].selected = true;
  } 
  return true;
}

// deselecciona todos los elementos de una lista
function deSelectList(sourceList) {
  for(var i = 0; i < sourceList.options.length; i++) {
    if (sourceList.options[i] != null)
      sourceList.options[i].selected = false;
  } 
  return true;
}


// Borra la seleccion de todos los elementos de una lista
function delselectList(sourceList) {
  for(var i = 0; i < sourceList.options.length; i++) {
    if (sourceList.options[i] != null)
      sourceList.options[i].selected = false;
  } 
  return true;
}


// Elimina todos los elementos de una lista
function clearList(Lista) {
  for(var count = Lista.options.length - 1; count >= 0; count--) {
    Lista.options[count] = null;
  }
}


// Borra los elementos seleccionados de una lista. Si se pasa como par�metro
// que la lista tiene default (withdef = "1") no se eliminan aquellos elementos
// que se hayan cargado por default
function deleteSelectedItemsFromList(sourceList,withdef) {
  var maxCnt = sourceList.options.length;
  for(var i = maxCnt - 1; i >= 0; i--) {
    if ((sourceList.options[i] != null) && (sourceList.options[i].selected == true)) {
      if (withdef == ""){
        sourceList.options[i] = null;
      } else if (sourceList.options[i].value.substring(0,1) != withdef) {
        sourceList.options[i] = null;
      }
    }
  }
}


//Devuelve el valor seleccionado de una lista
function getListValue(lista) {
  var returnvalue = "";
  //alert(lista.value + " - " + lista.name);
  if(lista.options.length != null){
        for(var i = 0; i < lista.options.length; i++) {
        if (lista.options[i] != null && lista.options[i].selected){
            returnvalue = lista.options[i].value;
            i = lista.options.length;
            }
        }
  }
  return returnvalue;
}


//Setea el valor a una lista de una lista
function putListValue(lista,valor) {
  for(var i = 0; i < lista.options.length; i++) {
    if (lista.options[i] != null && lista.options[i].value == valor){
      lista.options[i].selected = true;
      i = lista.options.length;
    }
  }
}


//agrega elementos de la ventana hija a una lista de la ventana madre(juan)
function addToParentList(sourceList,destinationList) {
    j = destinationList.options.length;
    for(var i = 0; i < sourceList.options.length; i++) {
        
        if (sourceList.options[i] != null && sourceList.options[i]) {   //si agrego .selected me agrega solo aquellos que esten seleccionados es decir pintados  
            //este for controla que el elemento a agregar no se encuentre en la lista destino
            find = 0;
            for(var k = 0; k < j; k++) {
                if (destinationList.options[k].value == sourceList.options[i].value) {
                    find=1;
                    k = j;
                }
            }
            if(find == 0) {           
                destinationList.options[j] = new Option(sourceList.options[i].text, sourceList.options[i].value);
                j++;
            }   
        }
    }
}


//agrega elementos seleccionados en la ventana hija a una lista de la ventana madre(juan)
function addToParentList2(sourceList,destinationList) {
    j = destinationList.options.length;
    for(var i = 0; i < sourceList.options.length; i++) {
        
        if (sourceList.options[i] != null && sourceList.options[i].selected) {
            //este for controla que el elemento a agregar no se encuentre en la lista destino
            find = 0;
            for(var k = 0; k < j; k++) {
                if (destinationList.options[k].value == sourceList.options[i].value) {
                    find=1;
                    k = j;
                }
            }
            if(find == 0) {           
                destinationList.options[j] = new Option(sourceList.options[i].text, sourceList.options[i].value);
                j++;
            }   
        }
    }
}


// Elimina los elementos seleccionados de una lista//ESTA ES MIA(juan)
function clearSelectedElement(sourceList) {
  var maxCnt = sourceList.options.length;
  for(var i = maxCnt - 1; i >= 0; i--) {
    if ((sourceList.options[i] != null) && (sourceList.options[i].selected == true)) {
        sourceList.options[i] = null;
    }
  }
}



// -------------------------------------------------------------------------------------------------
// Abrir una ventana tipo popup con los handler de b�squeda
function small_window(myurl,name,width,height) {
	var newWindow;
	var props = "scrollBars=yes,resizable=yes,toolbar=no,menubar=no,location=no,directories=no,";
	props = props + "width="+width+",height="+height+",top=30,left=40";
	newWindow = window.open(myurl, name, props);
}


// Abrir una ventana tipo popup no sizable
function small_window2(myurl,name,width,height) {
	var newWindow;
	var props = "scrollBars=no,resizable=no,toolbar=no,menubar=no,location=no,directories=no,";
	props = props + "width="+width+",height="+height+",top=30,left=40";
	newWindow = window.open(myurl, name, props);
}


// -------------------------------------------------------------------------------------------------
function entrar(src,color_entrada){
	src.bgColor=color_entrada;
	src.style.cursor='hand';
}

function sortir(src,color_default){
	src.bgColor=color_default;
	src.style.cursor='default';
}


// -------------------------------------------------------------------------------------------------
// Agrega valores a una lista de la ventana madre
function addToParentListValue(Value,Descript,destinationList,cleardest) {
	//alert(Descript);
	// Se limpia la lista de destino si as� se pide
	if (cleardest == 1) {
		for(var count = destinationList.options.length - 1; count >= 0; count--) {
			destinationList.options[count] = null;
		}
	}
	j = destinationList.options.length;
	var find = 0;

	// Se controla que el elemento a agregar no se encuentre aun en la lista de destino
	for (var k = 0; k < j; k++){
		if (destinationList.options[k].value == Value) {
			find = 1;
			k = j;
		}
	}
	if (find == 0) {
		destinationList.options[j] = new Option(Descript,Value);
		//destinationList.options[j].selected = true;
		j++;
	}

    // Se elimina el elemento con value vacio
    if (destinationList.options.length > 1) {
        for(var count = destinationList.options.length - 1; count >= 0; count--) {
            val = destinationList.options[count].value;
            if (val.substring(0,2) == "")
                destinationList.options[count] = null;
        }
    }
}

// Agrega valores a un text de la ventana madre //juan 24_11_04
function addToParentTextValue(Descript,destinationText) {        
    destinationText.value = Descript;
}

//Mueve elementos de una lista a otra
function move_item(from, to) {
	var f;
  	var SI; /* selected Index */
  	if(from.options.length>0) {
    	for(i=0;i<from.length;i++) {
      		if(from.options[i].selected) {
		        SI=from.selectedIndex;
		        f=from.options[SI].index;
		        to.options[to.length]=new Option(from.options[SI].text,from.options[SI].value);
		        from.options[f]=null;
		        i--; /* make the loop go through them all */
      		}
    	}
  	}
}

//Pasa un String a mayusculas
function Upper(oControl) {
	oControl.value = oControl.value.toUpperCase();
}

//------esto lo agrego Juan MG ---19-11-2004-----------------------------------------------------
//func. seleccionar una fila del listado (usa las var destino y parametros del jsp que las llama)
function mOvr(src){
    src.style.cursor = 'hand';
    if (src.className=='tabla3d') {
        src.className='tabla3d-ov';
    }   
}   

function mOut(src){
    src.style.cursor = 'default';
    if (src.className=='tabla3d-ov') {
        src.className='tabla3d';
    }
}

function mClk(ID){
    if (destino.indexOf("?")>0) {
        openURL= destino + '&' + parametros + '&id=' + ID;
    }else{
        openURL= destino + '?' + parametros + '&id=' + ID;
    }
    window.open(openURL, "_self");
}

//utilizado por Lourdes
function mClik(URL) 
  {
//       alert(URL);
   window.open(URL, "_self");
  }
// End Function



//funcion que pide confirmar para eliminar, se pasa el mensaje desde el jsp
function confirmadel() {
    eliminar = confirm(mensajedel);
    if (eliminar){
        return true;
    }
    return false;
}

// ---------------------------------------------------------------------
// funciones sobre fechas
function fecha() {
	tiempo=new Date();
	semana=tiempo.getDay();
	if (semana==0) semana="Domingo";
	else if (semana==1) semana="Lunes";
	else if (semana==2) semana="Martes";
	else if (semana==3) semana="Mi�rcoles";
	else if (semana==4) semana="Jueves";
	else if (semana==5) semana="Viernes";
	else if (semana==6) semana="S�bado";
	dia=tiempo.getDate();
	mes=tiempo.getMonth();
	if (mes==0) mes="Enero"
	else if (mes==1) mes="Febrero"
	else if (mes==2) mes="Marzo"
	else if (mes==3) mes="Abril"
	else if (mes==4) mes="Mayo"
	else if (mes==5) mes="Junio"
	else if (mes==6) mes="Julio"
	else if (mes==7) mes="Agosto"
	else if (mes==8) mes="Septiembre"
	else if (mes==9) mes="Octubre"
	else if (mes==10) mes="Noviembre"
	else if(mes==11) mes="Diciembre";
	ano=tiempo.getFullYear();
	document.write(semana + ", " + dia + " de " + mes + " de " + ano);
}

function fecha_corta() {
	tiempo=new Date();
	semana=tiempo.getDay();
	dia=tiempo.getDate();
	mes=tiempo.getMonth()+1;
	ano=tiempo.getFullYear();
	return dia + "/" + mes + "/" + ano;
}


function notaDetalle(nota){
	switch (nota) {
	case "1":
		detalle = "Uno";
		break;
	case "2":
		detalle = "Dos";
		break;
	case "3":
		detalle = "Tres";
		break;
	case "4":
		detalle = "Cuatro";
		break;
	case "5":
		detalle = "Cinco";
		break;
	case "6":
		detalle = "Seis";
		break;
	case "7":
		detalle = "Siete";
		break;
	case "8":
		detalle = "Ocho";
		break;
	case "9":
		detalle = "Nueve";
		break;
	case "10":
		detalle = "Diez";
		break;

	default:
		detalle = "";
		break;
	}
	return detalle;
}

function notaConcepto(nota){
	switch (nota) {
	case "1":
		detalle = "Aplazado";
		break;
	case "2":
		detalle = "Aplazado";
		break;
	case "3":
		detalle = "Aplazado";
		break;
	case "4":
		detalle = "Aplazado";
		break;
	case "5":
		detalle = "Aplazado";
		break;
	case "6":
		detalle = "Aprobado";
		break;
	case "7":
		detalle = "Bueno";
		break;
	case "8":
		detalle = "Muy Bueno";
		break;
	case "9":
		detalle = "Distinguido";
		break;
	case "10":
		detalle = "Sobresaliente";
		break;
	default:
		detalle = "";
		break;
	}
	
	return detalle;
}

/*
 * @param mensaje: Mensaje a mostrar
 * @param tipo: Tipo de mensaje. 1:Exito, 2:Error, Defecto: alerta
 * @param mostrarEn: Selector donde mostrar el mensaje.
 * 					 Si no se le pasa valor, entonces por defecto se muestra
 * 					 en la plantilla default.
 * @param scrollTo: Numero hacia donde hace el scroll luego de mostrar el mensaje.
 * 					Si no se asigna nada, entonces hace scroll a top
 */
function alerta(mensaje,tipo, mostrarEn, scrollTo){
	var bloqueMostrarMensaje = mostrarEn || '#mensajes-alertas'
	estilo="warning";
	if (tipo==1) estilo="success";
	if (tipo==2) estilo="danger";
	var html='<div class="alert alert-'+estilo+' fade in">'+
				'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
				'  <span aria-hidden="true">&times;</span>'+
				'</button>'+
				mensaje+
			  '</div>';
	
	if(scrollTo){
		ir_a_div(scrollTo);
	}else{
		ir_a_top();
	}
	
	$(bloqueMostrarMensaje).html(html);
}

function ir_a_div(destino,velocidad){
    if (velocidad === undefined) velocidad = 1000;
	$("html, body").animate({ scrollTop: $(destino).offset().top }, velocidad);
}

/*
 * @param salto: Valor (int) para hacer el salto
 * @param velocidad: velocidad con que se mueve hacia el salto especificado
 */
function ir_a_salto(salto,velocidad){
    if (velocidad === undefined) velocidad = 1000;
	$("html, body").animate({ scrollTop: salto }, velocidad);
}

function ir_a_top(velocidad, idToScroll){
	idBloqueScroll = 0 || idToScroll;
    if (velocidad === undefined) velocidad = 1000;
	$('html, body').animate({scrollTop : 0},1000);
}


/**
 * Actualiza el Select de provincias via AJAX.
 * IMPORTANTE: Se require jQuery y bootstrap-select (http://silviomoreto.github.io/bootstrap-select/)
 * 
 * @param selectorPais: Se usa para obtener el pais del cual se van obtener
 * 						las provincias
 * @param selectorProvincia: Se usa para rellenar el select con las provincias obtenidas
 * @param selectorLocalidad: Se usa para resetear el selector de localidades si se pasa el parametro.
 * @param selectorEscuelaSecundaria: Se usa para resetear el selector de Escuelas Secundarias si se pasa el parametro.
 */
function actualizarProvincias(selectorPais, selectorProvincia, selectorLocalidad, selectorEscuelaSecundaria){
	
	var idPais = $(selectorPais).val();
	$.ajax({
		method: "POST",
		url: "Controlador?hand=unl.presencial.combo.Combo&tipoCombo=provinciasPorPais",
		data: {id_pais: idPais},
		success: function(response){
				console.log(selectorEscuelaSecundaria);
				if(selectorEscuelaSecundaria !== undefined){
					$(selectorEscuelaSecundaria).empty();
					$(selectorEscuelaSecundaria).append("<option value >--Seleccione Escuela Secundaria--</option>");
					$(selectorEscuelaSecundaria).prop("disabled", true);
					$(selectorEscuelaSecundaria).selectpicker('refresh');
				}
			
				if(selectorLocalidad !== undefined){
					$(selectorLocalidad).empty();
					$(selectorLocalidad).append("<option value >-->Seleccione Localidad<--</option>");
					$(selectorLocalidad).selectpicker('refresh');
				}
				
				$(selectorProvincia).empty();
				$(selectorProvincia).append(response);
				$(selectorProvincia).selectpicker('refresh');
			}
	
	});
}

/**
 * Actualiza el Select de localidades via AJAX.
 * IMPORTANTE: Se require jQuery y bootstrap-select (http://silviomoreto.github.io/bootstrap-select/)
 * 
 * @param selectorProvincia: Se usa para obtener la provincia de la cual se van a obtener
 * 						las localidades
 * @param selectorLocalidad: Se usa para resetear el selector de localidades
 * @param selectorEscuelaSecundaria: Se usa para resetear el selector de Escuelas Secundarias si se pasa el parametro. 
 */
function actualizarLocalidades(selectorProvincia, selectorLocalidad, selectorEscuelaSecundaria){
	var idProvincia = $(selectorProvincia).val();
	
	$.ajax({
		method: "POST",
		url: "Controlador?hand=unl.presencial.combo.Combo&tipoCombo=localidadesPorProvincia",
		data: {id_provincia: idProvincia},
		success: function(response){
				
				if(selectorEscuelaSecundaria !== undefined){
					$(selectorEscuelaSecundaria).empty();
					$(selectorEscuelaSecundaria).append("<option value >--Seleccione Escuela Secundaria--</option>");
					$(selectorEscuelaSecundaria).prop("disabled", true);
					$(selectorEscuelaSecundaria).selectpicker('refresh');
				}
			
				$(selectorLocalidad).empty();
				$(selectorLocalidad).append(response);
				$(selectorLocalidad).selectpicker('refresh');
			}
	
	});
}


/**
 * Actualiza el Select de localidades via AJAX.
 * IMPORTANTE: Se require jQuery y bootstrap-select (http://silviomoreto.github.io/bootstrap-select/)
 * 
 * @param selectorProvincia: Se usa para obtener la provincia de la cual se van a obtener
 * 						las localidades
 * @param selectorLocalidad: Se usa para resetear el selector de localidades
 * @param selectorEscuelaSecundaria: Se usa para resetear el selector de Escuelas Secundarias si se pasa el parametro. 
 */
function actualizarLocalidadesEscuela(selectorProvincia, selectorLocalidad, selectorEscuelaSecundaria){
	var idProvincia = $(selectorProvincia).val();
	
	$.ajax({
		method: "POST",
		url: "Controlador?hand=unl.presencial.combo.Combo&tipoCombo=localidadesPorProvinciaEscuela",
		data: {id_provincia: idProvincia},
		success: function(response){
				
				if(selectorEscuelaSecundaria !== undefined){
					$(selectorEscuelaSecundaria).empty();
					$(selectorEscuelaSecundaria).append("<option value >--Seleccione Escuela Secundaria--</option>");
					$(selectorEscuelaSecundaria).prop("disabled", true);
					$(selectorEscuelaSecundaria).selectpicker('refresh');
				}
			
				$(selectorLocalidad).empty();
				$(selectorLocalidad).append(response);
				$(selectorLocalidad).selectpicker('refresh');
			}
	
	});
}



/**
 * Actualiza el Select de localidades via AJAX.
 * IMPORTANTE: Se require jQuery y bootstrap-select (http://silviomoreto.github.io/bootstrap-select/)
 * 
 * @param selectorProvincia: Se usa para obtener la provincia de la cual se van a obtener
 * 						las localidades
 * @param selectorLocalidad: Se usa para resetear el selector de localidades
 */
function actualizarEscuelasSecundarias(selectorLocalidad, selectorEscuelaSecundaria){
	var idLocalidad = $(selectorLocalidad).val();
	
	$.ajax({
		method: "POST",
		url: "Controlador?hand=unl.presencial.combo.Combo&tipoCombo=secundariasPorLocalidad",
		data: {id_localidad: idLocalidad},
		success: function(response){
			
			$(selectorEscuelaSecundaria).empty();
			$(selectorEscuelaSecundaria).append(response);
			$(selectorEscuelaSecundaria).prop("disabled", false);
			$(selectorEscuelaSecundaria).selectpicker('refresh');
		}
		
	});
}

function showModal(data, nombre_modal,tipo){
	modaltype="";
	if (tipo==1){
		modaltype="modal-lg";
	}
	$.ajax({
		type: "GET",
		url: data,
		data: '',
		success:function(dat){
			
					
			div_modal="<div class='modal fade' id='miModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"+
					  "  <div class='modal-dialog "+modaltype+"'>"+
					  "    <div class='modal-content'>"+
					  "      <div class='modal-header'>"+
				      "        <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"+
				      "        <h4 class='modal-title' id='myModalLabel'></h4>"+
				      "      </div>"+
				      "    	 <div  class='modal-body'>"+
				      "  	 </div>"+
				     // "      <div class='modal-footer'>"+
				     // "        <button type='button' id='boton_selec' class='btn btn-default' onClick='javascript:addSelectedItemsToParent();'>Seleccionar</button>"+
				     // "        <button type='button' id='boton_cerrar' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
				     // "      </div>"+
				      "	   </div>"+
				      "  </div>"+
				      "</div>";

				$('#divmodal').html(div_modal);
			
			$('#miModal .modal-title').html(nombre_modal);			
			$('#miModal .modal-body').html(dat);
			//$('#miModal .modal-body td.td_botones').remove();
			$('#miModal .modal-body input[type="text"], #miModal .modal-body select').on('keypress', function(e){
				 var code = e.keyCode || e.which;
				 if(code == 13) { 
					 e.preventDefault();
					 $('#miModal .modal-body .botonera input[type="button"]').trigger('click');
				 }				
			});
			$('#miModal').modal('show');
	
		}
	});
}

/**
 * Habilita o deshabilita selector (input) a partir del parametro habilito
 * 
 * @param selector
 * @param habilito
 * @returns
 */
function habilitarDeshabilitarInput(selector, habilito){
	if(habilito){
		$(selector).attr('required', true);
		$(selector).attr('disabled', false);
		$(selector).removeClass('disabled');
		
	}else{
		$(selector).val('');
		$(selector).attr('required', false);
		$(selector).attr('disabled', true);
		$(selector).addClass('disabled');
		
	}
	
	$(selector).validator(validacionesCustom);
}


function escapar_comillas(str) {
	  
	 if ((str===null) || (str===''))
	       return false;
	 else
	   str = str.toString();
	  
	  var map = {
		'"': '\"',
		"'": '\''
	  };

	  return str.replace(/["']/g, function(m) { return map[m]; });
}
