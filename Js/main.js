
function pasosAseguir() {
    $('#presentacion', + '#usarc3d').hide(200, function () {
        $('#contenidoDinamico').slideUp(300, function () {
            $(this).load('pasos.html' + ' #primerPaso', function () {
                $(this).slideDown(300)
                $("#siguiente").prop("disabled", true);
                $('#usarc3d').hide(200);
                $("#descargaAplicacion").click(function () {
                    $(this).data('clicked', true);
                    $("#siguiente").prop("disabled", false);
                });
                $('#siguiente').on('click', segundoPaso)
            })
        })
    });
}
// Segundo paso
function segundoPaso() {
    $('#primerPaso').hide(200, function () {
        $('#contenidoDinamico').slideUp(300, function () {
            // Carga el ID indicado
            $(this).load('pasos.html' + ' #segundoPaso', function () {
                $(this).fadeIn(300)

                $("#siguiente").prop("disabled", true);

                // Si no hay impresora
                $('#nohayimpresora').click(function () {
                    $('#cmd').show(200);
                    $('#elegirmapa').hide(100);
                    $('#sihayimpresora').hide(100);
                    $("#siguiente").prop("disabled", false);
                    $('#nohayimpresora').hide();
                    $('#volver').show(200);

                    // Volver al menu
                    $('#volver').click(function () {
                        $('#sihayimpresora').show(200);
                        $('#nohayimpresora').show(200);
                        $('#cmd').hide(200);
                        $('#volver').hide(200);
                        $("#siguiente").prop("disabled", true);
                    })
                })
                // Si hay impresora
                $('#sihayimpresora').click(function () {
                    $('#elegirmapa').show(200);
                    $('#cmd').hide(100);
                    $('#sihayimpresora').hide();
                    $('#nohayimpresora').hide(100);
                    $("#siguiente").prop("disabled", false);
                    $('#volver').show(200);
                    // Volver al menu
                    $('#volver').click(function () {
                        $('#sihayimpresora').show(200);
                        $('#nohayimpresora').show(200);
                        $('#elegirmapa').hide(200);
                        $('#volver').hide(200);
                        $("#siguiente").prop("disabled", true);
                    })

                })
                $('#siguiente').on('click', tercerPaso)

            })
        })
    });
}
// Tercer paso
function tercerPaso() {
    $('#segundoPaso').hide(200, function () {
        $('#contenidoDinamico').slideUp(300, function () {
            $(this).load('pasos.html' + ' #tercerPaso', function () {
                $(this).fadeIn(300)
                $("#siguiente").prop("disabled", true);

                // Si hay PC por alumno
                $('#sihay').click(function () {
                    $('#sihay').hide(100);
                    $('#web').show(200);
                    $('#nohay').hide();
                    $('#volver').show(100);
                    $("#siguiente").prop("disabled", false);

                    $('#volver').click(function () {
                        $('#sihay').show(200);
                        $('#nohay').show(200);
                        $('#volver').hide();    
                        $('#web').hide(200);
                    
                        $("#siguiente").prop("disabled", true);
                    })
                })
                // Si no hay PC por alumno
                $('#nohay').click(function () {
                    $('#nohay').hide(100);
                    $('#instalac3d').show(200);
                    $('#sihay').hide(200);
                    $('#volver').show(200);
                    $("#siguiente").prop("disabled", false);
                    // Vuelve al menu principal 
                    $('#volver').click(function () {
                        $('#sihay').show(200);
                        $('#volver').hide();
                        $('#instalac3d').hide(200);
                        $('#mapa').trigger('pause');
                        $('#nohay').show(200);
                        $("#siguiente").prop("disabled", true);
                    })
                })
                $('#siguiente').on('click', cuartoPaso)

            })
        })
    });
}
// Cuarto paso
function cuartoPaso() {
    $('#tercerPaso').hide(200, function () {
        $('#contenidoDinamico').slideUp(300, function () {
            $(this).load('pasos.html' + ' #cuartoPaso', function () {
                $(this).fadeIn(300)
                $('#siguiente').on('click', quintoPaso)
                $("#siguiente").prop("disabled", true);
                // Si hay tableta o celular
                $('#sihaycel').click(function () {
                    $('#rea').show(200);
                    $('#volver').show(200);
                    $('#nohaycel').hide(100);
                    $('#sihaycel').hide(100);
                    $('#volver').show(200);
                    $("#siguiente").prop("disabled", false);

                    $('#volver').click(function () {
                        $('#sihaycel').show(100);
                        $('#nohaycel').show(100);
                        $('#rea').hide(100);
                        $('#volver').hide(100);
                        
                    })
                })

                // Si no hay tableta o celular
                $('#nohaycel').click(function () {
                    $('#sirea').show(200);
                    $('#volver').show(100);
                    $('#nohaycel').hide(100);
                    $('#sihaycel').hide(100);
                    $("#siguiente").prop("disabled", false);

                    $('#volver').click(function () {
                        $('#sihaycel').show(100);
                        $('#nohaycel').show(100);
                        $('#volver').hide(100);
                        $('#sirea').hide(100);
                        $("#siguiente").prop("disabled", true);
                    })
                })

            })
        })
    });
}
// Quinto paso
function quintoPaso() {
    $('#cuartoPaso').hide(200, function () {
        $('#contenidoDinamico').slideUp(300, function () {
            $(this).load('pasos.html' + ' #quintoPaso', function () {
                $(this).fadeIn(300)
                
                $("#siguiente").prop("disabled", true);
                // Si le gustaria agregar informacion
                $('#siagrego').click(function () {
                    $('#creardatos').show(100);
                    $('#volver').show(100);
                    $('#nohaylista').hide();
                    $('#siagrego').hide(100);
                    $("#siguiente").prop("disabled", false);

                    $('#volver').click(function () {
                        $('#creardatos').hide(100);
                        $('#volver').hide(100);
                        $('#siagrego').show(100);
                        $('#nohaylista').show(100);
                        $("#siguiente").prop("disabled", true);
                    })
                })

                // Si no hay en la lista
                $('#nohaylista').click(function () {
                    $('#investiga').show(100);
                    $('#siagrego').hide(100);
                    $('#volver').show(100);
                    $('#nohaylista').hide(100);
                    $("#siguiente").prop("disabled", false);

                    $('#volver').click(function () {
                        $('#nohaylista').show(100);
                        $('#siagrego').show(100);
                        $('#investiga').hide(100);
                        $('#volver').hide(100);
                        $("#siguiente").prop("disabled", true);
                    })
                })
                $('#siguiente').on('click', sextoPaso)
            })
        })
    });
}
// Sexto paso
function sextoPaso() {
    $('#quintoPaso').hide(200, function () {
        $('#contenidoDinamico').slideUp(300, function () {
            $(this).load('pasos.html' + ' #sextoPaso', function () {
                $(this).slideDown(300)
                $("#siguiente").prop("disabled", true);

                // Si entiende, increible O:
                $('#sientiende').click(function () {
                    $('#experiencia').show(200);
                    $('#sientiende').hide(100);
                    $('#noentiende').hide(100);
                    $('#volver').show(100);
                    $("#siguiente").prop("disabled", false);

                    $('#volver').click(function () {
                        $('#sientende').hide(100);
                        $('#noentiende').show(200);
                        $('#sientiende').show(200);
                        $('#experiencia').hide(100);
                        $('#volver').hide(200);
                        $("#siguiente").prop("disabled", true);
                    })
                })

                // Si no entiende por alguna razon de la vida
                $('#noentiende').click(function () {
                    $('#tutoriales').show(100);
                    $('#sientiende').hide(100);
                    $('#noentiende').hide(100);
                    $('#volver').show(100);
                    $("#siguiente").prop("disabled", false);

                    $('#volver').click(function () {
                        $('#sientiende').show(100);
                        $('#noentiende').show(100);
                        $('#tutoriales').hide(100);
                        $('#volver').hide(100);
                        $("#siguiente").prop("disabled", true);
                    })
                })
            })
        })
    });
}
    
