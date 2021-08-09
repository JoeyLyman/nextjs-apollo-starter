import { useState, useCallback } from "react";
import { isObject } from "../../util/objectHelpers";

export const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState);

  // Inputs to onChange can be: ("key", value) or ({object with keys and values})
  const onChange = useCallback((keyOrObject, keyValue) => {
    // If key is object:
    if (isObject(keyOrObject)) {
      // For key in object, setValues
      for (let [key, value] of Object.entries(keyOrObject)) {
        setValues((prevValues) => {
          return { ...prevValues, [key]: value };
        });
      }
      // Else if it is key value pair:
    } else {
      setValues((prevValues) => {
        return { ...prevValues, [keyOrObject]: keyValue };
      });
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return [values, onChange, onSubmit];
};

// const onChange = (path, value) => {
//   const oldValues = _.defaults({}, values);
//   const updatedObjectPath = path
//     .reverse()
//     .reduce((acc, currentValue, currentIndex, arr) => {
//       if (currentIndex == 0) {
//         return { [currentValue]: value };
//       } else {
//         return { [currentValue]: acc };
//       }
//     }, {});

//   //const newObjectToMerge = _.merge(oldValues, updatedObjectPath);
//   const newObject = _.assign({}, oldValues);
//   const newObjectToMerge = _.merge(newObject, updatedObjectPath);

//   setValues(newObjectToMerge); // need to spread values or else the obejct will be overwritten with just one keyvalue pair
// };
