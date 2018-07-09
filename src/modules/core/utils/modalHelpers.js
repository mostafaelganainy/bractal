

const modalMarker = '/__modal';

export const extractModalPartFromLocation = (location) => {
  const currentPath = location.pathname;
  const modalMarkerIndex = currentPath.search(modalMarker);
  const modifiedCurrentPath = modalMarkerIndex >= 0
    ? currentPath.substring(modalMarkerIndex, currentPath.length)
    : currentPath;

  return {
    ...location,
    pathname: modifiedCurrentPath,
  };
};

export const removeModalPartFromLocation = (location) => {
  const currentPath = location.pathname;
  const modalMarkerIndex = currentPath.search(modalMarker);
  const modifiedCurrentPath = modalMarkerIndex >= 0
    ? currentPath.substring(0, modalMarkerIndex)
    : currentPath;

  return {
    ...location,
    pathname: modifiedCurrentPath,
  };
};

export const makeModalFullPath = ({ pathname }, path) => {
  // TODO: Generalize more, by double checking on the path's
  //      format (removing extra '/' or adding missing ones)
  let checkedPathname = pathname;
  const lastChar = pathname.charAt(pathname.length - 1);
  if (lastChar === '/') {
    checkedPathname = checkedPathname.substring(0, checkedPathname.length - 1);
  }

  const res = `${checkedPathname}${modalMarker}${path}`;
  return res;
};

export const makeModalPath = path => (
  // TODO: Generalize more, by double checking on the path's
  //      format (removing extra '/' or adding missing ones)
  `${modalMarker}${path}`
);
