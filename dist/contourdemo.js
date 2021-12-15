(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /* @license twgl.js 4.19.2 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
  Available via the MIT license.
  see: http://github.com/greggman/twgl.js for details */

  function error(...args) {
    console.error(...args);
  }

  function isShader(gl, t) {
    return typeof WebGLShader !== 'undefined' && t instanceof WebGLShader;
  }

  function isTexture(gl, t) {
    return typeof WebGLTexture !== 'undefined' && t instanceof WebGLTexture;
  }

  /*
   * Copyright 2019 Gregg Tavares
   *
   * Permission is hereby granted, free of charge, to any person obtaining a
   * copy of this software and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including without limitation
   * the rights to use, copy, modify, merge, publish, distribute, sublicense,
   * and/or sell copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
   * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */

  /**
   * Gets the gl version as a number
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @return {number} version of gl
   * @private
   */
  //function getVersionAsNumber(gl) {
  //  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
  //}

  /**
   * Check if context is WebGL 2.0
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @return {bool} true if it's WebGL 2.0
   * @memberOf module:twgl
   */
  function isWebGL2(gl) {
    // This is the correct check but it's slow
    //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
    // This might also be the correct check but I'm assuming it's slow-ish
    // return gl instanceof WebGL2RenderingContext;
    return !!gl.texStorage2D;
  }

  /**
   * Gets a string for WebGL enum
   *
   * Note: Several enums are the same. Without more
   * context (which function) it's impossible to always
   * give the correct enum. As it is, for matching values
   * it gives all enums. Checking the WebGL2RenderingContext
   * that means
   *
   *      0     = ZERO | POINT | NONE | NO_ERROR
   *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
   *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
   *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
   *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
   *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
   *
   * It's also not useful for bits really unless you pass in individual bits.
   * In other words
   *
   *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
   *     twgl.glEnumToString(gl, bits);  // not going to work
   *
   * Note that some enums only exist on extensions. If you
   * want them to show up you need to pass the extension at least
   * once. For example
   *
   *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc');
   *     if (ext) {
   *        twgl.glEnumToString(ext, 0);  // just prime the function
   *
   *        ..later..
   *
   *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
   *        console.log(twgl.glEnumToString(gl, internalFormat));
   *
   * Notice I didn't have to pass the extension the second time. This means
   * you can have place that generically gets an enum for texture formats for example.
   * and as long as you primed the function with the extensions
   *
   * If you're using `twgl.addExtensionsToContext` to enable your extensions
   * then twgl will automatically get the extension's enums.
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext or any extension object
   * @param {number} value the value of the enum you want to look up.
   * @return {string} enum string or hex value
   * @memberOf module:twgl
   * @function glEnumToString
   */
  const glEnumToString = (function() {
    const haveEnumsForType = {};
    const enums = {};

    function addEnums(gl) {
      const type = gl.constructor.name;
      if (!haveEnumsForType[type]) {
        for (const key in gl) {
          if (typeof gl[key] === 'number') {
            const existing = enums[gl[key]];
            enums[gl[key]] = existing ? `${existing} | ${key}` : key;
          }
        }
        haveEnumsForType[type] = true;
      }
    }

    return function glEnumToString(gl, value) {
      addEnums(gl);
      return enums[value] || (typeof value === 'number' ? `0x${value.toString(16)}` : value);
    };
  }());

  /*
   * Copyright 2019 Gregg Tavares
   *
   * Permission is hereby granted, free of charge, to any person obtaining a
   * copy of this software and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including without limitation
   * the rights to use, copy, modify, merge, publish, distribute, sublicense,
   * and/or sell copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
   * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */

  /**
   * Low level shader program related functions
   *
   * You should generally not need to use these functions. They are provided
   * for those cases where you're doing something out of the ordinary
   * and you need lower level access.
   *
   * For backward compatibility they are available at both `twgl.programs` and `twgl`
   * itself
   *
   * See {@link module:twgl} for core functions
   *
   * @module twgl/programs
   */

  const error$1 = error;
  function getElementById(id) {
    return (typeof document !== 'undefined' && document.getElementById)
        ? document.getElementById(id)
        : null;
  }

  const TEXTURE0                       = 0x84c0;

  const ARRAY_BUFFER$1                   = 0x8892;

  const COMPILE_STATUS                 = 0x8b81;
  const LINK_STATUS                    = 0x8b82;
  const FRAGMENT_SHADER                = 0x8b30;
  const VERTEX_SHADER                  = 0x8b31;
  const SEPARATE_ATTRIBS               = 0x8c8d;

  const ACTIVE_UNIFORMS                = 0x8b86;
  const ACTIVE_ATTRIBUTES              = 0x8b89;
  const TRANSFORM_FEEDBACK_VARYINGS    = 0x8c83;
  const ACTIVE_UNIFORM_BLOCKS          = 0x8a36;
  const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER   = 0x8a44;
  const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
  const UNIFORM_BLOCK_DATA_SIZE                     = 0x8a40;
  const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES        = 0x8a43;

  const FLOAT$3                         = 0x1406;
  const FLOAT_VEC2                    = 0x8B50;
  const FLOAT_VEC3                    = 0x8B51;
  const FLOAT_VEC4                    = 0x8B52;
  const INT$3                           = 0x1404;
  const INT_VEC2                      = 0x8B53;
  const INT_VEC3                      = 0x8B54;
  const INT_VEC4                      = 0x8B55;
  const BOOL                          = 0x8B56;
  const BOOL_VEC2                     = 0x8B57;
  const BOOL_VEC3                     = 0x8B58;
  const BOOL_VEC4                     = 0x8B59;
  const FLOAT_MAT2                    = 0x8B5A;
  const FLOAT_MAT3                    = 0x8B5B;
  const FLOAT_MAT4                    = 0x8B5C;
  const SAMPLER_2D                    = 0x8B5E;
  const SAMPLER_CUBE                  = 0x8B60;
  const SAMPLER_3D                    = 0x8B5F;
  const SAMPLER_2D_SHADOW             = 0x8B62;
  const FLOAT_MAT2x3                  = 0x8B65;
  const FLOAT_MAT2x4                  = 0x8B66;
  const FLOAT_MAT3x2                  = 0x8B67;
  const FLOAT_MAT3x4                  = 0x8B68;
  const FLOAT_MAT4x2                  = 0x8B69;
  const FLOAT_MAT4x3                  = 0x8B6A;
  const SAMPLER_2D_ARRAY              = 0x8DC1;
  const SAMPLER_2D_ARRAY_SHADOW       = 0x8DC4;
  const SAMPLER_CUBE_SHADOW           = 0x8DC5;
  const UNSIGNED_INT$3                  = 0x1405;
  const UNSIGNED_INT_VEC2             = 0x8DC6;
  const UNSIGNED_INT_VEC3             = 0x8DC7;
  const UNSIGNED_INT_VEC4             = 0x8DC8;
  const INT_SAMPLER_2D                = 0x8DCA;
  const INT_SAMPLER_3D                = 0x8DCB;
  const INT_SAMPLER_CUBE              = 0x8DCC;
  const INT_SAMPLER_2D_ARRAY          = 0x8DCF;
  const UNSIGNED_INT_SAMPLER_2D       = 0x8DD2;
  const UNSIGNED_INT_SAMPLER_3D       = 0x8DD3;
  const UNSIGNED_INT_SAMPLER_CUBE     = 0x8DD4;
  const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;

  const TEXTURE_2D$1                    = 0x0DE1;
  const TEXTURE_CUBE_MAP$1              = 0x8513;
  const TEXTURE_3D$1                    = 0x806F;
  const TEXTURE_2D_ARRAY$1              = 0x8C1A;

  const typeMap = {};

  /**
   * Returns the corresponding bind point for a given sampler type
   */
  function getBindPointForSamplerType(gl, type) {
    return typeMap[type].bindPoint;
  }

  // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
  // this code could be a lot smaller but that is sadly really slow (T_T)

  function floatSetter(gl, location) {
    return function(v) {
      gl.uniform1f(location, v);
    };
  }

  function floatArraySetter(gl, location) {
    return function(v) {
      gl.uniform1fv(location, v);
    };
  }

  function floatVec2Setter(gl, location) {
    return function(v) {
      gl.uniform2fv(location, v);
    };
  }

  function floatVec3Setter(gl, location) {
    return function(v) {
      gl.uniform3fv(location, v);
    };
  }

  function floatVec4Setter(gl, location) {
    return function(v) {
      gl.uniform4fv(location, v);
    };
  }

  function intSetter(gl, location) {
    return function(v) {
      gl.uniform1i(location, v);
    };
  }

  function intArraySetter(gl, location) {
    return function(v) {
      gl.uniform1iv(location, v);
    };
  }

  function intVec2Setter(gl, location) {
    return function(v) {
      gl.uniform2iv(location, v);
    };
  }

  function intVec3Setter(gl, location) {
    return function(v) {
      gl.uniform3iv(location, v);
    };
  }

  function intVec4Setter(gl, location) {
    return function(v) {
      gl.uniform4iv(location, v);
    };
  }

  function uintSetter(gl, location) {
    return function(v) {
      gl.uniform1ui(location, v);
    };
  }

  function uintArraySetter(gl, location) {
    return function(v) {
      gl.uniform1uiv(location, v);
    };
  }

  function uintVec2Setter(gl, location) {
    return function(v) {
      gl.uniform2uiv(location, v);
    };
  }

  function uintVec3Setter(gl, location) {
    return function(v) {
      gl.uniform3uiv(location, v);
    };
  }

  function uintVec4Setter(gl, location) {
    return function(v) {
      gl.uniform4uiv(location, v);
    };
  }

  function floatMat2Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix2fv(location, false, v);
    };
  }

  function floatMat3Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix3fv(location, false, v);
    };
  }

  function floatMat4Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix4fv(location, false, v);
    };
  }

  function floatMat23Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix2x3fv(location, false, v);
    };
  }

  function floatMat32Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix3x2fv(location, false, v);
    };
  }

  function floatMat24Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix2x4fv(location, false, v);
    };
  }

  function floatMat42Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix4x2fv(location, false, v);
    };
  }

  function floatMat34Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix3x4fv(location, false, v);
    };
  }

  function floatMat43Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix4x3fv(location, false, v);
    };
  }

  function samplerSetter(gl, type, unit, location) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    return isWebGL2(gl) ? function(textureOrPair) {
      let texture;
      let sampler;
      if (isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }
      gl.uniform1i(location, unit);
      gl.activeTexture(TEXTURE0 + unit);
      gl.bindTexture(bindPoint, texture);
      gl.bindSampler(unit, sampler);
    } : function(texture) {
      gl.uniform1i(location, unit);
      gl.activeTexture(TEXTURE0 + unit);
      gl.bindTexture(bindPoint, texture);
    };
  }

  function samplerArraySetter(gl, type, unit, location, size) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    const units = new Int32Array(size);
    for (let ii = 0; ii < size; ++ii) {
      units[ii] = unit + ii;
    }

    return isWebGL2(gl) ? function(textures) {
      gl.uniform1iv(location, units);
      textures.forEach(function(textureOrPair, index) {
        gl.activeTexture(TEXTURE0 + units[index]);
        let texture;
        let sampler;
        if (isTexture(gl, textureOrPair)) {
          texture = textureOrPair;
          sampler = null;
        } else {
          texture = textureOrPair.texture;
          sampler = textureOrPair.sampler;
        }
        gl.bindSampler(unit, sampler);
        gl.bindTexture(bindPoint, texture);
      });
    } : function(textures) {
      gl.uniform1iv(location, units);
      textures.forEach(function(texture, index) {
        gl.activeTexture(TEXTURE0 + units[index]);
        gl.bindTexture(bindPoint, texture);
      });
    };
  }

  typeMap[FLOAT$3]                         = { Type: Float32Array, size:  4, setter: floatSetter,      arraySetter: floatArraySetter, };
  typeMap[FLOAT_VEC2]                    = { Type: Float32Array, size:  8, setter: floatVec2Setter,  };
  typeMap[FLOAT_VEC3]                    = { Type: Float32Array, size: 12, setter: floatVec3Setter,  };
  typeMap[FLOAT_VEC4]                    = { Type: Float32Array, size: 16, setter: floatVec4Setter,  };
  typeMap[INT$3]                           = { Type: Int32Array,   size:  4, setter: intSetter,        arraySetter: intArraySetter, };
  typeMap[INT_VEC2]                      = { Type: Int32Array,   size:  8, setter: intVec2Setter,    };
  typeMap[INT_VEC3]                      = { Type: Int32Array,   size: 12, setter: intVec3Setter,    };
  typeMap[INT_VEC4]                      = { Type: Int32Array,   size: 16, setter: intVec4Setter,    };
  typeMap[UNSIGNED_INT$3]                  = { Type: Uint32Array,  size:  4, setter: uintSetter,       arraySetter: uintArraySetter, };
  typeMap[UNSIGNED_INT_VEC2]             = { Type: Uint32Array,  size:  8, setter: uintVec2Setter,   };
  typeMap[UNSIGNED_INT_VEC3]             = { Type: Uint32Array,  size: 12, setter: uintVec3Setter,   };
  typeMap[UNSIGNED_INT_VEC4]             = { Type: Uint32Array,  size: 16, setter: uintVec4Setter,   };
  typeMap[BOOL]                          = { Type: Uint32Array,  size:  4, setter: intSetter,        arraySetter: intArraySetter, };
  typeMap[BOOL_VEC2]                     = { Type: Uint32Array,  size:  8, setter: intVec2Setter,    };
  typeMap[BOOL_VEC3]                     = { Type: Uint32Array,  size: 12, setter: intVec3Setter,    };
  typeMap[BOOL_VEC4]                     = { Type: Uint32Array,  size: 16, setter: intVec4Setter,    };
  typeMap[FLOAT_MAT2]                    = { Type: Float32Array, size: 16, setter: floatMat2Setter,  };
  typeMap[FLOAT_MAT3]                    = { Type: Float32Array, size: 36, setter: floatMat3Setter,  };
  typeMap[FLOAT_MAT4]                    = { Type: Float32Array, size: 64, setter: floatMat4Setter,  };
  typeMap[FLOAT_MAT2x3]                  = { Type: Float32Array, size: 24, setter: floatMat23Setter, };
  typeMap[FLOAT_MAT2x4]                  = { Type: Float32Array, size: 32, setter: floatMat24Setter, };
  typeMap[FLOAT_MAT3x2]                  = { Type: Float32Array, size: 24, setter: floatMat32Setter, };
  typeMap[FLOAT_MAT3x4]                  = { Type: Float32Array, size: 48, setter: floatMat34Setter, };
  typeMap[FLOAT_MAT4x2]                  = { Type: Float32Array, size: 32, setter: floatMat42Setter, };
  typeMap[FLOAT_MAT4x3]                  = { Type: Float32Array, size: 48, setter: floatMat43Setter, };
  typeMap[SAMPLER_2D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[SAMPLER_CUBE]                  = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[SAMPLER_3D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1,       };
  typeMap[SAMPLER_2D_SHADOW]             = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[SAMPLER_2D_ARRAY]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };
  typeMap[SAMPLER_2D_ARRAY_SHADOW]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };
  typeMap[SAMPLER_CUBE_SHADOW]           = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[INT_SAMPLER_2D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[INT_SAMPLER_3D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1,       };
  typeMap[INT_SAMPLER_CUBE]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[INT_SAMPLER_2D_ARRAY]          = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };
  typeMap[UNSIGNED_INT_SAMPLER_2D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[UNSIGNED_INT_SAMPLER_3D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1,       };
  typeMap[UNSIGNED_INT_SAMPLER_CUBE]     = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };

  function floatAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        switch (b.value.length) {
          case 4:
            gl.vertexAttrib4fv(index, b.value);
            break;
          case 3:
            gl.vertexAttrib3fv(index, b.value);
            break;
          case 2:
            gl.vertexAttrib2fv(index, b.value);
            break;
          case 1:
            gl.vertexAttrib1fv(index, b.value);
            break;
          default:
            throw new Error('the length of a float constant value must be between 1 and 4!');
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribPointer(
            index, b.numComponents || b.size, b.type || FLOAT$3, b.normalize || false, b.stride || 0, b.offset || 0);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }

  function intAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl.vertexAttrib4iv(index, b.value);
        } else {
          throw new Error('The length of an integer constant value must be 4!');
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribIPointer(
            index, b.numComponents || b.size, b.type || INT$3, b.stride || 0, b.offset || 0);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }

  function uintAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl.vertexAttrib4uiv(index, b.value);
        } else {
          throw new Error('The length of an unsigned integer constant value must be 4!');
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribIPointer(
            index, b.numComponents || b.size, b.type || UNSIGNED_INT$3, b.stride || 0, b.offset || 0);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }

  function matAttribSetter(gl, index, typeInfo) {
    const defaultSize = typeInfo.size;
    const count = typeInfo.count;

    return function(b) {
      gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
      const numComponents = b.size || b.numComponents || defaultSize;
      const size = numComponents / count;
      const type = b.type || FLOAT$3;
      const typeInfo = typeMap[type];
      const stride = typeInfo.size * numComponents;
      const normalize = b.normalize || false;
      const offset = b.offset || 0;
      const rowOffset = stride / count;
      for (let i = 0; i < count; ++i) {
        gl.enableVertexAttribArray(index + i);
        gl.vertexAttribPointer(
            index + i, size, type, normalize, stride, offset + rowOffset * i);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index + i, b.divisor);
        }
      }
    };
  }



  const attrTypeMap = {};
  attrTypeMap[FLOAT$3]             = { size:  4, setter: floatAttribSetter, };
  attrTypeMap[FLOAT_VEC2]        = { size:  8, setter: floatAttribSetter, };
  attrTypeMap[FLOAT_VEC3]        = { size: 12, setter: floatAttribSetter, };
  attrTypeMap[FLOAT_VEC4]        = { size: 16, setter: floatAttribSetter, };
  attrTypeMap[INT$3]               = { size:  4, setter: intAttribSetter,   };
  attrTypeMap[INT_VEC2]          = { size:  8, setter: intAttribSetter,   };
  attrTypeMap[INT_VEC3]          = { size: 12, setter: intAttribSetter,   };
  attrTypeMap[INT_VEC4]          = { size: 16, setter: intAttribSetter,   };
  attrTypeMap[UNSIGNED_INT$3]      = { size:  4, setter: uintAttribSetter,  };
  attrTypeMap[UNSIGNED_INT_VEC2] = { size:  8, setter: uintAttribSetter,  };
  attrTypeMap[UNSIGNED_INT_VEC3] = { size: 12, setter: uintAttribSetter,  };
  attrTypeMap[UNSIGNED_INT_VEC4] = { size: 16, setter: uintAttribSetter,  };
  attrTypeMap[BOOL]              = { size:  4, setter: intAttribSetter,   };
  attrTypeMap[BOOL_VEC2]         = { size:  8, setter: intAttribSetter,   };
  attrTypeMap[BOOL_VEC3]         = { size: 12, setter: intAttribSetter,   };
  attrTypeMap[BOOL_VEC4]         = { size: 16, setter: intAttribSetter,   };
  attrTypeMap[FLOAT_MAT2]        = { size:  4, setter: matAttribSetter,   count: 2, };
  attrTypeMap[FLOAT_MAT3]        = { size:  9, setter: matAttribSetter,   count: 3, };
  attrTypeMap[FLOAT_MAT4]        = { size: 16, setter: matAttribSetter,   count: 4, };

  const errorRE = /ERROR:\s*\d+:(\d+)/gi;
  function addLineNumbersWithError(src, log = '', lineOffset = 0) {
    // Note: Error message formats are not defined by any spec so this may or may not work.
    const matches = [...log.matchAll(errorRE)];
    const lineNoToErrorMap = new Map(matches.map((m, ndx) => {
      const lineNo = parseInt(m[1]);
      const next = matches[ndx + 1];
      const end = next ? next.index : log.length;
      const msg = log.substring(m.index, end);
      return [lineNo - 1, msg];
    }));
    return src.split('\n').map((line, lineNo) => {
      const err = lineNoToErrorMap.get(lineNo);
      return `${lineNo + 1 + lineOffset}: ${line}${err ? `\n\n^^^ ${err}` : ''}`;
    }).join('\n');
  }

  /**
   * Error Callback
   * @callback ErrorCallback
   * @param {string} msg error message.
   * @param {number} [lineOffset] amount to add to line number
   * @memberOf module:twgl
   */

  const spaceRE = /^[ \t]*\n/;

  /**
   * Loads a shader.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {string} shaderSource The shader source.
   * @param {number} shaderType The type of shader.
   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
   * @return {WebGLShader} The created shader.
   * @private
   */
  function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
    const errFn = opt_errorCallback || error$1;
    // Create the shader object
    const shader = gl.createShader(shaderType);

    // Remove the first end of line because WebGL 2.0 requires
    // #version 300 es
    // as the first line. No whitespace allowed before that line
    // so
    //
    // <script>
    // #version 300 es
    // </script>
    //
    // Has one line before it which is invalid according to GLSL ES 3.00
    //
    let lineOffset = 0;
    if (spaceRE.test(shaderSource)) {
      lineOffset = 1;
      shaderSource = shaderSource.replace(spaceRE, '');
    }

    // Load the shader source
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check the compile status
    const compiled = gl.getShaderParameter(shader, COMPILE_STATUS);
    if (!compiled) {
      // Something went wrong during compilation; get the error
      const lastError = gl.getShaderInfoLog(shader);
      errFn(`${addLineNumbersWithError(shaderSource, lastError, lineOffset)}\nError compiling ${glEnumToString(gl, shaderType)}: ${lastError}`);
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  /**
   * @typedef {Object} ProgramOptions
   * @property {function(string)} [errorCallback] callback for errors
   * @property {Object.<string,number>} [attribLocations] a attribute name to location map
   * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
   *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
   *   you can pass an array of names.
   * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
   * @memberOf module:twgl
   */

  /**
   * Gets the program options based on all these optional arguments
   * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments passed in
   * @private
   */
  function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
    let transformFeedbackVaryings;
    let transformFeedbackMode;
    if (typeof opt_locations === 'function') {
      opt_errorCallback = opt_locations;
      opt_locations = undefined;
    }
    if (typeof opt_attribs === 'function') {
      opt_errorCallback = opt_attribs;
      opt_attribs = undefined;
    } else if (opt_attribs && !Array.isArray(opt_attribs)) {
      // If we have an errorCallback we can just return this object
      // Otherwise we need to construct one with default errorCallback
      if (opt_attribs.errorCallback) {
        return opt_attribs;
      }
      const opt = opt_attribs;
      opt_errorCallback = opt.errorCallback;
      opt_attribs = opt.attribLocations;
      transformFeedbackVaryings = opt.transformFeedbackVaryings;
      transformFeedbackMode = opt.transformFeedbackMode;
    }

    const options = {
      errorCallback: opt_errorCallback || error$1,
      transformFeedbackVaryings: transformFeedbackVaryings,
      transformFeedbackMode: transformFeedbackMode,
    };

    if (opt_attribs) {
      let attribLocations = {};
      if (Array.isArray(opt_attribs)) {
        opt_attribs.forEach(function(attrib,  ndx) {
          attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
        });
      } else {
        attribLocations = opt_attribs;
      }
      options.attribLocations = attribLocations;
    }

    return options;
  }

  const defaultShaderType = [
    "VERTEX_SHADER",
    "FRAGMENT_SHADER",
  ];

  function getShaderTypeFromScriptType(gl, scriptType) {
    if (scriptType.indexOf("frag") >= 0) {
      return FRAGMENT_SHADER;
    } else if (scriptType.indexOf("vert") >= 0) {
      return VERTEX_SHADER;
    }
    return undefined;
  }

  function deleteShaders(gl, shaders) {
    shaders.forEach(function(shader) {
      gl.deleteShader(shader);
    });
  }

  /**
   * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
   * program and calls useProgram.
   *
   * NOTE: There are 4 signatures for this function
   *
   *     twgl.createProgram(gl, [vs, fs], options);
   *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
   * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram?} the created program or null if error.
   * @memberOf module:twgl/programs
   */
  function createProgram(
      gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const realShaders = [];
    const newShaders = [];
    for (let ndx = 0; ndx < shaders.length; ++ndx) {
      let shader = shaders[ndx];
      if (typeof (shader) === 'string') {
        const elem = getElementById(shader);
        const src = elem ? elem.text : shader;
        let type = gl[defaultShaderType[ndx]];
        if (elem && elem.type) {
          type = getShaderTypeFromScriptType(gl, elem.type) || type;
        }
        shader = loadShader(gl, src, type, progOptions.errorCallback);
        newShaders.push(shader);
      }
      if (isShader(gl, shader)) {
        realShaders.push(shader);
      }
    }

    if (realShaders.length !== shaders.length) {
      progOptions.errorCallback("not enough shaders for program");
      deleteShaders(gl, newShaders);
      return null;
    }

    const program = gl.createProgram();
    realShaders.forEach(function(shader) {
      gl.attachShader(program, shader);
    });
    if (progOptions.attribLocations) {
      Object.keys(progOptions.attribLocations).forEach(function(attrib) {
        gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
      });
    }
    let varyings = progOptions.transformFeedbackVaryings;
    if (varyings) {
      if (varyings.attribs) {
        varyings = varyings.attribs;
      }
      if (!Array.isArray(varyings)) {
        varyings = Object.keys(varyings);
      }
      gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || SEPARATE_ATTRIBS);
    }
    gl.linkProgram(program);

    // Check the link status
    const linked = gl.getProgramParameter(program, LINK_STATUS);
    if (!linked) {
      // something went wrong with the link
      const lastError = gl.getProgramInfoLog(program);
      progOptions.errorCallback(`${
      realShaders.map(shader => {
        const src = addLineNumbersWithError(gl.getShaderSource(shader), '', 0);
        const type = gl.getShaderParameter(shader, gl.SHADER_TYPE);
        return `${glEnumToString(gl, type)}\n${src}}`;
      }).join('\n')
    }\nError in program linking: ${lastError}`);

      gl.deleteProgram(program);
      deleteShaders(gl, newShaders);
      return null;
    }
    return program;
  }

  /**
   * Creates a program from 2 sources.
   *
   * NOTE: There are 4 signatures for this function
   *
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSources Array of sources for the
   *        shaders. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram?} the created program or null if error.
   * @memberOf module:twgl/programs
   */
  function createProgramFromSources(
      gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const shaders = [];
    for (let ii = 0; ii < shaderSources.length; ++ii) {
      const shader = loadShader(
          gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);
      if (!shader) {
        return null;
      }
      shaders.push(shader);
    }
    return createProgram(gl, shaders, progOptions);
  }

  /**
   * Returns true if attribute/uniform is a reserved/built in
   *
   * It makes no sense to me why GL returns these because it's
   * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
   * with names that start with `gl_` (and `webgl_` in WebGL)
   *
   * I can only assume they are there because they might count
   * when computing the number of uniforms/attributes used when you want to
   * know if you are near the limit. That doesn't really make sense
   * to me but the fact that these get returned are in the spec.
   *
   * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
   *    `gl.getActiveAttrib`.
   * @return {bool} true if it's reserved
   * @private
   */
  function isBuiltIn(info) {
    const name = info.name;
    return name.startsWith("gl_") || name.startsWith("webgl_");
  }

  /**
   * Creates setter functions for all uniforms of a shader
   * program.
   *
   * @see {@link module:twgl.setUniforms}
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLProgram} program the program to create setters for.
   * @returns {Object.<string, function>} an object with a setter by name for each uniform
   * @memberOf module:twgl/programs
   */
  function createUniformSetters(gl, program) {
    let textureUnit = 0;

    /**
     * Creates a setter for a uniform of the given program with it's
     * location embedded in the setter.
     * @param {WebGLProgram} program
     * @param {WebGLUniformInfo} uniformInfo
     * @returns {function} the created setter.
     */
    function createUniformSetter(program, uniformInfo, location) {
      const isArray = uniformInfo.name.endsWith("[0]");
      const type = uniformInfo.type;
      const typeInfo = typeMap[type];
      if (!typeInfo) {
        throw new Error(`unknown type: 0x${type.toString(16)}`); // we should never get here.
      }
      let setter;
      if (typeInfo.bindPoint) {
        // it's a sampler
        const unit = textureUnit;
        textureUnit += uniformInfo.size;
        if (isArray) {
          setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
        } else {
          setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
        }
      } else {
        if (typeInfo.arraySetter && isArray) {
          setter = typeInfo.arraySetter(gl, location);
        } else {
          setter = typeInfo.setter(gl, location);
        }
      }
      setter.location = location;
      return setter;
    }

    const uniformSetters = { };
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);

    for (let ii = 0; ii < numUniforms; ++ii) {
      const uniformInfo = gl.getActiveUniform(program, ii);
      if (isBuiltIn(uniformInfo)) {
          continue;
      }
      let name = uniformInfo.name;
      // remove the array suffix.
      if (name.endsWith("[0]")) {
        name = name.substr(0, name.length - 3);
      }
      const location = gl.getUniformLocation(program, uniformInfo.name);
      // the uniform will have no location if it's in a uniform block
      if (location) {
        uniformSetters[name] = createUniformSetter(program, uniformInfo, location);
      }
    }
    return uniformSetters;
  }

  /**
   * @typedef {Object} TransformFeedbackInfo
   * @property {number} index index of transform feedback
   * @property {number} type GL type
   * @property {number} size 1 - 4
   * @memberOf module:twgl
   */

  /**
   * Create TransformFeedbackInfo for passing to bindTransformFeedbackInfo.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLProgram} program an existing WebGLProgram.
   * @return {Object<string, module:twgl.TransformFeedbackInfo>}
   * @memberOf module:twgl
   */
  function createTransformFeedbackInfo(gl, program) {
    const info = {};
    const numVaryings = gl.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);
    for (let ii = 0; ii < numVaryings; ++ii) {
      const varying = gl.getTransformFeedbackVarying(program, ii);
      info[varying.name] = {
        index: ii,
        type: varying.type,
        size: varying.size,
      };
    }
    return info;
  }

  /**
   * @typedef {Object} UniformData
   * @property {number} type The WebGL type enum for this uniform
   * @property {number} size The number of elements for this uniform
   * @property {number} blockNdx The block index this uniform appears in
   * @property {number} offset The byte offset in the block for this uniform's value
   * @memberOf module:twgl
   */

  /**
   * The specification for one UniformBlockObject
   *
   * @typedef {Object} BlockSpec
   * @property {number} index The index of the block.
   * @property {number} size The size in bytes needed for the block
   * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
   *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
   * @property {bool} usedByVertexShader Self explanatory
   * @property {bool} usedByFragmentShader Self explanatory
   * @property {bool} used Self explanatory
   * @memberOf module:twgl
   */

  /**
   * A `UniformBlockSpec` represents the data needed to create and bind
   * UniformBlockObjects for a given program
   *
   * @typedef {Object} UniformBlockSpec
   * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
   * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
   * @memberOf module:twgl
   */

  /**
   * Creates a UniformBlockSpec for the given program.
   *
   * A UniformBlockSpec represents the data needed to create and bind
   * UniformBlockObjects
   *
   * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
   * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
   * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
   * @memberOf module:twgl/programs
   */
  function createUniformBlockSpecFromProgram(gl, program) {
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
    const uniformData = [];
    const uniformIndices = [];

    for (let ii = 0; ii < numUniforms; ++ii) {
      uniformIndices.push(ii);
      uniformData.push({});
      const uniformInfo = gl.getActiveUniform(program, ii);
      if (isBuiltIn(uniformInfo)) {
        break;
      }
      uniformData[ii].name = uniformInfo.name;
    }

    [
      [ "UNIFORM_TYPE", "type" ],
      [ "UNIFORM_SIZE", "size" ],  // num elements
      [ "UNIFORM_BLOCK_INDEX", "blockNdx" ],
      [ "UNIFORM_OFFSET", "offset", ],
    ].forEach(function(pair) {
      const pname = pair[0];
      const key = pair[1];
      gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function(value, ndx) {
        uniformData[ndx][key] = value;
      });
    });

    const blockSpecs = {};

    const numUniformBlocks = gl.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);
    for (let ii = 0; ii < numUniformBlocks; ++ii) {
      const name = gl.getActiveUniformBlockName(program, ii);
      const blockSpec = {
        index: gl.getUniformBlockIndex(program, name),
        usedByVertexShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
        usedByFragmentShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
        size: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_DATA_SIZE),
        uniformIndices: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),
      };
      blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
      blockSpecs[name] = blockSpec;
    }

    return {
      blockSpecs: blockSpecs,
      uniformData: uniformData,
    };
  }

  /**
   * Creates setter functions for all attributes of a shader
   * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
   *
   * @see {@link module:twgl.setAttributes} for example
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLProgram} program the program to create setters for.
   * @return {Object.<string, function>} an object with a setter for each attribute by name.
   * @memberOf module:twgl/programs
   */
  function createAttributeSetters(gl, program) {
    const attribSetters = {
    };

    const numAttribs = gl.getProgramParameter(program, ACTIVE_ATTRIBUTES);
    for (let ii = 0; ii < numAttribs; ++ii) {
      const attribInfo = gl.getActiveAttrib(program, ii);
      if (isBuiltIn(attribInfo)) {
          continue;
      }
      const index = gl.getAttribLocation(program, attribInfo.name);
      const typeInfo = attrTypeMap[attribInfo.type];
      const setter = typeInfo.setter(gl, index, typeInfo);
      setter.location = index;
      attribSetters[attribInfo.name] = setter;
    }

    return attribSetters;
  }

  /**
   * @typedef {Object} ProgramInfo
   * @property {WebGLProgram} program A shader program
   * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
   * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
   * @property {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
   * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
   * @memberOf module:twgl
   */

  /**
   * Creates a ProgramInfo from an existing program.
   *
   * A ProgramInfo contains
   *
   *     programInfo = {
   *        program: WebGLProgram,
   *        uniformSetters: object of setters as returned from createUniformSetters,
   *        attribSetters: object of setters as returned from createAttribSetters,
   *     }
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {WebGLProgram} program an existing WebGLProgram.
   * @return {module:twgl.ProgramInfo} The created ProgramInfo.
   * @memberOf module:twgl/programs
   */
  function createProgramInfoFromProgram(gl, program) {
    const uniformSetters = createUniformSetters(gl, program);
    const attribSetters = createAttributeSetters(gl, program);
    const programInfo = {
      program: program,
      uniformSetters: uniformSetters,
      attribSetters: attribSetters,
    };

    if (isWebGL2(gl)) {
      programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
      programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
    }

    return programInfo;
  }

  /**
   * Creates a ProgramInfo from 2 sources.
   *
   * A ProgramInfo contains
   *
   *     programInfo = {
   *        program: WebGLProgram,
   *        uniformSetters: object of setters as returned from createUniformSetters,
   *        attribSetters: object of setters as returned from createAttribSetters,
   *     }
   *
   * NOTE: There are 4 signatures for this function
   *
   *     twgl.createProgramInfo(gl, [vs, fs], options);
   *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSources Array of sources for the
   *        shaders or ids. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
   * @memberOf module:twgl/programs
   */
  function createProgramInfo(
      gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    let good = true;
    shaderSources = shaderSources.map(function(source) {
      // Lets assume if there is no \n it's an id
      if (source.indexOf("\n") < 0) {
        const script = getElementById(source);
        if (!script) {
          progOptions.errorCallback("no element with id: " + source);
          good = false;
        } else {
          source = script.text;
        }
      }
      return source;
    });
    if (!good) {
      return null;
    }
    const program = createProgramFromSources(gl, shaderSources, progOptions);
    if (!program) {
      return null;
    }
    return createProgramInfoFromProgram(gl, program);
  }

  function html2element$2(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim(); // Never return a text node of whitespace as the result

    return template.content.firstChild;
  } // html2element
   // joinDataToElements

  function multiplyMatrices(a, b) {
    // TODO - Simplify for explanation
    // currently taken from https://github.com/toji/gl-matrix/blob/master/src/gl-matrix/mat4.js#L306-L337
    var result = [];
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15]; // Cache only the current line of the second matrix

    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    result[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    result[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    result[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    result[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return result;
  }
  function multiplyArrayOfMatrices(matrices) {
    var inputMatrix = matrices[0];

    for (var i = 1; i < matrices.length; i++) {
      inputMatrix = multiplyMatrices(inputMatrix, matrices[i]);
    }

    return inputMatrix;
  }
  function scaleMatrix(w, h, d) {
    return [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
  }
  function translateMatrix(x, y, z) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
  }
  function invertMatrix(matrix) {
    // Adapted from: https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js
    // Performance note: Try not to allocate memory during a loop. This is done here
    // for the ease of understanding the code samples.
    var result = [];
    var n11 = matrix[0],
        n12 = matrix[4],
        n13 = matrix[8],
        n14 = matrix[12];
    var n21 = matrix[1],
        n22 = matrix[5],
        n23 = matrix[9],
        n24 = matrix[13];
    var n31 = matrix[2],
        n32 = matrix[6],
        n33 = matrix[10],
        n34 = matrix[14];
    var n41 = matrix[3],
        n42 = matrix[7],
        n43 = matrix[11],
        n44 = matrix[15];
    result[0] = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
    result[4] = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
    result[8] = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
    result[12] = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    result[1] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
    result[5] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
    result[9] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
    result[13] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
    result[2] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
    result[6] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
    result[10] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
    result[14] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
    result[3] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
    result[7] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
    result[11] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
    result[15] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;
    var determinant = n11 * result[0] + n21 * result[4] + n31 * result[8] + n41 * result[12];

    if (determinant === 0) {
      throw new Error("Can't invert matrix, determinant is 0");
    }

    for (var i = 0; i < result.length; i++) {
      result[i] /= determinant;
    }

    return result;
  }

  var Camera = /*#__PURE__*/function () {
    // A third angle could be used to encode the camera 'roll'. 'z' is not changed in the current apps, but it would be used if the camera had 'walking' controls, e.g. through the arrow keys.
    function Camera() {
      _classCallCheck(this, Camera);

      this.mouseDown = false;
      this.mouseStart = [0, 0];
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.theta = 0;
      this.phi = 0;
      this.xStart = 0;
      this.yStart = 0;
      this.thetaStart = 0;
      this.phiStart = 0;
      this.fieldOfViewInRadians = Math.PI * 0.2;
      this.aspectRatio = 1;
      this.nearClippingPlaneDistance = 1;
      this.farClippingPlaneDistance = 100;
    } // constructor


    _createClass(Camera, [{
      key: "moveStart",
      value: function moveStart(x, y) {
        var obj = this;
        obj.mouseStart = [x, y];
        obj.mouseDown = true;
        obj.thetaStart = obj.theta;
        obj.phiStart = obj.phi;
        obj.xStart = obj.x;
        obj.yStart = obj.y;
      } // moveStart

    }, {
      key: "move",
      value: function move(x, y) {
        var obj = this;

        if (obj.mouseDown) {
          // Angles have to be in radians!! Division by 4 is just a relaxation parameter.
          var diffX = Math.PI / 180 * (x - obj.mouseStart[0]) / 4;
          var diffY = Math.PI / 180 * (y - obj.mouseStart[1]) / 4;
          obj.theta = obj.thetaStart + diffX;
          obj.phi = constrainValue(obj.phiStart - diffY, -Math.PI / 2, Math.PI / 2);
        } // if  

      } // move

    }, {
      key: "moveEnd",
      value: function moveEnd() {
        var obj = this;
        obj.mouseDown = false;
      } // moveEnd

    }, {
      key: "incrementNearClippingPlane",
      value: function incrementNearClippingPlane(d) {
        var obj = this;
        obj.nearClippingPlaneDistance = Math.max(1, obj.nearClippingPlaneDistance + d / 10);
      } // cameraChangeDist

    }]);

    return Camera;
  }(); // Camera
  var Camera2D = /*#__PURE__*/function (_Camera) {
    _inherits(Camera2D, _Camera);

    var _super = _createSuper(Camera2D); // The 2D camera has panning instead of changing the camera angle.
    // The z coordinate is not important here because it gets defined in the shaders as 0 in any case.


    function Camera2D() {
      var _this;

      _classCallCheck(this, Camera2D);

      _this = _super.call(this);

      var obj = _assertThisInitialized(_this);

      obj.zoomPointClip = [0, 0];
      obj.k = 1;
      return _this;
    } // constructor


    _createClass(Camera2D, [{
      key: "move",
      value: function move(x, y, vpp) {
        // Instead of changing the camera pitch/yaw/roll pan the view.
        var obj = this;
        vpp = vpp == undefined ? 1 : vpp;

        if (obj.mouseDown) {
          var diffX = (x - obj.mouseStart[0]) * vpp;
          var diffY = (y - obj.mouseStart[1]) * vpp; // Limit the panning?

          obj.x = obj.xStart - diffX;
          obj.y = obj.yStart + diffY;
        } // if  

      } // move

    }, {
      key: "incrementZoomValue",
      value: function incrementZoomValue(d) {
        this.k += d;
      } // incrementZoomValue

    }]);

    return Camera2D;
  }(Camera); // Camera2D

  function constrainValue(v, a, b) {
    // Constrain value 'v' to a <= v <= b.
    return Math.max(Math.min(v, b), a);
  } // constrainValue

  // Furthermore the overall wrapper is defined here so that after the class is inherited from there is space to append other modules. The class is inherited from (as opposed to plugged in as a module)

  var template$7 = "\n<div class=\"item\">\n  <div class=\"label\">Label</div>\n  <div class=\"view\" style=\"width:300px; height:200px; opacity:0.001;\">\n  </div>\n</div>\n";

  var ViewFrame2D = /*#__PURE__*/function () {
    function ViewFrame2D(gl) {
      _classCallCheck(this, ViewFrame2D);

      var obj = this; // Only needs gl to check whether the view is on frame or not.

      obj.gl = gl;
      obj.node = html2element$2(template$7); // obj.view is a convenience reference that points to the node. Transforms.view is the view transformation matrix.

      obj.view = obj.node.querySelector("div.view"); // Some initial dummy geometry to allow initialisation.

      obj.geometry = {
        domain: {
          x: [0, 1],
          y: [0, 1]
        }
      }; // initial dummy values
      // Transformation matrices.

      obj.transforms = {};
      /*
      Interactivity:
      What should clicking and dragging do? Pan, or adjust camera angle? 
      
      For 2D panning is more useful.
      For 3D adjusting the camera angle is better.
      */

      obj.camera = new Camera2D(); // (e.clientX, e.clientY)

      obj.view.onmousedown = function (e) {
        obj.cameraMoveStart(e);
      };

      obj.view.onmousemove = function (e) {
        obj.cameraMove(e);
      };

      obj.view.onmouseup = function (e) {
        obj.cameraMoveEnd();
      };

      obj.view.onmouseleave = function (e) {
        obj.cameraMoveEnd();
      }; // adding a zoom directly causes the passive event warning to come up in the console, and also stops the wheel event from being properly executed.
      // If the div is empty the event does not occur!


      obj.view.addEventListener("wheel", function (e) {
        e.preventDefault();
        obj.cameraZoom(e);
      }, {
        passive: false
      });
    } // constructor

    /* The geometry moving is implemented in 'computeModelMatrix'. User interaction movement is implemented in 'computeViewMatrix'.  */


    _createClass(ViewFrame2D, [{
      key: "computeModelMatrix",
      value: function computeModelMatrix() {
        // The model matrix incorporates the initial scaling and translation to make sure the data fits in view.
        var dom = this.geometry.domain; // First translate left bottom corner to origin, scale so that top right domain corner is at 2,2, and then reposition so that domain is between -1 and 1.

        var k = 2 / Math.max(dom.x[1] - dom.x[0], dom.y[1] - dom.y[0]); // Correct for the aspect ratio of the view element. For now the y domain is rescaled because the example data featured a larger x domain, and the width was kep constant. This can be made adjustable later.

        var kar = (dom.x[1] - dom.x[0]) / (dom.y[1] - dom.y[0]);
        var translateToOrigin = translateMatrix(-dom.x[0], -dom.y[0], 0);
        var scaleToClipSpace = scaleMatrix(k, k * kar, 1);
        var translateToScaleSpace = translateMatrix(-1, -1, 0);
        this.transforms.model = multiplyArrayOfMatrices([translateToScaleSpace, scaleToClipSpace, translateToOrigin]); // model
        // Performance caveat: in real production code it's best not to create new arrays and objects in a loop. This example chooses code clarity over performance.
      } // computeModelMatrix

    }, {
      key: "computeOrthographicMatrix",
      value: function computeOrthographicMatrix() {
        // viewport: left, bottom, width, height
        this.transforms.projection = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      } // computeOrthographicMatrix

    }, {
      key: "computeViewMatrix",
      value: function computeViewMatrix() {
        var camera = this.camera; // PANNING

        var position = translateMatrix(camera.x, camera.y, camera.z); // For zooming a scaling operation should be performed. And the zooming should be based on hte pointers position. So that point should stay in hte same position, while the rest of the view scales.
        // The values need to be in coordinate units! So the pixel location needs to be changed to value location. Mouse locations are per client window, and so must be corrected for viewport location to ensure consistent zooming behavior. Initially the zooming is not needed.
        // THE ZOOM POINT MUST BE CONVERTED TO THE CLIP SPACE FROM PIXEL COORDINATES!!! I want to translate to 0,0. That's the middle of the viewport. y has to be calculated in terms of client window.
        // For zooming I want the zoomed point to remain where it is at the moment, and everything around it should be scaled. So, for that to happen the mesh needs to be translated by the location of the point in clip coordinates, scaled, and translated back to the same coordinates in pixel values.

        var dx = camera.zoomPointClip[0];
        var dy = camera.zoomPointClip[1];
        var k = camera.k; // let x0 = camera.mouseStart[0] * this.valuePerPixel;
        // let y0 = camera.mouseStart[1] * this.valuePerPixel;
        // let k  = camera.k;

        var translateToOrigin = translateMatrix(-dx, -dy, 0);
        var scaleToZoomSpace = scaleMatrix(k, k, 1);
        var translateToZoomSpace = translateMatrix(dx, dy, 0); // Inverse the operation for camera movements, because we are actually moving the geometry in the scene, not the camera itself.
        // this.transforms.view = invertMatrix( position );

        this.transforms.view = multiplyArrayOfMatrices([invertMatrix(position), translateToZoomSpace, scaleToZoomSpace, translateToOrigin]); // model
      } // computeViewMatrix
      // On the go updates.

    }, {
      key: "update",
      value: function update() {
        var obj = this; // Compute our matrices

        obj.computeModelMatrix();
        obj.computeViewMatrix();
        obj.computeOrthographicMatrix();
      } // update

    }, {
      key: "viewport",
      get: function get() {
        var obj = this;
        var gl = obj.gl;
        var rect = obj.view.getBoundingClientRect(); // The viewport bottom is measured from the bottom of the screen.

        var width = rect.right - rect.left;
        var height = rect.bottom - rect.top;
        var left = rect.left;
        var bottom = gl.canvas.clientHeight - rect.bottom;
        return [left, bottom, width, height];
      } // get viewport

    }, {
      key: "valuePerPixel",
      get: function get() {
        // The zoom transformation will work in the clip space, which is within [-1,1]. Therefore the range is 2, and independent of hte domain of the data.
        var obj = this;
        var arx = obj.camera.k * 2 / obj.viewport[2];
        var ary = obj.camera.k * 2 / obj.viewport[3];
        return Math.max(arx, ary);
      } // get aspectRatio

    }, {
      key: "isOnScreen",
      get: function get() {
        // Check whether the viewframe is still on hte canvas screen. If it's display has been set to "none" then just return a false. "display: none" will be required when introducing the grouping interfaces.
        var obj = this;
        var isOnScreen = false;

        if (obj.node.style.display != "none") {
          var rect = obj.node.getBoundingClientRect();
          var isOffScreen = rect.bottom < 0 || rect.top > obj.gl.canvas.clientHeight || rect.right < 0 || rect.left > obj.gl.canvas.clientWidth;
          isOnScreen = !isOffScreen;
        } // if


        return isOnScreen;
      } // isOnScreen
      // Camera

    }, {
      key: "cameraMoveStart",
      value: function cameraMoveStart(e) {
        var camera = this.camera;
        camera.moveStart(e.clientX, e.clientY);
      } // startMove

    }, {
      key: "cameraMove",
      value: function cameraMove(e) {
        var camera = this.camera;
        camera.move(e.clientX, e.clientY, this.valuePerPixel);
      } // cameraMove

    }, {
      key: "cameraMoveEnd",
      value: function cameraMoveEnd() {
        var camera = this.camera;
        camera.moveEnd();
      } // cameraMoveEnd

    }, {
      key: "cameraZoom",
      value: function cameraZoom(e) {
        var obj = this; // The 2D camera works off of a zoom value, because the perspective does not change. There is no perspective transformation because the data only has x/y, and to make zoom work through perspective a third z value would have to be spliced into the ArrayBuffer data.
        // The first translate can be made using the clip coordinates. The translate back after scaling has to be done using pixels, because the point should stay at the same pixel location. Store both the clip coordinate, and the pixel coordinate.

        obj.camera.zoomPointClip = obj.pixel2clip([e.clientX, e.clientY]);
        obj.camera.incrementZoomValue(e.deltaY < 0 ? 0.1 : -0.1);
      } // cameraChangeDist

    }, {
      key: "pixel2clip",
      value: function pixel2clip(p) {
        // Pixel values can be obtained from the event. Convert the pixel value to the clip space values.
        var obj = this;
        var rect = obj.view.getBoundingClientRect(); // Clicked point within the viewport, in terms of pixels.

        var x_px = p[0] - rect.left;
        var y_px = p[1] - rect.top; // Convert to clip coordinates. Camera.x is in data coordinates.

        var x_clip = 2 * (x_px / (rect.right - rect.left)) - 1;
        var y_clip = -2 * (y_px / (rect.bottom - rect.top)) + 1;
        return [x_clip, y_clip];
      } // pixel2clip
      // When finding the return transformation I'm figuring out what the translation of the left lower corner should be to keep a particular point at the same pixel location.
      // But the model matrix converts from the data domain to hte clip domain.

    }, {
      key: "title",
      value: function title(label) {
        // Change the title of the player.
        this.node.querySelector("div.label").textContent = label;
      } // title

    }]);

    return ViewFrame2D;
  }(); // ViewFrame2D

  /*
  Should these be split up into a Mesh2D superclass and an UnsteadyMesh2D childclass?
  */
  // Some geometry to initialise the buffers.

  var vertices = [1, -0.99, 1, -1, 0.99, -1]; // vertices
  // clockwise triangles. 

  var indices = [0, 1, 2]; // indices
  // values per vertex

  var values = [0, 0, 0]; // values
  // Initial domain.

  var initdomain = {
    x: [-1, 1],
    y: [-1, 1],
    v: [0, 1],
    t: [0, 1]
  };

  var Mesh2D = /*#__PURE__*/function () {
    function Mesh2D(gl, unsteadyMetadataFilename) {
      _classCallCheck(this, Mesh2D);

      this.domain = initdomain;
      this.timesteps = [];
      var obj = this;
      obj.gl = gl; // obj.vertices = vertices;
      // obj.indices = indices;
      // obj.colors = colors;
      // "In case of glBufferData, the buffer object currently bound to target is used." (https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBufferData.xhtml)
      // Size of the data used by each vertex is selected in 'MeshRenderer.updateAttributesAndUniforms'. However, that should really be kept with the data specification, so that MeshRenderer doesn't need to change if the data changes. Then the MeshRenderer becomes independent of the dimension of data.

      var verticesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      obj.verticesBuffer = verticesBuffer;
      var valuesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, valuesBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
      obj.valuesBuffer = valuesBuffer;
      var indicesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), gl.STATIC_DRAW);
      obj.indicesBuffer = indicesBuffer;
      obj.indicesLength = indices.length; // If teh index defines which frame to play next, then the timesteps need to be ordered. Maybe it's best to just enforce this by sorting the timesteps when they are loaded.

      obj._currentFrameInd = 0; // Imagine that some metadata was loaded in.
      // "./data/testmetadata.json"

      fetch(unsteadyMetadataFilename).then(function (res) {
        return res.json();
      }).then(function (content) {
        // But all three need to be available at the same time before rendering.
        var indicesPromise = loadBinData(content.indices).then(function (ab) {
          return new Uint32Array(ab);
        });
        var verticesPromise = loadBinData(content.vertices).then(function (ab) {
          return new Float32Array(ab);
        });
        /* The values should be loaded in separately from the vertices and indices.
        
        Do we just loop through some timesteps and make the promises. However, the data size restrictions should be maintained at all times! The data loading function should keep that in mind.
        */

        var valuesPromise = loadBinData(content.timesteps[obj.currentFrameInd].filename).then(function (ab) {
          return new Uint8Array(ab);
        }).then(function (ui8) {
          return Float32Array.from(ui8);
        });
        Promise.all([indicesPromise, verticesPromise, valuesPromise]).then(function (d) {
          // Domain has to be overwritten when the actual data is loaded. Afterwards, only the 'c' property should change with the timesteps. By changing the global color value ranges the colorbar can be adjusted by the user.]
          obj.domain = content.domain;
          obj.timesteps = content.timesteps;
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, d[0], gl.STATIC_DRAW);
          obj.indicesLength = d[0].length;
          gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, d[1], gl.STATIC_DRAW);
          gl.bindBuffer(gl.ARRAY_BUFFER, valuesBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, d[2], gl.STATIC_DRAW);
        }); // then
      }); // fetch
    } // constructor
    // The 'values' are stored as a 'scaled uint8 array' to save memory. The values are retransformed back into the original domain on the GPU by mapping them from [0,255] to 'currentUintRange', which is obtained from the metadata file of this unsteady simulation.
    // The MeshRenderer2D looks at the domain to determine what the full value domain of this small multiple will be. It looks at the c to determine the uint compression domain.


    _createClass(Mesh2D, [{
      key: "currentUintRange",
      get: function get() {
        // This used to be in domain under 'c', but was moved here as it will change as the frames change.
        var obj = this;
        return obj.timesteps.length > 0 ? obj.timesteps[obj.currentFrameInd].c_uint : [0, 1]; // return [871, 977]
      } // currentUintRange

    }, {
      key: "currentTime",
      get: function get() {
        // Get the time of the current frame as a fraction of the total time span available.
        var obj = this;
        return obj.timesteps[obj.currentFrameInd].t;
      } // currentTimestep

    }, {
      key: "memoryUsed",
      get: function get() {
        var obj = this;
        var memory = 0;
        obj.timesteps.forEach(function (t) {
          if (t.byteLength) {
            memory += t.byteLength;
          } // if

        });
        return memory;
      } // memoryUsed
      // There should be two separate methods to pick the current frame. One is by incrementing, and the other is by setting the appropriate time.

    }, {
      key: "incrementCurrentFrame",
      value: function incrementCurrentFrame() {
        // When incrementing past the end of the available time range we loop to the start.
        var obj = this;
        obj.currentFrameInd = (obj.currentFrameInd + 1) % obj.timesteps.length;
      } // incrementCurrentFrame

    }, {
      key: "timestepCurrentFrame",
      value: function timestepCurrentFrame(t) {
        // Different players can start at different times. However, if a dt is passed in to increment the current frame the incrementing can truncate a part of the dt, leading to different players to be at different times. Therefore the actual time is expected. If t is outside of the time range available, the min or max frame indices are returned as appropriate.
        var obj = this;
        var i = 0;
        var dist = Number.POSITIVE_INFINITY;
        obj.timesteps.forEach(function (timestep, j) {
          var d = Math.abs(timestep.t - t);

          if (d < dist) {
            dist = d;
            i = j;
          } // if

        }); // forEach

        obj.currentFrameInd = i;
      } // timestepCurrentFrame
      // This should be reworked into an outside call, because eventually it would be beneficial if the files can be loaded by a library system, and the mesh is only responsible to declare what it would like?

    }, {
      key: "currentFrameInd",
      get: // set currentFrameInd
      function get() {
        return this._currentFrameInd;
      } // get currentFrameInd
      ,
      set: function set(i) {
        // When the index is set automatically manage the data. This will allow the data to be loaded once and kept in memory.
        var obj = this;
        obj._currentFrameInd = i; // For now just load the current frame here, and save it to the timestep.

        var timestep = obj.timesteps[obj._currentFrameInd];

        if (timestep.valuesPromise == undefined) {
          timestep.valuesPromise = loadBinData(timestep.filename).then(function (ab) {
            return new Uint8Array(ab);
          });
          timestep.valuesPromise.then(function (ui8) {
            timestep.byteLength = ui8.byteLength;
          });
        } // if

      }
    }, {
      key: "updateCurrentFrameBuffer",
      value: function updateCurrentFrameBuffer() {
        // The UnsteadyPlayer will input an actual timestep, as opposed to just increment the frame. This allows simulations with different temporal resolutions to be compared directly. Comparable time frames are selected based on available data.
        // What will be passed in? Just an icrement I guess, and it's up to the user to provide time variables with the same dt and in the same domain.
        var obj = this;
        var gl = obj.gl; // The values from the files were stored as uint8, but the GPU requires them to be float32. The data is converted just before passing it to the buffer.	

        obj.timesteps[obj.currentFrameInd].valuesPromise.then(function (ui8) {
          return Float32Array.from(ui8);
        }).then(function (f32) {
          gl.bindBuffer(gl.ARRAY_BUFFER, obj.valuesBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, f32, gl.STATIC_DRAW);
        });
      } // updateCurrentFrameBuffer

    }]);

    return Mesh2D;
  }(); // Mesh2D

  function loadBinData(filename) {
    return fetch(filename).then(function (res) {
      return res.arrayBuffer();
    });
  } // getBinData

  /*
  {
  	x: [-0.76, 1.01],
  	y: [-0.1, 1],
  	v: [870.4389253677576, 977.0020293037556]
  }
  */

  function html2element$1(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim(); // Never return a text node of whitespace as the result

    return template.content.firstChild;
  } // html2element

  function svg2element$1(svg) {
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.innerHTML = svg.trim();
    return g.firstChild;
  } // svg2element

  var scaleLinear$1 = /*#__PURE__*/function () {
    function scaleLinear() {
      _classCallCheck(this, scaleLinear);

      this._domain = [0, 1];
      this._range = [0, 1];
    }

    _createClass(scaleLinear, [{
      key: "domain",
      get: // domain
      function get() {
        return this._domain;
      } // domain
      ,
      set: function set(d) {
        this._domain = d;
      }
    }, {
      key: "range",
      get: // range
      function get() {
        return this._range;
      } // range
      ,
      set: function set(r) {
        this._range = r;
      }
    }, {
      key: "dom2range",
      value: function dom2range(v) {
        return mapSpaceAValueToSpaceB$1(v, this.domain, this.range);
      } // dom2range

    }, {
      key: "range2dom",
      value: function range2dom(v) {
        return mapSpaceAValueToSpaceB$1(v, this.range, this.domain);
      } // range2dom

    }]);

    return scaleLinear;
  }(); // scaleLinear

  function mapSpaceAValueToSpaceB$1(v, A, B) {
    return (v - A[0]) / (A[1] - A[0]) * (B[1] - B[0]) + B[0];
  } // mapSpaceAValueToSpaceB
   // joinDataToElements

  function play(width, y) {
    // Calculate the size of the triangle, and where the drawing should begin.
    var height = width * 2 * Math.sqrt(3) / 3;
    var r_max = height * Math.sqrt(3) / 6;
    var r = 3 > r_max ? r_max : 3;
    var dH = r * Math.sqrt(3); // Length of side cut by 1 rounding.

    var Mx = 0;
    var My = y + 5 - height / 2;
    var p0 = [Mx, My];
    var p1 = [Mx + height * Math.sqrt(3) / 2, My + height / 2];
    var p2 = [Mx, My + height];
    return "M".concat(p0[0], " ").concat(p0[1] + dH, "\n      a ").concat(r, ",").concat(r, ", 0,0,1  ").concat(r * 3 / 2, ", ").concat(-dH / 2, "\n      L ").concat(p1[0] - r * 3 / 2, " ").concat(p1[1] - dH / 2, "\n      a ").concat(r, ",").concat(r, ", 0,0,1  0, ").concat(dH, "\n      L ").concat(p2[0] + r * 3 / 2, " ").concat(p2[1] - dH / 2, "\n      a ").concat(r, ",").concat(r, ", 0,0,1  ").concat(-r * 3 / 2, ", ").concat(-dH / 2, "\n      Z\n      ");
  } // playPath


  function pause(width, y) {
    var height = width * 2 * Math.sqrt(3) / 3 - 2 * (3 * Math.sqrt(3) - 3);
    var dx = width / 5;
    var r = 3;
    var Mx = 0;
    var My = y + 5 - height / 2;
    return "\n      M ".concat(Mx + r, " ").concat(My, " \n      L ").concat(Mx + 2 * dx - r, " ").concat(My, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(r, "\n      L ").concat(Mx + 2 * dx, " ").concat(My + height - r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(r, "\n      L ").concat(Mx + r, " ").concat(My + height, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(-r, "\n      L ").concat(Mx, " ").concat(My + r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(-r, "\n\t  M ").concat(Mx + 3 * dx + r, " ").concat(My, "\n      L ").concat(Mx + 5 * dx - r, " ").concat(My, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(r, "\n      L ").concat(Mx + 5 * dx, " ").concat(My + height - r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(r, "\n      L ").concat(Mx + 3 * dx + r, " ").concat(My + height, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(-r, "\n      L ").concat(Mx + 3 * dx, " ").concat(My + r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(-r, "\n    ");
  } // pausePath


  var template$6 = "\n<g style=\"cursor: pointer;\">\n  <path fill=\"tomato\" d=\"\"></path>\n</g>\n"; // Maybe the y should just be set outside? And the same for the chapter?? Maybe give it the y it should center itself about?
  // textHeight + textBottomMargin + rectHighlightHeightDelta + rectHeight/2 - H/2

  var PlayButton = /*#__PURE__*/function () {
    // The y is given as the centerline about which to position the button. Half above, and half below. The initial y is therefore half the height, and should draw the button completely on hte svg.
    function PlayButton() {
      _classCallCheck(this, PlayButton);

      this.y = 20 * 2 * Math.sqrt(3) / 3 / 2;
      this.width = 20;
      var obj = this;
      obj.node = svg2element$1(template$6);
    } // constructor


    _createClass(PlayButton, [{
      key: "update",
      value: function update(playing) {
        var obj = this;
        var d = playing ? pause(obj.width, obj.y) : play(obj.width, obj.y);
        obj.node.querySelector("path").setAttribute("d", d);
      } // update

    }]);

    return PlayButton;
  }(); // PlayButton

  var defaultRectAttributes = "stroke=\"white\" stroke-width=\"2px\"";
  var template$5 = "<g class=\"chapter\">\n  <rect class=\"background\" fill=\"gainsboro\" ".concat(defaultRectAttributes, "\"></rect>\n  <rect class=\"buffering\" fill=\"gray\" ").concat(defaultRectAttributes, "\"></rect>\n  <rect class=\"foreground\" fill=\"tomato\" ").concat(defaultRectAttributes, "\"></rect>\n  <text style=\"display: none;\"></text>\n</g>");

  var PlayBarAnnotation = /*#__PURE__*/function () {
    // y = textHeight + textBottomMargin + highlightHeightDelta
    function PlayBarAnnotation(config, tscale) {
      _classCallCheck(this, PlayBarAnnotation);

      this.y = 12 + 2 + 3;
      this.height = 10;
      this.dh = 4;
      var obj = this;
      obj.node = svg2element$1(template$5);
      obj.background = obj.node.querySelector("rect.background");
      obj.buffering = obj.node.querySelector("rect.buffering");
      obj.foreground = obj.node.querySelector("rect.foreground");
      obj.label = obj.node.querySelector("text");
      obj.config = config;
      obj.tscale = tscale;
      obj.node.addEventListener("mouseenter", function () {
        obj.highlight();
      }); // addEventListener

      obj.node.addEventListener("mouseover", function () {
        obj.highlight();
      }); // addEventListener

      obj.node.addEventListener("mouseout", function () {
        obj.unhighlight();
      }); // addEventListener
    } // constructor


    _createClass(PlayBarAnnotation, [{
      key: "update",
      value: function update(t_play, t_buffer) {
        var obj = this;
        var y = obj.y;
        var x = obj.tscale.dom2range(obj.config.starttime);
        obj.background.setAttribute("y", y);
        obj.background.setAttribute("x", x);
        obj.background.setAttribute("width", obj.width);
        obj.background.setAttribute("height", obj.height);
        obj.buffering.setAttribute("y", y);
        obj.buffering.setAttribute("x", x);
        obj.buffering.setAttribute("width", obj.width * obj.timeFraction(t_buffer));
        obj.buffering.setAttribute("height", obj.height);
        obj.foreground.setAttribute("y", y);
        obj.foreground.setAttribute("x", x);
        obj.foreground.setAttribute("width", obj.width * obj.timeFraction(t_play));
        obj.foreground.setAttribute("height", obj.height);
        obj.label.setAttribute("y", 12);
        obj.label.setAttribute("x", x);
        obj.label.innerHTML = obj.config.label;
      } // update

    }, {
      key: "width",
      get: function get() {
        var obj = this;
        var x0 = obj.tscale.dom2range(obj.config.starttime);
        var x1 = obj.tscale.dom2range(obj.config.endtime); // At the beginning hte widths may be negative because the starttime of the comment exceeds the time domain of the playbar that hasn't yet been updated to the right interval. Returen 0 while this is so.

        return x1 - x0 < 0 ? 0 : x1 - x0;
      } // width

    }, {
      key: "timeFraction",
      value: function timeFraction(t) {
        var obj = this;
        var tf = (t - obj.config.starttime) / (obj.config.endtime - obj.config.starttime);
        return Math.abs(tf - 0.5) <= 0.5 ? tf : tf > 0;
      } // timeFraction

    }, {
      key: "highlight",
      value: function highlight() {
        var obj = this;
        highlightRectangle(obj.background, obj.y, obj.height, obj.dh);
        highlightRectangle(obj.buffering, obj.y, obj.height, obj.dh);
        highlightRectangle(obj.foreground, obj.y, obj.height, obj.dh);
        obj.label.style.display = "";
      } // highlight

    }, {
      key: "unhighlight",
      value: function unhighlight() {
        var obj = this;
        unhighlightRectangle(obj.background, obj.y, obj.height);
        unhighlightRectangle(obj.buffering, obj.y, obj.height);
        unhighlightRectangle(obj.foreground, obj.y, obj.height);
        obj.label.style.display = "none";
      } // highlight

    }]);

    return PlayBarAnnotation;
  }(); // PlayBarAnnotation

  function highlightRectangle(r, y, h, dh) {
    r.height.baseVal.value = h + 2 * dh;
    r.y.baseVal.value = y - dh;
  } // highlightRectangle


  function unhighlightRectangle(r, y, h) {
    r.height.baseVal.value = h;
    r.y.baseVal.value = y;
  } // unhighlightRectangle

  var template$4 = "<g style=\"cursor: pointer;\"></g>"; // template

  var PlayBar = /*#__PURE__*/function () {
    // Coordinates in whole svg frame.
    function PlayBar() {
      _classCallCheck(this, PlayBar);

      this.y = 12 + 2 + 3;
      this.x0 = 20 + 6;
      this.x1 = 300;
      this.annotations = [];
      this.t_min = 0;
      this.t_max = 1;
      this.t_buffer = 0;
      this.t_play = 0;
      var obj = this;
      obj.node = svg2element$1(template$4);
      obj._tscale = new scaleLinear$1();
    } // constructor


    _createClass(PlayBar, [{
      key: "tscale",
      get: function get() {
        // The tscale is relative to the whole svg element, and takes in whole svg coordinates.
        var obj = this;
        obj._tscale.domain = [obj.t_min, obj.t_max];
        obj._tscale.range = [obj.x0, obj.x1];
        return obj._tscale;
      } // get tscale

    }, {
      key: "rebuild",
      value: function rebuild() {
        // I need to do the join, but on objects instead of elements... Or just throw them all out and create new ones? Simpler I guess
        var obj = this;
        var exiting = obj.node.querySelectorAll("g.chapter");

        for (var i = 0; i < exiting.length; i++) {
          exiting[i].remove();
        } // for
        // The creation of the chapters to show after somme annotations have been pushed still needs to be implemented.


        function makeChapterObj(label, starttime, endtime) {
          return {
            label: label,
            starttime: starttime,
            endtime: endtime == undefined ? obj.t_max : endtime
          };
        } // makeChapterObj
        // The ultimate way of doing it would be for the annotations to persist below other smaller annotations.


        var chapters = obj.annotations.reduce(function (acc, a, i) {
          var previous = acc[acc.length - 1];
          var current = makeChapterObj(a.label, a.starttime, a.endtime);

          if (previous.endtime < current.starttime) {
            // Don't curtail hte previous one but instead allow it to draw completely. This allows the chapters to be 'stacked'. Ordering them by start time ensures they all have a handle available.
            // Push in the needed padding, and then the annotation.
            acc.push(makeChapterObj("", previous.endtime, current.starttime));
          } // if


          acc.push(current);

          if (i == obj.annotations.length - 1 && current.endtime < obj.t_max) {
            acc.push(makeChapterObj("", current.endtime, obj.t_max));
          } // if


          return acc;
        }, [makeChapterObj("", obj.t_min, obj.t_max)]); // Cpters need to be sorted by starttime in order for all start points to be visible.

        obj.chapters = chapters.sort(function (a, b) {
          return a.starttime - b.starttime;
        }).map(function (c) {
          var a = new PlayBarAnnotation(c, obj.tscale);
          a.y = obj.y;
          return a;
        }); // map

        obj.chapters.forEach(function (chapter) {
          obj.node.appendChild(chapter.node);
        }); // forEach
      } // rebuild

    }, {
      key: "update",
      value: function update() {
        var obj = this;
        obj.chapters.forEach(function (chapter) {
          chapter.update(obj.t_play, obj.t_buffer);
        });
      } // update

    }, {
      key: "addchapter",
      value: function addchapter(tag) {
        // The player may need to be updated when the serverr pushes updates. Also if other users update the annotations it should appear straightaway.
        var obj = this; // tags are required to have a 'starttime'.

        if (tag.starttime) {
          var i = obj.annotations.findIndex(function (a) {
            return a.id == tag.id;
          });
          obj.annotations.splice(i > -1 ? i : 0, i > -1, tag); // Update the bar.

          obj.rebuild();
          obj.update();
        } // if

      } // addchapter

    }]);

    return PlayBar;
  }(); // PlayBar

  var template$3 = "\n<div class=\"player-controls\">\n  <svg id=\"playbar\" width=\"100%\" height=\"32px\">\n    <g class=\"playbutton\"></g>\n    <g class=\"playbar\"></g>\n  </svg>\n</div>\n"; // template

  var PlayControls = /*#__PURE__*/function () {
    function PlayControls() {
      _classCallCheck(this, PlayControls);

      this.textHeight = 12;
      this.textBottomMargin = 2;
      this.highlightHeightDelta = 3;
      var obj = this;
      obj.node = html2element$1(template$3);
      var y = obj.textHeight + obj.textBottomMargin + obj.highlightHeightDelta; // Make a play button.

      obj.button = new PlayButton();
      obj.button.y = y;
      obj.node.querySelector("g.playbutton").appendChild(obj.button.node);
      obj.button.node.addEventListener("click", function (event) {
        // Get the action required based on the button icon.
        if (obj.t_play == obj.t_max) {
          obj.t_play = obj.t_min;
        } // if


        obj.playing = !obj.playing;
      }); // addEventListener
      // The bar is just a node at this point

      obj.bar = new PlayBar();
      obj.bar.y = y;
      obj.node.querySelector("g.playbar").appendChild(obj.bar.node);
      obj.bar.node.addEventListener("click", function (event) {
        // On click the playbar should register the correct time.
        // The tscale takes inputs in the svg coordinates, and the event returns them in the client coordinates. Therefore the client coordinates must be adjusted for the position of the SVG.
        var x1 = event.clientX;
        var x0 = obj.node.getBoundingClientRect().x;
        var t = obj.bar.tscale.range2dom(x1 - x0); // Now just set the t to the right value, and update the view.

        obj.bar.t_play = t;
        obj.bar.update(); // The playtime changed, therefore pause the video.

        obj.playing = false;
        obj.skipped = true;
      }); // addEventListener

      obj.bar.rebuild();
      obj.bar.update();
      obj.playing = false;
      obj.skipped = false; // Annotations. Comments should be based on the chapter tags I think. The discussion is intended to be based on observed events. The logical progress is that events need to first be identified, and then discussed in a separate step. There should be a single dialogue box, and in that one tags can be added. This allows a single comment to be seen in multiple threads. Replies will have to be handled separately. Eventually the user should also be able to pin comments.
    } // constructor


    _createClass(PlayControls, [{
      key: "t_domain",
      get: // set t_domain
      function get() {
        return [this.bar.t_min, this.bar.t_max];
      } // get t_domain
      ,
      set: function set(t) {
        // Since t is coming from a specific location, it should be the same reference always. Therefore == comparison is valid.
        var obj = this;

        if (t[0] != obj.bar.t_min || t[1] != obj.bar.t_max) {
          obj.bar.t_min = t[0];
          obj.bar.t_max = t[1];
          obj.bar.rebuild();
          obj.bar.update();
        } // if

      }
    }, {
      key: "playing",
      get: // set playing
      function get() {
        // Always return false if the time value is outside of the domain?
        return this._playing;
      } // get playing
      // FUNCTIONALITY
      ,
      set: function set(v) {
        var obj = this;
        obj._playing = v;
        obj.update();
      }
    }, {
      key: "update",
      value: function update() {
        var obj = this;
        obj.button.update(obj.playing);
        obj.bar.update();
      } // update

    }]);

    return PlayControls;
  }(); // PlayControls

  // On the other hand, when discussing the tags it's good to avoid misunderstaning.
  // Furthermore, it would be good to just accept someone elses tags. What about clicking on the users name? Then select adopting their annotations? How do you revert back? A clear all button? Allow reloading of annotations for editing??
  // Anyway, the commenting should show all possible annotations.
  // What about showing the most popular annotations by default?? Ideally, the annotations would show up when the comment addressing them would be hovered over.

  var template$2 = "\n<div>\n  <div class=\"playcontrols-wrapper\"></div>\n  <div class=\"chapterform-wrapper\"></div>\n  <div class=\"commenting-wrapper\"></div>\n</div>\n"; // template

  var interactivePlayerUI = /*#__PURE__*/function () {
    function interactivePlayerUI(id) {
      _classCallCheck(this, interactivePlayerUI);

      var obj = this;
      obj.viewid = id;
      obj.node = html2element$1(template$2);
      obj.playControlsWrapperNode = obj.node.querySelector("div.playcontrols-wrapper");
      obj.chapterFormWrapperNode = obj.node.querySelector("div.chapterform-wrapper");
      obj.commentingWrapperNode = obj.node.querySelector("div.commenting-wrapper"); // Add in a playbar

      obj.playcontrols = new PlayControls();
      obj.playControlsWrapperNode.appendChild(obj.playcontrols.node);
      /* MOVE THIS TO THE KNOWLEDGE MANAGER!!
      // The tag adding.
      obj.chapterform = new ChapterForm();
      obj.chapterFormWrapperNode.appendChild( obj.chapterform.node )
      
      // Add in the commenting system. The metadata filename is used as the id of this 'video', and thus this player. The node needs to be added also.
      obj.commenting = new CommentingManager( id );
      obj.commentingWrapperNode.appendChild( obj.commenting.node );
      
      
      //  Tags need to be pushed to the playbar, but also to the commenting! Should individual tags be allowed to influence the navigation? I guess so?
      obj.chapterform.submit = function(tag){
      	obj.playcontrols.bar.addchapter(tag);
      	
      	let discussiontags = obj.playcontrols.bar.annotations.map(a=>a.label);
      	obj.commenting.discussion.update(discussiontags);
      } // submit
      */
      // Add onhover events to the tagged keywords in the text? That allows the user to show exactly which part of the data they meant, and also to compare it to others interpretations.
      // What happens when the user replies in a thread for which he does not have an annotation for? For replies, it's the parent annotations that get pasted in. But what if you're making a general comment without having the playbar annotations? Which one should get selected? Or should just the text tags be retained? But in that case I can't show the different versions. Maybe keep the tag names, but also keep the annotations separate - that way they can only be added for mouseover if they're in hte text? And in the text they need to be marked using a #? But then no disagreements with the thread parent comment are possible... How to deal with this? Only allow the user to use their own annotations?
      // Anyyyyyway, first include the tree navigation
    } // constructor

    /*
    Getters and setters to simplify the API:
    t_domain
    t
    playing
    skipped
    user
    */


    _createClass(interactivePlayerUI, [{
      key: "playing",
      get: function get() {
        return this.playcontrols.playing;
      } // get playing

    }, {
      key: "skipped",
      get: function get() {
        return this.playcontrols.skipped;
      } // get skipped
      ,
      set: function set(v) {
        this.playcontrols.skipped = false;
      } // set skipped

    }, {
      key: "t_play",
      get: function get() {
        return this.playcontrols.bar.t_play;
      } // get t_play
      ,
      set: function set(t) {
        // this.chapterform.t = t;
        this.playcontrols.bar.t_play = t;
        this.playcontrols.bar.update();
      } // set t_play

    }, {
      key: "t_domain",
      get: function get() {
        return this.playcontrols.t_domain;
      } // get t_domain
      ,
      set: function set(t) {
        this.playcontrols.t_domain = t;
      } // set t_domain

    }, {
      key: "user",
      get: function get() {
        // The annotation form is the primary annotation.
        return this.chapterform.user;
      } // get user
      ,
      set: function set(name) {
        this.commenting.user = name;
        this.chapterform.user = name;
      } // set user

    }, {
      key: "metadata",
      get: // set metadata
      function get() {
        return this._metadata;
      } // set metadata
      ,
      set: function set(m) {
        this._metadata = m; // this.chapterform.taskId = m.taskId;
      }
    }]);

    return interactivePlayerUI;
  }(); // interactivePlayerUI

  // It's advantageous to inherit from ViewFrame2D because the geometry changes on the go - first some dummy geometry is specified, and after the actual geometry is loaded in that just gets automatically used on next FrameAnimationRate step. If the ViewFrame is a module then the UnsteadyPlayer has to monitor when the geometry changes, and update the ViewFrame accordingly.
  // Because it's advantageous to inherit from ViewFrame2D it is also advantageous to create the outside html player wrapper in it. Then the unsteady player only needs to add other modules into it.

  var UnsteadyPlayer2D = /*#__PURE__*/function (_ViewFrame2D) {
    _inherits(UnsteadyPlayer2D, _ViewFrame2D);

    var _super = _createSuper(UnsteadyPlayer2D);

    function UnsteadyPlayer2D(gl, unsteadyMetadataFilename) {
      var _this;

      _classCallCheck(this, UnsteadyPlayer2D); // The gl in the superclass is only used to determine whether the view is on screen. The gl in the mesh2D is vital as it creates the buffers.


      _this = _super.call(this, gl);

      var obj = _assertThisInitialized(_this); // Actual geometry to be drawn.


      obj.geometry = new Mesh2D(gl, unsteadyMetadataFilename); // The FPS at which to swap out data.

      obj.fps = 24;
      obj.dt = 1000 / obj.fps;
      obj.timelastdraw = 0; // Add in precofigured UI. The metadata filename identifies this small multiple.

      obj.ui = new interactivePlayerUI(unsteadyMetadataFilename);
      obj.node.appendChild(obj.ui.node);
      return _this;
    } // constructor


    _createClass(UnsteadyPlayer2D, [{
      key: "update",
      value: function update(now) {
        var obj = this; // Compute the view matrices

        obj.computeModelMatrix();
        obj.computeViewMatrix();
        obj.computeOrthographicMatrix(); // Will the rendering loop have to be redone in order to allow promises to be returned to ensure that the player is ready for the next step?

        if (now > obj.timelastdraw + obj.dt) {
          if (obj.ui.playing) {
            obj.timelastdraw = now;
            obj.incrementTimeStep();
          } else if (obj.ui.skipped) {
            obj.timelastdraw = now;
            obj.incrementTimeStep(0);
            obj.ui.skipped = false;
          } // if

        } // if
        // The time domain can only be known AFTER the metadata is loaded. But, after the timesteps are updated the playcontrols need to be updated too. Specifically, the chapters need to be rebuild because they are independent of the actual annotations. But they currently don't need to be! Yes, they do - e.g. padding etc.


        obj.ui.t_domain = obj.geometry.domain.t;
      } // update

    }, {
      key: "incrementTimeStep",
      value: function incrementTimeStep(dt) {
        /*
        The small multiple should be able to play on its own. In that case it should just update the data 24 times per second.
        
        It should of course support playing several small multiples at once. If the 'dt' for all the simulations are the same then playing several at once just requires an input that will toggle several small multiples on at the same time. If the 'dt' are not the same, then it becomes more difficult because the data can't be loaded by incrementing, and instead a desired time must be passed to the player. Furthermore, the player should support several small multiples to be played at once, but starting from different times. In those cases the player must keep track of the time increment total to ensure all small multiples move by the same amount.
        
        For now the playbar can just play forward correctly, and the t_play can be used to keep track of the actual playing time. The dt is just added on to that time them.
        */
        var obj = this;

        if (dt >= 0) {
          var t_new = obj.ui.t_play + dt;
          obj.geometry.timestepCurrentFrame(t_new);
          obj.ui.t_play = t_new;
        } else {
          obj.geometry.incrementCurrentFrame();
          obj.ui.t_play = obj.geometry.currentTime;
        } // if


        obj.geometry.updateCurrentFrameBuffer();
      } // incrementTimeStep

    }]);

    return UnsteadyPlayer2D;
  }(ViewFrame2D); // UnsteadyPlayer2D

  var vertshader = "\n//Each point has a position and color\nattribute vec2 position;\nattribute float value;\n\n// The transformation matrices\nuniform mat4 model;\nuniform mat4 view;\nuniform mat4 projection;\n\n// Pass the color attribute down to the fragment shader\nvarying float v_uint_colorval;\n\nvoid main() {\n  \n  // Pass the color down to the fragment shader.\n  v_uint_colorval = value;\n  \n  // Read the multiplication in reverse order, the point is taken from the original model space and moved into world space. It is then projected into clip space as a homogeneous point. Generally the W value will be something other than 1 at the end of it.\n  gl_Position = projection * view * model * vec4( position, 0.0, 1.0 );\n}";
  var fragshader = "\nprecision mediump float;\nvarying float v_uint_colorval;\n\nuniform sampler2D colormap;\nuniform float u_cmin, u_cmax;\nuniform float u_uint_cmin, u_uint_cmax;\n\nvoid main() {\n  gl_FragColor = texture2D(colormap, vec2( ( (v_uint_colorval/255.0*(u_uint_cmax-u_uint_cmin)+u_uint_cmin) - u_cmin)/(u_cmax-u_cmin), 0.5));;\n}"; // A viridis colormap. Values for color channels in frag shader should be [0, 1].

  var cmap = new Uint8Array([68, 1, 84, 255, 71, 19, 101, 255, 72, 36, 117, 255, 70, 52, 128, 255, 65, 68, 135, 255, 59, 82, 139, 255, 53, 95, 141, 255, 47, 108, 142, 255, 42, 120, 142, 255, 37, 132, 142, 255, 33, 145, 140, 255, 30, 156, 137, 255, 34, 168, 132, 255, 47, 180, 124, 255, 68, 191, 112, 255, 94, 201, 98, 255, 122, 209, 81, 255, 155, 217, 60, 255, 189, 223, 38, 255, 223, 227, 24, 255, 253, 231, 37, 255]); // cmap

  var MeshRenderer2D = /*#__PURE__*/function () {
    function MeshRenderer2D(canvas, container) {
      _classCallCheck(this, MeshRenderer2D);

      var obj = this;
      obj.domcontainer = container;
      obj.canvas = canvas;
      obj.canvas.width = window.innerWidth;
      obj.canvas.height = window.innerHeight; // Grab a context and setup a program.

      var gl = canvas.value = canvas.getContext("webgl", {
        antialias: true,
        depth: false
      }); // The extension is needed to allow indices to be uint32.

      gl.getExtension("OES_element_index_uint"); // console.log("can uints be used? ", uints_for_indices)

      obj.webglProgram = setupProgram(gl);
      obj.gl = gl; // The texture represents a solorbar, and stores the color values. It is indexed on a range of 0 - 1. The index is computed in the colorshader.
      // gl.texImage2D( ... , width, height, border, format, type, ArrayBuffer)

      obj.colormapTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, obj.colormapTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 21, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, cmap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); // Collection of plots to draw.

      obj.items = [];
    } // constructor


    _createClass(MeshRenderer2D, [{
      key: "draw",
      value: function draw() {
        var obj = this;
        var gl = obj.gl; // Common current time. This should be changed so that it starts from when the user presses a play. Furthermore the views should be either linked or individual

        var now = performance.now(); // Move the canvas to the right position for scrolling.

        gl.canvas.style.transform = "translateY(".concat(window.scrollY, "px)"); // The actual drawing loop.

        obj.items.forEach(function (item) {
          // Check whether the item is visible or not.
          if (obj.isItemVisible(item)) {
            // Update the ViewFrame to calculate new transform matrices. Nothing (camera, model, zoom) moves as a function of time. Time is still passed in to synchronise the player updates.
            item.update(now); // Update the data going to the GPU

            obj.updateAttributesAndUniforms(item); // Set the rectangle to draw to. Scissor clips, viewport transforms the space. The viewport seems to be doing the scissoring also...

            obj.updateViewport(item); // Perform the actual draw. gl.UNSIGNED_INT allows teh use of Uint32Array indices, but the 'OES_element_index_uint' extension had to be loaded.

            gl.drawElements(gl.TRIANGLES, item.geometry.indicesLength, gl.UNSIGNED_INT, 0);
          } // if

        }); // forEach

        requestAnimationFrame(obj.draw.bind(obj));
      } // draw

    }, {
      key: "add",
      value: function add(meshMetadataFilename) {
        var obj = this; // let newplayer = new ViewFrame2D(obj.gl);

        var newplayer = new UnsteadyPlayer2D(obj.gl, meshMetadataFilename);
        obj.domcontainer.appendChild(newplayer.node);
        obj.items.push(newplayer); // Return the newplayer if metadata has to be added to it.

        return newplayer;
      } // add

    }, {
      key: "updateViewport",
      value: function updateViewport(item) {
        var gl = this.gl;
        gl.viewport.apply(gl, _toConsumableArray(item.viewport));
        gl.scissor.apply(gl, _toConsumableArray(item.viewport));
        gl.clearColor.apply(gl, [0, 0, 0, 0]);
      } // updateViewport
      // Maybe the update could be performed by the item itself. That way both 2D and 3D objects could potentially be drawn alongside. 
      // But the programme declares the variables it expects, so the program would have to be redone also, which means another webgl instance is needed, and thus another canvas.

    }, {
      key: "updateAttributesAndUniforms",
      value: function updateAttributesAndUniforms(item) {
        // 'item' is a 'ViewFrame' instance. This method needs to update the transformation matrices, which are owned by the 'ViewFrame' instance, as well as the geometry buffers owned by the 'ViewFrame.geometry' instance.
        // 'transforms' should have the 'model', 'projection', and 'view' transform 4x4 matrices that will be used to draw the scene.
        // In addition to that this update also requires the 'position' and 'color' buffers. So the entire geometry is needed here to update gl before drawing. 
        var obj = this;
        var gl = this.gl; // Locations are pointers to the GPU buffers. Transforms are the transformation matrices. Buffers are the geometry arrays.

        var locations = obj.webglProgram.locations;
        var transforms = item.transforms; // Update the transformations.

        gl.uniformMatrix4fv(locations.model, false, new Float32Array(transforms.model));
        gl.uniformMatrix4fv(locations.projection, false, new Float32Array(transforms.projection));
        gl.uniformMatrix4fv(locations.view, false, new Float32Array(transforms.view)); // Set the vertices attribute

        gl.enableVertexAttribArray(locations.position);
        gl.bindBuffer(gl.ARRAY_BUFFER, item.geometry.verticesBuffer);
        gl.vertexAttribPointer(locations.position, 2, gl.FLOAT, false, 0, 0); // Update the colors attribute

        gl.enableVertexAttribArray(locations.value);
        gl.bindBuffer(gl.ARRAY_BUFFER, item.geometry.valuesBuffer);
        gl.vertexAttribPointer(locations.value, 1, gl.FLOAT, false, 0, 0); // Update the indices attribute.

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, item.geometry.indicesBuffer);
        /* 
        vec2( (v_colorval-u_cmin)/(u_cmax-u_cmin), 0.5)
        
        v_colorval : [0, 255]
        u_cmin : variable min value
        u_cmax : variable max value
        
        First I need to map from [0, 255] to [a,b], then to [0,1]. The first [0,255] represents the frame specific uint encoding. The second encoding allows all the values to be drawn to the correct value across several files. However, the [0, 255] values are pushed to the GPU straight away, and both mappings must occur there.
        */
        // cmin/cmax give the global (for all small multiples) colorbar range.

        gl.uniform1f(locations.cmin, obj.globalColormapRange[0]); // 0   880

        gl.uniform1f(locations.cmax, obj.globalColormapRange[1]); // 255   920
        // uint_cmin/uint_cmax give the local (particular small multiple) colorbar range,

        gl.uniform1f(locations.uint_cmin, item.geometry.currentUintRange[0]); // 0   880

        gl.uniform1f(locations.uint_cmax, item.geometry.currentUintRange[1]); // 255   920

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, obj.colormapTexture);
        gl.uniform1i(locations.colormap, 0);
      } // updateAttributesAndUniforms
      // This should focus solely on hte view div rectangle!!

    }, {
      key: "isItemVisible",
      value: function isItemVisible(item) {
        // Check whether the current item is visible. (!!!!) Extend later to check whether other items obscure the current item.
        var obj = this; // The idea is to collect all the boundingClientRects, and check if any of the following items overlap it, in which case skip the drawing.
        // The limit is 16 items drawn at once. There can be more items in analysis at the same time, but only 16 drawn at once. This means that if the items overlap, there can be any number of them, as long as they are in maximum 15 piles.
        // It all really depends on the connection speed and the size of the files...

        var rect = item.node.querySelector("div.view").getBoundingClientRect();
        var isCovered = false;

        for (var i = obj.items.indexOf(item) + 1; i < obj.items.length; i++) {
          // Check if the i-th viewFrame covers this one. This is a simple version that skirts the problem of figuring out if a bunch of viewFrames collectively cover this viewFrame.
          // Maybe later on there can just be group interfaces added as a separate attribute, and those can be made to hide the other frames,
          var higherRect = obj.items[i].node.querySelector("div.view").getBoundingClientRect();
          isCovered = isCovered ? true : isRectInHigherRect(rect, higherRect);
        } // for


        return item.isOnScreen && !isCovered;
      } // isItemVisible

    }, {
      key: "globalColormapRange",
      get: function get() {
        // Allow custom global values to be injected vie customGlobalColormapRange
        var obj = this;

        if (obj.customGlobalColormapRange) {
          return obj.customGlobalColormapRange;
        } else {
          return obj.items.reduce(function (acc, item) {
            // v is the domain across all the frames of an unsteady simulation instance.
            var v = item.geometry.domain.v;
            acc[0] = acc[0] > v[0] ? v[0] : acc[0];
            acc[1] = acc[1] < v[1] ? v[1] : acc[1];
            return acc;
          }, [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]);
        } // if

      } // globalColormapRange

    }]);

    return MeshRenderer2D;
  }(); // MeshRenderer2D

  function isRectInHigherRect(rect, higherRect) {
    // For it to be in hte rect it must be in the x and y range of the rect.
    return higherRect.left <= rect.left && rect.right <= higherRect.right && higherRect.top <= rect.top && rect.bottom <= higherRect.bottom;
  } // isPointInRect


  function setupProgram(gl) {
    // WHAT EXACTLY DOES TWGL DO THAT I CAN'T DO MYSELF?
    // Setup a WebGL program
    var webglProgram = createProgramInfo(gl, [vertshader, fragshader]);
    var program = webglProgram.program;
    gl.useProgram(program); // Save the attribute and uniform locations

    var loc_model = gl.getUniformLocation(program, "model");
    var loc_view = gl.getUniformLocation(program, "view");
    var loc_projection = gl.getUniformLocation(program, "projection");
    var loc_colormap = gl.getUniformLocation(program, "colormap");
    var loc_cmax = gl.getUniformLocation(program, "u_cmax");
    var loc_cmin = gl.getUniformLocation(program, "u_cmin");
    var loc_uint_cmax = gl.getUniformLocation(program, "u_uint_cmax");
    var loc_uint_cmin = gl.getUniformLocation(program, "u_uint_cmin");
    var loc_position = gl.getAttribLocation(program, "position");
    var loc_value = gl.getAttribLocation(program, "value"); // let loc_color = gl.getAttribLocation(program, "color");
    // For 2D triangle meshes culling and depth testing is not needed.
    // gl.enable(gl.CULL_FACE);
    // gl.enable(gl.DEPTH_TEST);
    // Scissor defines the part of canvas to draw to.

    gl.enable(gl.SCISSOR_TEST);
    return {
      locations: {
        model: loc_model,
        view: loc_view,
        projection: loc_projection,
        colormap: loc_colormap,
        cmax: loc_cmax,
        cmin: loc_cmin,
        uint_cmax: loc_uint_cmax,
        uint_cmin: loc_uint_cmin,
        position: loc_position,
        value: loc_value
      },
      program: program
    };
  } // setupProgram

  // Padding can be clicked on, margin cannot. The click event is limited to the padding of the view object. A check is done on mousedown to make sure that interactions with the data don't trigger the div to move. When moving the item needs to be placed at the end of the rendering que, as well as the html order to ensure that it stays on top - so that other items don't draw over it, and that the dragging continues even when mousing over a div that was made after it.
  // The dragging is done outside because I wish the rest of the interactivity - spatial arrangement, grouping to be added on top of this. That should make those aspects more general.
  // The initial positions must be collected all at the same time, as otherwise the rest of the "position: relative;" divs will get repositioned to where the previous div was.
  // How to make the addition of dragging more general?? There are some things that have to happen. Pass them in as additional functions?
  function addDraggingToItem(item, onstart, ondrag, onend) {
    // Add an object to facilitate the dragging.
    item.dragging = {
      active: false,
      itemRelativePosition: [0, 0]
    }; // dragging

    item.node.onmousedown = function (e) {
      if (e.target == item.node || e.target == item.draghandle) {
        var rect = item.node.getBoundingClientRect();
        item.dragging.active = true;
        item.dragging.itemRelativePosition = [e.clientX - rect.x, e.clientY - rect.y]; // Also move the viewFrame div up so that dragging over otehr higher divs is uninterrupted.

        item.node.parentNode.insertBefore(item.node, null);

        if (onstart) {
          onstart();
        } // if

      } // if

    }; // onmousedown


    item.node.onmousemove = function (e) {
      if (item.dragging.active) {
        var x = e.pageX - item.dragging.itemRelativePosition[0];
        var y = e.pageY - item.dragging.itemRelativePosition[1];
        item.node.style.left = x + "px";
        item.node.style.top = y + "px";

        if (ondrag) {
          ondrag();
        }
      } // if

    }; // mousemove


    item.node.onmouseup = function () {
      item.dragging.active = false;

      if (onend) {
        onend();
      }
    }; // onmouseup

  } // addDraggingToItem

  function arrayIncludesAll(A, B) {
    // 'arrayIncludesAll' checks if array A includes all elements of array B. The elements of the arrays are expected to be strings.
    // Return element of B if it is not contained in A. If the response array has length 0 then A includes all elements of B, and 'true' is returned.
    var f = B.filter(function (b) {
      return !A.includes(b);
    });
    return f.length == 0 ? true : false;
  } // arrayIncludesAll
   // scaleCategorical

  function html2element(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim(); // Never return a text node of whitespace as the result

    return template.content.firstChild;
  } // html2element

  function svg2element(svg) {
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.innerHTML = svg.trim();
    return g.firstChild;
  } // svg2element

  var scaleLinear = /*#__PURE__*/function () {
    function scaleLinear() {
      _classCallCheck(this, scaleLinear);

      this._domain = [0, 1];
      this._range = [0, 1];
    }

    _createClass(scaleLinear, [{
      key: "domain",
      get: // domain
      function get() {
        return this._domain;
      } // domain
      ,
      set: function set(d) {
        this._domain = d;
      }
    }, {
      key: "range",
      get: // range
      function get() {
        return this._range;
      } // range
      ,
      set: function set(r) {
        this._range = r;
      }
    }, {
      key: "dom2range",
      value: function dom2range(v) {
        return mapSpaceAValueToSpaceB(v, this.domain, this.range);
      } // dom2range

    }, {
      key: "range2dom",
      value: function range2dom(v) {
        return mapSpaceAValueToSpaceB(v, this.range, this.domain);
      } // range2dom

    }]);

    return scaleLinear;
  }(); // scaleLinear

  function mapSpaceAValueToSpaceB(v, A, B) {
    return (v - A[0]) / (A[1] - A[0]) * (B[1] - B[0]) + B[0];
  } // mapSpaceAValueToSpaceB

  // The main difficulty with this is drawing the standard deviation plot. How would that look like in 3D anyway?

  var css = {
    view: "\n\twidth: 300px;\n\theight: 200px;\n  ",
    groupbutton: "\n\tborder: none;\n\tbackground-color: transparent;\n\tcolor: gainsboro; \n\tcursor: pointer;\n\tpadding: 2.3px;\n\tmargin-bottom: 10px;\n  ",
    bookmark: "\n    height: 20px; \n\twidth: 20px; \n\tbackground-color: gainsboro;\n  "
  }; // css
  // The div.item is the top element when the user clicks to drag. The dragging checks whether drag is the appropriate action (as opposed to view interactions) by checking if the event target equals the item node. For the group that is not so because it has an additional wrapper.

  var template$1 = "\n<div class=\"item-group\" style=\"position: absolute;\">\n  <table style=\"border-collapse: collapse;\">\n    <tbody>\n\t<tr>\n\t  <td>\n\t\t<div class=\"item-proxy\" style=\"box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.25);\">\n\t\t  <div class=\"label\">Group</div>\n\t\t  <div class=\"view-proxy\"></div>\n\t\t  <div class=\"playcontrols-proxy\"></div>\n\t\t  <div class=\"chapterform-proxy\"></div>\n\t\t  <div class=\"commenting\"></div>\n\t\t</div>\n\t  </td>\n\t  <td style=\"vertical-align: top;\">\n\t    <button class=\"ungroup\" style=\"".concat(css.groupbutton, "\">\n\t\t  <i class=\"fa fa-times\" style=\"font-size: 20px;\"></i>\n\t\t</button>\n\t\t <button class=\"enter\" style=\"").concat(css.groupbutton, "\">\n\t\t  <i class=\"fa fa-sign-in\" style=\"font-size: 20px;\"></i>\n\t\t</button>\n\t\t<button class=\"dissolve\" style=\"").concat(css.groupbutton, " display:none;\">\n\t\t  <i class=\"fa fa-trash-o\" style=\"font-size: 20px;\"></i>\n\t\t</button>\n\t\t<div class=\"bookmarks\">\n\t\t</div>\n\t  </td>\n\t</tr>\n\t</tbody>\n  </table>\n</div>\n"); // template
  // Maybe this should be just an empty div over the item, and then that item should be shown? And other ones can just be hidden?? Maybe that is simplst - no moving of the controls needed at all. But commenting? How should that work? Just change the commenting?

  var bookmarktemplate = "<div class=\"mark\" style=\"".concat(css.bookmark, "\"></div>");
  /*
  BUTTON NEEDS TO BE REINTRODUCED!!

  If the group were to be a separate ViewFrame subclass, then the grouping cannot just be tagged on.
  If the group is just an empty div that covers the currently shown item, then the interactions are blockd. 
  */
  // When made it should have a series of squares, which when moused over will move between the individual items. Where should these controls be placed though? How should the title be made visible?
  // Maybe controls should be above, and the name should change? Then the comments can always be below. Should there be a comment section for all of them at once? I guess so, so that they can all be characterised together.
  // Ok, comment sections can be turned off - only the playbar is needed! It also needs a way to remove the group alltogether. A cross in the right top.
  // This needs to reorder the items in the rendering.items so that te moused over one is the one drawn on top. Fo that it needs access to that array.

  var Group = /*#__PURE__*/function () {
    function Group(drawingorder, members, tags) {
      _classCallCheck(this, Group);

      this.members = [];
      var obj = this;
      obj.node = html2element(template$1);
      obj.draghandle = obj.node.querySelector("div.item-proxy");
      obj.wrappedview = obj.node.querySelector("div.view-proxy");
      obj.bookmarks = obj.node.querySelector("div.bookmarks");
      obj.tags = tags; // Drawing order allows the group to changethe order in which the GPU renders the items.

      obj.drawingorder = drawingorder; // Calculate where the node should be added. Store the original positions on the items, as long as they are in the group.

      var n = members.length;
      var pos = members.reduce(function (acc, item) {
        acc[0] += parseInt(item.node.style.left) / n;
        acc[1] += parseInt(item.node.style.top) / n;
        return acc;
      }, [0, 0]);
      obj.node.style.left = pos[0] + "px";
      obj.node.style.top = pos[1] + "px"; // All the members should also be moved to this position. Turn off their uis, wih the exception of the playbar. Also remember their relative positions?

      members.forEach(function (item) {
        obj.add(item);
      }); // foEach

      obj.current = obj.members[0]; // pos needs to be made before calling .add, but .add creates initialposition which is needed for calculating pos.
      // Removal of the group.

      obj.node.querySelector("button.ungroup").onclick = function () {
        obj.remove();
      }; // onclick
      // Entering a group.


      obj.node.querySelector("button.enter").onclick = function () {
        obj.enter();
      }; // onclick
      // Dissolving the annotations.


      obj.node.querySelector("button.dissolve").onclick = function () {
        obj.dissolve();
      }; // onclick
      // The view events should be passed down to the current item.


      obj.wrappedview.onmousedown = function (e) {
        obj.current.cameraMoveStart(e);
      };

      obj.wrappedview.onmousemove = function (e) {
        obj.current.cameraMove(e);
      };

      obj.wrappedview.onmouseup = function (e) {
        obj.current.cameraMoveEnd();
      };

      obj.wrappedview.onmouseleave = function (e) {
        obj.current.cameraMoveEnd();
      };

      obj.wrappedview.addEventListener("wheel", function (e) {
        e.preventDefault();
        obj.current.cameraZoom(e);
      }, {
        passive: false
      }); // Add ina commenting module. Which id should it use? Maybe the one of the current object?
      // obj.commenting = new CommentingManager( obj.current.ui.commenting.viewid );
      // obj.node.querySelector("div.commenting").appendChild( obj.commenting.node );

      obj.updateWrapperSize();
      obj.update(); // A flag that allows checking whether the group has been edited by the user.

      obj.edited = false;
    } // constructor
    // proxy


    _createClass(Group, [{
      key: "enter",
      value: function enter() {// Do nothing, it'll be superset outside.
      } // enter
      // Setting hte user is important to for interactions with the annotations.

    }, {
      key: "user",
      get: // set user
      function get() {
        return this._user;
      } // get user
      // set and get current node ui?? This also ensures that the group div fully covers the actual item, and therefore the group gets dragged as opposed to the individual item.
      ,
      set: function set(name) {
        var obj = this; // The commenting needs to know who is looking at it.

        obj.commenting.user = name; // Store the name

        obj._user = name; // Toggle the dissolve button if the user has any annotations.

        var currentUserAnnotations = obj.tags.filter(function (tag) {
          return tag.author == name;
        });

        if (currentUserAnnotations.length > 0) {
          obj.node.querySelector("button.dissolve").style.display = "";
        } // if

      }
    }, {
      key: "current",
      get: // set current
      function get() {
        return this._current;
      } // get current
      ,
      set: function set(item) {
        var obj = this; // First return the ui controls if needed.

        obj.returnUiElements(); // Now append the new current ui controls.

        obj.borrowUiElements(item); // If the commenting has already been established, update the user.

        if (obj.commenting) {
          obj.commenting.user = item.ui.commenting.user;
        } // if


        if (obj._current) {
          obj._current.node.style.display = "none";
        } // if


        item.node.style.display = "inline-block";
        obj.node.querySelector("div.label").innerText = item.ui.metadata.taskId;
        obj._current = item;
      }
    }, {
      key: "updateWrapperSize",
      value: function updateWrapperSize() {
        var obj = this; // Interactions with the commening are not possible if the item is covered by an empty div.

        obj.wrappedview.style.width = obj.current.node.querySelector("div.view").style.width;
        obj.wrappedview.style.height = obj.current.node.querySelector("div.view").style.height;
      } // updateWrapperSize

    }, {
      key: "borrowUiElements",
      value: function borrowUiElements(item) {
        var obj = this;
        obj.node.querySelector("div.playcontrols-proxy").appendChild(item.ui.playcontrols.node); // obj.wrappednode.querySelector("div.chapterform-proxy").appendChild( item.ui.chapterform.node );
      } // borrowUiElements

    }, {
      key: "returnUiElements",
      value: function returnUiElements() {
        var obj = this;
        var pc = obj.node.querySelector("div.playcontrols-proxy").children[0];

        if (pc) {
          obj.current.ui.playControlsWrapperNode.appendChild(pc);
        } // if
        // let cf = obj.wrappednode.querySelector("div.chapterform-proxy").children[0];
        // if(pc){ obj.current.ui.chapterFormWrapperNode.appendChild( cf ) } // if

      } // returnUiElements

    }, {
      key: "update",
      value: function update() {
        var obj = this; // Make a bookmark tab for each of the members. When the tab is moused over, the view should change. First remove allthe bookmarks before updating.

        var bookmarksToRemove = obj.bookmarks.querySelectorAll("div.mark");

        for (var i = 0; i < bookmarksToRemove.length; i++) {
          bookmarksToRemove[i].remove();
        } // for
        // Items should also be moved in order to update the view. And they should be triggered to draw.


        obj.members.forEach(function (item, i) {
          var bookmark = html2element(bookmarktemplate);
          obj.bookmarks.appendChild(bookmark);

          bookmark.onmouseenter = function () {
            obj.highlightBookmark(bookmark); // Place the item at the end of the draing line.

            obj.drawingorder.splice(obj.drawingorder.indexOf(item), 1);
            obj.drawingorder.push(item);
            obj.current = item;
            obj.updateWrapperSize();
          }; // onmouseover


          var pressTimer;

          bookmark.onmouseup = function () {
            clearTimeout(pressTimer);
            return false;
          }; // onmouseup


          bookmark.onmousedown = function () {
            pressTimer = window.setTimeout(function () {
              obj.release(item, obj.getReleaseScales());
              obj.members.splice(obj.members.indexOf(item), 1);
              obj.current = obj.members[0];
              obj.update();
            }, 2000);
            return false;
          }; // onmousedown


          if (obj.current == item) {
            obj.highlightBookmark(bookmark);
          } // if

        }); // forEach

        /*	
        	// Collect all hte member comments, and put them into a combined commenting item.
        	obj.commenting.clear();
        	
        	let allComments = obj.members.reduce((acc, member)=>{
        		return acc.concat(member.ui.commenting.comments);
        	}, []).map(commentobj=>commentobj.config).sort(function(a,b){
        		return Date.parse(a.time)-Date.parse(b.time);
        	}) // reduce().sort()
        	
        	
        	allComments.forEach(comment=>{
        		obj.commenting.add(comment)
        	}) // forEach
        	*/
      } // update

    }, {
      key: "highlightBookmark",
      value: function highlightBookmark(b) {
        var obj = this;
        var allBookmarks = obj.bookmarks.querySelectorAll("div.mark");

        for (var i = 0; i < allBookmarks.length; i++) {
          allBookmarks[i].style.backgroundColor = b == allBookmarks[i] ? "gray" : "gainsboro";
        } // for

      } // highlightBookmarks

    }, {
      key: "remove",
      value: function remove() {
        // All the members should be made visible again, and their comment sections should be turned back on, and they should be staggered to their relative psitions.
        var obj = this; // First return the ui elements so that the items are again complete.

        obj.returnUiElements(); // When ungrouping the items should be positioned close to where the group used to be (within 1 width of the item). Position the exiting items within 1 width of the top left corner.
        // What I really want is to get the maximum relative distances, scale them down, and then calculate where to position hte items.

        var scales = obj.getReleaseScales(); // Redistribute the items according to their original positions.`		

        obj.members.forEach(function (item, i) {
          obj.release(item, scales);
        }); // forEach

        obj.members = []; // Remove the actual DOM.

        obj.node.remove();
      } // remove

    }, {
      key: "release",
      value: function release(item, scales) {
        var obj = this; // Need to calculate the position to release to...

        item.node.querySelector("div.label").style.color = "#888";
        item.node.style.display = "inline-block";
        item.ui.node.style.display = "";
        item.node.style.boxShadow = "1px 2px 4px 0px rgba(0,0,0,0.25)"; // Y coordinate is insane...

        var x = parseInt(item.node.style.left) + scales.x.dom2range(item.initialposition[0]);
        var y = parseInt(item.node.style.top) + scales.y.dom2range(item.initialposition[1]);
        item.node.style.left = x + "px";
        item.node.style.top = y + "px";
        delete item.initialposition;
        item.ui.isgrouped = false;
        obj.edited = true;
      } // release

    }, {
      key: "add",
      value: function add(item) {
        // Add an item to the group by dragging it over the group.
        var obj = this;
        obj.members.push(item); // Make a temporary attribute to store the position at which the noe was collected.

        item.initialposition = [parseInt(item.node.style.left), parseInt(item.node.style.top)];
        item.node.style.left = obj.node.style.left;
        item.node.style.top = obj.node.style.top;
        item.node.querySelector("div.label").style.color = "transparent";
        item.node.style.boxShadow = "none";
        item.node.style.display = obj.current == item ? "inline-block" : "none";
        item.ui.node.style.display = "none"; // A flag highlighting that the item is currently grouped.

        item.ui.isgrouped = true; // A flag highlighting that the group has changed.

        obj.edited = true;
      } // add

    }, {
      key: "dissolve",
      value: function dissolve() {
        var obj = this; // Soo, find all hte annotations that can be dissolved, and then dissolve them. This will require a call to the knowledge manager. How should this be messaged upstream?

        var currentUserAnnotations = obj.tags.filter(function (tag) {
          return tag.author == obj.user;
        });
        obj.dissolveexternal(currentUserAnnotations);
        obj.remove();
      } // dissolve

    }, {
      key: "actualise",
      value: function actualise() {
        var obj = this; // Similarto before, first dissolve all the annotations by this user, and then add new annotations for all members.

        var currentUserAnnotations = obj.tags.filter(function (tag) {
          return tag.author == obj.user;
        });
        obj.dissolveexternal(currentUserAnnotations);
        var t = Date();
        var newAnnotations = obj.members.map(function (item, i) {
          return {
            id: "".concat(obj.user, " ").concat(t, " ").concat(i),
            taskId: item.ui.metadata.taskId,
            label: obj.node.querySelector("div.label").innerText,
            author: obj.user
          };
        });
        obj.createexternal(newAnnotations);
      } // actualise

    }, {
      key: "dissolveexternal",
      value: function dissolveexternal(a) {
        console.log("Remove annotations: ", a);
      } // dissolveexternal

    }, {
      key: "createexternal",
      value: function createexternal(a) {
        console.log("Make annotations: ", a);
      }
    }, {
      key: "getReleaseScales",
      value: function getReleaseScales() {
        var obj = this;
        var domain = obj.members.reduce(function (acc, member) {
          acc.x[0] = acc.x[0] > member.initialposition[0] ? member.initialposition[0] : acc.x[0];
          acc.x[1] = acc.x[1] < member.initialposition[0] ? member.initialposition[0] : acc.x[1];
          acc.y[0] = acc.y[0] > member.initialposition[1] ? member.initialposition[1] : acc.y[0];
          acc.y[1] = acc.y[1] < member.initialposition[1] ? member.initialposition[1] : acc.y[1];
          return acc;
        }, {
          x: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY],
          y: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
        });
        var xscale = new scaleLinear();
        xscale.domain = domain.x;
        xscale.range = [-150, 150];
        var yscale = new scaleLinear();
        yscale.domain = domain.y;
        yscale.range = [-150, 150];
        return {
          x: xscale,
          y: yscale
        };
      } // releaseScales

    }, {
      key: "hide",
      value: function hide() {
        var obj = this;
        obj.node.style.display = "none";
        obj.current.node.style.display = "none";
      }
    }, {
      key: "show",
      value: function show() {
        var obj = this;
        obj.node.style.display = "";
        obj.members.forEach(function (item) {
          item.node.style.display = "none";
        });
        obj.current = obj.current;
      }
    }]);

    return Group;
  }(); // Group

  var template = "\n<polygon class=\"lasso\" points=\"\" style=\"fill: cornflowerblue; stroke: dodgerblue; stroke-width: 2; opacity: 0.4;\"></polygon>\n"; // template

  var lasso = /*#__PURE__*/function () {
    /* 
    	`lasso' implements a generic lasso that can be added to svg elements.
    
    The input MUST be an svg element to which a d3.drag event can be applied.
    
    
    If the lasso has access to the data then it can compute the selected tasks as a computed. Otherwise a wrapper may be necessary, that will observe the lasso boundary, and then
    */
    function lasso(svg) {
      _classCallCheck(this, lasso); // Make reactive??


      var obj = this;
      obj.svg = svg;
      obj.polygon = svg.appendChild(svg2element(template)); // An internal boundary is used for all the drawing, and an external boundary is presented to other interested modules. Only the exposed boundary is observable. The exposed boundary is used to determine the lasso selection.

      obj._boundary = [];
      obj.boundary = [];
      obj.svg.addEventListener("mousedown", function (event) {
        obj.clearBoundary();
        obj.active = true;
      }); // mousedown

      obj.svg.addEventListener("mousemove", function (event) {
        if (obj.active) {
          obj.addBoundaryPoint(event);
          obj.draw();
        } // if

      }); // mousedown

      obj.svg.addEventListener("mouseup", function (event) {
        obj.hide(); // The bounadry.replace was mobx functionality.

        obj.boundary = obj._boundary;
        obj.active = false; // A botched solution that 

        obj.onmouseup();
      }); // mousedown
    } // constructor
    // proxy.


    _createClass(lasso, [{
      key: "onmouseup",
      value: function onmouseup() {} // onmouseup

    }, {
      key: "clearBoundary",
      value: function clearBoundary() {
        var obj = this;
        obj._boundary = [];
      } // clearBoundary

    }, {
      key: "addBoundaryPoint",
      value: function addBoundaryPoint(event) {
        // Note that the svg can move relative to the document if the user mouses over the limits of th eviewport. For tat reason it's better tostore te coordinates in the reference system of the svg, and only correct for the svg-document offset when checking whether the point is within the boundary.
        var obj = this; // The svgbox changes if the user scrolls around in the window.

        var svgbox = obj.svg.getBoundingClientRect();

        obj._boundary.push({
          x: event.clientX - svgbox.x,
          y: event.clientY - svgbox.y
        });
      } // addBoundaryPoint

    }, {
      key: "isPointInside",
      value: function isPointInside(point) {
        // Check wheteher the 'point' [pixel coordinates in document reference frame] is within the polygon defined by the points array 'boundary'.
        var obj = this; // Default answer is no.

        var isInside = false;
        var n = obj.boundary.length;

        if (n > 2) {
          for (var i = 1; i < n; i++) {
            // Check whether this edge is being passed when moving from the point to the right. If it passes an even number of edges it's outside, otherwise it's inside.
            var _p = passesEdgeBotched(obj.boundary[i - 1], obj.boundary[i], point);

            isInside = _p ? !isInside : isInside;
          } // for
          // Need to check the same number of edge segments as vertex points. The last edge should be the last and the first point.


          var p = passesEdgeBotched(obj.boundary[n - 1], obj.boundary[0], point);
          isInside = p ? !isInside : isInside;
        } // if


        return isInside;
      } // isPointInside

    }, {
      key: "draw",
      value: function draw() {
        var obj = this;
        obj.polygon.setAttribute("points", obj._boundary.map(function (p) {
          return "".concat(p.x, ",").concat(p.y);
        }).join(" "));
      } // draw

    }, {
      key: "hide",
      value: function hide() {
        // Remove the selection drawing.
        var obj = this;
        obj.polygon.setAttribute("points", "");
      } // remove

    }]);

    return lasso;
  }(); // lasso


  function passesEdgeBotched(p0, p1, point) {
    // Account for the svg being moved due to scrolling.
    var dx = window.pageXOffset;
    var dy = window.pageYOffset;
    var p0x = p0.x + dx;
    var p0y = p0.y + dy;
    var p1x = p1.x + dx;
    var p1y = p1.y + dy;

    if (p0y > point.y !== p1y > point.y) {
      // One is above, and the other below. Now find if the x are positioned so that the ray passes through. Essentially interpolate the x at the y of the point, and see if it is larger.
      var x = (p1x - p0x) / (p1y - p0y) * (point.y - p0y) + p0x;
      return x > point.x;
    } else {
      return false;
    } // if

  } // checkIntersect

  /* 
  Make a class that will be able to perform most coordination tasks required for the spatial harnessing. This involves getting and setting the coordinates of the small multiples.


  Should groups allow the user to enter them? Maybe its simpler to restrict the navigation solely to the navigation tree. Otherwise when clicking on a group node it has to communicate to the GroupingCoordinator to initiate the change, and also keep track of the descendant groups.

  If navigation is constrained to the navigation tree, then groups can just be an array of arrays of tasks. Maybe the navigation trre should be controlled from within here? And then the hierarchy can be used to create the groups on the go?
  	

  */

  var GroupingCoordinator = /*#__PURE__*/function () {
    function GroupingCoordinator(items, container, svg) {
      _classCallCheck(this, GroupingCoordinator); // Container is only needed if groups need to be appended.


      var obj = this;
      obj.container = container;
      obj.items = items;
      obj.tasks = items.map(function (item) {
        return item.ui.metadata.taskId;
      });
      obj.groups = []; // First the items need to be draggable to allow for grouping.

      obj.addDraggingToSiblingItems(80); // Just botch it for now to get a demo working.

      obj.svg = svg;

      svg.onmousedown = function () {
        svg.style.zIndex = 1000;
      }; // onmousedown


      svg.onmouseup = function () {
        svg.style.zIndex = '';
      }; // onmousedown


      obj.lasso = new lasso(svg);

      obj.lasso.onmouseup = function () {
        // Find the tasks in the lasso, and make a group out of them.
        var selected = obj.items.filter(function (item) {
          return obj.lasso.isPointInside({
            x: item.node.offsetLeft + item.node.offsetWidth / 2,
            y: item.node.offsetTop + item.node.offsetHeight / 2
          });
        });
        console.log(selected);

        if (selected.length > 0) {
          obj.makeGroup(selected, []);
        } // if

      }; // onmouseup

    } // constructor


    _createClass(GroupingCoordinator, [{
      key: "clear",
      value: function clear() {
        var obj = this;
        obj.groups.forEach(function (group) {
          group.remove();
        });
        obj.groups = [];
      } // clear
      // When the parent group is specified the items should be adjusted immediately.

    }, {
      key: "showCurrentTasks",
      value: function showCurrentTasks(tasks) {
        var obj = this; // First find if any of the specified tsks are valid.

        var validtasks = tasks.filter(function (task) {
          return obj.tasks.includes(task);
        });

        if (validtasks.length > 0) {
          obj.items.forEach(function (item) {
            if (validtasks.includes(item.ui.metadata.taskId)) {
              item.node.style.display = "";
            } else {
              item.node.style.display = "none";
            } // if

          }); // forEach
        } // if

      } // showCurrentTasks

    }, {
      key: "makeDirectDescendantGroups",
      value: function makeDirectDescendantGroups(nodeobj) {
        var obj = this; // First remove all existing groups.

        obj.groups.forEach(function (group) {
          group.remove();
        }); // forEach
        // Find all groups that should appear.

        var descendants = nodeobj.connections.descendants;
        var directDescendants = descendants.filter(function (group) {
          return !descendants.some(function (d) {
            if (d != group) {
              return arrayIncludesAll(d.members, group.members);
            } // if


            return false;
          }); // some
        }); // filter
        // Make all groups that should appear.

        directDescendants.forEach(function (d) {
          // Pass the actual item objects to the group.
          var members = obj.items.filter(function (item) {
            return d.members.includes(item.ui.metadata.taskId);
          }); // filter

          obj.makeGroup(members, d.tags);
        }); // forEach
      } // makeDirectDescendantGroups

    }, {
      key: "makeGroup",
      value: function makeGroup(members, tags) {
        var obj = this;
        var groupitem = new Group(obj.items, members, tags);
        obj.groups.push(groupitem);
        obj.container.appendChild(groupitem.node);

        var ondrag = function ondrag() {
          groupitem.members.forEach(function (item) {
            item.node.style.left = groupitem.node.style.left;
            item.node.style.top = groupitem.node.style.top;
          });
        };

        addDraggingToItem(groupitem, undefined, ondrag);

        groupitem.dissolveexternal = function (a) {
          obj.dissolveexternal(a);
        }; // function


        groupitem.createexternal = function (a) {
          obj.createexternal(a);
        }; // function


        groupitem.enter = function () {
          // The drawing order hs all hte items. They can all be hidden initially, and then the group can be removed: the removal will reactivate the members. Then an exit group button can be added to the HUD, and clicking it reconstitutes the group.
          // How will it deal with other groups on hte screen? The groups can be retrieved in a way that always filters out any groups without a node!!
          obj.groups.forEach(function (grp) {
            return grp.hide();
          });
          groupitem.drawingorder.forEach(function (item) {
            item.node.style.display = "none";
          }); // forEach

          groupitem.members.forEach(function (item) {
            groupitem.remove();
          }); // forEach
          // When a group has been entered the background drawing should be deactivated. This can be done by hiding the svg.

          obj.svg.style.display = "none"; // Activate the exit button.

          var exitGroupButton = obj.container.parentElement.querySelector("button.exitgroup");
          exitGroupButton.style.display = "";

          exitGroupButton.onclick = function () {
            // Turn the SVG back on.
            obj.svg.style.display = "";
            obj.items.forEach(function (item) {
              item.node.style.display = "inline-block";
            }); // forEach
            // Turn on any otehr groups thatare still made.

            obj.groups.forEach(function (grp) {
              return grp.show();
            }); // Create a new group that will hold the current members.

            obj.makeGroup(members, []);
            exitGroupButton.style.display = "none";
          }; // function

        }; // function

      } // makeGroup
      // Proxies.

    }, {
      key: "dissolveexternal",
      value: function dissolveexternal(a) {
        console.log("Remove annotations", a);
      } // dissolveexternal

    }, {
      key: "createexternal",
      value: function createexternal(a) {
        console.log("Make annotations", a);
      } // createexternal

    }, {
      key: "getCurrentPositions",
      value: function getCurrentPositions(items, variable) {
        // Current positions are needed for calculating correlations, or for adding additional metadata variables based on the users actions. How should the positions and the metadata be combined actually? Should there be a specific method for it? If a variable is specified, then return it with the positions.
        return items.map(function (item) {
          var pos = [ParseInt(item.node.style.left), ParseInt(item.node.style.top)];

          if (variables != undefined) {
            pos.push(item.metadata[variable]);
          } // if


          return pos;
        }); // map
      } // getCurrentPositions

    }, {
      key: "addDraggingToSiblingItems",
      value: function addDraggingToSiblingItems(headeroffset) {
        // To add the dragging an additional "dragging" attribute is introduced to the items. The items are ViewFrame objects that all have their nodes inside the same parent node. The parent node must be the same as the initial positions of the frames are calculated based on their current positions within hte parent div.
        var obj = this;
        var positions = obj.items.reduce(function (acc, item) {
          acc.push([item.node.offsetLeft, item.node.offsetTop + headeroffset]);
          return acc;
        }, []);
        obj.items.forEach(function (item, i) {
          item.node.style.position = "absolute";
          item.node.style.left = positions[i][0] + "px";
          item.node.style.top = positions[i][1] + "px";

          var onstart = function onstart() {
            // Move this item to the end of the drawing queue to ensure it's drawn on top.
            obj.items.splice(obj.items.indexOf(item), 1);
            obj.items.push(item);
          }; // function


          var onend = function onend() {
            // It should be either if hte item is fully within hte group, or very close to the top left corner?
            obj.groups.every(function (group) {
              // Item should jut be added to a single group.
              var addToThisGroup = sufficientlyOverlaid(item, group);

              if (addToThisGroup) {
                group.add(item);
                group.update();
              } // if


              return !addToThisGroup;
            }); // every
          }; // function


          addDraggingToItem(item, onstart, undefined, onend);
        }); // forEach
      } // addDraggingToSiblingItems

    }]);

    return GroupingCoordinator;
  }(); // GroupingCoordinator

  function sufficientlyOverlaid(item, group) {
    var itemrect = item.node.getBoundingClientRect();
    var grouprect = group.node.getBoundingClientRect();
    var itemFullyInGroup = grouprect.left <= itemrect.left && itemrect.right <= grouprect.right && grouprect.top <= itemrect.top && itemrect.bottom <= grouprect.bottom;
    var itemCloseEnough = Math.pow(grouprect.left - itemrect.left, 2) + Math.pow(grouprect.top - itemrect.top, 2) < Math.pow(40, 2);
    return itemFullyInGroup || itemCloseEnough;
  } // sufficientlyOverlaid

  function xaxis_g(y) {
    return " <g class=\"axis x-axis\" transform=\"translate(0,".concat(y, ")\" fill=\"none\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"middle\">");
  } // xaxis_g


  function yaxis_g(x) {
    return "<g class=\"axis y-axis\" transform=\"translate(".concat(x, ",0)\" fill=\"none\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\">");
  } // yaxis_g


  function xaxis_line(x0, x1) {
    return "<path class=\"domain\" stroke=\"currentColor\" d=\"M".concat(x0, ",6V0.5H").concat(x1, "V6\"></path>");
  } // xaxis_line


  function yaxis_line(y0, y1) {
    return "<path class=\"domain\" stroke=\"currentColor\" d=\"M-6,".concat(y0, "H0.5V").concat(y1, "H-6\"></path>");
  } // yaxis_line
  // This tick just needs to be translatedin the x direction: transform="translate(187,0)"


  function xaxis_tick(x, label) {
    return "<g class=\"tick\" opacity=\"1\" transform=\"translate(".concat(x, ",0)\"><line stroke=\"currentColor\" y2=\"6\"></line><text fill=\"currentColor\" y=\"9\" dy=\"0.71em\">").concat(label, "</text></g>");
  } // xaxistick


  function yaxis_tick(y, label) {
    return "<g class=\"tick\" opacity=\"1\" transform=\"translate(0,".concat(y, ")\"><line stroke=\"currentColor\" x2=\"-6\"></line><text fill=\"currentColor\" y=\"-9\" dy=\"0.32em\">").concat(label, "</text></g>");
  } // yaxistick


  var SpatialCorrelations = /*#__PURE__*/function () {
    function SpatialCorrelations(items, svg) {
      _classCallCheck(this, SpatialCorrelations);

      var obj = this;
      obj.items = items;
      obj.ordinals = ["eff_isen", "eff_poly", "alpha_rel_stator_in", "alpha_rel_stator_out", "alpha_rel_rotor_in", "alpha_rel_rotor_out", "alpha_stator_in", "alpha_stator_out", "alpha_rotor_in", "alpha_rotor_out", "eff_isen_lost_stator_in", "eff_isen_lost_stator_out", "eff_isen_lost_rotor_in", "eff_isen_lost_rotor_out", "eff_isen_lost_rotor", "flow_coefficient", "stage_loading"];
      obj.categoricals = []; // This should just be created hre, and main can just append it where appropriate.

      obj.svg = svg;

      svg.onclick = function () {
        svg.style.display = "none";
      };
    } // constructor


    _createClass(SpatialCorrelations, [{
      key: "show",
      value: function show() {
        var obj = this;
        obj.svg.style.display = "";
        obj.update();
      } // show

    }, {
      key: "hide",
      value: function hide() {
        var obj = this;
        obj.svg.style.display = "none";
      } // hide

    }, {
      key: "update",
      value: function update() {
        var obj = this; // First remove EVERYTHING objects.

        var xg = obj.svg.querySelector("g.x-axis");

        if (xg) {
          xg.remove();
        }

        var yg = obj.svg.querySelector("g.y-axis");

        if (yg) {
          yg.remove();
        }
        var sg = obj.svg.querySelector("g.scores");

        if (sg) {
          sg.remove();
        }

        var scores = obj.ordinalscores.concat(obj.categoricalscores);
        console.log(scores);
        var box = obj.svg.getBoundingClientRect();
        var xdomain = [-1, 1];
        var xrange = [box.width * 0.05, box.width * 0.95];
        var ydomain = [1, -1];
        var yrange = [box.height * 0.05, box.height * 0.95];

        var xscale = function xscale(v) {
          return xrange[0] + (xrange[1] - xrange[0]) * (v - xdomain[0]) / (xdomain[1] - xdomain[0]);
        }; // xsclae


        var yscale = function yscale(v) {
          return yrange[0] + (yrange[1] - yrange[0]) * (v - ydomain[0]) / (ydomain[1] - ydomain[0]);
        }; // xsclae


        var xaxisg = svg2element(xaxis_g(yscale(0)));
        var yaxisg = svg2element(yaxis_g(xscale(0)));
        var scoreg = svg2element("<g class=\"scores\"></g>");
        obj.svg.appendChild(xaxisg);
        obj.svg.appendChild(yaxisg);
        obj.svg.appendChild(scoreg);
        var xaxisline = svg2element(xaxis_line(xscale(-1), xscale(1)));
        var yaxisline = svg2element(yaxis_line(yscale(-1), yscale(1)));
        xaxisg.appendChild(xaxisline);
        yaxisg.appendChild(yaxisline);
        var xticks = [-1, -0.8, -0.6, -0.4, -0.2, 0.2, 0.4, 0.6, 0.8, 1];
        xticks.forEach(function (v) {
          var tick = svg2element(xaxis_tick(xscale(v), v));
          xaxisg.appendChild(tick);
        }); // forEach

        var yticks = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1];
        yticks.forEach(function (v) {
          var tick = svg2element(yaxis_tick(yscale(v), v));
          yaxisg.appendChild(tick);
        }); // forEach

        scores.forEach(function (s) {
          var x = xscale(s[0]);
          var y = yscale(s[1]);
          var label = s.name;
          scoreg.appendChild(svg2element("<text x=".concat(x, " y=").concat(y, " stroke=\"black\" stroke-width=\"5\" font-family=\"helvetica\" font-size=\"30\">").concat(label, "</text>")));
          var whitetext = svg2element("<text x=".concat(x, " y=").concat(y, " font-family=\"helvetica\" font-size=\"30\" fill=\"white\" style=\"cursor: pointer;\">").concat(label, "</text>"));
          scoreg.appendChild(whitetext);

          whitetext.onclick = function () {
            obj.positionByMetadata(s.name, s[0] > s[1] ? "x" : "y");
          }; // function

        }); // How to draw this stuff? I get the buttons, but the scales etc? Just do them via paths?? And no ticks unless necessary - just keep it simple?
        // Just draw the buttons for now.

        return scores;
      } // update

    }, {
      key: "positions",
      get: function get() {
        var obj = this; // get only the currently active contours. The active ones are those that are either a member of a group that is on-screen, or that are visisble. So then this needs access to the groups?? Or just create a flag to show whether an item was grouped.

        var activeitems = obj.items.filter(function (item) {
          return item.ui.isgrouped || item.node.style.display != "none";
        }); // filter

        return activeitems.reduce(function (acc, item) {
          acc.x.push(item.node.offsetLeft);
          acc.y.push(item.node.offsetTop);
          return acc;
        }, {
          x: [],
          y: []
        });
      } // get positions

    }, {
      key: "spatialvariables",
      get: function get() {
        var obj = this; // Now collect the variables.

        var spatial = obj.positions;
        return [createvariable(spatial.x, "x"), createvariable(spatial.y, "y")];
      } // get spatialvariables

    }, {
      key: "ordinalvariables",
      get: function get() {
        var obj = this;
        var values = obj.items.reduce(function (acc, item) {
          obj.ordinals.forEach(function (varname) {
            if (acc[varname]) {
              acc[varname].push(item.ui.metadata[varname]);
            } else {
              acc[varname] = [item.ui.metadata[varname]];
            } // if

          });
          return acc;
        }, {});
        return obj.ordinals.reduce(function (acc, varname) {
          acc.push(createvariable(values[varname], varname));
          return acc;
        }, []);
      } // get ordinalvariables

    }, {
      key: "ordinalscores",
      get: function get() {
        var obj = this;
        var scores = obj.ordinalvariables.map(function (ordinal) {
          var sp = obj.spatialvariables.map(function (spatial) {
            return spearman(spatial, ordinal);
          }); // forEach

          sp.name = ordinal.name;
          return sp;
        }); // forEach

        return scores;
      } // get ordinalscores

    }, {
      key: "categoricalvariables",
      get: function get() {
        // The categoricals need to be mapped into numerical values first. The order for the mapping may be different in hte x and y axes, therefore two separate variables are required for the categoricals.
        // But in the end the scores for all variables are required in two directions. Only the correlations between the spatial and metadata variables are considered (no metadata-metadata correlations.)
        var obj = this;
        var spatial = obj.spatialvariables;
        return obj.categoricals.map(function (varname) {
          var values = obj.items.map(function (item) {
            return item.ui.metadata[varname];
          }); // map

          var mapping = categoricalmapping(spatial[0], spatial[1], values);
          var mapped = [createvariable(values.map(function (v) {
            return mapping[v].x;
          }), varname), createvariable(values.map(function (v) {
            return mapping[v].y;
          }), varname)];
          mapped.name = varname;
          return mapped;
        }); // map
      } // get categoricalvariables

    }, {
      key: "categoricalscores",
      get: function get() {
        var obj = this;
        var spatial = obj.spatialvariables;
        var scores = obj.categoricalvariables.map(function (categorical) {
          sp = [spearman(spatial[0], categorical[0]), spearman(spatial[1], categorical[1])];
          sp.name = categorical.name;
          return sp;
        }); // forEach

        return scores;
      } // get categoricalscores

    }, {
      key: "positionByMetadata",
      value: function positionByMetadata(variable, axis) {
        var obj = this; // Collect the range of the metadata variable.

        var v = range(obj.items.map(function (item) {
          return item.ui.metadata[variable];
        })); // Create the scale.

        var scale = new scaleLinear();
        scale.domain = v;

        if (axis == "x") {
          scale.range = range(obj.positions.x);
          obj.items.forEach(function (item) {
            item.node.style.left = scale.dom2range(item.ui.metadata[variable]) + "px";
          });
        } else if (axis == "y") {
          scale.range = range(obj.positions.y);
          obj.items.forEach(function (item) {
            item.node.style.top = scale.dom2range(item.ui.metadata[variable]) + "px";
          });
        } // if

      } // positionByMetadata
      // Testing function

    }, {
      key: "test",
      value: function test(x, y) {
        createvariable(x, "x");
        createvariable(y, "y");
        spearman(x, y);
      } // test

    }]);

    return SpatialCorrelations;
  }(); // SpatialCorrelations

  function categoricalmapping(x, y, v) {
    // This is the mapping of a single metadata variable to numerical values. All that is needed are the x,y, and metadata values.
    var uniquevals = helpers.unique(v); // unique
    // Just assign all unique value their median point no? Or just return hte appropriate dictionary?

    return uniquevals.reduce(function (acc, uniqueval) {
      var xpos = x.filter(function (_x, i) {
        return v[i] == uniqueval;
      });
      var ypos = y.filter(function (_y, i) {
        return v[i] == uniqueval;
      });
      acc[uniqueval] = {
        x: median(xpos),
        y: median(ypos)
      };
      return acc;
    }, {}); // reduce
  } // categoricalmapping


  function createvariable(A, name) {
    // Given an array A add on the mean and standard deviation.
    A.mu = mean(A);
    A.sigma = Math.pow(variance(A), 0.5);
    A.sigma = A.sigma == 0 ? Infinity : A.sigma;
    A.name = name;
    return A;
  } // variable


  function spearman(x, y) {
    // The inputs are two variable arrays, which are expected to also have a 'mu' and 'sigma' property.
    // Get Spearman's rank correlation scores for the order in the x direction.
    // (https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient)
    // The coefficient is
    // covariance (x_rank, y_rank ) / ( sigma(rank_x) sigma(rank_y) )
    return covariance(x, y) / (x.sigma * y.sigma);
  } // spearman


  function covariance(x, y) {
    // 'd' is an array of observations. Calculate the covariance between x and the metadata variable.
    var N = x.length;
    var s = 0;

    for (var i = 0; i < N; i++) {
      s += (x[i] - x.mu) * (y[i] - y.mu);
    }

    return 1 / (N - 1) * s;
  } // covariance


  function variance(x) {
    // variance is a special case of covariance.
    return covariance(x, x);
  } // variance


  function median(numbers) {
    // https://stackoverflow.com/questions/45309447/calculating-median-javascript
    var sorted = numbers.slice().sort(function (a, b) {
      return a - b;
    });
    var middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  } // median


  function mean(d) {
    return sum(d) / d.length;
  } // mean


  function sum(objarray, accessor) {
    var _accessor = accessor ? accessor : function (d) {
      return d;
    };

    return objarray.reduce(function (acc, obj) {
      return acc += _accessor(obj);
    }, 0);
  } // sum


  function range(A) {
    // Math.min wants separate inputs.
    return A.reduce(function (acc, v) {
      acc[0] = v < acc[0] ? v : acc[0];
      acc[1] = v > acc[1] ? v : acc[1];
      return acc;
    }, [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]);
  } // min

  var canvas = document.getElementById("canvas");
  var container = document.getElementById("table-top");
  var svg = document.querySelector("svg.lasso");
  var correlationssvg = document.querySelector("svg.correlations"); // The MeshRenderer implements the frag and color shaders, and runs the main drawing loop.

  var renderer = new MeshRenderer2D(canvas, container); // Botch the color range for now.

  renderer.customGlobalColormapRange = [1140, 1156];
  fetch("metadata_smith_sweep_initial.json").then(function (d) {
    return d.json();
  }).then(function (metadata) {
    // metadata = [metadata[12]];
    // Add the players in. The HTML will position hte frames.
    for (var i = 0; i < metadata.length; i++) {
      var m = metadata[i]; // Player is added within the MeshRenderer because it needs the 'gl'.

      var p = renderer.add(m.unsteady_entropy_contour);
      p.title(m.taskId);
      p.ui.metadata = m;
    } // for
    // The renderer starts updating straight away. It's the responsibility of the geometries to provide something to draw. In the end some initial geometry is provided as default, as the buffers are initialised straight away.


    renderer.draw();
    console.log(renderer); // Add the arranging on top. This is standalone from the knowledge manager.

    var gc = new GroupingCoordinator(renderer.items, container, svg);
    console.log(gc); // Add the spatial correlations. Make use of the navigation button of the time being.

    var sp = new SpatialCorrelations(renderer.items, correlationssvg);
    console.log(sp);

    document.querySelector("button.correlations").onclick = function () {
      sp.show();
    }; // onclick
    // How should the correlations menu be exited? By clicking anywhere on the svg?

  }); // fetch.then

}());
//# sourceMappingURL=contourdemo.js.map
