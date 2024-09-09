import React from "react";

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child.props) {
    return child.props.id;
  }
};

function Field({ lebel, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      {lebel && (
        <label className="auth-label" htmlFor={id}>
          {lebel}
        </label>
      )}
      {children}
      {!!error && (
        <div className="text-xs text-red-500" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default Field;
