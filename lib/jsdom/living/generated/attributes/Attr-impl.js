"use strict";
const idlUtils = require("../util");
const changeAttribute = require("../../attributes").changeAttribute;

exports.implementation = class AttrImpl {
  constructor(_, privateData) {
    this._namespace = privateData.namespace;
    this._namespacePrefix = privateData.namespacePrefix;
    this._localName = privateData.localName;
    this._name = privateData.name;
    this._value = privateData.value;
    this._element = privateData.element;

    this.specified = true;
  }

  get namespaceURI() {
    return this._namespace;
  }

  get prefix() {
    return this._prefix;
  }

  get localName() {
    return this._localName;
  }

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }
  set value(v) {
    if (this.element === null) {
      this._value = v;
    } else {
      changeAttribute(this.element, idlUtils.wrapperForImpl(this), v);
    }
  }

  // Delegate to value
  get nodeValue() {
    return this.value;
  }
  set nodeValue(v) {
    this.value = v;
  }

  // Delegate to value
  get textContent() {
    return this.value;
  }
  set textContent(v) {
    this.value = v;
  }

  get ownerElement() {
    return this._element;
  }
};
