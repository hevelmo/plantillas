var validations_regexp = {
    data: new RegExp( "/^[0-9]+$/" )
}
var validation_messages = {
    general         : 'Campo no válido',
    not_config      : 'Tipo desconocido',
    required        : 'Campo requerido',
    empty           : 'Campo vacío',
    number          : 'Debe ingresar solo numeros'
}
function validate(value, rules, required, custom_message) {
    var r, null_value, ii, rule;
    r = { valid: false, message: '' };
    null_value = value == undefined || value === '';
    required = required === true ? true : false;

    if ( required ) {
        if ( null_value ) {
            r.message = validation_messages.required;
        }
    } else {
        if ( null_value ) {
            r.valid = true;
        }
    }
    if ( !r.valid && r.message === '' ) {
        ii = rules.length;
        while ( ii-- ) {
            rule = rules[ii];
            switch ( rule ) {
                case 'data':
                    if ( !validations_regexp.data.test( value ) ) {
                        r.message = validation_messages.number;
                    }
                    break;
                default:
                    r.message = validations_regexp.not_config;
                    break;
            }
        }
        if( r.message === '' ) {
            r.valid = true;
        }
    }
    if( custom_message && !r.valid ) {
        r.message = custom_message;
    }
    return r;
}
$.validate_input = function ($input) {
    if ($input.is('input') || $input.is('textarea') || $input.is('select')) {
        var val_data = $input.data('validation-data').split('|'),
            required = val_data.indexOf('required');
        if (required >= 0) {
            val_data.splice(required, 1);
        }
        var value = $input.val(),
            validation = validate(value, val_data, (required >= 0));
        $.error_bubble($input, !validation.valid, validation.message);
        return validation.valid;
    } else {
        var is_valid = !($input.val() === null);
        $.error_bubble($input, !is_valid, validation_messages.required);
        return is_valid;
    }
};
$.error_bubble = function ($label, show, message) {
    var $p = $label.parent().children('p.invalid_message');
    if (show) {
        if (message) {
            $p.html(message + '<span>&nbsp;</span>').stop().hide().fadeIn();
        } else {
            $p.stop().hide().fadeIn();
        }
    } else {
        $p.hide();
    }
};