// Se ejecuta siempre para determinar el navegador del Cliente
if (document.all) {
    browser="IE";   // Internet Explorer
} else if (document.layers) {
    browser="NE";   // Netscape
} else if (document.getElementById) {
    browser="NE6";   // Netscape 6+
}



// Valida todos los elementos que tengan la propiedad Requerido = SI
// Usa ademas las propiedades Dato - Tipo
// Funciones relacionadas:
function chequearRequeridos() {

    oPublicar=document.forms[0];
    for (i=0; i < oPublicar.elements.length; i++) {
        
        if (oPublicar.elements[i].getAttribute("Requerido")!= null){
            if (oPublicar.elements[i].getAttribute("Requerido") == "Si"){
                //if (!oPublicar.elements[i].readOnly && !oPublicar.elements[i].disabled) {
                if (!oPublicar.elements[i].disabled) {
                    if (oPublicar.elements[i].value.length==0) {
                        alert("Debe ingresar el dato '" + oPublicar.elements[i].getAttribute("Dato")+ "'");
                        oPublicar.elements[i].focus();
                        if (oPublicar.elements[i].tagName!="SELECT"){
                            oPublicar.elements[i].select();                            
                        }
                        return false;
                    }
                }
            }
        }

        if (oPublicar.elements[i].value.length>0) {
            if (oPublicar.elements[i].getAttribute("Tipo") != null) {
                if (oPublicar.elements[i].getAttribute("Tipo") == "Fecha"){
                    if (!checkdate(oPublicar.elements[i].value)) {
                        alert('Fecha inv�lida, vualva a ingresarla');
                        oPublicar.elements[i].focus();
                        oPublicar.elements[i].select();
                        return false;
                    } // end if
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "Integer") {
                    if (!valNumericInt(oPublicar.elements[i].value)) {
                        var strErrorMsg = display_name(oPublicar.elements[i]) + " no debe poseer letras, puntos o decimales.";
                        alert(strErrorMsg);
                        oPublicar.elements[i].focus();
                        oPublicar.elements[i].select();
                        return false;
                    } // end if
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "Decimal") {
                    if (!valNumeric(oPublicar.elements[i].value)) {
                        var strErrorMsg = display_name(oPublicar.elements[i]) + " no debe poseer letras, puntos.";
                        alert(strErrorMsg);
                        oPublicar.elements[i].focus();
                        oPublicar.elements[i].select();
                        return false;
                    } // end if
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "email") {
                    if (!validEmail(oPublicar.elements[i])) {
                        oPublicar.elements[i].focus();
                        oPublicar.elements[i].select();
                        return false;
                    } // end if
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "clave") {
                    oClave = oPublicar.elements[i];
                    if (oClave.value.length<6) {
                        alert("La contrase�a debe tener entre 6 y 10 digitos");
                        return false;
                    }
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "clave2") {
                    if (oClave.value!=oPublicar.elements[i].value) {
                        alert("Las contrase�as no coinciden.\nIngrese ambas nuevamente.");
                        oClave.value="";
                        oPublicar.elements[i].value="";
                        oClave.focus()
                        return false;
                     }
                //}
                
                //control de tipo dni y nro para form preinsc. - juan
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "dnitipo") {
                    oTipo = oPublicar.elements[i];
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "dnitipo2") {
                    if (oTipo.value!=oPublicar.elements[i].value) {
                        alert("Los Tipos de Documento no coinciden.\n Verifique su selecci�n.");
                        oPublicar.elements[i].value="";
                        //oPublicar.elements[i].focus();
                        //lo vuelvo al boton corregir para que se vea lo que ingres� en rojo
                        window.document.forms[0].corregir.focus();
                        return false;
                    }
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "dninro") {
                    oNro = oPublicar.elements[i];
                } else if (oPublicar.elements[i].getAttribute("Tipo") == "dninro2") {
                    if (oNro.value!=oPublicar.elements[i].value) {
                        alert("Los N�meros de Documento no coinciden.\n Verif�quelo y vuelva a ingresarlo.");
                        oPublicar.elements[i].value="";
                        //oPublicar.elements[i].focus();
                        //lo vuelvo al boton corregir para que se vea lo que ingres� en rojo
                        window.document.forms[0].corregir.focus();
                        return false;
                    }
                }
                //hasta aca es lo que agregue para el form_preinsc - juan
                
            }// End If Publicar.elements[i].Tipo != null)
        }
    } // Fin For
    return true;
}//End Function

function chequearRequeridosIndividual(src) {

	//alert(src.value);
        
        if (src.value.length==0) {
            alert("Debe ingresar el dato '" + src.getAttribute("Dato")+ "'");
            src.focus();
            if (src.tagName!="SELECT"){
                src.select();                            
            }
            return false;
        }

        if (src.value.length>0) {
            if (src.getAttribute("Tipo") != null) {
                if (src.getAttribute("Tipo") == "Fecha"){
                    if (!checkdate(src.value)) {
                        alert('Fecha inv�lida, vuelva a ingresarla');
                        src.focus();
                        src.select();
                        return false;
                    } // end if
                } else if (src.getAttribute("Tipo") == "Integer") {
                    if (!valNumericInt(src.value)) {
                        var strErrorMsg = display_name(src) + " no debe poseer letras, puntos o decimales.";
                        alert(strErrorMsg);
                        src.focus();
                        src.select();
                        return false;
                    } // end if
                } else if (src.getAttribute("Tipo") == "Decimal") {
                    if (!valNumeric(src.value)) {
                        var strErrorMsg = display_name(src) + " no debe poseer letras, puntos.";
                        alert(strErrorMsg);
                        src.focus();
                        src.select();
                        return false;
                    } // end if
                } else if (src.getAttribute("Tipo") == "email") {
                    if (!validEmail(src)) {
                        src.focus();
                        src.select();
                        return false;
                    } // end if
                } else if (src.getAttribute("Tipo") == "clave") {
                    oClave = src;
                    if (oClave.value.length<6) {
                        alert("La contrase�a debe tener entre 6 y 10 digitos");
                        return false;
                    }
                } else if (src.getAttribute("Tipo") == "clave2") {
                    if (oClave.value!=src.value) {
                        alert("Las contrase�as no coinciden.\nIngrese ambas nuevamente.");
                        oClave.value="";
                        src.value="";
                        oClave.focus()
                        return false;
                     }
                //}
                
                //control de tipo dni y nro para form preinsc. - juan
                } else if (src.getAttribute("Tipo") == "dnitipo") {
                    oTipo = src;
                } else if (src.getAttribute("Tipo") == "dnitipo2") {
                    if (oTipo.value!=src.value) {
                        alert("Los Tipos de Documento no coinciden.\n Verifique su selecci�n.");
                        src.value="";
                        //src.focus();
                        //lo vuelvo al boton corregir para que se vea lo que ingres� en rojo
                        window.document.forms[0].corregir.focus();
                        return false;
                    }
                } else if (src.getAttribute("Tipo") == "dninro") {
                    oNro = src;
                } else if (src.getAttribute("Tipo") == "dninro2") {
                    if (oNro.value!=src.value) {
                        alert("Los N�meros de Documento no coinciden.\n Verif�quelo y vuelva a ingresarlo.");
                        src.value="";
                        //src.focus();
                        //lo vuelvo al boton corregir para que se vea lo que ingres� en rojo
                        window.document.forms[0].corregir.focus();
                        return false;
                    }
                }
                //hasta aca es lo que agregue para el form_preinsc - juan
                
            } // End If Publicar.elements[i].Tipo != null)
        }
    return true;
} //End Function


function chequearDni() {
	//los que vienen
	tipo_1 = document.forms[0].dnitipo;
	nro_1 = document.forms[0].dninro;
	//los que reingresa
	tipo_2 = document.forms[0].tipo_doc;
	nro_2 = document.forms[0].nro_doc;      

    if (tipo_2.value!=tipo_1.value) {
   		alert("Los Tipos de Documento no coinciden.\n Verifique su selecci�n.");
        tipo_2.value="";
        window.document.forms[0].corregir.focus();
    }else if (nro_2.value!=nro_1.value) {
        alert("Los N�meros de Documento no coinciden.\n Verif�quelo y vuelva a ingresarlo.");
        nro_2.value="";
        window.document.forms[0].corregir.focus();
    }
}//End Function


// Se valida que un campo s�lo tenga d�gitos (Valores Decimales)
function valNumeric(vartest) {
    var j = 0;
    for(var i = 0; i < vartest.length; i++) {
        if (vartest.substring(i, i+1) == ",") {
            j++;
            if (j > 1) return false
        } else if (vartest.substring(i, i+1) < "0" || vartest.substring(i, i+1) > "9") {
            return false;
        }
    }
    return true;
}


// Se valida que un campo s�lo tenga d�gitos y que sea entero
function valNumericInt(vartest) {
    var j = 0;
    for(var i = 0; i < vartest.length; i++) {
        if (vartest.substring(i, i+1) < "0" || vartest.substring(i, i+1) > "9") {
            return false;
        }
    }
    return true;
}


// Funciones de Validaci�n de Fechas
function checkdate(objFecha) {
  	var datefield = objFecha;
   	strDateArray = datefield.split("/");
    if (strDateArray.length != 3) {
        return false;
    } else {
        objDay = strDateArray[0];
        objMonth = strDateArray[1];
        objYear = strDateArray[2];
    }
  	var dataDate = objDay+"-"+objMonth+"-"+objYear;
  	if (dataDate == "--") {
    	return false;
  	} else {
    	if (chkdate(dataDate) == false) {
      		return false;
    	}else {
      		return true;
    	}
  	}
}


function chkdate(objName) {
   
    //var strDatestyle = "US"; //United States date style
    var strDatestyle = "EU";  //European date style
    var strDate;
    var strDateArray;
    var strDay; 
    var strMonth;
    var strYear;
    var intday;
    var intMonth;
    var intYear;
    var booFound = false;
    var datefield = objName;
    var strSeparatorArray = new Array("-"," ","/",".");
    var intElementNr;
    var err = 0;
    var strMonthArray = new Array(12);
    
    strMonthArray[0] = "Jan";
    strMonthArray[1] = "Feb";
    strMonthArray[2] = "Mar";
    strMonthArray[3] = "Apr";
    strMonthArray[4] = "May";
    strMonthArray[5] = "Jun";
    strMonthArray[6] = "Jul";
    strMonthArray[7] = "Aug";
    strMonthArray[8] = "Sep";
    strMonthArray[9] = "Oct"; 
    strMonthArray[10] = "Nov";
    strMonthArray[11] = "Dec";
    strDate = objName;
    
    if (strDate.length < 1) {
        return true;
    }
  
    for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
        if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
            strDateArray = strDate.split(strSeparatorArray[intElementNr]);
            if (strDateArray.length != 3) {
                err = 1;
                return false;
            } else {
                strDay = strDateArray[0];
                strMonth = strDateArray[1];
                strYear = strDateArray[2];
            }
            booFound = true;
        }
    }

  	if (booFound == false) {
        if (strDate.length>5) {
            strDay = strDate.substr(0, 2);
            strMonth = strDate.substr(2, 2);
            strYear = strDate.substr(4);
        }
    }
  
    if (strYear.length < 4) {
        err = 4;
        return false;
    }

    // US style
    if (strDatestyle == "US") {
        strTemp = strDay;
        strDay = strMonth;
        strMonth = strTemp;
    }
  
    intday = parseInt(strDay, 10);
    if (isNaN(intday)) {
        err = 2;
        return false;
    }
  
    intMonth = parseInt(strMonth, 10);
    if (isNaN(intMonth)) {
        for (i = 0;i<12;i++) {
            if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
                intMonth = i+1;
                strMonth = strMonthArray[i];
                i = 12;
            }
        }
    
        if (isNaN(intMonth)) {
            err = 3;
            return false;
        }
    }
  
    intYear = parseInt(strYear, 10);
    if (isNaN(intYear)) {
        err = 4;
        return false;
    }
  
    if (intMonth>12 || intMonth<1) {
        err = 5;
        return false;
    }
  
    if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
        err = 6;
        return false;
    }
  
    if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
        err = 7;
        return false;
    }
  
    if (intMonth == 2) {
        if (intday < 1) {
            err = 8;
            return false;
        }
        if (LeapYear(intYear) == true) {
            if (intday > 29) {
                err = 9;
                return false;
            }
        } else {
            if (intday > 28) {
                err = 10;
                return false;
            }
        }
    }

    return true;
    
} // Fin funcion chkdate 


// Determina si es a�o bisiesto
function LeapYear(intYear) {
    if (intYear % 100 == 0) {
        if (intYear % 400 == 0) {return true;}
    } else {
        if ((intYear % 4) == 0) { return true; }
    }
    return false;
}


// Valida la conformaci�n del email
function validEmail(item){
       var strErrorMsg = "No es un email valido";
       item.value=item.value.Trim();
       var filtro  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       
     //if (!(/^[\w\.]+@[a-z\.]+$/.test(item.value))) {
       if (!(filtro.test(item.value)))
          {
           alert(strErrorMsg);
           //item.focus();
           return false;
          }
       // end If
       return true;
}// End Function



// Se utiliza para mostrar la ayuda del objeto seleccionado
function MostrarAyuda(oElemento) {
    if (browser=="IE"){
        document.all.ayudaTitulo.innerHTML = oElemento.Dato;
        document.all.ayudaTexto.innerHTML = oElemento.Ayuda;
    } else {
        document.getElementById("ayudaTitulo").innerHTML = oElemento.getAttribute("Dato");
        document.getElementById("ayudaTexto").innerHTML = oElemento.getAttribute("Ayuda");
    }

    ReUbicarElementos();
}


function ReUbicarElementos() {
    //x=screen.width - 170 + document.body.scrollLeft;
    x=620;
    obj=document.getElementById("sbm");
    if (obj!=null){
       obj.style.top= 125 + document.body.scrollTop;
       obj.style.left= x;
       obj.style.visibility="visible";
    }

    obj=document.getElementById("ayuda");
    if (obj!=null){
       obj.style.top= 125 + document.body.scrollTop;
       obj.style.left= x;
       obj.style.visibility="visible";
    }
    
}// End Function


function display_name(item) {
    var vCad = item.getAttribute("Dato");
    if (vCad == null || vCad == "") {
        vCad = "El campo";
    }
    return vCad;
}// end Function


// Hace un AllTrim JavaScript
function trim_string() {
    var ichar, icount;
       var strValue = this;
       ichar = strValue.length - 1;
       icount = -1;
       while (strValue.charAt(ichar)==' ' && ichar > icount)
          {--ichar;}
       // End While
       if (ichar!=(strValue.length-1))
          {strValue = strValue.slice(0,ichar+1);}
       // End If
       ichar = 0;
       icount = strValue.length - 1;
       while (strValue.charAt(ichar)==' ' && ichar < icount)
          {++ichar;}
       // End While
       if (ichar!=0)
          {strValue = strValue.slice(ichar,strValue.length);}
       // End If
       return strValue;
}// End Function
String.prototype.Trim = trim_string;