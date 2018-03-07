<div class="requirement_main">
    <div class="requirement_content">
        <div id="requirement_form_wrapper">
            <form class="form-signin" id="signin" action="post">
                <img src="img/user-signin.png" alt="User signin" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Por favor, inicia sesión</h1>
                <div class="requirement_elements">
                    <div class="requirement_element signin_col_ab">
                        <fieldset>
                            <label for="usuario" class="sr-only hidden">
                                <span style="color: red;" class="fa fa-asterisk"></span> N&uacute;mero de Seguro Social
                            </label>
                            <input type="text" name="usuario" class="form-control validate_required" id="usuario" placeholder="N&uacute;mero de Seguro Social (N.S.S)" data-validation-data="required|user">
                            <p class="invalid_message" id="error_nombre">Este campo es obligatorio<span>&nbsp;</span></p>
                            <span class="requirement open-panel">
                                <span>&nbsp;</span>
                                <div class="requirement_box">
                                    <div class="requirement_wrapper">
                                        <div class="requirement-close-panel">
                                            <a href="javascript:void(0)" class="close-panel-box">
                                                <img src="img/times.png" width="20" height="20">
                                            </a>
                                        </div>
                                        <div class="requirement_header">
                                            <h3 class="h5 mb-3 font-weight-bold">Ubica tu N&uacute;mero de Seguro Social</h3>
                                        </div>
                                        <div class="requirement_body">
                                            <img src="img/gafete.png" alt="Gafete">
                                        </div>
                                        <div class="requirement-footer">
                                            <div>
                                                <img src="img/arrow-up-right.png" width="32" height="32">
                                                <p>Tu n&uacute;mero de Seguro Social se encuentra ubicado aquí.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </fieldset>
                    </div>
                </div>
                <div class="requirement_elements if-is-open-panel">
                    <div class="requirement_element signin_col_ab">
                        <fieldset>
                            <label for="password" class="sr-only hidden">
                                <span style="color: red;" class="fa fa-asterisk"></span> N&uacute;mero de Seguridad Social
                            </label>
                            <input type="password" name="password" class="form-control validate_required" id="password" placeholder="Contraseña" data-validation-data="required|user">
                            <p class="invalid_message" id="error_nombre">Este campo es obligatorio<span>&nbsp;</span></p>
                        </fieldset>
                    </div>
                </div>
                <button class="btn btn-lg btn-primary btn-block" id="iniciar-sesion" type="buton">Iniciar Sesión</button>
                <p class="mt-5 mb-3 text-muted">
                    No cuentas con <br> 
                    <a href="javascript:void(0)" class="active-panel"><b>Usuario</b> y <b>Contraseña</b>?</a>
                </p>
            </form>
        </div>
    </div>
</div>