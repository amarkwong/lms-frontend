export const Types = {
  GET_COURSES_REQUEST: 'courses/get_courses_request',
  GET_COURSES_SUCCESS: 'courses/get_courses_success',
  DELETE_COURSE_REQUEST: 'courses/delete_course_request',
  CREATE_COURSE_REQUEST: 'courses/create_course_request',
  UPDATE_COURSE_REQUEST: 'courses/update_course_request',
  COURSES_ERROR: 'courses/course_error',
  SET_MODE: 'courses/set_mode',
  GET_MODE: 'courses/get_mode',
};

export const getCoursesRequest = () => ({
	type: Types.GET_COURSES_REQUEST
});

export const getCoursesSuccess = ({items}) => ({
	type: Types.GET_COURSES_SUCCESS,
	payload: {
		items
	}
});

export const createCourseRequest = (course) => ({
    type: Types.CREATE_COURSE_REQUEST,
    payload: course,
});

export const updateCourseRequest = (course) => ({
    type: Types.UPDATE_COURSE_REQUEST,
    payload: course,
});

export const setMode = (mode) => ({
    type: Types.SET_MODE,
    payload: mode,
})
export const getMode = () => ({
    type: Types.GET_MODE
})


export const deleteCourseRequest = (courseId) => ({
    type: Types.DELETE_COURSE_REQUEST,
    payload: {
        courseId
    }
});

export const coursesError = ({error}) => ({
    type: Types.COURSES_ERROR,
    payload: {
        error
    }
});