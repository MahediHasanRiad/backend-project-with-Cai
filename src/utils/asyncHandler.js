// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);

  } catch (error) {
    console.log(error)
    
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });

  }
};

// another way
/** 
const asyncHandler2 = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((e) => {
      res.status(e.code || 500).json({
        success: false,
        message: e.message,
      });
    });
  };
};
*/

export { asyncHandler };
