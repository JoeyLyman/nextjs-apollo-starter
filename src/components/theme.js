import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red, blue, grey, green } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
      contrastText: "#ffffff",
      contrastTextLight: "#bdbdbd",
    },
    secondary: {
      main: "#ff9800", //"#80deea" //"#19857b"
      light: "#ffb300",
      dark: "#f57c00",
      contrastText: "#ffffff",
    },
    tertiary: {
      main: "#84ffff", //"#80deea" //"#19857b"
      light: "#baffff",
      dark: "#4bcbcc",
      contrastText: "#000000",
    },
    spectrum: {
      one: "#FF0000", //"#f15a29",
      two: "#f57c00", //"#fcb040",
      three: "#ffdf16",
      four: "#b1d455",
      five: "#54bf98",
    },
    // surfaceTexture: {
    //   one: "#6d4c41", //"#f15a29",
    //   two: "#558b2f", //"#fcb040",
    //   three: "#26a69a",
    //   four: "#81d4fa",
    //   five: "#e1f5fe",
    // },
    metricColors: {
      size: "#33691e", //"#aed581",
      shape: "#311b92", //"#9575cd",
      surfaceTexture: "#0d47a1",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
      disabled: "#6d6d6d",
      hint: "#84ffff",
    },
    action: {
      active: "#ffffff",
      selected: "#ffb300",
      hover: "#6d6d6d",
      disabled: "#9B9B9B",
      disabledBackground: "#424242",
      focus: "#84ffff",
    },
    error: {
      main: "#FF0000",
    },
    background: {
      default: "#212121", //
      paper: "#424242",
      pickers: "#616161",
    },
    divider: "#6d6d6d",
    type: "dark",
    dataTypes: {
      spots: {
        ifTransparent: "#ffb300", //"#40c4ff",
        primary: "#90caf9", ////"#30EEFF",
      },
      rawData: {
        swell: "#D2A7FF", //"#AAB3FF",
        wind: "#56FF99",
        tide: "#D9FF4D",
      },
      metrics: {
        // Primary
        size: {},
        shape: {
          primary: "#aa00ff",
          spectrum: [
            "#9B9B9B",
            "#e1bee7",
            "#ea80fc",
            "#e040fb",
            "#d500f9",
            "#aa00ff",
          ],
        },
        surfaceTexture: {
          primary: "#26a69a",
          spectrum: [
            "#9B9B9B",
            "#00838f",
            "#00acc1",
            "#80deea",
            "#84ffff",
            "#18ffff",
          ],
          spectrumOLD: [
            "#9B9B9B",
            "#6d4c41",
            "#558b2f",
            "#26a69a",
            "#81d4fa",
            "#e1f5fe",
          ],
        },
        consistency: {
          primary: "#1de9b6", //"#f50057",
          spectrum: [
            "#9B9B9B",
            "#e0f2f1",
            "#a7ffeb",
            "#64ffda",
            "#1de9b6",
            "#00bfa5",
          ],
          spectrumALT: [
            "#9B9B9B",
            "#f8bbd0",
            "#ff80ab",
            "#ff4081",
            "#f50057",
            "#c51162",
          ],
        },
        // Secondary
        airSections: {
          primary: "#6200ea",
          spectrum: [
            "#9B9B9B",
            "#d1c4e9",
            "#b39ddb",
            "#b388ff",
            "#7c4dff",
            "#651fff",
          ],
        },
        barrels: {
          primary: "#00c853",
          spectrum: [
            "#9B9B9B",
            "#e8f5e9",
            "#b9f6ca",
            "#69f0ae",
            "#00e676",
            "#00c853",
          ],
        },
        openFaces: {
          primary: "#ff6d00",
          spectrum: [
            "#9B9B9B",
            "#ffd180",
            "#ffd54f",
            "#ffb300",
            "#ff9100",
            "#ff6d00",
          ],
        },
        idealBoard: {
          primary: "#d50000",
          spectrum: [
            "#9B9B9B",
            "#ffcdd2",
            "#ff8a80",
            "#f44336",
            "#ff1744",
            "#d50000",

            //"#ff5252",
          ],
        },
        // Safety
        impactDanger: {
          primary: "#dd2c00",
          spectrum: [
            "#9B9B9B",
            "#ffccbc",
            "#ff9e80",
            "#ff6e40",
            "#ff3d00",
            "#dd2c00",
          ],
        },
        current: {
          primary: "#4dd0e1",
          spectrum: [
            "#9B9B9B",
            "#e0f7fa",
            "#b2ebf2",
            "#4dd0e1",
            "#00bcd4",
            "#00acc1",
          ],
          spectrumALT: [
            "#9B9B9B",
            "#cfd8dc",
            "#b0bec5",
            "#90a4ae",
            "#78909c",
            "#607d8b",
          ],
        },
        backwash: {
          primary: "#795548",
          spectrum: [
            "#9B9B9B",
            "#d7ccc8",
            "#bcaaa4",
            "#a1887f",
            "#8d6e63",
            "#795548",
          ],
        },
      },
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        color: "#bdbdbd",
        backgroundColor: "transparent",
        "&:hover": {
          color: "#ffffff",
          backgroundColor: "transparent",
        },
      },
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: "#bdbdbd",
      },
      iconButton: {
        color: "#bdbdbd",
        backgroundColor: "transparent",
        "&:hover": {
          color: "#ffffff",
          backgroundColor: "transparent",
        },
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#424242",
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        maxWidth: "none",
        backgroundColor: "#616161",
      },
    },
    MuiPickersClock: {
      // meridiemButtonSelected: {
      //   backgroundColor: "#ffb30065",
      // },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: "#ffb300",
        height: "30%",
        //opacity: 0.5,
      },
      thumb: {
        backgroundColor: "#ffb300",
        border: "14px solid #ffb300",
        opacity: 0.5,
      },
    },
    MuiDateTimePickerTabs: {
      tabs: {
        backgroundColor: "#6d6d6d",
      },
    },
    MuiPickersDay: {
      // root: {
      //   // "&$selected": {
      //   //   backgroundColor: "#ffb300",
      //   // },
      //   "&:hover": {
      //     backgroundColor: "#ff9800",
      //   },
      // },

      // day: {
      //   color: "white",
      //   backgroundColor: "#6d6d6d",
      //   borderRadius: "50%",
      //   "&:hover": {
      //     borderRadius: "50%",
      //     backgroundColor: "#424242",
      //   },
      // },
      daySelected: {
        backgroundColor: "#ffb300", //"#84ffff",
        color: "inherit",
        borderRadius: "50%",
        fontWeight: "bolder",
      },
      // dayDisabled: {
      //   color: "black",
      // },
      current: {
        color: "#ffb300",
      },
    },
    MuiPickersClockNumber: {
      clockNumber: {
        color: "#ffffff",
      },
    },
    // MuiPickersDesktopDateRangeCalendar: {
    //   root: {
    //     backgroundColor: "#6d6d6d",
    //   },
    // },
    // MuiPickersDateRangeDay: {
    //   rangeIntervalDayHighlight: {
    //     backgroundColor: "#424242",
    //   },
    // },
    // MuiPickersCalendarHeader: {
    //   // iconButton: {
    //   //   backgroundColor: "#6d6d6d",
    //   //   color: "white",
    //   // },
    //   dayLabel: {
    //     color: "#bdbdbd",
    //   },
    // },
    MuiMenu: {
      list: {
        color: "white",
        backgroundColor: "#6d6d6d",
      },
    },
    MuiMenuItem: {
      root: {
        "&:hover": {
          backgroundColor: "#424242",
        },
        "&$selected": {
          // this is to refer to the prop provided by M-UI
          backgroundColor: "#ffb300", // updated backgroundColor
        },
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "1.2px solid #6d6d6d",
        },
      },
    },
    MuiInputLabel: {
      root: {
        //color: "#ffb300",
        "&$focused": {
          color: "#ffb300",
        },
      },
      shrink: {
        color: "#ffb300",
      },
    },
    MuiSwitch: {
      track: {
        backgroundColor: "#bdbdbd",
      },
    },
    MuiButton: {
      textPrimary: {
        color: "white",
      },
    },
  },
});

export default responsiveFontSizes(theme);

// Nextjs example: https://codesandbox.io/s/github/mui-org/material-ui/tree/master/examples/nextjs
