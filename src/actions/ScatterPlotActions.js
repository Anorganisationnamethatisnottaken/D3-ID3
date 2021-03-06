export const SCATTER_PLOT = "SCATTER_PLOT";
export const UPDATE_WIDTH = "UPDATE_WIDTH";
export const UPDATE_HEIGHT = "UPDATE_HEIGHT";
export const UPDATE_TOP = "UPDATE_TOP";
export const UPDATE_BOTTOM = "UPDATE_BOTTOM";
export const UPDATE_RIGHT = "UPDATE_RIGHT";
export const UPDATE_LEFT = "UPDATE_LEFT";
export const UPDATE_X_NAME = "UPDATE_X_NAME";
export const UPDATE_X_NAME_COLOR = "UPDATE_X_NAME_COLOR";
export const UPDATE_X_TICKS = "UPDATE_X_TICKS";
export const UPDATE_X_AXIS_COLOR = "UPDATE_X_AXIS_COLOR";
export const UPDATE_Y_NAME = "UPDATE_Y_NAME";
export const UPDATE_Y_NAME_COLOR = "UPDATE_Y_NAME_COLOR";
export const UPDATE_Y_TICKS = "UPDATE_Y_TICKS";
export const UPDATE_Y_AXIS_COLOR = "UPDATE_Y_AXIS_COLOR";

export const getScatterPlot = (payload) => dispatch => {
  dispatch({
    type: SCATTER_PLOT,
    payload: payload
  });
};
export const updateWidth =  (width) => {
  return {
    type: UPDATE_WIDTH,
    width
  }
}
export const updateHeight =  (height) => {
  return {
    type: UPDATE_HEIGHT,
    height
  }
}
export const updateTop =  (top) => {
  return {
    type: UPDATE_TOP,
    top
  }
}
export const updateBottom =  (bottom) => {
  return {
    type: UPDATE_BOTTOM,
    bottom
  }
}
export const updateRight =  (right) => {
  return {
    type: UPDATE_RIGHT,
    right
  }
}

export const updateLeft =  (left) => {
  return {
    type: UPDATE_LEFT,
    left
  }
}

export const update_x_name = (xName) => {
  return {
    type: UPDATE_X_NAME,
    xName
  }
}

export const update_x_nameColor = (xNameColor) =>{
  return {
    type: UPDATE_X_NAME_COLOR,
    xNameColor
  }
}
export const update_x_ticks = (xTicks) =>{
  return {
    type: UPDATE_X_TICKS,
    xTicks
  }
}

export const update_x_axisColor = (color) =>{
  return {
    type: UPDATE_X_AXIS_COLOR,
    color
  }
}
export const update_y_name = (yName) =>{
  return {
    type: UPDATE_Y_NAME,
    yName
  }
}
export const update_y_nameColor = (color) => {
  return {
    type: UPDATE_Y_NAME_COLOR,
    color
  }
}
export const update_y_ticks = (tick) => {
  return {
  type: UPDATE_Y_TICKS,
  tick
  }
}
export const update_y_axisColor = (color) =>{
  return {
    type: UPDATE_Y_AXIS_COLOR,
    color
  }
}


