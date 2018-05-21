"use strict";

const DOMAIN = "https://raw.githubusercontent.com/DENGQUANXIN/helloworld/master/";
export const URLS = {
  login: DOMAIN + "login.json",
  test: DOMAIN + "test.json",
  contact: DOMAIN + "contact.json"
}

export const TYPES = {
  login: "LOGIN",
  test: "TEST",
  contact: "CONTACT"
}

export const STATES = {
  success: 0,
  failed: 1
}
