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

class osm_route_corridor {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.id = null;
      this.n_puntos = null;
      this.punto_final = null;
      this.izquierda = null;
      this.centro = null;
      this.derecha = null;
    }
    else {
      if (initObj.hasOwnProperty('id')) {
        this.id = initObj.id
      }
      else {
        this.id = 0;
      }
      if (initObj.hasOwnProperty('n_puntos')) {
        this.n_puntos = initObj.n_puntos
      }
      else {
        this.n_puntos = 0;
      }
      if (initObj.hasOwnProperty('punto_final')) {
        this.punto_final = initObj.punto_final
      }
      else {
        this.punto_final = new Array(2).fill(0);
      }
      if (initObj.hasOwnProperty('izquierda')) {
        this.izquierda = initObj.izquierda
      }
      else {
        this.izquierda = [];
      }
      if (initObj.hasOwnProperty('centro')) {
        this.centro = initObj.centro
      }
      else {
        this.centro = [];
      }
      if (initObj.hasOwnProperty('derecha')) {
        this.derecha = initObj.derecha
      }
      else {
        this.derecha = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type osm_route_corridor
    // Serialize message field [id]
    bufferOffset = _serializer.int32(obj.id, buffer, bufferOffset);
    // Serialize message field [n_puntos]
    bufferOffset = _serializer.int32(obj.n_puntos, buffer, bufferOffset);
    // Check that the constant length array field [punto_final] has the right length
    if (obj.punto_final.length !== 2) {
      throw new Error('Unable to serialize array field punto_final - length must be 2')
    }
    // Serialize message field [punto_final]
    bufferOffset = _arraySerializer.float64(obj.punto_final, buffer, bufferOffset, 2);
    // Serialize message field [izquierda]
    bufferOffset = _arraySerializer.float64(obj.izquierda, buffer, bufferOffset, null);
    // Serialize message field [centro]
    bufferOffset = _arraySerializer.float64(obj.centro, buffer, bufferOffset, null);
    // Serialize message field [derecha]
    bufferOffset = _arraySerializer.float64(obj.derecha, buffer, bufferOffset, null);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type osm_route_corridor
    let len;
    let data = new osm_route_corridor(null);
    // Deserialize message field [id]
    data.id = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [n_puntos]
    data.n_puntos = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [punto_final]
    data.punto_final = _arrayDeserializer.float64(buffer, bufferOffset, 2)
    // Deserialize message field [izquierda]
    data.izquierda = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [centro]
    data.centro = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [derecha]
    data.derecha = _arrayDeserializer.float64(buffer, bufferOffset, null)
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += 8 * object.izquierda.length;
    length += 8 * object.centro.length;
    length += 8 * object.derecha.length;
    return length + 36;
  }

  static datatype() {
    // Returns string type for a message object
    return 'lcm_to_ros/osm_route_corridor';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9209afcc07bf30ee8b230f80895f99ea';
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
    # Creation:          lun 18 feb 2019 17:14:17 CET
    #
    #######################################################################
    int32               id
    int32               n_puntos
    float64[2]          punto_final
    float64[]           izquierda
    float64[]           centro
    float64[]           derecha
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new osm_route_corridor(null);
    if (msg.id !== undefined) {
      resolved.id = msg.id;
    }
    else {
      resolved.id = 0
    }

    if (msg.n_puntos !== undefined) {
      resolved.n_puntos = msg.n_puntos;
    }
    else {
      resolved.n_puntos = 0
    }

    if (msg.punto_final !== undefined) {
      resolved.punto_final = msg.punto_final;
    }
    else {
      resolved.punto_final = new Array(2).fill(0)
    }

    if (msg.izquierda !== undefined) {
      resolved.izquierda = msg.izquierda;
    }
    else {
      resolved.izquierda = []
    }

    if (msg.centro !== undefined) {
      resolved.centro = msg.centro;
    }
    else {
      resolved.centro = []
    }

    if (msg.derecha !== undefined) {
      resolved.derecha = msg.derecha;
    }
    else {
      resolved.derecha = []
    }

    return resolved;
    }
};

module.exports = osm_route_corridor;
