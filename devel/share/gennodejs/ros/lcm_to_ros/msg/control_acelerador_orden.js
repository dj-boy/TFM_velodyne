// Auto-generated. Do not edit!

// (in-package lcm_to_ros.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class control_acelerador_orden {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.Prioridad = null;
      this.Valor = null;
    }
    else {
      if (initObj.hasOwnProperty('Prioridad')) {
        this.Prioridad = initObj.Prioridad
      }
      else {
        this.Prioridad = 0;
      }
      if (initObj.hasOwnProperty('Valor')) {
        this.Valor = initObj.Valor
      }
      else {
        this.Valor = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type control_acelerador_orden
    // Serialize message field [Prioridad]
    bufferOffset = _serializer.int8(obj.Prioridad, buffer, bufferOffset);
    // Serialize message field [Valor]
    bufferOffset = _serializer.float64(obj.Valor, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type control_acelerador_orden
    let len;
    let data = new control_acelerador_orden(null);
    // Deserialize message field [Prioridad]
    data.Prioridad = _deserializer.int8(buffer, bufferOffset);
    // Deserialize message field [Valor]
    data.Valor = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 9;
  }

  static datatype() {
    // Returns string type for a message object
    return 'lcm_to_ros/control_acelerador_orden';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ec11058383f1828f9cecbd0a9dbdb56e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #######################################################################
    # This message was automatically generated by the lcm_to_ros package
    # https://github.com/nrjl/lcm_to_ros, nicholas.lawrance@oregonstate.edu
    #######################################################################
    #
    # Source message:    .msg
    # Creation:          lun 18 feb 2019 17:14:16 CET
    #
    #######################################################################
    int8                Prioridad
    float64             Valor
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new control_acelerador_orden(null);
    if (msg.Prioridad !== undefined) {
      resolved.Prioridad = msg.Prioridad;
    }
    else {
      resolved.Prioridad = 0
    }

    if (msg.Valor !== undefined) {
      resolved.Valor = msg.Valor;
    }
    else {
      resolved.Valor = 0.0
    }

    return resolved;
    }
};

module.exports = control_acelerador_orden;
