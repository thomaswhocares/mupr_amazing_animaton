/* tslint:disable */
import * as wasm from './wasm_bindgen_paint_bg';

/**
* @returns {void}
*/
export function main() {
    return wasm.main();
}

const __widl_f_set_property_CSSStyleDeclaration_target = typeof CSSStyleDeclaration === 'undefined' ? null : CSSStyleDeclaration.prototype.setProperty || function() {
    throw new Error(`wasm-bindgen: CSSStyleDeclaration.setProperty does not exist`);
};

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

let slab_next = slab.length;

function addHeapObject(obj) {
    if (slab_next === slab.length) slab.push(slab.length + 1);
    const idx = slab_next;
    const next = slab[idx];

    slab_next = next;

    slab[idx] = { obj, cnt: 1 };
    return idx << 1;
}

const stack = [];

function getObject(idx) {
    if ((idx & 1) === 1) {
        return stack[idx >> 1];
    } else {
        const val = slab[idx >> 1];

        return val.obj;

    }
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __widl_f_set_property_CSSStyleDeclaration(arg0, arg1, arg2, arg3, arg4, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    let varg3 = getStringFromWasm(arg3, arg4);
    try {
        __widl_f_set_property_CSSStyleDeclaration_target.call(getObject(arg0), varg1, varg3);
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

export function __widl_instanceof_CanvasRenderingContext2D(idx) {
    return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0;
}

const __widl_f_begin_path_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.beginPath || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.beginPath does not exist`);
};

export function __widl_f_begin_path_CanvasRenderingContext2D(arg0) {
    __widl_f_begin_path_CanvasRenderingContext2D_target.call(getObject(arg0));
}

const __widl_f_stroke_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.stroke || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.stroke does not exist`);
};

export function __widl_f_stroke_CanvasRenderingContext2D(arg0) {
    __widl_f_stroke_CanvasRenderingContext2D_target.call(getObject(arg0));
}

function GetOwnOrInheritedPropertyDescriptor(obj, id) {
    while (obj) {
        let desc = Object.getOwnPropertyDescriptor(obj, id);
        if (desc) return desc;
        obj = Object.getPrototypeOf(obj);
    }
return {}
}

const __widl_f_set_stroke_style_CanvasRenderingContext2D_target = GetOwnOrInheritedPropertyDescriptor(typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype, 'strokeStyle').set || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.strokeStyle does not exist`);
};

export function __widl_f_set_stroke_style_CanvasRenderingContext2D(arg0, arg1) {
    __widl_f_set_stroke_style_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1));
}

const __widl_f_line_to_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.lineTo || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.lineTo does not exist`);
};

export function __widl_f_line_to_CanvasRenderingContext2D(arg0, arg1, arg2) {
    __widl_f_line_to_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2);
}

const __widl_f_move_to_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.moveTo || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.moveTo does not exist`);
};

export function __widl_f_move_to_CanvasRenderingContext2D(arg0, arg1, arg2) {
    __widl_f_move_to_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2);
}

const __widl_f_get_element_by_id_Document_target = typeof Document === 'undefined' ? null : Document.prototype.getElementById || function() {
    throw new Error(`wasm-bindgen: Document.getElementById does not exist`);
};

function isLikeNone(x) {
    return x === undefined || x === null;
}

export function __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);

    const val = __widl_f_get_element_by_id_Document_target.call(getObject(arg0), varg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

const __widl_f_add_event_listener_with_callback_EventTarget_target = typeof EventTarget === 'undefined' ? null : EventTarget.prototype.addEventListener || function() {
    throw new Error(`wasm-bindgen: EventTarget.addEventListener does not exist`);
};

export function __widl_f_add_event_listener_with_callback_EventTarget(arg0, arg1, arg2, arg3, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        __widl_f_add_event_listener_with_callback_EventTarget_target.call(getObject(arg0), varg1, getObject(arg3));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

export function __widl_instanceof_HTMLCanvasElement(idx) {
    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;
}

const __widl_f_get_context_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.getContext || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.getContext does not exist`);
};

export function __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

const __widl_f_set_height_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'height').set || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.height does not exist`);
};

export function __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {
    __widl_f_set_height_HTMLCanvasElement_target.call(getObject(arg0), arg1);
}

const __widl_f_style_HTMLElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLElement === 'undefined' ? null : HTMLElement.prototype, 'style').get || function() {
    throw new Error(`wasm-bindgen: HTMLElement.style does not exist`);
};

export function __widl_f_style_HTMLElement(arg0) {
    return addHeapObject(__widl_f_style_HTMLElement_target.call(getObject(arg0)));
}

const __widl_f_offset_x_MouseEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MouseEvent === 'undefined' ? null : MouseEvent.prototype, 'offsetX').get || function() {
    throw new Error(`wasm-bindgen: MouseEvent.offsetX does not exist`);
};

export function __widl_f_offset_x_MouseEvent(arg0) {
    return __widl_f_offset_x_MouseEvent_target.call(getObject(arg0));
}

const __widl_f_offset_y_MouseEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MouseEvent === 'undefined' ? null : MouseEvent.prototype, 'offsetY').get || function() {
    throw new Error(`wasm-bindgen: MouseEvent.offsetY does not exist`);
};

export function __widl_f_offset_y_MouseEvent(arg0) {
    return __widl_f_offset_y_MouseEvent_target.call(getObject(arg0));
}

export function __widl_instanceof_Window(idx) {
    return getObject(idx) instanceof Window ? 1 : 0;
}

export function __widl_f_document_Window(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

export function __wbg_newnoargs_96cbdf0d056b2fa8(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

export function __wbg_call_ee8306f6b79399de(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

export function __wbindgen_object_clone_ref(idx) {
    // If this object is on the stack promote it to the heap.
    if ((idx & 1) === 1) return addHeapObject(getObject(idx));

    // Otherwise if the object is on the heap just bump the
    // refcount and move on
    const val = slab[idx >> 1];
    val.cnt += 1;
    return idx;
}

function dropRef(idx) {

    idx = idx >> 1;
    if (idx < 4) return;
    let obj = slab[idx];

    obj.cnt -= 1;
    if (obj.cnt > 0) return;

    // If we hit 0 then free up our space in the slab
    slab[idx] = slab_next;
    slab_next = idx;
}

export function __wbindgen_object_drop_ref(i) {
    dropRef(i);
}

export function __wbindgen_string_new(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
}

export function __wbindgen_cb_drop(i) {
    const obj = getObject(i).original;
    dropRef(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
}

export const __wbindgen_cb_forget = dropRef;

function takeObject(idx) {
    const ret = getObject(idx);
    dropRef(idx);
    return ret;
}

export function __wbindgen_rethrow(idx) { throw takeObject(idx); }

export function __wbindgen_closure_wrapper3(a, b, fi, di, _ignored) {
    const f = wasm.__wbg_function_table.get(fi);
    const d = wasm.__wbg_function_table.get(di);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

