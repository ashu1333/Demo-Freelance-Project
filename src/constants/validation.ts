export const isPresent = (data: any) => (data ? true : false);
export const comparison = (data: any, other: any) => data === other;
export const email = (data: any) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    data
  );
export const password = (data: any) => /^(?=.*\d).{6,20}$/.test(data);
export const mobile = (data: any) => /^().{5,15}$/.test(data);
export const number = (data: any) => /^([0-9\-\(\)\s]+).{0,50}$/.test(data);
export const date = (data: any) =>
  /^(\d{1,2})(\/)(\d{1,2})(\/)(\d{4})$/.test(data);
export const pincode = (data: any) => /^().{6,10}$/.test(data);

export function validateLogin(values: any) {
  var errors: { [k: string]: any } = {};
  if (!values?.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values?.password) {
    errors.password = "Password Required";
  } else if (values?.password?.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
}

export function validateSignIn(values: any) {
  var errors: { [k: string]: any } = {};
  if (!values?.first_name) {
    errors.first_name = "First Name Required";
  }
  if (!values?.last_name) {
    errors.last_name = "Last Name Required";
  }
  if (!values?.mobile_no) {
    errors.mobile_no = "Mobile Number Required";
  } else if (values?.mobile_no.length < 10 || values?.mobile_no.length > 30) {
    errors.mobile_no = "Invalid Mobile Number ";
  }
  if (!values?.confirm_password) {
    errors.confirm_password = "Confirm Password Required";
  } else if (!(values?.password == values?.confirm_password)) {
    errors.confirm_password =
      "Your password and confirmation password do not match.";
  }
  var errorlogin = validateLogin(values);
  errors = { ...errorlogin, ...errors };
  return errors;
}
export function validateForgotPassword(values: any) {
  var errors: { [k: string]: any } = {};

  if (!values?.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}

{
  /*PROFILE CHANGE PASSWORD DONE*/
}
export function validateChangePassword(values: any) {
  var errors: { [k: string]: any } = {};

  if (!values?.currentpassword) {
    // console.log("password reqqqqqqq");
    errors.currentpassword = "Current Password Required";
  } else if (values?.currentpassword?.length < 6) {
    errors.currentpassword = "Current Password must be at least 6 characters";
  }

  if (!values?.newpassword) {
    errors.newpassword = "News Password Required";
  } else if (values?.newpassword?.length < 6) {
    errors.newpassword = "New Password must be at least 6 characters";
  }

  if (!values?.confirmedpassword) {
    errors.confirmedpassword = "Confirm Password Required";
  } else if (values?.confirmedpassword?.length < 6) {
    errors.confirmedpassword = "Confirm Password must be at least 6 characters";
  }
  return errors;
}

{
  /*EDIT PROFILE DONE*/
}
export function validatepProfilePage(values: any) {
  var errors: { [k: string]: any } = {};

  if (!values?.first_name) {
    errors.first_name = "First Name Required";
  } else if (values?.first_name?.length < 3) {
    errors.first_name = "First must be at least 3 characters";
  }
  if (!values?.last_name) {
    errors.last_name = "Last Name Required";
  }
  if (!values?.bussiness_name) {
    errors.bussiness_name = "Bussiness Name Required";
  } else if (values?.bussiness_name?.length < 6) {
    errors.bussiness_name = "Bussimess must be at least 6 characters";
  }
  if (!values?.mobile_no) {
    errors.mobile_no = "Mobile Number Required";
  } else if (values?.mobile_no.length < 10 || values?.mobile_no.length > 30) {
    errors.mobile_no = "Invalid Mobile Number ";
  }
  if (!values?.address) {
    errors.address = "Address Required";
  } else if (values?.address?.length < 6) {
    errors.address = "Address is Too short";
  }

  return errors;
}

{
  /*CONNECT MODAL DONE*/
}
export function ModalValidation(values: any) {
  var errors: { [k: string]: any } = {};

  if (!values?.name) {
    errors.name = "Name Required";
  } else if (values?.name?.length < 3) {
    errors.name = "First must be at least 3 characters";
  }

  if (!values?.last_name) {
    errors.last_name = "Last Name Required";
  }

  if (!values?.bussiness_name) {
    errors.bussiness_name = "Bussiness Name Required";
  } else if (values?.bussiness_name?.length < 6) {
    errors.bussiness_name = "Bussiness Name must be at least 6 characters";
  }

  if (!values?.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values?.mobile_no) {
    errors.mobile_no = "Mobile Number Required";
  } else if (values?.mobile_no.length < 10 || values?.mobile_no.length > 30) {
    errors.mobile_no = "Invalid Mobile Number ";
  }
  if (!values?.tier_level) {
    errors.tier_level = "Tier level Required";
  }

  if (!values?.message) {
    errors.message = "Message Required";
  } else if (values?.message?.length < 6) {
    errors.message = "message must be at least 6 characters";
  }

  return errors;
}

{
  /*Help MODAL DONE*/
}
export function HelpModalValidation(values: any) {
  var errors: { [k: string]: any } = {};
  if (!values?.name) {
    errors.name = "Name Required";
  } else if (values?.name?.length < 3) {
    errors.name = "First must be at least 3 characters";
  }

  if (!values?.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values?.topic) {
    errors.topic = "Title Required";
  }
  if (!values?.message) {
    errors.message = "Message Required";
  } else if (values?.message?.length < 6) {
    errors.message = "Messags is too short it must be at least 6 characters";
  }
  return errors;
}

{
  /*NEWS MODAL DONE*/
}
export function NewsModal(values: any) {
  var errors: { [k: string]: any } = {};
  if (!values?.title) {
    errors.title = "Title is Required";
  }

  if (!values?.description) {
    errors.description = "Description is Required";
  } else if (values?.description?.length < 6) {
    errors.description = "Description must be at least 6 characters";
  }

  return errors;
}
