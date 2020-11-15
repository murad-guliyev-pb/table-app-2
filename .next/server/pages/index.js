module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "@material-ui/core"
var external_material_ui_core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__("BjFw");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__("30mr");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableContainer"
var TableContainer_ = __webpack_require__("5id3");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);

// EXTERNAL MODULE: external "@material-ui/core/TableFooter"
var TableFooter_ = __webpack_require__("PB6W");
var TableFooter_default = /*#__PURE__*/__webpack_require__.n(TableFooter_);

// EXTERNAL MODULE: external "@material-ui/core/TablePagination"
var TablePagination_ = __webpack_require__("bzUq");
var TablePagination_default = /*#__PURE__*/__webpack_require__.n(TablePagination_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__("iDDF");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__("Ai9N");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__("TWtx");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./components/table/tableHead.tsx









const TableHead = () => {
  const renderCell = (value, width) => Object(core_["jsx"])(TableCell_default.a, {
    style: {
      width
    }
  }, Object(core_["jsx"])(Typography_default.a, {
    style: {
      fontWeight: 500
    },
    variant: "subtitle1",
    component: "p"
  }, value));

  return Object(core_["jsx"])(TableHead_default.a, null, Object(core_["jsx"])(external_material_ui_core_["TableRow"], null, renderCell("ID"), renderCell("Name"), renderCell("Surname"), renderCell("Date of birth"), renderCell("Position"), renderCell("Phone number"), renderCell("Actions", 200)));
};

/* harmony default export */ var tableHead = (TableHead);
// CONCATENATED MODULE: ./helpers/utils.ts
const validateName = value => {
  return /^[A-Za-z\s-]+$/.test(value);
};
const validateSurname = value => {
  return /^[A-Za-z\s-]+$/.test(value);
};
const validatePosition = value => {
  return /^[A-Za-z\s-]+$/.test(value);
};
const validateDateOfBirth = value => {
  return /^\d{1,2}-\d{1,2}-\d{4}$/.test(value);
};
const validatePhoneNumber = value => {
  return /^[\d +-]+$/.test(value);
};
// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// CONCATENATED MODULE: ./components/table/tableCell.tsx




function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const container = true ? {
  name: "1gtfl7l",
  styles: "width:120px;"
} : undefined;
const tableCell_text = true ? {
  name: "1q7ohal",
  styles: "color:#f44336;"
} : undefined;

const TableCell = ({
  value,
  errors,
  isEditing,
  onChange,
  name
}) => {
  const hasError = errors.includes(name);

  const renderInput = () => Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(TextField_default.a, {
    "data-testid": "input",
    error: hasError,
    name: name,
    value: value,
    onChange: onChange
  }), hasError && Object(core_["jsx"])(external_material_ui_core_["Typography"], {
    css: tableCell_text,
    variant: "caption",
    component: "p"
  }, hasError && value === "" ? "Is mandatory" : "Invalid format"));

  const renderText = () => Object(core_["jsx"])(Box_default.a, {
    paddingY: 1
  }, Object(core_["jsx"])(external_material_ui_core_["Typography"], {
    variant: "subtitle1",
    component: "p"
  }, value));

  return Object(core_["jsx"])(Box_default.a, {
    css: container
  }, isEditing && name !== "id" ? renderInput() : renderText());
};

/* harmony default export */ var tableCell = (TableCell);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./components/table/tableRowActions.tsx




function tableRowActions_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const primaryButton = true ? {
  name: "1bm9945",
  styles: "color:#1976d2;"
} : undefined;

const TableRowActions = ({
  isEditing,
  isDeleted,
  onEdit,
  onSave,
  onDelete,
  onRestore
}) => {
  const renderEditButton = () => Object(core_["jsx"])(Button_default.a, {
    css: primaryButton,
    disabled: isDeleted,
    onClick: onEdit
  }, "Edit");

  const renderSaveButton = () => Object(core_["jsx"])(Button_default.a, {
    css: primaryButton,
    onClick: onSave
  }, "Save");

  const renderDeleteButton = () => Object(core_["jsx"])(Button_default.a, {
    color: "secondary",
    onClick: onDelete
  }, "Delete");

  const renderRestoreButton = () => Object(core_["jsx"])(Button_default.a, {
    color: "secondary",
    onClick: onRestore
  }, "Restore");

  return Object(core_["jsx"])(external_react_default.a.Fragment, null, isEditing && !isDeleted ? renderSaveButton() : renderEditButton(), isDeleted ? renderRestoreButton() : renderDeleteButton());
};

/* harmony default export */ var tableRowActions = (TableRowActions);
// CONCATENATED MODULE: ./components/table/tableRow.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const TableRow = ({
  employeeData,
  deletedEmployees,
  isEditing,
  setIsEditing,
  onEmployeeChange,
  onEmployeeDelete,
  onEmployeeRestore
}) => {
  const {
    0: isDeleted,
    1: setIsDeleted
  } = Object(external_react_["useState"])(false);
  const {
    0: employee,
    1: setEmployee
  } = Object(external_react_["useState"])(employeeData);
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])([]);
  const keys = Object.keys(employee);
  Object(external_react_["useEffect"])(() => {
    setEmployee(employeeData);
  }, [employeeData, isEditing]);
  Object(external_react_["useEffect"])(() => {
    const isEmployeeInDeletedEmployeesList = deletedEmployees.some(item => item.id === employee.id);
    setIsDeleted(isEmployeeInDeletedEmployeesList);
  }, [deletedEmployees]);

  const validateEmployee = employee => {
    const {
      name,
      surname,
      dateOfBirth,
      position,
      phoneNumber
    } = employee;
    const _errors = [];

    if (name === "" || !validateName(name)) {
      _errors.push("name");
    }

    if (surname === "" || !validateSurname(surname)) {
      _errors.push("surname");
    }

    if (dateOfBirth === "" || !validateDateOfBirth(dateOfBirth)) {
      _errors.push("dateOfBirth");
    }

    if (position === "" || !validatePosition(position)) {
      _errors.push("position");
    }

    if (phoneNumber === "" || !validatePhoneNumber(phoneNumber)) {
      _errors.push("phoneNumber");
    }

    setErrors(_errors);
    return _errors.length === 0;
  };

  const handleCellChange = event => {
    const {
      target: {
        name,
        value
      }
    } = event;

    for (const key in employee) {
      if (key === name) {
        const _employee = _objectSpread({}, employee);

        _employee[key] = value;
        setEmployee(_employee);
      }
    }
  };

  const handleEdit = () => {
    setErrors([]);
    setIsEditing(employee.id);
  };

  const handleSave = () => {
    if (validateEmployee(employee)) {
      onEmployeeChange(employee);
      setIsEditing("");
    }
  };

  const handleDelete = () => {
    onEmployeeDelete(employee.id);
    setIsEditing("");
  };

  const handleRestore = () => {
    onEmployeeRestore(employee.id);
  };

  return Object(core_["jsx"])(TableRow_default.a, {
    style: {
      backgroundColor: isDeleted ? "rgba(220, 0, 78, 0.08)" : "inherit"
    }
  }, keys.map(key => Object(core_["jsx"])(TableCell_default.a, {
    key: key
  }, Object(core_["jsx"])(tableCell, {
    errors: errors,
    name: key,
    isEditing: isEditing,
    value: employee[key],
    onChange: handleCellChange
  }))), Object(core_["jsx"])(TableCell_default.a, null, Object(core_["jsx"])(tableRowActions, {
    isEditing: isEditing,
    isDeleted: isDeleted,
    onEdit: handleEdit,
    onSave: handleSave,
    onDelete: handleDelete,
    onRestore: handleRestore
  })));
};

/* harmony default export */ var tableRow = (TableRow);
// CONCATENATED MODULE: ./components/table/index.tsx














const Table = ({
  employees,
  deletedEmployees,
  onEmployeeChange,
  onEmployeeDelete,
  onEmployeeRestore
}) => {
  const [page, setPage] = external_react_default.a.useState(0);
  const [rowsPerPage, setRowsPerPage] = external_react_default.a.useState(5);
  const {
    0: editingEmployeeId,
    1: setEditingEmployeeId
  } = Object(external_react_["useState"])("");

  const handleEditingEmployee = employeeId => {
    setEditingEmployeeId(employeeId);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getEmployees = () => {
    if (rowsPerPage > 0) {
      return employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }

    return employees;
  };

  return Object(core_["jsx"])(TableContainer_default.a, {
    component: Paper_default.a,
    elevation: 2,
    variant: "outlined"
  }, Object(core_["jsx"])(Table_default.a, null, Object(core_["jsx"])(tableHead, null), Object(core_["jsx"])(TableBody_default.a, null, getEmployees().map(employee => Object(core_["jsx"])(tableRow, {
    key: employee.id,
    employeeData: employee,
    deletedEmployees: deletedEmployees,
    isEditing: employee.id === editingEmployeeId,
    setIsEditing: handleEditingEmployee,
    onEmployeeChange: onEmployeeChange,
    onEmployeeDelete: onEmployeeDelete,
    onEmployeeRestore: onEmployeeRestore
  }))), Object(core_["jsx"])(TableFooter_default.a, null, Object(core_["jsx"])(TableRow_default.a, null, Object(core_["jsx"])(TablePagination_default.a, {
    rowsPerPageOptions: [5, 10, {
      label: "All",
      value: -1
    }],
    colSpan: 2,
    count: employees.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  })))));
};

/* harmony default export */ var table = (Table);
// CONCATENATED MODULE: ./components/updatedEmployees.tsx







const UpdatedEmployees = ({
  deletedEmployees,
  editedEmployees
}) => {
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(Box_default.a, null, "Updated: ", Object(core_["jsx"])("pre", null, JSON.stringify(editedEmployees, null, 4))), Object(core_["jsx"])(Box_default.a, {
    marginTop: 2
  }, "Deleted: ", Object(core_["jsx"])("pre", null, JSON.stringify(deletedEmployees, null, 4))));
};

/* harmony default export */ var updatedEmployees = (UpdatedEmployees);
// CONCATENATED MODULE: ./components/app.tsx




function app_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const header = true ? {
  name: "14h8kzv",
  styles: "background-color:#1976d2;color:white;padding:12px 0;"
} : undefined;
const submitButton = true ? {
  name: "nrbnup",
  styles: "background-color:#1976d2;"
} : undefined;

const App = ({
  employeesList
}) => {
  const {
    0: deletedEmployees,
    1: setDeletedEmployees
  } = Object(external_react_["useState"])([]);
  const {
    0: editedEmployees,
    1: setEditedEmployees
  } = Object(external_react_["useState"])([]);
  const {
    0: employees,
    1: setEmployees
  } = Object(external_react_["useState"])(employeesList);
  const {
    0: isSubmited,
    1: setIsSubmited
  } = Object(external_react_["useState"])(false);
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])(""); // Helpers

  const isEmployeeEqualToInitial = employee => {
    const initialEmployee = employeesList.find(item => item.id === employee.id);
    return Object(external_lodash_["isEqual"])(employee, initialEmployee);
  };

  const existsInEditedEmployees = employeeId => {
    return editedEmployees.some(item => item.id === employeeId);
  };

  const removeEmployeeFromEditedEmployees = employeeId => {
    if (existsInEditedEmployees(employeeId)) {
      const filtered = editedEmployees.filter(item => item.id !== employeeId);
      setEditedEmployees(filtered);
    }
  };

  const addEmployeeToEditedEmployees = employee => {
    if (!existsInEditedEmployees(employee.id)) {
      setEditedEmployees([...editedEmployees, employee]);
    }
  };

  const replaceEmployeeInEditedEmployees = employee => {
    const updatedEmployees = editedEmployees.map(item => item.id === employee.id ? employee : item);
    setEditedEmployees(updatedEmployees);
  };

  const addRestoredEmployeeToEditedEmployees = employeeId => {
    const restoredEmployee = employees.find(item => item.id === employeeId);

    if (restoredEmployee && !isEmployeeEqualToInitial(restoredEmployee)) {
      addEmployeeToEditedEmployees(restoredEmployee);
    }
  }; // Handlers


  const handleEmployeeChange = employee => {
    if (isEmployeeEqualToInitial(employee)) {
      removeEmployeeFromEditedEmployees(employee.id);
    } else {
      if (existsInEditedEmployees(employee.id)) {
        replaceEmployeeInEditedEmployees(employee);
      } else {
        addEmployeeToEditedEmployees(employee);
      }
    }

    const updatedEmployees = employees.map(item => item.id === employee.id ? employee : item);
    setEmployees(updatedEmployees);
  };

  const handleEmployeeDelete = employeeId => {
    const deletedEmployee = employees.find(item => item.id === employeeId);

    if (deletedEmployee) {
      setDeletedEmployees([...deletedEmployees, deletedEmployee]);
    }

    removeEmployeeFromEditedEmployees(employeeId);
  };

  const handleEmployeeRestore = employeeId => {
    const filtered = deletedEmployees.filter(item => item.id !== employeeId);
    setDeletedEmployees(filtered);
    addRestoredEmployeeToEditedEmployees(employeeId);
  };

  const resetToInitial = () => {
    setIsSubmited(false);
    setEmployees(employeesList);
    setEditedEmployees([]);
    setDeletedEmployees([]);
  };

  const getEmployees = () => {
    const filtered = employees.filter(item => {
      const values = Object.values(item);

      for (const val of values) {
        if (val.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
          return item;
        }
      }
    });
    return filtered;
  };

  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(Box_default.a, {
    css: header
  }, Object(core_["jsx"])(external_material_ui_core_["Grid"], {
    container: true,
    direction: "row",
    justify: "center"
  }, Object(core_["jsx"])(external_material_ui_core_["Typography"], {
    variant: "h4",
    component: "h4"
  }, "Table Application"))), Object(core_["jsx"])(external_material_ui_core_["Container"], {
    maxWidth: "lg"
  }, Object(core_["jsx"])(Box_default.a, {
    marginY: 5
  }, Object(core_["jsx"])(Box_default.a, {
    marginBottom: 2
  }, Object(core_["jsx"])(external_material_ui_core_["Grid"], {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "flex-end"
  }, Object(core_["jsx"])(Box_default.a, {
    marginRight: 1
  }, Object(core_["jsx"])(external_material_ui_core_["Typography"], {
    variant: "subtitle1",
    component: "p"
  }, "Search:")), Object(core_["jsx"])(external_material_ui_core_["TextField"], {
    value: searchValue,
    onChange: event => setSearchValue(event.target.value)
  }))), employees.length > 0 && Object(core_["jsx"])(table, {
    employees: getEmployees(),
    deletedEmployees: deletedEmployees,
    onEmployeeChange: handleEmployeeChange,
    onEmployeeDelete: handleEmployeeDelete,
    onEmployeeRestore: handleEmployeeRestore
  }), Object(core_["jsx"])(Box_default.a, {
    marginTop: 2
  }, Object(core_["jsx"])(external_material_ui_core_["Grid"], {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "baseline"
  }, Object(core_["jsx"])(Box_default.a, {
    marginRight: 1
  }, Object(core_["jsx"])(external_material_ui_core_["Button"], {
    css: submitButton,
    variant: "contained",
    color: "primary",
    onClick: () => setIsSubmited(true)
  }, "Submit")), Object(core_["jsx"])(external_material_ui_core_["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: resetToInitial
  }, "Reset to initial"))), isSubmited && Object(core_["jsx"])(Box_default.a, {
    marginTop: 5
  }, Object(core_["jsx"])(updatedEmployees, {
    deletedEmployees: deletedEmployees,
    editedEmployees: editedEmployees
  })))));
};

/* harmony default export */ var app = (App);
// EXTERNAL MODULE: external "@material-ui/lab/Skeleton"
var Skeleton_ = __webpack_require__("fDba");
var Skeleton_default = /*#__PURE__*/__webpack_require__.n(Skeleton_);

// CONCATENATED MODULE: ./components/appSkeleton.tsx



function appSkeleton_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const appSkeleton_container = true ? {
  name: "8atqhb",
  styles: "width:100%;"
} : undefined;
const appSkeleton_header = true ? {
  name: "1ydchh3",
  styles: "width:100%;margin-bottom:40px;"
} : undefined;
const search = true ? {
  name: "irrfx6",
  styles: "display:flex;justify-content:flex-end;margin-bottom:16px;"
} : undefined;
const buttons = true ? {
  name: "1h2ggju",
  styles: "display:flex;justify-content:flex-end;margin-top:16px;span:first-of-type{margin-right:16px;}"
} : undefined;

const AppSkeleton = () => {
  const renderCell = () => Object(core_["jsx"])(external_material_ui_core_["TableCell"], null, Object(core_["jsx"])(Skeleton_default.a, {
    variant: "rect",
    height: 30
  }));

  const renderRow = () => Object(core_["jsx"])(external_material_ui_core_["TableRow"], null, renderCell(), renderCell(), renderCell(), renderCell(), renderCell(), renderCell());

  return Object(core_["jsx"])("div", {
    css: appSkeleton_container
  }, Object(core_["jsx"])("div", {
    css: appSkeleton_header
  }, Object(core_["jsx"])(Skeleton_default.a, {
    variant: "rect",
    height: 65
  })), Object(core_["jsx"])(external_material_ui_core_["Container"], {
    maxWidth: "lg"
  }, Object(core_["jsx"])("div", {
    css: search
  }, Object(core_["jsx"])(external_material_ui_core_["Grid"], {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "flex-end"
  }, Object(core_["jsx"])(Skeleton_default.a, {
    variant: "rect",
    width: 200,
    height: 30
  }))), Object(core_["jsx"])(external_material_ui_core_["TableContainer"], {
    component: external_material_ui_core_["Paper"],
    elevation: 2,
    variant: "outlined"
  }, Object(core_["jsx"])(external_material_ui_core_["Table"], null, Object(core_["jsx"])(external_material_ui_core_["TableBody"], null, renderRow(), renderRow(), renderRow(), renderRow(), renderRow(), renderRow()))), Object(core_["jsx"])("div", {
    css: buttons
  }, Object(core_["jsx"])(external_material_ui_core_["Grid"], {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "baseline"
  }, Object(core_["jsx"])(Skeleton_default.a, {
    variant: "rect",
    width: 120,
    height: 30
  }), Object(core_["jsx"])(Skeleton_default.a, {
    variant: "rect",
    width: 120,
    height: 30
  })))));
};

/* harmony default export */ var appSkeleton = (AppSkeleton);
// CONCATENATED MODULE: ./helpers/models.ts
const baseUrl = () => "http://localhost:3000/api";
const fetcher = url => fetch(url).then(res => res.json());
// CONCATENATED MODULE: ./pages/index.tsx








const TableApp = ({
  initialData
}) => {
  const {
    data,
    error
  } = external_swr_default()(`${baseUrl()}/employee`, fetcher, {
    initialData
  });
  if (error) return Object(core_["jsx"])("div", null, "failed to load");
  if (!data) return Object(core_["jsx"])(appSkeleton, null);
  return Object(core_["jsx"])(app, {
    employeesList: data
  });
};

async function getServerSideProps() {
  const data = await fetcher(`${baseUrl()}/employee`);
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (TableApp);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "5id3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "PB6W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableFooter");

/***/ }),

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "bzUq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fDba":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ })

/******/ });